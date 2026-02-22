import { useState } from "react";
import { ArrowLeft, ChevronDown, Search } from "lucide-react";
import { useNavigate } from "react-router";
import { Input } from "../components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

const faqCategories = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I create an account?",
        answer: "To create an account, download the No1 shadi.com app, click 'Sign Up', enter your mobile number, verify it with OTP, and complete your profile with basic details, photos, and preferences."
      },
      {
        question: "What information do I need to provide?",
        answer: "You'll need to provide basic details like name, age, height, education, profession, location, family details, and astrological information including Gothram, Rashi, and Nakshatram for better matches."
      },
      {
        question: "Is my information secure?",
        answer: "Yes, we use industry-standard encryption and security measures. Your data is stored securely and never shared with third parties without your consent. We comply with all data protection regulations."
      }
    ]
  },
  {
    category: "Profile & Matching",
    questions: [
      {
        question: "How does the AI matching work?",
        answer: "Our AI analyzes your profile, preferences, astrological compatibility, and behavior patterns to suggest highly compatible matches. The compatibility score is calculated based on multiple factors including cultural values, lifestyle, and family background."
      },
      {
        question: "Can I edit my profile after creating it?",
        answer: "Yes, you can edit your profile anytime by going to Settings > Edit Profile. You can update your photos, personal details, family information, and partner preferences."
      },
      {
        question: "How do I upload photos?",
        answer: "Go to Edit Profile > Profile Photo. Click the camera icon, select a photo from your device, crop it to highlight your face, and save. You can upload multiple photos from your profile gallery."
      }
    ]
  },
  {
    category: "Privacy & Safety",
    questions: [
      {
        question: "Who can see my profile?",
        answer: "Your profile visibility depends on your privacy settings. Premium members get more control over who can view their profile and photos. You can blur photos for non-premium members and control contact requests."
      },
      {
        question: "How do I block someone?",
        answer: "To block a user, go to their profile, tap the menu icon (three dots), and select 'Block User'. Blocked users cannot view your profile or contact you. You can manage blocked users in Settings > Privacy & Security > Blocked Users."
      },
      {
        question: "What is the verification badge?",
        answer: "The verification badge confirms that a profile has been verified by our team. It ensures authenticity and builds trust. To get verified, submit your ID proof through Settings > Verification."
      }
    ]
  },
  {
    category: "Subscription & Payment",
    questions: [
      {
        question: "What are the subscription plans?",
        answer: "We offer 6 premium tiers: Silver (₹999/month), Gold (₹1,999/month), Diamond (₹2,999/month), Platinum (₹4,999/month), Prime (₹7,999/month), and Super Prime (₹12,999/month). Each tier offers increasing benefits and features."
      },
      {
        question: "How do I upgrade my membership?",
        answer: "Go to Profile > Upgrade Membership or Settings > Subscription. Choose your preferred plan and complete the payment using UPI, Credit/Debit Card, or Net Banking. Your benefits activate immediately after payment."
      },
      {
        question: "Can I get a refund?",
        answer: "Refunds are processed as per our refund policy. If you face any issues with your subscription, contact our support team within 7 days of purchase. Partial refunds may be available based on usage."
      }
    ]
  },
  {
    category: "Communication",
    questions: [
      {
        question: "How do I send interest to someone?",
        answer: "Visit the profile you're interested in and tap the 'Send Interest' button. The person will be notified and can accept or decline your interest. Premium members get unlimited interest requests."
      },
      {
        question: "Can I chat with matches?",
        answer: "Yes, once your interest is accepted or mutual, you can start chatting. Premium members get enhanced messaging features including photo sharing, voice messages, and priority message delivery."
      },
      {
        question: "What if someone isn't responding?",
        answer: "Some users may take time to respond or may have notifications turned off. If there's no response after a few days, you can send a gentle reminder or explore other matches. Respect their decision if they decline."
      }
    ]
  },
  {
    category: "Technical Support",
    questions: [
      {
        question: "The app is not working properly. What should I do?",
        answer: "Try these steps: 1) Clear app cache, 2) Update to the latest version, 3) Restart your device, 4) Check your internet connection. If issues persist, contact support with details about the problem."
      },
      {
        question: "I forgot my password. How do I reset it?",
        answer: "On the login screen, tap 'Forgot Password'. Enter your registered mobile number or email, verify the OTP, and create a new password. You can also reset password from Settings > Change Password."
      },
      {
        question: "How do I delete my account?",
        answer: "Go to Settings > Account > Delete Account. You'll need to confirm your decision. Note that this action is irreversible and all your data will be permanently deleted after 30 days."
      }
    ]
  }
];

export default function HelpFAQ() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-[#FFF8E7] mandala-bg pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-[#7B1E3A] to-[#C41E3A] text-white px-6 py-4 shadow-lg">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Help & FAQ
            </h1>
            <p className="text-sm text-white/80">Find answers to common questions</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#004953]/50" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for help..."
            className="h-12 pl-12 rounded-xl border-2 border-[#D4AF37] bg-white"
          />
        </div>
      </div>

      {/* FAQ Content */}
      <div className="p-4 space-y-6 max-w-2xl mx-auto">
        {filteredFAQs.length === 0 ? (
          <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-12 text-center shadow-lg">
            <p className="text-[#004953]/60">No results found for "{searchQuery}"</p>
          </div>
        ) : (
          filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-3">
              <h2 className="text-xl font-bold text-[#7B1E3A] px-2" style={{ fontFamily: "var(--font-heading)" }}>
                {category.category}
              </h2>
              <div className="bg-white rounded-2xl border-2 border-[#D4AF37] overflow-hidden shadow-lg">
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, index) => (
                    <AccordionItem key={index} value={`item-${categoryIndex}-${index}`} className="border-b border-[#D4AF37]/10 last:border-0">
                      <AccordionTrigger className="px-6 py-4 text-left hover:bg-[#FFF8E7] transition-colors">
                        <span className="font-semibold text-[#004953]">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-[#004953]/70 leading-relaxed">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          ))
        )}

        {/* Still Need Help Card */}
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg mt-8">
          <h3 className="font-bold text-[#7B1E3A] text-lg mb-2" style={{ fontFamily: "var(--font-heading)" }}>
            Still Need Help?
          </h3>
          <p className="text-[#004953]/70 mb-4">
            Can't find what you're looking for? Our support team is here to help you.
          </p>
          <button
            onClick={() => navigate("/contact-support")}
            className="w-full h-12 rounded-xl font-semibold shadow-md hover:shadow-lg transition-shadow"
            style={{
              background: "linear-gradient(135deg, #7B1E3A 0%, #C41E3A 100%)",
              color: "#FFFFFF"
            }}
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}

