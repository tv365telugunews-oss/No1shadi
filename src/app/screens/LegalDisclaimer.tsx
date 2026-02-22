import { ArrowLeft, AlertTriangle, Shield, Scale, Info } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";

export default function LegalDisclaimer() {
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
              Legal Disclaimer
            </h1>
            <p className="text-sm text-white/80">Important legal information</p>
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

          {/* Important Notice */}
          <section>
            <div className="bg-gradient-to-br from-[#A0002A] to-[#7B1E3A] text-white rounded-xl p-6 flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  IMPORTANT LEGAL NOTICE
                </h2>
                <p className="text-white/90 leading-relaxed">
                  Please read this Legal Disclaimer carefully before using No1 shadi.com. By accessing or using our platform, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
                </p>
              </div>
            </div>
          </section>

          {/* 1. General Disclaimer */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#7B1E3A] rounded-full">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
                1. General Disclaimer
              </h2>
            </div>
            <div className="space-y-3 text-[#004953]">
              <p className="leading-relaxed">
                <strong className="text-[#7B1E3A]">No1 shadi.com – Safe & Secure</strong> is a matrimonial platform that facilitates connections between individuals seeking marriage. We provide a platform for users to create profiles, search for potential matches, and communicate with each other.
              </p>
              <p className="leading-relaxed">
                <strong>We are a facilitator only and not a marriage broker, matchmaker, or marriage bureau.</strong> We do not arrange marriages, conduct background checks (unless specifically paid for), or guarantee compatibility or marriage success.
              </p>
            </div>
          </section>

          {/* 2. No Guarantee of Results */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#7B1E3A] rounded-full">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
                2. No Guarantee of Marriage or Match
              </h2>
            </div>
            <div className="bg-[#FFF8E7] border-l-4 border-[#A0002A] p-4 rounded">
              <p className="text-[#004953] leading-relaxed font-semibold mb-2">
                IMPORTANT: No1 shadi.com does NOT guarantee:
              </p>
              <ul className="list-disc list-inside space-y-1 text-[#004953]">
                <li>That you will find a suitable match</li>
                <li>That you will get married through our platform</li>
                <li>The success or longevity of any relationship formed</li>
                <li>The accuracy of information provided by other users</li>
                <li>The behavior, intentions, or character of other users</li>
                <li>That all profiles are genuine or verified</li>
                <li>A specific number of matches or responses</li>
              </ul>
            </div>
            <p className="text-[#004953] leading-relaxed mt-3">
              Your success in finding a match depends on various factors including but not limited to your profile quality, preferences, active participation, compatibility, and personal circumstances.
            </p>
          </section>

          {/* 3. User Responsibility */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              3. User Responsibility & Due Diligence
            </h2>
            <div className="space-y-3 text-[#004953]">
              <p className="leading-relaxed">
                <strong className="text-[#7B1E3A]">YOU ARE SOLELY RESPONSIBLE FOR:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Verifying Information:</strong> Conducting your own due diligence and background verification of potential matches</li>
                <li><strong>Personal Safety:</strong> Taking appropriate safety precautions when meeting anyone from the platform</li>
                <li><strong>Decision Making:</strong> Making informed decisions about relationships and marriage</li>
                <li><strong>Profile Accuracy:</strong> Ensuring all information in your profile is truthful and accurate</li>
                <li><strong>Legal Compliance:</strong> Ensuring you meet legal requirements for marriage in your jurisdiction</li>
                <li><strong>Family Involvement:</strong> Involving your family members in marriage decisions as appropriate</li>
                <li><strong>Document Verification:</strong> Independently verifying documents, certificates, and claims made by other users</li>
                <li><strong>Financial Decisions:</strong> Making sound financial decisions and avoiding scams or fraud</li>
              </ul>
            </div>
          </section>

          {/* 4. Profile Accuracy Disclaimer */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              4. Profile Accuracy & Authenticity
            </h2>
            <div className="space-y-3 text-[#004953]">
              <p className="leading-relaxed">
                While we encourage users to provide accurate information and offer optional verification services, <strong className="text-[#7B1E3A]">we cannot guarantee the accuracy, authenticity, or completeness of user profiles</strong>.
              </p>
              <div className="bg-[#FFF8E7] rounded-lg p-4 border border-[#D4AF37]/30">
                <p className="font-semibold mb-2">We are not responsible for:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>False, misleading, or inaccurate information provided by users</li>
                  <li>Fake profiles or fraudulent accounts (though we work to remove them)</li>
                  <li>Misrepresentation of marital status, age, education, profession, or income</li>
                  <li>Use of old, edited, or someone else's photographs</li>
                  <li>Hidden facts about health, family background, or past relationships</li>
                  <li>Exaggerated claims about assets, property, or financial status</li>
                </ul>
              </div>
              <p className="leading-relaxed mt-3">
                Users should conduct independent verification through trusted sources, meet in person with family members present, and verify documents before making any commitments.
              </p>
            </div>
          </section>

          {/* 5. AI Matching Disclaimer */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              5. AI-Powered Matching & Compatibility Scores
            </h2>
            <div className="space-y-3 text-[#004953]">
              <p className="leading-relaxed">
                Our AI-powered matching algorithm provides compatibility scores and recommendations based on profile data, preferences, and patterns. <strong className="text-[#7B1E3A]">These are suggestions only and should not be considered as definitive measures of compatibility</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>AI scores are based on data provided by users and algorithmic analysis</li>
                <li>High compatibility scores do not guarantee relationship success</li>
                <li>Human factors like chemistry, values, and life goals are not fully captured by algorithms</li>
                <li>Users should use their own judgment in addition to AI recommendations</li>
              </ul>
            </div>
          </section>

          {/* 6. Safety & Security Disclaimer */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#7B1E3A] rounded-full">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#7B1E3A]" style={{ fontFamily: "var(--font-heading)" }}>
                6. Safety & Security Limitations
              </h2>
            </div>
            <div className="space-y-3 text-[#004953]">
              <p className="leading-relaxed">
                While we implement security measures and safety features, we cannot guarantee complete protection against:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Fraudulent users or scam attempts</li>
                <li>Unauthorized access to accounts due to weak passwords or sharing credentials</li>
                <li>Malicious activity by other users</li>
                <li>Data breaches (though we work diligently to prevent them)</li>
                <li>Identity theft or impersonation</li>
              </ul>
              <div className="bg-[#FFF8E7] border-l-4 border-[#7B1E3A] p-4 rounded mt-3">
                <p className="font-semibold mb-2">Safety Guidelines:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>Never share financial information or send money to anyone you haven't met in person</li>
                  <li>Always meet in public places with family members or friends</li>
                  <li>Inform family members about your meetings and whereabouts</li>
                  <li>Report suspicious profiles or behavior immediately</li>
                  <li>Verify information independently before making decisions</li>
                  <li>Trust your instincts – if something feels wrong, it probably is</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 7. Financial Disclaimer */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              7. Financial Transactions & Scams
            </h2>
            <div className="bg-gradient-to-br from-[#A0002A] to-[#C41E3A] text-white rounded-xl p-5">
              <p className="font-bold text-lg mb-2">⚠️ WARNING AGAINST FINANCIAL FRAUD</p>
              <p className="leading-relaxed mb-3">
                <strong>NEVER send money, gifts, or financial assistance to anyone you meet on this platform</strong>, especially if you have not met them in person and verified their identity.
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/90 text-sm">
                <li>We will NEVER ask you to send money to other users</li>
                <li>Requests for money, loans, or financial help are RED FLAGS</li>
                <li>Do not share bank details, credit card information, or OTPs</li>
                <li>Report any financial solicitation immediately</li>
              </ul>
            </div>
            <p className="text-[#004953] leading-relaxed mt-3">
              <strong>No1 shadi.com is not responsible for any financial losses</strong> incurred through interactions with other users, including scams, fraud, or misrepresentation.
            </p>
          </section>

          {/* 8. Third-Party Services */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              8. Third-Party Services & Links
            </h2>
            <p className="text-[#004953] leading-relaxed">
              Our platform may integrate with or link to third-party services (payment gateways, verification agencies, social media platforms). We are not responsible for:
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#004953] ml-4 mt-2">
              <li>The accuracy, reliability, or availability of third-party services</li>
              <li>Privacy practices or security of third-party platforms</li>
              <li>Content, products, or services offered by third parties</li>
              <li>Transactions conducted through third-party payment processors</li>
            </ul>
          </section>

          {/* 9. Medical & Health Disclaimer */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              9. Medical & Health Information
            </h2>
            <p className="text-[#004953] leading-relaxed">
              Users may disclose health information in their profiles. <strong className="text-[#7B1E3A]">We do not verify medical claims or health status</strong>. You should independently verify health information and conduct appropriate medical examinations as per your family's requirements and legal norms.
            </p>
            <p className="text-[#004953] leading-relaxed mt-2">
              No1 shadi.com is not responsible for undisclosed medical conditions, genetic disorders, or health issues of any user.
            </p>
          </section>

          {/* 10. Astrological Information */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              10. Astrological & Cultural Information
            </h2>
            <p className="text-[#004953] leading-relaxed">
              While we provide fields for astrological details (Rashi, Nakshatram, Gothram, Dosham), we do not verify this information or provide astrological counseling. Users seeking horoscope matching should consult qualified astrologers independently.
            </p>
          </section>

          {/* 11. No Professional Advice */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              11. No Professional Advice
            </h2>
            <p className="text-[#004953] leading-relaxed">
              Information on our platform is for general informational purposes only and does not constitute:
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#004953] ml-4 mt-2">
              <li>Legal, financial, or tax advice</li>
              <li>Medical or health advice</li>
              <li>Relationship or marriage counseling</li>
              <li>Astrological or spiritual guidance</li>
              <li>Professional matchmaking services</li>
            </ul>
            <p className="text-[#004953] leading-relaxed mt-2">
              Consult qualified professionals for specific advice related to your circumstances.
            </p>
          </section>

          {/* 12. Service Availability */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              12. Service Availability & Technical Issues
            </h2>
            <p className="text-[#004953] leading-relaxed">
              We strive to maintain service availability but do not guarantee uninterrupted access. We are not liable for:
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#004953] ml-4 mt-2">
              <li>Service downtime, maintenance, or technical issues</li>
              <li>Data loss due to technical failures</li>
              <li>Inability to access the platform</li>
              <li>Bugs, errors, or system malfunctions</li>
              <li>Compatibility issues with your devices or browsers</li>
            </ul>
          </section>

          {/* 13. Limitation of Liability */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              13. Limitation of Liability
            </h2>
            <div className="bg-[#FFF8E7] border-2 border-[#7B1E3A] rounded-lg p-5">
              <p className="text-[#004953] leading-relaxed font-semibold mb-3">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#004953]">
                <li>No1 shadi.com shall not be liable for any direct, indirect, incidental, consequential, or punitive damages</li>
                <li>We are not liable for relationship outcomes, marriage success or failure, or emotional distress</li>
                <li>We are not responsible for user conduct, fraud, scams, or criminal activity</li>
                <li>Our maximum liability is limited to the subscription fees paid by you in the past 12 months</li>
                <li>We disclaim all warranties, express or implied, regarding service quality or fitness for purpose</li>
              </ul>
            </div>
          </section>

          {/* 14. Indemnification */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              14. User Indemnification
            </h2>
            <p className="text-[#004953] leading-relaxed">
              You agree to indemnify, defend, and hold harmless No1 shadi.com, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#004953] ml-4 mt-2">
              <li>Your violation of these terms or applicable laws</li>
              <li>Your profile content or interactions with other users</li>
              <li>Infringement of third-party rights</li>
              <li>Your negligence or willful misconduct</li>
            </ul>
          </section>

          {/* 15. Governing Law */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              15. Governing Law & Jurisdiction
            </h2>
            <p className="text-[#004953] leading-relaxed">
              This disclaimer and all disputes shall be governed by the laws of India. Courts in <strong className="text-[#7B1E3A]">Hyderabad, Telangana</strong> shall have exclusive jurisdiction.
            </p>
          </section>

          {/* 16. Changes to Disclaimer */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              16. Changes to This Disclaimer
            </h2>
            <p className="text-[#004953] leading-relaxed">
              We reserve the right to modify this disclaimer at any time. Material changes will be communicated via email or platform notification. Continued use after changes constitutes acceptance.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-xl font-bold text-[#7B1E3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Contact Information
            </h2>
            <p className="text-[#004953] leading-relaxed mb-3">
              For questions or concerns regarding this disclaimer:
            </p>
            <div className="bg-[#FFF8E7] rounded-xl p-4 border border-[#D4AF37]/30">
              <p className="text-[#004953] mb-2"><strong>Legal Department – No1 shadi.com</strong></p>
              <p className="text-[#004953] text-sm">Email: legal@no1shadi.com</p>
              <p className="text-[#004953] text-sm">Phone: +91 40-1234-5678</p>
              <p className="text-[#004953] text-sm">Address: Hyderabad, Telangana, India</p>
            </div>
          </section>

          {/* Final Acknowledgment */}
          <section className="border-t-2 border-[#D4AF37]/20 pt-6">
            <div className="bg-gradient-to-br from-[#7B1E3A] to-[#C41E3A] text-white rounded-xl p-6 text-center">
              <AlertTriangle className="w-12 h-12 mx-auto mb-3" />
              <p className="font-bold text-lg mb-2">
                ACKNOWLEDGMENT OF UNDERSTANDING
              </p>
              <p className="text-sm text-white/90 leading-relaxed">
                By using No1 shadi.com, you acknowledge that you have read, understood, and agree to this Legal Disclaimer. 
                You understand that matrimony is a serious life decision requiring careful consideration, due diligence, and family involvement. 
                <strong className="block mt-2">Use this platform responsibly and make informed decisions.</strong>
              </p>
            </div>
          </section>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
