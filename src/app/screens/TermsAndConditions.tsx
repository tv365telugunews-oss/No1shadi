import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";

export default function TermsAndConditions() {
  const navigate = useNavigate();

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
              Terms & Conditions
            </h1>
            <p className="text-sm text-white/80">Please read carefully</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border-2 border-[#D4AF37] p-6 shadow-lg space-y-6">
          
          {/* Last Updated */}
          <div className="text-center pb-4 border-b-2 border-[#D4AF37]/20">
            <p className="text-sm text-[#004953]/60">Last Updated: February 16, 2026</p>
          </div>

          {/* Welcome */}
          <section>
            <p className="text-[#004953] leading-relaxed">
              Welcome to <strong className="text-[#7B1E3A]">No1 shadi.com – Safe & Secure</strong>. 
              By accessing or using our matrimonial platform, you agree to be bound by these Terms and Conditions. 
              Please read them carefully before using our services.
            </p>
          </section>

          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              1. Acceptance of Terms
            </h2>
            <p className="text-[#004953] leading-relaxed mb-2">
              By creating an account on No1 shadi.com, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, along with our Privacy Policy and Legal Disclaimer.
            </p>
            <p className="text-[#004953] leading-relaxed">
              If you do not agree with any part of these terms, you must not use our services.
            </p>
          </section>

          {/* 2. Eligibility */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              2. Eligibility Criteria
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#004953]">
              <li>You must be at least <strong>18 years of age</strong> (for females) or <strong>21 years of age</strong> (for males) as per Indian law.</li>
              <li>You must be legally eligible to marry under the laws applicable to you.</li>
              <li>You must not be currently married (unless seeking remarriage after legal divorce/widowhood).</li>
              <li>You must have the legal capacity to enter into a binding contract.</li>
              <li>You must provide accurate and truthful information about yourself.</li>
            </ul>
          </section>

          {/* 3. User Account */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              3. User Account & Registration
            </h2>
            <div className="space-y-3 text-[#004953]">
              <p><strong>3.1 Account Creation:</strong> You agree to provide accurate, current, and complete information during registration and to update such information to maintain its accuracy.</p>
              <p><strong>3.2 Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
              <p><strong>3.3 One Account Per Person:</strong> Each user is permitted to create only one account. Multiple accounts by the same person are prohibited.</p>
              <p><strong>3.4 Account Termination:</strong> We reserve the right to suspend or terminate your account if we detect fraudulent activity, false information, or violation of these terms.</p>
            </div>
          </section>

          {/* 4. Profile Information */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              4. Profile Information & Accuracy
            </h2>
            <div className="space-y-3 text-[#004953]">
              <p><strong>4.1 Truthfulness:</strong> You warrant that all information provided in your profile is accurate, current, and truthful. Misrepresentation of identity, marital status, age, or other material facts is strictly prohibited.</p>
              <p><strong>4.2 Prohibited Content:</strong> You agree not to post content that is offensive, defamatory, obscene, or violates any applicable law or regulation.</p>
              <p><strong>4.3 Photo Guidelines:</strong> Profile photos must be recent, clear photographs of yourself. Photos of celebrities, children, or other individuals are not permitted.</p>
              <p><strong>4.4 Verification:</strong> While we offer verification services, we do not guarantee the accuracy of information provided by other users. You are responsible for conducting your own due diligence.</p>
            </div>
          </section>

          {/* 5. Subscription & Payment */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              5. Subscription Plans & Payment
            </h2>
            <div className="space-y-3 text-[#004953]">
              <p><strong>5.1 Membership Tiers:</strong> We offer various membership tiers (Silver, Gold, Platinum, Diamond, Royal, Super Prime) with different features and pricing.</p>
              <p><strong>5.2 Payment:</strong> All payments must be made through our authorized payment gateways. We accept UPI, Credit/Debit Cards, Net Banking, and other approved methods.</p>
              <p><strong>5.3 Auto-Renewal:</strong> Some subscriptions may auto-renew unless canceled before the renewal date. You are responsible for managing your subscription settings.</p>
              <p><strong>5.4 Refund Policy:</strong> Subscription fees are generally non-refundable except in cases of technical errors or as required by law. Refund requests must be submitted within 7 days of purchase.</p>
              <p><strong>5.5 Price Changes:</strong> We reserve the right to modify subscription prices with 30 days' notice to existing subscribers.</p>
            </div>
          </section>

          {/* 6. User Conduct */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              6. User Conduct & Prohibited Activities
            </h2>
            <p className="text-[#004953] mb-2">You agree NOT to:</p>
            <ul className="list-disc list-inside space-y-2 text-[#004953]">
              <li>Use the platform for commercial purposes or solicitation</li>
              <li>Harass, stalk, threaten, or harm other users</li>
              <li>Impersonate any person or entity</li>
              <li>Collect or store personal data of other users without consent</li>
              <li>Use automated systems (bots, scrapers) to access the platform</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Engage in fraudulent activities or scams</li>
              <li>Share contact information publicly in violation of platform rules</li>
            </ul>
          </section>

          {/* 7. AI Matching & Compatibility */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              7. AI Matching & Compatibility Scores
            </h2>
            <p className="text-[#004953] leading-relaxed">
              Our AI-powered matching system provides compatibility scores based on profile information, preferences, and algorithms. 
              These scores are recommendations only and should not be considered as guarantees of compatibility or marriage success. 
              Users should exercise their own judgment and conduct thorough personal assessments.
            </p>
          </section>

          {/* 8. Safety & Security */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              8. Safety & Security Guidelines
            </h2>
            <div className="space-y-3 text-[#004953]">
              <p><strong>8.1 Personal Meetings:</strong> Always meet in public places for initial meetings. Inform family members or friends about your meetings.</p>
              <p><strong>8.2 Financial Transactions:</strong> Never send money to someone you have not met in person. Report any requests for money immediately.</p>
              <p><strong>8.3 Reporting:</strong> Report suspicious profiles, inappropriate behavior, or scams to our support team immediately.</p>
              <p><strong>8.4 Background Verification:</strong> We encourage users to conduct independent background verification before making marriage decisions.</p>
            </div>
          </section>

          {/* 9. Intellectual Property */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              9. Intellectual Property Rights
            </h2>
            <p className="text-[#004953] leading-relaxed mb-2">
              All content on No1 shadi.com, including logos, designs, text, graphics, and software, is the property of No1 shadi.com or its licensors and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-[#004953] leading-relaxed">
              You are granted a limited, non-exclusive, non-transferable license to access and use the platform for personal, non-commercial purposes only.
            </p>
          </section>

          {/* 10. Privacy & Data Protection */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              10. Privacy & Data Protection
            </h2>
            <p className="text-[#004953] leading-relaxed">
              Your privacy is important to us. Please review our <strong className="text-[#7B1E3A]">Privacy Policy</strong> to understand how we collect, use, and protect your personal information. By using our services, you consent to our data practices as described in the Privacy Policy.
            </p>
          </section>

          {/* 11. Limitation of Liability */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              11. Limitation of Liability
            </h2>
            <div className="space-y-3 text-[#004953]">
              <p><strong>11.1 No Guarantee:</strong> No1 shadi.com does not guarantee that you will find a match or get married through our platform.</p>
              <p><strong>11.2 User Responsibility:</strong> We are not responsible for the conduct of users, accuracy of profiles, or outcomes of relationships formed through the platform.</p>
              <p><strong>11.3 Technical Issues:</strong> We are not liable for service interruptions, technical errors, or data loss, though we strive to maintain service quality.</p>
              <p><strong>11.4 Third-Party Services:</strong> We are not responsible for third-party services, payment gateways, or external links.</p>
              <p><strong>11.5 Maximum Liability:</strong> Our total liability shall not exceed the amount paid by you for subscription services in the past 12 months.</p>
            </div>
          </section>

          {/* 12. Dispute Resolution */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              12. Dispute Resolution & Governing Law
            </h2>
            <div className="space-y-3 text-[#004953]">
              <p><strong>12.1 Governing Law:</strong> These Terms shall be governed by the laws of India, and specifically the jurisdiction of Hyderabad, Telangana.</p>
              <p><strong>12.2 Arbitration:</strong> Any disputes arising from these Terms shall first be attempted to resolve through good-faith negotiations. If unresolved, disputes shall be settled through arbitration in accordance with the Arbitration and Conciliation Act, 1996.</p>
              <p><strong>12.3 Jurisdiction:</strong> Courts in Hyderabad, Telangana shall have exclusive jurisdiction over any legal proceedings.</p>
            </div>
          </section>

          {/* 13. Termination */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              13. Account Termination
            </h2>
            <div className="space-y-3 text-[#004953]">
              <p><strong>13.1 By User:</strong> You may delete your account at any time through the Settings menu. Deletion is permanent and cannot be reversed.</p>
              <p><strong>13.2 By No1 shadi.com:</strong> We reserve the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or for any reason we deem necessary to protect our users and platform.</p>
              <p><strong>13.3 Effect of Termination:</strong> Upon termination, your access to paid features will cease, and no refunds will be provided unless required by law.</p>
            </div>
          </section>

          {/* 14. Changes to Terms */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              14. Changes to Terms & Conditions
            </h2>
            <p className="text-[#004953] leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of material changes via email or in-app notification. Continued use of the platform after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* 15. Contact Information */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              15. Contact Information
            </h2>
            <div className="bg-[#FFF8E7] rounded-xl p-4 border border-[#D4AF37]/30">
              <p className="text-[#004953] mb-2"><strong>No1 shadi.com – Safe & Secure</strong></p>
              <p className="text-[#004953] text-sm">Contact Person: Kasturi Gopala Krishna</p>
<<<<<<< HEAD
              <p className="text-[#004953] text-sm">Phone: +91 9100810606</p>
=======
              <p className="text-[#004953] text-sm">Phone: +91 9849884466</p>
>>>>>>> ad230b081e0a7eee68afbde3f69aebfe9320f883
              <p className="text-[#004953] text-sm">Email: no1shadi.com@gmail.com</p>
              <p className="text-[#004953] text-sm">Address: Hyderabad, Telangana, India</p>
              <p className="text-[#004953] text-sm mt-2">Customer Support: Available 24/7</p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="border-t-2 border-[#D4AF37]/20 pt-6">
            <div className="bg-gradient-to-br from-[#7B1E3A] to-[#C41E3A] text-white rounded-xl p-6 text-center">
              <p className="font-semibold mb-2">
                By using No1 shadi.com, you acknowledge that you have read and understood these Terms and Conditions and agree to be bound by them.
              </p>
              <p className="text-sm text-white/80">
                Thank you for choosing No1 shadi.com for your matrimonial journey.
              </p>
            </div>
          </section>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}