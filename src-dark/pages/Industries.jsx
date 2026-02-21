import { Helmet } from "react-helmet";

import BeforeFooter from '../components/common/BeforeFooter';
import ServiceCard from '../components/common/ServiceCard';
import { Link } from 'react-router-dom';

import heroImg from '../assets/Industry_images/Industry-hero.png';
import cat1 from '../assets/Industry_images/FintechBanking-main.png';
import cat2 from '../assets/Industry_images/HealthcarePharma-main.png';
import cat3 from '../assets/Industry_images/SupplychainLogistics-main.png';
import cat4 from '../assets/Industry_images/RealestateProptech-main.png';
import cat5 from '../assets/Industry_images/GamingMetaverse-main.png';
import cat6 from '../assets/Industry_images/EcommerceRetail-main.png';
import cat7 from '../assets/Industry_images/EnergySustainability-main.png';
import cat8 from '../assets/Industry_images/EducationEdtech-main.png';
import cat9 from '../assets/Industry_images/GovtPublicSector-main.png';
import cat10 from '../assets/Industry_images/Insurance-main.png';
import cat11 from '../assets/Industry_images/TravelHospitality-main.png';
import cat12 from '../assets/Industry_images/ManufacturingIndustry-main.png';

import iFinance from '../assets/Industry_images/FintechBanking.png';
import iHealth from '../assets/Industry_images/HealthcarePharma.png';
import iSupply from '../assets/Industry_images/SupplychainLogistics.png';
import iRealEstate from '../assets/Industry_images/RealEstate.png';
import iGaming from '../assets/Industry_images/GamingMetaverse.png';
import iRetail from '../assets/Industry_images/EcommerceRetail.png';
import iEnergy from '../assets/Industry_images/EnergySustainability.png';
import iEducation from '../assets/Industry_images/EducationEdtech.png';
import iGov from '../assets/Industry_images/GovernmentPublicService.png';
import iInsurance from '../assets/Industry_images/Insurance.png';
import iTravel from '../assets/Industry_images/TravelHospitality.png';
import iManufacturing from '../assets/Industry_images/ManufacturingIndustry.png';

import b1 from '../assets/Industry_images/EnterpriseGradeSecurity.png';
import b2 from '../assets/Industry_images/IndustrySpecificExpertise.png';
import b3 from '../assets/Industry_images/FasterDigitalTransformation.png';
import b4 from '../assets/Industry_images/End2EndDelivery.png';

const Industries = () => {
  const categories = [
    { title: 'Fintech & Banking', image: iFinance },
    { title: 'Healthcare & Pharma', image: iHealth },
    { title: 'Supply Chain & Logistics', image: iSupply },
    { title: 'Real Estate & PropTech', image: iRealEstate },
    { title: 'Gaming, Metaverse & Entertainment', image: iGaming },
    { title: 'E-Commerce & Retail', image: iRetail },
    { title: 'Energy & Sustainability', image: iEnergy },
    { title: 'Education & EdTech', image: iEducation },
    { title: 'Government & Public Services', image: iGov },
    { title: 'Insurance', image: iInsurance },
    { title: 'Travel & Hospitality', image: iTravel },
    { title: 'Manufacturing & Industry 4.0', image: iManufacturing },

  ];

  const industries = [
    {
      title: 'Fintech & Banking',
      image: cat1,
      description:
        'Blockchain and AI are reshaping global financial systems with transparency, security, and automation.',
      useCases: [
        'Cross-border payments & remittances',
        'Digital identity & KYC automation',
        'Fraud detection with AI',
        'Tokenized securities',
        'Smart contract-based settlements',
      ],
      benefits: ['Faster transactions', 'Lower costs', 'Full auditability'],
    },
    {
      title: 'Healthcare & Pharma',
      image: cat2,
      description:
        'Enhancing patient safety, traceability, and medical intelligence with secure data systems.',
      useCases: [
        'Pharmaceutical supply chain tracking',
        'Patient data management',
        'AI diagnostics & predictive analytics',
        'Remote monitoring with IoT + blockchain',
        'Clinical trial data verification',
      ],
      benefits: [
        'Reduced fraud & counterfeits',
        'Privacy-compliant health data',
        'Improved treatment outcomes',
      ],
    },
    {
      title: 'Supply Chain & Logistics',
      image: cat3,
      description:
        'End-to-end transparency and automation for global supply networks.',
      useCases: [
        'Track & trace systems',
        'IoT-enabled logistics',
        'Warehouse automation with AI',
        'Digital twins for supply networks',
        'Smart contracts for vendor management',
      ],
      benefits: [
        'Real-time tracking',
        'Lower operational risks',
        'Faster dispute resolution',
      ],
    },
    {
      title: 'Real Estate & PropTech',
      image: cat4,
      description:
        'Tokenization and AI unlock new financial models and seamless property transactions.',
      useCases: [
        'Property tokenization',
        'Automated rental agreements',
        'Real estate marketplaces',
        'Ownership verification',
        'AI-driven property valuation',
      ],
      benefits: [
        'Liquid asset markets',
        'Efficient transactions',
        'Borderless investor access',
      ],
    },
    {
      title: 'Gaming, Metaverse & Entertainment',
      image: cat5,
      description:
        'Immersive digital worlds and sustainable play-to-earn ecosystems.',
      useCases: [
        'NFT gaming platforms',
        'Metaverse development',
        'Virtual asset marketplaces',
        'AI avatars & 3D content',
        'Play-to-earn economies',
      ],
      benefits: [
        'Boosted player engagement',
        'New revenue models',
        'Secure asset ownership',
      ],
    },
    {
      title: 'E-commerce & Retail',
      image: cat6,
      description:
        'Personalized shopping and secure, data-driven commerce platforms.',
      useCases: [
        'AI-enabled personalization',
        'Supply chain traceability',
        'Omnichannel analytics',
        'Secure payments',
      ],
      benefits: [
        'Higher customer retention',
        'Improved product authenticity',
        'Data-driven decisions',
      ],
    },
    {
      title: 'Energy & Sustainability',
      image: cat7,
      description:
        'Transparency and trust in carbon credits, energy trading, and optimization.',
      useCases: [
        'Carbon credit marketplaces',
        'Blockchain-based energy trading',
        'IoT-driven optimization',
        'Sustainability reporting',
      ],
      benefits: [
        'Verified environmental impact',
        'Lower energy costs',
        'Transparent green initiatives',
      ],
    },
    {
      title: 'Education & EdTech',
      image: cat8,
      description:
        'Digital credentials and intelligent learning platforms.',
      useCases: [
        'Blockchain certificates',
        'AI tutoring & adaptive learning',
        'Student identity verification',
        'Skill assessment automation',
      ],
      benefits: [
        'Tamper-proof certifications',
        'Personalized learning journeys',
      ],
    },
    {
      title: 'Government & Public Sector',
      image: cat9,
      description:
        'Secure and scalable digital infrastructure for governance.',
      useCases: [
        'Digital identity systems',
        'Smart governance platforms',
        'Public record verification',
        'Transparent procurement',
      ],
      benefits: [
        'Reduced corruption',
        'Faster citizen services',
        'High-trust infrastructure',
      ],
    },
    {
      title: 'Insurance',
      image: cat10,
      description:
        'AI and blockchain streamline claims, underwriting, and fraud prevention.',
      useCases: [
        'Automated claims processing',
        'Risk scoring with AI',
        'Smart contract insurance',
        'KYC/AML automation',
      ],
      benefits: [
        'Faster settlements',
        'Lower fraud rates',
        'Better customer satisfaction',
      ],
    },
    {
      title: 'Travel & Hospitality',
      image: cat11,
      description:
        'Smarter, faster, and more secure travel experiences.',
      useCases: [
        'Blockchain ticketing',
        'AI itinerary planning',
        'Loyalty automation',
        'Identity verification',
      ],
      benefits: [
        'Trusted travel identity',
        'Seamless customer experience',
      ],
    },
    {
      title: 'Manufacturing & Industry 4.0',
      image: cat12,
      description:
        'AI and blockchain power smarter factories and automation.',
      useCases: [
        'Predictive maintenance',
        'Supply chain automation',
        'Digital twins',
        'Sensor-based quality checks',
      ],
      benefits: [
        'Reduced downtime',
        'Optimized resources',
        'Transparent production cycles',
      ],
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
    {
      title: 'Industry-focused solutions',
      description: 'Solutions tailored to regulatory, operational, and user-specific industry needs.',
      image: b2,
    },

  ];

  return (
    <>
  <Helmet>
    <title>Industries We Serve | Blockchain & AI Solutions</title>
    <meta
      name="description"
      content="Explore how Blockchain App Advisor delivers blockchain, AI, and Web3 solutions across fintech, healthcare, supply chain, real estate, gaming, retail, and more."
    />
    <meta
      name="keywords"
      content="blockchain industries, AI solutions by industry, fintech blockchain, healthcare blockchain, supply chain blockchain, Web3 solutions"
    />
    <link
      rel="canonical"
      href="https://yourdomain.com/industries"
    />
  </Helmet>

    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero */}
      <section className="relative w-full bg-white pt-4 pb-4 transition-colors duration-300 dark:bg-black sm:pb-16 md:pt-6 md:pb-8 lg:pt-8 lg:pb-8 xl:pt-10 xl:pb-8">
        <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[58%_42%] lg:pl-[3rem] lg:pr-[5rem]">
          <div className="flex w-full flex-col gap-6">
            <h1 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white">
              <span className="block leading-[1.2]  sm:leading-[1.25] text-[32px] sm:text-[48px] md:text-[56px] lg:text-[68px] lg:leading-[1.25]">
                TRANSFORMING INDUSTRIES
              </span>
              <span className="block  leading-[1.2]  sm:leading-[1.25] text-[32px] sm:text-[48px] md:text-[56px] lg:text-[68px] lg:leading-[1.25]">
                WITH{' '}
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">BLOCKCHAIN &amp;</span> {' '}
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">AI INNOVATION</span>
              </span>

            </h1>

            <p className="max-w-[760px] font-sans text-base font-medium leading-[1.45] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-xl">
              Blockchain App Advisor delivers future-ready blockchain, AI, and Web3 solutions tailored to the needs of modern enterprises, startups, and global brands.
            </p>
            <p className="max-w-[760px] font-sans text-base font-medium leading-[1.45] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-xl">
              Our industry-specific expertise enables organizations to accelerate digital transformation, improve operational efficiency, and unlock new revenue models through decentralized technologies and intelligent automation. </p>
            <p className="max-w-[760px] font-sans text-base font-medium leading-[1.45] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-xl">
              We combine strategic consulting, product engineering, and emerging technology R&D to solve real-world challenges across multiple industries.  </p>
          </div>

          <div className="flex w-full items-center justify-center">
            <div className="w-full max-w-[440px] lg:max-w-[400px]">
              <div className="overflow-hidden rounded-3xl transition-colors duration-300 dark:bg-white/[0.04]">
                <img src={heroImg} alt="Industries hero" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Categories */}
      <section data-aos="fade-up" className="w-full bg-white py-4 transition-colors duration-300 dark:bg-black sm:py-8">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">

          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              INDUSTRY <span className="text-brand-blue">CATEGORIES</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 sm:grid-cols-3 lg:grid-cols-6">

            {categories.map((c) => (
              <div
                key={c.title}
                className="flex flex-col items-center"
              >
                {/* IMAGE CARD */}
                <div
                  className="
h-[150px] w-[110px] sm:h-[170px] sm:w-[120px] md:h-[190px] md:w-[130px]
              overflow-hidden
              rounded-[999px]
              border border-black/10
              bg-black/[0.03]
              shadow-[0_14px_34px_rgba(0,0,0,0.14)]
              transition-all duration-300
              hover:-translate-y-[3px]
              dark:border-white/20
              dark:bg-white/[0.05]
            "
                >
                  <img
                    src={c.image}
                    alt={c.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* TITLE */}
                <div className="mt-5 text-center font-heading text-[14px] sm:text-[16px] md:text-[18px] font-bold uppercase leading-snug tracking-wide text-black transition-colors duration-300 dark:text-white">
                  {c.title.split('\n').map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* Industry & Use Cases */}
      <section className="w-full bg-white py-4 transition-colors duration-300 dark:bg-black sm:py-8">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              INDUSTRY &amp; <span className="text-brand-blue">USE CASES</span>
            </h2>
          </div>

          <div className="mx-auto flex max-w-[1120px] flex-col gap-10">
            {industries.map((it) => (
              <div
                key={it.title}
                className="grid grid-cols-1 gap-10   hover:border-brand-blue hover:text-white rounded-[20px] border border-[#c8d7e4] bg-white p-6 sm:p-8 md:p-10
      shadow-[0_16px_44px_rgba(0,0,0,0.12)]
      dark:border-white/20 dark:bg-black/20
      md:grid-cols-[1fr_360px] lg:grid-cols-[1fr_420px]"
              >
                {/* LEFT CONTENT */}
                <div>
                  <h3 className="font-heading text-[24px] font-bold text-black dark:text-white">
                    {it.title}
                  </h3>

                  <p className="mt-3 max-w-[520px] font-sans text-[18px] sm:text-[16px] md:text-[20px] leading-relaxed text-black/75 dark:text-white/80">
                    {it.description}
                  </p>

                  {/* Use Cases */}
                  <div className="mt-6">
                    <div className="font-sans text-[15px] sm:text-[16px] md:text-[18px] font-bold uppercase text-black dark:text-white">
                      Use Cases
                    </div>
                    <ul className="mt-3 space-y-2">
                      {it.useCases.map((u) => (
                        <li key={u} className="flex gap-3">
                          <span className="mt-[7px] h-2 w-2 rounded-full bg-brand-blue" />
                          <span className="font-sans text-[15px] sm:text-[16px] md:text-[18px] text-black/75 dark:text-white/80">
                            {u}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mt-6">
                    <div className="font-sans text-[14px] font-bold text-black dark:text-white">
                      Benefits
                    </div>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {it.benefits.map((b) => (
                        <span
                          key={b}
                          className="rounded-full border border-brand-blue px-4 py-2
                font-sans text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-brand-blue
                dark:border-white/30 dark:text-white"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex items-center justify-center md:justify-end">
                  <div className="w-full max-w-[260px] overflow-hidden rounded-3xl">
                    <img src={it.image} alt={it.title} className="w-full object-contain" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Benefits & Impact */}
      <section className="w-full bg-white py-4 transition-colors duration-300 dark:bg-black sm:py-8">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[36px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[48px] lg:text-[60px]">
              BENEFITS &amp; IMPACT OF WORKING WITH US
            </h2>
          </div>

          <div className="flex justify-center w-full gap-6 sm:gap-8 overflow-x-auto  px-4 sm:px-0 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {benefitCards.map((b) => (
              <ServiceCard
                key={b.title}
                title={b.title}
                description={b.description}
                image={b.image}
                isExpanded={false}
                hoverExpand
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
        buttonLink="/contact"
        paddingClassName="py-10 sm:py-12"
        containerClassName="mx-auto max-w-layout px-4 text-center sm:px-6 md:px-10"
        headingAs="h3"
        headingClassName="font-heading  font-bold uppercase leading-tight text-white text-[22px] sm:text-[32px] md:text-[40px] lg:text-[48px]"
      />
    </div>
    </>
  );
};

export default Industries;
