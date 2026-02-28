import BeforeFooter from '../components/common/BeforeFooter';

const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="w-full bg-white pb-5 pt-5 transition-colors duration-300 sm:pb-12 lg:pb-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="text-center">
            <h1 className="font-heading font-bold uppercase tracking-tight text-[40px] sm:text-[40px] md:text-[48px] lg:text-[72px] xl:text-[72px] text-black transition-colors duration-300">
              <span className="text-black">PRIVACY </span>
              <span className="text-brand-blue">POLICY</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 sm:text-xl">
              Your privacy is important to us. This Privacy Policy explains how BlueFalcon Technologies collects, uses, and protects your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white pb-5 transition-colors duration-300 sm:pb-16">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="space-y-8">
            {/* Section 1 */}
            <div className="rounded-xl border border-[#c8d7e4] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 sm:p-8">
              <h2 className="mb-4 font-heading text-2xl font-bold text-black transition-colors duration-300 sm:text-3xl">
                1. Information We Collect
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-black/75 transition-colors duration-300 sm:text-xl">
                <p>
                  We collect information that you provide directly to us, including but not limited to:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Name, email address, phone number, and other contact information</li>
                  <li>Company name, job title, and business information</li>
                  <li>Project requirements, technical specifications, and communication history</li>
                  <li>Payment and billing information for services rendered</li>
                  <li>Information you provide when contacting us or requesting support</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="rounded-xl border border-[#c8d7e4] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 sm:p-8">
              <h2 className="mb-4 font-heading text-2xl font-bold text-black transition-colors duration-300 sm:text-3xl">
                2. How We Use Your Information
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-black/75 transition-colors duration-300 sm:text-xl">
                <p>We use the information we collect to:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Respond to your inquiries, comments, and requests</li>
                  <li>Send technical updates, security alerts, and support messages</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="rounded-xl border border-[#c8d7e4] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 sm:p-8">
              <h2 className="mb-4 font-heading text-2xl font-bold text-black transition-colors duration-300 sm:text-3xl">
                3. Information Sharing and Disclosure
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-black/75 transition-colors duration-300 sm:text-xl">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or respond to lawful requests</li>
                  <li>To protect our rights, privacy, safety, or property</li>
                  <li>With service providers who assist us in operating our business (under strict confidentiality agreements)</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="rounded-xl border border-[#c8d7e4] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 sm:p-8">
              <h2 className="mb-4 font-heading text-2xl font-bold text-black transition-colors duration-300 sm:text-3xl">
                4. Data Security
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-black/75 transition-colors duration-300 sm:text-xl">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="rounded-xl border border-[#c8d7e4] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 sm:p-8">
              <h2 className="mb-4 font-heading text-2xl font-bold text-black transition-colors duration-300 sm:text-3xl">
                5. Your Rights and Choices
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-black/75 transition-colors duration-300 sm:text-xl">
                <p>You have the right to:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>Object to processing of your personal information</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
                <p>To exercise these rights, please contact us using the information provided in the Contact section.</p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="rounded-xl border border-[#c8d7e4] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 sm:p-8">
              <h2 className="mb-4 font-heading text-2xl font-bold text-black transition-colors duration-300 sm:text-3xl">
                6. Cookies and Tracking Technologies
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-black/75 transition-colors duration-300 sm:text-xl">
                <p>
                  We use cookies and similar tracking technologies to collect and use information about you. You can control cookies through your browser settings, though this may affect the functionality of our services.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="rounded-xl border border-[#c8d7e4] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 sm:p-8">
              <h2 className="mb-4 font-heading text-2xl font-bold text-black transition-colors duration-300 sm:text-3xl">
                7. Changes to This Privacy Policy
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-black/75 transition-colors duration-300 sm:text-xl">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="rounded-xl border border-[#c8d7e4] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 sm:p-8">
              <h2 className="mb-4 font-heading text-2xl font-bold text-black transition-colors duration-300 sm:text-3xl">
                8. Contact Us
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-black/75 transition-colors duration-300 sm:text-xl">
                <p>
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <p className="font-semibold text-black">
                  BlueFalcon Technologies
                </p>
                <p>
                  Email: privacy@blockchainappadvisor.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BeforeFooter title="Have Questions About Privacy?" buttonText="Contact Us" buttonLink='/contact'/>
    </div>
  );
};

export default PrivacyPolicy;

