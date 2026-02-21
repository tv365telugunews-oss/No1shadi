import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, Bell } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-sm text-white/80">Your privacy is our priority</p>
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

          {/* Introduction */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#7B1E3A] rounded-full">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
                Introduction
              </h2>
            </div>
            <p className="text-[#004953] leading-relaxed">
              At <strong className="text-[#7B1E3A]">No1 shadi.com – Safe & Secure</strong>, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our matrimonial platform.
            </p>
            <p className="text-[#004953] leading-relaxed mt-3">
              By using our services, you agree to the collection and use of information in accordance with this policy. This policy complies with the Information Technology Act, 2000, and applicable Indian data protection laws.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#7B1E3A] rounded-full">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
                1. Information We Collect
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-[#004953] mb-2">1.1 Personal Information</h3>
                <ul className="list-disc list-inside space-y-1 text-[#004953] ml-4">
                  <li>Full name, date of birth, age, and gender</li>
                  <li>Contact details (email, phone number, address)</li>
                  <li>Photographs and profile pictures</li>
                  <li>Physical attributes (height, weight, complexion)</li>
                  <li>Educational and professional information</li>
                  <li>Family details (parents, siblings)</li>
                  <li>Religious and cultural information (caste, sub-caste, gothram, rashi, nakshatram)</li>
                  <li>Marital status and partner preferences</li>
                  <li>Annual income and financial information</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#004953] mb-2">1.2 Account & Authentication Data</h3>
                <ul className="list-disc list-inside space-y-1 text-[#004953] ml-4">
                  <li>Login credentials (email/phone and password)</li>
                  <li>Profile ID and account settings</li>
                  <li>Security questions and answers</li>
                  <li>Two-factor authentication data</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#004953] mb-2">1.3 Usage & Activity Data</h3>
                <ul className="list-disc list-inside space-y-1 text-[#004953] ml-4">
                  <li>Profiles viewed, searched, and shortlisted</li>
                  <li>Interests sent and received</li>
                  <li>Messages and communication history</li>
                  <li>Search queries and filter preferences</li>
                  <li>Time spent on platform and feature usage</li>
                  <li>AI compatibility scores and matching data</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#004953] mb-2">1.4 Technical & Device Data</h3>
                <ul className="list-disc list-inside space-y-1 text-[#004953] ml-4">
                  <li>IP address and device identifiers</li>
                  <li>Browser type and operating system</li>
                  <li>Mobile device information</li>
                  <li>Location data (city, state, country)</li>
                  <li>Cookies and tracking technologies</li>
                  <li>Log files and analytics data</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#004953] mb-2">1.5 Payment & Transaction Data</h3>
                <ul className="list-disc list-inside space-y-1 text-[#004953] ml-4">
                  <li>Subscription plan and payment history</li>
                  <li>Billing information (processed securely via payment gateways)</li>
                  <li>Transaction IDs and payment method details</li>
                  <li>Refund and cancellation records</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#004953] mb-2">1.6 Verification Documents</h3>
                <ul className="list-disc list-inside space-y-1 text-[#004953] ml-4">
                  <li>Government-issued ID proofs (Aadhaar, PAN, Passport, Driving License)</li>
                  <li>Educational certificates and degree proofs</li>
                  <li>Employment verification documents</li>
                  <li>Income proof (salary slips, ITR)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#7B1E3A] rounded-full">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
                2. How We Use Your Information
              </h2>
            </div>

            <ul className="list-disc list-inside space-y-2 text-[#004953]">
              <li><strong>Profile Creation:</strong> To create and display your matrimonial profile to other users</li>
              <li><strong>Matchmaking:</strong> To provide AI-powered match recommendations based on compatibility</li>
              <li><strong>Communication:</strong> To enable messaging and interaction with potential matches</li>
              <li><strong>Verification:</strong> To verify your identity and authenticate profile information</li>
              <li><strong>Personalization:</strong> To customize your experience and show relevant profiles</li>
              <li><strong>Service Delivery:</strong> To provide subscription services and premium features</li>
              <li><strong>Customer Support:</strong> To respond to inquiries and resolve issues</li>
              <li><strong>Security & Safety:</strong> To detect fraud, prevent abuse, and ensure platform safety</li>
              <li><strong>Analytics:</strong> To understand user behavior and improve our services</li>
              <li><strong>Marketing:</strong> To send promotional offers, updates, and newsletters (with consent)</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
              <li><strong>Research:</strong> To conduct statistical analysis and research (anonymized data)</li>
            </ul>
          </section>

          {/* 3. Information Sharing & Disclosure */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#7B1E3A] rounded-full">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
                3. Information Sharing & Disclosure
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-[#004953] mb-2">3.1 With Other Users</h3>
                <p className="text-[#004953] leading-relaxed">
                  Your profile information (except sensitive details like contact information for free users) is visible to other registered members based on your privacy settings and subscription plan.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#004953] mb-2">3.2 With Service Providers</h3>
                <p className="text-[#004953] leading-relaxed">
                  We may share data with trusted third-party service providers who assist us with:
                </p>
                <ul className="list-disc list-inside space-y-1 text-[#004953] ml-4 mt-2">
                  <li>Payment processing (payment gateways)</li>
                  <li>Cloud hosting and data storage</li>
                  <li>SMS and email delivery services</li>
                  <li>Customer support tools</li>
                  <li>Analytics and marketing platforms</li>
                  <li>Background verification agencies</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#004953] mb-2">3.3 Legal Requirements</h3>
                <p className="text-[#004953] leading-relaxed">
                  We may disclose your information when required by law, court order, or government request, or to protect our rights, users' safety, or investigate fraud.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#004953] mb-2">3.4 Business Transfers</h3>
                <p className="text-[#004953] leading-relaxed">
                  In the event of a merger, acquisition, or sale of assets, user information may be transferred to the acquiring entity.
                </p>
              </div>

              <div className="bg-[#FFF8E7] border-l-4 border-[#7B1E3A] p-4 rounded">
                <p className="text-[#004953] font-semibold">
                  <strong>Important:</strong> We will NEVER sell your personal information to third parties for marketing purposes.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Data Security */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#7B1E3A] rounded-full">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
                4. Data Security Measures
              </h2>
            </div>

            <p className="text-[#004953] leading-relaxed mb-3">
              We implement industry-standard security measures to protect your personal information:
            </p>

            <ul className="list-disc list-inside space-y-2 text-[#004953]">
              <li><strong>Encryption:</strong> SSL/TLS encryption for data transmission</li>
              <li><strong>Secure Storage:</strong> Encrypted databases and secure cloud infrastructure</li>
              <li><strong>Access Controls:</strong> Restricted access to personal data on a need-to-know basis</li>
              <li><strong>Password Protection:</strong> Hashed and salted password storage</li>
              <li><strong>Two-Factor Authentication:</strong> Optional 2FA for enhanced account security</li>
              <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
              <li><strong>Monitoring:</strong> 24/7 monitoring for suspicious activity and fraud detection</li>
              <li><strong>Data Backup:</strong> Regular backups to prevent data loss</li>
            </ul>

            <p className="text-[#004953] leading-relaxed mt-4 bg-[#FFF8E7] p-4 rounded-lg border border-[#D4AF37]/30">
              While we take extensive measures to protect your data, no system is 100% secure. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
          </section>

          {/* 5. Your Privacy Rights */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              5. Your Privacy Rights & Choices
            </h2>

            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-[#004953] mb-2">5.1 Access & Correction</h3>
                <p className="text-[#004953]">You can access and update your profile information at any time through your account settings.</p>
              </div>

              <div>
                <h3 className="font-bold text-[#004953] mb-2">5.2 Privacy Settings</h3>
                <p className="text-[#004953]">Control who can view your profile, photos, and contact details through privacy settings.</p>
              </div>

              <div>
                <h3 className="font-bold text-[#004953] mb-2">5.3 Data Portability</h3>
                <p className="text-[#004953]">Request a copy of your personal data in a structured, machine-readable format.</p>
              </div>

              <div>
                <h3 className="font-bold text-[#004953] mb-2">5.4 Account Deletion</h3>
                <p className="text-[#004953]">You may delete your account at any time. Some data may be retained for legal compliance (up to 90 days).</p>
              </div>

              <div>
                <h3 className="font-bold text-[#004953] mb-2">5.5 Marketing Opt-Out</h3>
                <p className="text-[#004953]">Unsubscribe from promotional emails and notifications through settings or email links.</p>
              </div>

              <div>
                <h3 className="font-bold text-[#004953] mb-2">5.6 Cookie Management</h3>
                <p className="text-[#004953]">Control cookie preferences through your browser settings.</p>
              </div>
            </div>
          </section>

          {/* 6. Data Retention */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              6. Data Retention Policy
            </h2>
            <p className="text-[#004953] leading-relaxed mb-3">
              We retain your personal information for as long as your account is active or as needed to provide services. Retention periods vary:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#004953]">
              <li><strong>Active Accounts:</strong> Data retained while account is active</li>
              <li><strong>Inactive Accounts:</strong> Profiles inactive for 2+ years may be archived or deleted</li>
              <li><strong>Deleted Accounts:</strong> Most data deleted within 30-90 days after account deletion</li>
              <li><strong>Transaction Records:</strong> Retained for 7 years for tax and legal compliance</li>
              <li><strong>Communication Logs:</strong> Retained for 1 year for dispute resolution</li>
              <li><strong>Backup Data:</strong> May persist in backups for up to 90 days</li>
            </ul>
          </section>

          {/* 7. Cookies & Tracking */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              7. Cookies & Tracking Technologies
            </h2>
            <p className="text-[#004953] leading-relaxed mb-3">
              We use cookies, pixels, and similar technologies to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#004953]">
              <li>Remember your login session and preferences</li>
              <li>Analyze website traffic and user behavior</li>
              <li>Personalize content and advertisements</li>
              <li>Improve platform performance and user experience</li>
              <li>Detect and prevent fraud</li>
            </ul>
            <p className="text-[#004953] leading-relaxed mt-3">
              You can control cookies through your browser settings. Note that disabling cookies may affect platform functionality.
            </p>
          </section>

          {/* 8. Third-Party Services */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              8. Third-Party Services & Links
            </h2>
            <p className="text-[#004953] leading-relaxed">
              Our platform may contain links to third-party websites or integrate with external services (payment gateways, social media). We are not responsible for the privacy practices of these third parties. Please review their privacy policies before sharing information.
            </p>
          </section>

          {/* 9. Children's Privacy */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              9. Children's Privacy
            </h2>
            <p className="text-[#004953] leading-relaxed">
              Our services are intended for individuals who are legally eligible to marry (18+ for females, 21+ for males as per Indian law). We do not knowingly collect information from minors. If we discover that a minor has registered, we will delete their account immediately.
            </p>
          </section>

          {/* 10. International Users */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              10. International Users & Data Transfer
            </h2>
            <p className="text-[#004953] leading-relaxed">
              Our servers are primarily located in India. If you access our services from outside India, your data may be transferred to and processed in India. By using our services, you consent to such transfers in accordance with this Privacy Policy.
            </p>
          </section>

          {/* 11. Changes to Privacy Policy */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-[#004953] leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes via email or in-app notification. The "Last Updated" date at the top indicates the most recent revision. Continued use after changes constitutes acceptance.
            </p>
          </section>

          {/* 12. Contact Us */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#7B1E3A] rounded-full">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
                12. Contact Information
              </h2>
            </div>
            <p className="text-[#004953] leading-relaxed mb-3">
              If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
            </p>
            <div className="bg-[#FFF8E7] rounded-xl p-4 border border-[#D4AF37]/30">
              <p className="text-[#004953] mb-2"><strong>Privacy Officer – No1 shadi.com</strong></p>
              <p className="text-[#004953] text-sm">Contact Person: Kasturi Gopala Krishna</p>
              <p className="text-[#004953] text-sm">Email: no1shadi.com@gmail.com</p>
              <p className="text-[#004953] text-sm">Phone: +91 9849884466</p>
              <p className="text-[#004953] text-sm">Address: Hyderabad, Telangana, India</p>
              <p className="text-[#004953] text-sm mt-2">Response Time: Within 48 hours</p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="border-t-2 border-[#D4AF37]/20 pt-6">
            <div className="bg-gradient-to-br from-[#7B1E3A] to-[#C41E3A] text-white rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 mx-auto mb-3" />
              <p className="font-semibold mb-2">
                Your privacy and security are our top priorities.
              </p>
              <p className="text-sm text-white/80">
                We are committed to protecting your personal information and ensuring a safe matrimonial experience.
              </p>
            </div>
          </section>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}