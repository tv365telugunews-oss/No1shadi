import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AlertCircle, X, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  getUserSubscription, 
  shouldShowExpiryReminder, 
  isSubscriptionExpired,
  getRenewalMessage,
  getDaysRemaining,
  formatDate
} from '../utils/subscriptionManager';

export function SubscriptionReminder() {
  const navigate = useNavigate();
  const [dismissed, setDismissed] = useState(false);
  const [subscription, setSubscription] = useState(getUserSubscription());

  useEffect(() => {
    // Check subscription status on mount and periodically
    const checkSubscription = () => {
      const current = getUserSubscription();
      setSubscription(current);
    };

    checkSubscription();
    const interval = setInterval(checkSubscription, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  if (!subscription || dismissed) {
    return null;
  }

  const shouldShow = shouldShowExpiryReminder(subscription) || isSubscriptionExpired(subscription);
  const isExpired = isSubscriptionExpired(subscription);
  const daysRemaining = getDaysRemaining(subscription.endDate);

  if (!shouldShow) {
    return null;
  }

  const handleRenew = () => {
    navigate('/subscription');
  };

  const handleDismiss = () => {
    // Only allow dismissing if not expired
    if (!isExpired) {
      setDismissed(true);
      // Store dismissal in session storage (resets on app restart)
      sessionStorage.setItem('subscription_reminder_dismissed', 'true');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className={`mx-4 mt-4 rounded-xl p-4 shadow-lg ${
          isExpired 
            ? 'bg-gradient-to-r from-[#C41E3A] to-[#A0002A] text-white' 
            : 'bg-gradient-to-r from-[#F4C430] to-[#D4AF37] text-[#004953]'
        }`}
      >
        <div className="flex items-start gap-3">
          <div className={`flex-shrink-0 mt-0.5 ${isExpired ? 'text-white' : 'text-[#7B1E3A]'}`}>
            {isExpired ? (
              <AlertCircle className="w-6 h-6" />
            ) : (
              <RefreshCw className="w-6 h-6" />
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold mb-1 text-sm" style={{ fontFamily: 'var(--font-heading)' }}>
              {isExpired ? '⚠️ Subscription Expired' : '🔔 Renewal Reminder'}
            </h3>
            <p className="text-sm mb-3">
              {getRenewalMessage(subscription)}
            </p>
            
            <div className="flex items-center gap-2 text-xs mb-3">
              <span className={`font-semibold ${isExpired ? 'text-white' : 'text-[#7B1E3A]'}`}>
                Plan: {subscription.planName}
              </span>
              <span className={isExpired ? 'text-white/80' : 'text-[#004953]/70'}>•</span>
              <span className={isExpired ? 'text-white/80' : 'text-[#004953]/70'}>
                {isExpired 
                  ? `Expired on ${formatDate(subscription.endDate)}`
                  : `Expires: ${formatDate(subscription.endDate)}`
                }
              </span>
            </div>

            {isExpired && (
              <div className="mb-3 p-2 bg-white/10 rounded-lg border border-white/20">
                <p className="text-xs text-white/90">
                  ⛔ <strong>Service Blocked:</strong> Your access to premium features has been suspended. 
                  Renew now to restore full access.
                </p>
              </div>
            )}

            <button
              onClick={handleRenew}
              className={`w-full py-2 px-4 rounded-lg font-semibold text-sm transition-all ${
                isExpired
                  ? 'bg-white text-[#C41E3A] hover:bg-white/90'
                  : 'bg-[#7B1E3A] text-white hover:bg-[#A0002A]'
              }`}
            >
              Renew Now - Get {subscription.durationMonths} Months
            </button>
          </div>

          {!isExpired && (
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 text-[#7B1E3A] hover:text-[#004953] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Subscription expiry blocker dialog
export function SubscriptionBlocker({ featureName }: { featureName?: string }) {
  const navigate = useNavigate();
  const subscription = getUserSubscription();
  
  if (!subscription || !isSubscriptionExpired(subscription)) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-[#C41E3A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-[#C41E3A]" />
          </div>
          
          <h2 className="text-2xl font-bold text-[#7B1E3A] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
            Subscription Expired
          </h2>
          
          <p className="text-[#004953]/80 mb-4">
            Your {subscription.planName} subscription expired on {formatDate(subscription.endDate)}.
            {featureName && ` Please renew to access ${featureName}.`}
          </p>

          <div className="bg-[#FFF8E7] border-2 border-[#D4AF37] rounded-xl p-4 mb-6">
            <p className="text-sm text-[#7B1E3A] font-semibold mb-2">
              🚫 Services Currently Blocked:
            </p>
            <ul className="text-xs text-[#004953]/80 space-y-1 text-left">
              <li>• View contact details</li>
              <li>• Send interests</li>
              <li>• Chat with matches</li>
              <li>• Access premium features</li>
            </ul>
          </div>

          <button
            onClick={() => navigate('/subscription')}
            className="w-full py-3 px-6 rounded-xl font-semibold text-white mb-3 transition-all"
            style={{
              background: 'linear-gradient(135deg, #7B1E3A 0%, #C41E3A 100%)'
            }}
          >
            Renew Subscription
          </button>

          <button
            onClick={() => navigate('/home')}
            className="text-sm text-[#004953]/60 hover:text-[#004953] transition-colors"
          >
            Go to Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}

