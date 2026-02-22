// Subscription management utilities

export interface UserSubscription {
  planId: string;
  planName: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  durationMonths: number;
  status: 'active' | 'expiring-soon' | 'expired';
  autoRenew: boolean;
}

// Get subscription duration in months based on plan
export function getSubscriptionDuration(planId: string): number {
  const durations: Record<string, number> = {
    'silver': 3,
    'gold': 6,
    'diamond': 12,
    'platinum': 12,
    'prime': 12, // Custom, but default to 12
    'super-prime': 12
  };
  return durations[planId] || 0;
}

// Calculate end date from start date and duration
export function calculateEndDate(startDate: Date, durationMonths: number): Date {
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + durationMonths);
  return endDate;
}

// Get days remaining until expiry
export function getDaysRemaining(endDate: string): number {
  const now = new Date();
  const expiry = new Date(endDate);
  const diffTime = expiry.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// Check if subscription should show expiry reminder
export function shouldShowExpiryReminder(subscription: UserSubscription): boolean {
  const daysRemaining = getDaysRemaining(subscription.endDate);
  
  // Show reminder 30 days before expiry
  if (daysRemaining <= 30 && daysRemaining > 0) {
    return true;
  }
  
  return false;
}

// Check if subscription is expired
export function isSubscriptionExpired(subscription: UserSubscription): boolean {
  const daysRemaining = getDaysRemaining(subscription.endDate);
  return daysRemaining <= 0;
}

// Get subscription status
export function getSubscriptionStatus(subscription: UserSubscription): 'active' | 'expiring-soon' | 'expired' {
  const daysRemaining = getDaysRemaining(subscription.endDate);
  
  if (daysRemaining <= 0) {
    return 'expired';
  } else if (daysRemaining <= 30) {
    return 'expiring-soon';
  } else {
    return 'active';
  }
}

// Get user's current subscription from localStorage
export function getUserSubscription(): UserSubscription | null {
  const stored = localStorage.getItem('userSubscription');
  if (stored) {
    const subscription = JSON.parse(stored);
    subscription.status = getSubscriptionStatus(subscription);
    return subscription;
  }
  return null;
}

// Save subscription to localStorage
export function saveUserSubscription(subscription: UserSubscription): void {
  localStorage.setItem('userSubscription', JSON.stringify(subscription));
}

// Create a new subscription
export function createSubscription(planId: string, planName: string, autoRenew: boolean = false): UserSubscription {
  const startDate = new Date();
  const durationMonths = getSubscriptionDuration(planId);
  const endDate = calculateEndDate(startDate, durationMonths);
  
  const subscription: UserSubscription = {
    planId,
    planName,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    durationMonths,
    status: 'active',
    autoRenew
  };
  
  saveUserSubscription(subscription);
  return subscription;
}

// Renew subscription
export function renewSubscription(currentSubscription: UserSubscription): UserSubscription {
  const startDate = new Date();
  const endDate = calculateEndDate(startDate, currentSubscription.durationMonths);
  
  const renewedSubscription: UserSubscription = {
    ...currentSubscription,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    status: 'active'
  };
  
  saveUserSubscription(renewedSubscription);
  return renewedSubscription;
}

// Check access - returns true if user has active subscription
export function hasActiveSubscription(): boolean {
  const subscription = getUserSubscription();
  if (!subscription) {
    return false;
  }
  
  return !isSubscriptionExpired(subscription);
}

// Block service if subscription expired
export function checkSubscriptionAccess(featureName: string = 'this feature'): { allowed: boolean; message?: string } {
  const subscription = getUserSubscription();
  
  if (!subscription) {
    return {
      allowed: false,
      message: `Please subscribe to a plan to access ${featureName}.`
    };
  }
  
  if (isSubscriptionExpired(subscription)) {
    return {
      allowed: false,
      message: `Your ${subscription.planName} subscription has expired. Please renew to continue accessing ${featureName}.`
    };
  }
  
  return { allowed: true };
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Get renewal reminder message
export function getRenewalMessage(subscription: UserSubscription): string {
  const daysRemaining = getDaysRemaining(subscription.endDate);
  const planName = subscription.planName;
  
  if (daysRemaining <= 0) {
    return `Your ${planName} subscription has expired. Renew now to continue accessing premium features.`;
  } else if (daysRemaining <= 7) {
    return `Your ${planName} subscription expires in ${daysRemaining} day${daysRemaining === 1 ? '' : 's'}. Renew now to avoid service interruption.`;
  } else if (daysRemaining <= 30) {
    return `Your ${planName} subscription expires in ${daysRemaining} days on ${formatDate(subscription.endDate)}. Renew now for uninterrupted service.`;
  }
  
  return '';
}

