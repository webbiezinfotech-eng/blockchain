import BeforeFooter from '../components/common/BeforeFooter';
import ServiceCard from '../components/common/ServiceCard';

import heroImg from '../assets/home_images/blockchain+ai.png';
import cat1 from '../assets/home_images/cryptocurrency.png';
import cat2 from '../assets/home_images/enterprise-grade.png';
import cat3 from '../assets/home_images/scalable-infras.png';
import cat4 from '../assets/home_images/wallets.png';
import cat5 from '../assets/home_images/decentralized-finance.png';
import cat6 from '../assets/home_images/nftmarketplacedev.png';
import cat7 from '../assets/home_images/backends.png';
import cat8 from '../assets/home_images/blockchain-api.png';
import cat9 from '../assets/home_images/fundraising.png';
import cat10 from '../assets/home_images/marketing.png';

import iFinance from '../assets/home_images/fundraising.png';
import iHealth from '../assets/home_images/ai.png';
import iSupply from '../assets/home_images/scalable-infras.png';
import iRealEstate from '../assets/home_images/enterprise-grade.png';
import iGaming from '../assets/home_images/blockchain.png';
import iRetail from '../assets/home_images/marketing.png';
import iEnergy from '../assets/home_images/layer2.png';
import iEducation from '../assets/home_images/blockchain-api.png';
import iGov from '../assets/home_images/enterprise-grade.png';
import iInsurance from '../assets/home_images/smartcontractaudit.png';
import iTravel from '../assets/home_images/walletdev.png';
import iManufacturing from '../assets/home_images/backends.png';

import b1 from '../assets/home_images/smartcontractaudit.png';
import b2 from '../assets/home_images/icons/multi-chain.gif';
import b3 from '../assets/home_images/icons/high-performance.gif';
import b4 from '../assets/home_images/icons/transparent.gif';

const Industries = () => {
  const categories = [
    { title: 'Finance', image: cat1 },
    { title: 'Healthcare', image: cat2 },
    { title: 'Supply Chain', image: cat3 },
    { title: 'Wallets', image: cat4 },
    { title: 'DeFi', image: cat5 },
    { title: 'NFTs', image: cat6 },
    { title: 'Enterprise', image: cat7 },
    { title: 'APIs', image: cat8 },
    { title: 'Fundraising', image: cat9 },
    { title: 'Marketing', image: cat10 },
  ];

  const industries = [
    {
      title: 'Fintech & Banking',
      image: iFinance,
      useCases: ['Payments & settlements', 'Tokenized assets', 'Fraud prevention', 'Cross-border transfers'],
      solutions: ['Custody & key management', 'Compliance-ready flows', 'Smart contracts & automation'],
      tags: ['Payments', 'Tokenization', 'Compliance'],
    },
    {
      title: 'Healthcare & MedTech',
      image: iHealth,
      useCases: ['Secure health records', 'Consent-based data sharing', 'Medical supply traceability'],
      solutions: ['Decentralized identity (DID)', 'Audit trails', 'Interoperability integrations'],
      tags: ['DID', 'Data security', 'Interoperability'],
    },
    {
      title: 'Supply Chain & Logistics',
      image: iSupply,
      useCases: ['Provenance tracking', 'Anti-counterfeiting', 'Real-time shipment visibility'],
      solutions: ['Private/consortium chains', 'IoT + blockchain', 'Analytics dashboards'],
      tags: ['Traceability', 'IoT', 'ERP integrations'],
    },
    {
      title: 'Real Estate & Property',
      image: iRealEstate,
      useCases: ['Digital deeds', 'Fractional ownership', 'Automated escrow'],
      solutions: ['Tokenization models', 'Smart contracts', 'KYC/AML-ready onboarding'],
      tags: ['RWA', 'Tokenization', 'Escrow'],
    },
    {
      title: 'Gaming & Metaverse',
      image: iGaming,
      useCases: ['Player-owned assets', 'In-game economies', 'Marketplace trading'],
      solutions: ['NFT minting & marketplaces', 'Wallet integrations', 'Scalable backend systems'],
      tags: ['NFTs', 'Wallets', 'Marketplaces'],
    },
    {
      title: 'E-commerce & Retail',
      image: iRetail,
      useCases: ['Loyalty programs', 'Authenticity verification', 'Creator commerce'],
      solutions: ['Token-based rewards', 'NFT memberships', 'Checkout & payments'],
      tags: ['Loyalty', 'Verification', 'Web3 commerce'],
    },
    {
      title: 'Energy & Sustainability',
      image: iEnergy,
      useCases: ['Carbon credits', 'Renewable certificate trading', 'Smart metering'],
      solutions: ['Tokenization', 'Marketplace platforms', 'Secure reporting'],
      tags: ['Carbon', 'Green finance', 'Marketplaces'],
    },
    {
      title: 'Education & EdTech',
      image: iEducation,
      useCases: ['Credential verification', 'Digital certificates', 'IP ownership'],
      solutions: ['On-chain certificates', 'DID-based identity', 'Verification APIs'],
      tags: ['Credentials', 'DID', 'APIs'],
    },
    {
      title: 'Government & Public Sector',
      image: iGov,
      useCases: ['Land registries', 'Digital identity', 'Transparent procurement'],
      solutions: ['Permissioned networks', 'Governance workflows', 'Audit-ready data models'],
      tags: ['GovTech', 'Identity', 'Transparency'],
    },
    {
      title: 'Insurance',
      image: iInsurance,
      useCases: ['Claims automation', 'Fraud reduction', 'Parametric insurance'],
      solutions: ['Smart contracts', 'Oracle integrations', 'Risk & analytics tooling'],
      tags: ['Claims', 'Oracles', 'Automation'],
    },
    {
      title: 'Travel & Hospitality',
      image: iTravel,
      useCases: ['Loyalty tokens', 'Secure payments', 'Identity verification'],
      solutions: ['Wallet apps', 'Token rewards', 'Partner integrations'],
      tags: ['Loyalty', 'Payments', 'Identity'],
    },
    {
      title: 'Manufacturing & Industry 4.0',
      image: iManufacturing,
      useCases: ['Asset lifecycle tracking', 'Supplier verification', 'Quality audits'],
      solutions: ['Traceability systems', 'Dashboards', 'API + ERP integrations'],
      tags: ['Industry 4.0', 'Dashboards', 'Integrations'],
    },
  ];

  const benefitCards = [
    {
      title: 'Secure-by-design engineering',
      description: 'Threat modeling, best practices, and audit-ready delivery baked into the build.',
      image: b1,
    },
    {
      title: 'Multi-chain expertise',
      description: 'EVM & non‑EVM experience for fast launches and future-proof scaling.',
      image: b2,
    },
    {
      title: 'High-performance delivery',
      description: 'Production-grade architecture with scalability, monitoring, and reliability.',
      image: b3,
    },
    {
      title: 'Transparent collaboration',
      description: 'Clear milestones, documentation, and communication from kickoff to launch.',
      image: b4,
    },
  ];

  return (
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero */}
      <section className="w-full bg-white pt-12 pb-12 transition-colors duration-300 dark:bg-black sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16">
        <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[58%_42%] lg:pl-[3rem] lg:pr-[5rem]">
          <div className="flex w-full flex-col gap-6">
            <h1 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white">
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35]">
                TRANSFORMING INDUSTRIES
              </span>
              <span className="block text-[34px] leading-[1.2] sm:text-[48px] sm:leading-[1.25] lg:text-[58px] lg:leading-[1.35]">
                WITH{' '}
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">BLOCKCHAIN</span> &amp;{' '}
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">AI</span>
              </span>
              <span className="block text-[34px] leading-[1.2] sm:text-[48px] sm:leading-[1.25] lg:text-[58px] lg:leading-[1.35]">
                INNOVATION
              </span>
            </h1>

            <p className="max-w-[760px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-lg">
              We build industry-specific blockchain and AI solutions that improve transparency, efficiency, and trust. From
              regulated finance to supply chains and healthcare, we help teams launch secure products with real-world impact.
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[560px]">
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.04]">
                <img src={heroImg} alt="Industries hero" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Categories */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              INDUSTRY <span className="text-brand-blue">CATEGORIES</span>
            </h2>
          </div>

          <div className="mx-auto flex max-w-[980px] flex-wrap justify-center gap-6">
            {categories.map((c) => (
              <div key={c.title} className="flex w-[150px] flex-col items-center gap-3">
                <div className="h-[92px] w-[92px] overflow-hidden rounded-full border border-brand-blue/25 bg-black/[0.03] shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/25 dark:bg-white/[0.04]">
                  <img src={c.image} alt={c.title} className="h-full w-full object-cover" />
                </div>
                <div className="text-center font-sans text-[13px] font-semibold uppercase tracking-wide text-black/80 transition-colors duration-300 dark:text-white/80">
                  {c.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry & Use Cases */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              INDUSTRY &amp; <span className="text-brand-blue">USE CASES</span>
            </h2>
          </div>

          <div className="mx-auto flex max-w-[1120px] flex-col gap-8">
            {industries.map((it) => (
              <div
                key={it.title}
                className="grid grid-cols-1 items-stretch gap-8 rounded-[16px] border border-black/10 bg-white p-7 shadow-[0_12px_34px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/20 dark:bg-black/20 md:grid-cols-[1fr_320px]"
              >
                <div className="flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-[18px] font-bold uppercase tracking-wide text-black transition-colors duration-300 dark:text-white sm:text-[20px]">
                      {it.title}
                    </h3>
                    <button className="rounded-full border border-brand-blue/30 bg-white px-4 py-2 font-sans text-[12px] font-semibold text-brand-blue transition-all duration-300 hover:bg-brand-blue hover:text-white dark:border-white/25 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black">
                      Explore
                    </button>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <div className="font-sans text-[13px] font-bold uppercase tracking-wide text-black/70 transition-colors duration-300 dark:text-white/70">
                        Use cases
                      </div>
                      <ul className="mt-3 space-y-2">
                        {it.useCases.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="mt-[7px] h-2 w-2 rounded-full bg-brand-blue" />
                            <span className="font-sans text-[14px] font-medium leading-relaxed text-black/75 transition-colors duration-300 dark:text-white/80">
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="font-sans text-[13px] font-bold uppercase tracking-wide text-black/70 transition-colors duration-300 dark:text-white/70">
                        Solutions
                      </div>
                      <ul className="mt-3 space-y-2">
                        {it.solutions.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="mt-[7px] h-2 w-2 rounded-full bg-brand-blue" />
                            <span className="font-sans text-[14px] font-medium leading-relaxed text-black/75 transition-colors duration-300 dark:text-white/80">
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {it.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-black/15 bg-white px-4 py-2 font-sans text-[12px] font-semibold text-black/75 shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-colors duration-300 dark:border-white/20 dark:bg-black dark:text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-end">
                  <div className="w-full max-w-[320px] overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.04]">
                    <img src={it.image} alt={it.title} className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Impact */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[36px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[48px] lg:text-[60px]">
              BENEFITS &amp; IMPACT OF WORKING WITH US
            </h2>
          </div>

          <div className="flex w-full gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {benefitCards.map((b, idx) => (
              <ServiceCard
                key={b.title}
                title={b.title}
                description={b.description}
                image={b.image}
                isExpanded={idx === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <BeforeFooter
        title="Contact Us For Industry-Specific Solutions"
        description="Tell us your industry and goals—we’ll recommend the best approach, architecture, and roadmap."
        buttonText="Get A Quote"
        paddingClassName="py-10 sm:py-12"
        containerClassName="mx-auto max-w-layout px-4 text-center sm:px-6 md:px-10"
        headingAs="h3"
        headingClassName="font-heading text-[32px] font-bold uppercase leading-tight text-white sm:text-[40px] md:text-[48px]"
      />
    </div>
  );
};

export default Industries;
