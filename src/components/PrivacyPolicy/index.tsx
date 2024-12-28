import PolicySection from './PolicySection';

export default function PrivacyPolicy() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <PolicySection title="1. Introduction">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>This privacy policy explains how we collect, use, and protect your personal information in accordance with the General Data Protection Regulation (GDPR).</p>
          </PolicySection>

          <PolicySection title="2. Data We Collect">
            <ul className="list-disc pl-5 space-y-2">
              <li>Contact information (name, email, phone number)</li>
              <li>Technical data (IP address, browser type, device information)</li>
              <li>Usage data (how you interact with our services)</li>
              <li>Communication preferences</li>
            </ul>
          </PolicySection>

          <PolicySection title="3. Legal Basis for Processing">
            <p>We process your data based on the following legal grounds:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Consent you have given us</li>
              <li>Contractual obligations</li>
              <li>Legal obligations</li>
              <li>Legitimate business interests</li>
            </ul>
          </PolicySection>

          <PolicySection title="4. Your Rights">
            <p>Under GDPR, you have the following rights:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Right to access your data</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object</li>
            </ul>
          </PolicySection>

          <PolicySection title="5. Data Security">
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>
          </PolicySection>

          <PolicySection title="6. Contact Information">
            <p>For any privacy-related questions or to exercise your rights, contact us at:</p>
            <div className="mt-2">
              <p>Email: info@emanuelepicariello.com</p>
            </div>
          </PolicySection>

          <PolicySection title="7. Updates to This Policy">
            <p>We may update this privacy policy from time to time. The latest version will always be available on our website.</p>
          </PolicySection>
        </div>
      </div>
    </div>
  );
}