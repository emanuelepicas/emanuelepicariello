import PolicySection from '../PrivacyPolicy/PolicySection';

export default function TermsOfService() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <PolicySection title="1. Introduction">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>Welcome to Emanuele Picariello's services. These Terms of Service govern your use of our website and services.</p>
          </PolicySection>

          <PolicySection title="2. Acceptance of Terms">
            <p>By using our services, you agree to these terms. If you do not agree, please do not use our services.</p>
          </PolicySection>

          <PolicySection title="3. User Responsibilities">
            <ul className="list-disc pl-5 space-y-2">
              <li>You agree to use the site lawfully and responsibly.</li>
              <li>You must not engage in activities that harm the website or its users.</li>
            </ul>
          </PolicySection>

          <PolicySection title="4. Intellectual Property">
            <p>All content, branding, and materials on this site are the property of Emanuele Picariello, unless otherwise stated.</p>
          </PolicySection>

          <PolicySection title="5. Limitation of Liability">
            <p>We are not responsible for any damages arising from the use or inability to use our services.</p>
          </PolicySection>

          <PolicySection title="6. Termination of Use">
            <p>We reserve the right to terminate or suspend access to our services at any time without notice for any reason.</p>
          </PolicySection>

          <PolicySection title="7. Governing Law">
            <p>These terms  complies with the General Data Protection Regulation (GDPR).</p>
          </PolicySection>

          <PolicySection title="8. Contact Information">
            <p>For questions about these terms, contact us at:</p>
            <div className="mt-2">
              <p>Email: info@emanuelepicariello.com</p>
            </div>
          </PolicySection>
        </div>
      </div>
    </div>
  );
}
