import { useState } from 'react';

import BeforeFooter from '../../components/common/BeforeFooter';

import heroImg from '../../assets/services images/BlockchainConsultingimages/ConsultingService-hero.png';

// Consulting approach graphics
import approach1Icon from '../../assets/services images/BlockchainConsultingimages/DiscoveryRequirementAnalysis.png';
import approach2Icon from '../../assets/services images/BlockchainConsultingimages/SolutionArchitectureTechnicalDesign.png';
import approach3Icon from '../../assets/services images/BlockchainConsultingimages/TokenomicsBusinessStrategy.png';
import approach4Icon from '../../assets/services images/BlockchainConsultingimages/PrototypeValidation.png';
import approach5Icon from '../../assets/services images/BlockchainConsultingimages/ImplementationPlanning.png';

// Expertise graphics
import exp1Img from '../../assets/services images/BlockchainConsultingimages/BlockchainStrategyArchitecture.png';
import exp2Img from '../../assets/services images/BlockchainConsultingimages/TokenomicsCryptoEconomic.png';
import exp3Img from '../../assets/services images/BlockchainConsultingimages/DefiWeb3ProductStrategy.png';
import exp4Img from '../../assets/services images/BlockchainConsultingimages/BlochchainSecurityCompliance.png';
import exp5Img from '../../assets/services images/BlockchainConsultingimages/EnterpriseBlockchainConsulting.png';

// Deliverables graphics
import iconTechnicalArchitecture from '../../assets/services images/BlockchainConsultingimages/icons/TechnicalArchitecture.gif';
import iconProductRoadmap from '../../assets/services images/BlockchainConsultingimages/icons/ProductRoadmap.gif';
import iconTokenomicsDocument from '../../assets/services images/BlockchainConsultingimages/icons/TokenomicsDocument.gif';
import iconWhitepaperLitepaper from '../../assets/services images/BlockchainConsultingimages/icons/WhitepaperLitepaper.gif';

import whitepaperImg from '../../assets/services images/BlockchainConsultingimages/WhitepaperLitepaper.png';
import TokenImg from '../../assets/services images/BlockchainConsultingimages/TokenomicsDocument.png';
import technicalImg from '../../assets/services images/BlockchainConsultingimages/TechnicalArchitectureDocument.png';
import roadmapImg from '../../assets/services images/BlockchainConsultingimages/ProductRoadmap.png';

import  DiscoveryRequirementAnalysis  from '../../assets/services images/BlockchainConsultingimages/DiscoveryRequirementAnalysis.png';
import SolutionArchitectureTechnicalDesign  from '../../assets/services images/BlockchainConsultingimages/SolutionArchitectureTechnicalDesign.png';
import TokenomicsBusinessStrategy  from '../../assets/services images/BlockchainConsultingimages/TokenomicsBusinessStrategy.png';
import PrototypeValidation  from '../../assets/services images/BlockchainConsultingimages/PrototypeValidation.png';
import ImplementationPlanning  from '../../assets/services images/BlockchainConsultingimages/ImplementationPlanning.png';

const BlockchainConsulting = () => {
  const [activeTab, setActiveTab] = useState(0);

  const consultingApproach = [
    {
      title: 'Discovery & Requirement Analysis',
      desc: 'We begin by understanding your business goals, target users, technical needs, and regulatory considerations. This helps us validate the feasibility of your idea and identify the right blockchain approach.',
      icon: DiscoveryRequirementAnalysis,
    },
    {
      title: 'Solution Architecture & Technical Design',
      desc: 'Our architects design secure, scalable blockchain systems tailored to your use case — from smart contracts and consensus mechanisms to token models, wallet interactions, and backend infrastructure.',
      icon: SolutionArchitectureTechnicalDesign,
    },
    {
      title: 'Tokenomics & Business Strategy',
      desc: 'For Web3 and token-based products, we create token models focused on sustainability, utility, user incentives, and long-term ecosystem growth.',
      icon: TokenomicsBusinessStrategy,
    },
    {
      title: 'Prototype & Validation',
      desc: 'We develop functional prototypes or PoCs to validate technical assumptions, reduce risks, and ensure smooth progression into full development.',
      icon: PrototypeValidation,
    },
    {
      title: 'Implementation Planning',
      desc: 'We provide a complete execution plan covering development phases, timelines, security considerations, testing flows, and launch strategy.',
      icon: ImplementationPlanning,
    },
  ];

  const expertise = [
    {
      title: 'Blockchain Strategy & Architecture',
      bullets: ['Protocol selection (Ethereum, Solana, Hyperledger, Polkadot, BNB Chain, Polygon, etc.)',
        'System architecture design',
        'Smart contract frameworks and standards',
        'On-chain/off-chain interactions',
        'Enterprise blockchain solutions',],
      image: exp1Img,
      alt: 'Blockchain strategy and architecture',
    },
    {
      title: 'Tokenomics & Crypto Economics',
      bullets: ['Utility, governance, and security token models',
        'Reward mechanisms, staking, vesting, and liquidity strategies',
        'Sustainable economic design to support long-term growth',
        'Market, user, and ecosystem modeling',],
      image: exp2Img,
      alt: 'Tokenomics and crypto economics',
    },
    {
      title: 'DeFi & Web3 Product Strategy',
      bullets: ['DEXs, lending protocols, staking systems',
        'NFT marketplaces and ecosystems',
        'Web3 wallets and identity solutions',
        'Cross-chain and interoperability strategy',],
      image: exp3Img,
      alt: 'DeFi & Web3 Product Strategy',
    },
    {
      title: 'Blockchain Security & Compliance',
      bullets: ['Threat modeling',
        'Best-practice smart contract standards',
        'Regulatory considerations (KYC/AML, token classifications)',
        'Architecture-level security recommendations',],
      image: exp4Img,
      alt: 'Blockchain security and compliance',
    },
    {
      title: 'Enterprise Blockchain Consulting',
      bullets: ['Supply chain solutions',
        'Asset tokenization',
        'Data integrity and auditing systems',
        'Workflow automation using blockchain',],
      image: exp5Img,
      alt: 'Enterprise blockchain consulting',
    },
  ];

  const deliverableTabs = [
    {
      icon: iconWhitepaperLitepaper,
      title: 'Whitepaper / Litepaper',
      image: whitepaperImg,
      para: 'A complete technical and business overview, including',
      points: [
        'Problem & solution',
        'Architecture',
        'Token model (if applicable)',
        'Use-case descriptions',
        'Competitive analysis',
        'Roadmap',
        'Business model',
      ],
    },
    {
      icon: iconTokenomicsDocument,
      title: 'Tokenomics Document',
      image: TokenImg,
      para: 'A detailed token economic design covering',
      points: [
        'Token utility & mechanics',
        'Distribution & allocation',
        'Vesting schedules',
        'Rewards & incentives',
        'Ecosystem flows',
        'Sustainability & risk analysis',
      ],
    },
    {
      icon: iconTechnicalArchitecture,
      title: 'Technical Architecture',
      image: technicalImg,
      para: 'A blueprint for your engineers and stakeholders, including',
      points: [
        'System architecture diagrams',
        'Smart contract scope',
        'Technology stack',
        'Database & backend plan',
        'Security considerations',
        'Infrastructure overview',
      ],
    },
    {
      icon: iconProductRoadmap,
      title: 'Product Roadmap',
      image: roadmapImg,
      para: 'A clear, phased roadmap from concept to launch',
      points: [
        'MVP scope',
        'Feature milestones',
        'Development phases',
        'Timeline & dependencies',
        'Go-to-market recommendations',
      ],
    },
  ];
  const tabs = deliverableTabs.map((d, index) => ({
    key: index,
    label: d.title,
    icon: (
      <img
        src={d.icon}
        alt={d.title}
        className="h-12 w-12 object-contain"
      />
    ),
  }));

  return (
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero */}
      <section className="w-full bg-white pt-8 pb-12 transition-colors duration-300 dark:bg-black sm:pt-8 sm:pb-14 lg:pt-12 lg:pb-16">
        <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[58%_42%] lg:pl-[3rem] lg:pr-[5rem]">
          <div className="flex w-full flex-col gap-6">
            <h1 className="font-heading font-bold uppercase tracking-tight transition-colors duration-300">
              <span className="block text-[38px] leading-[1.5] text-brand-blue sm:text-[52px] sm:leading-[1.25] lg:text-[52px] lg:leading-[1.35]">
                EXPERT BLOCKCHAIN
              </span>
              <span className="block text-[40px] leading-[1.5] sm:text-[54px] lg:text-[52px]">
                <span className="text-brand-blue">CONSULTING</span>{' '}
                <span className="text-black dark:text-white">FOR</span>{' '}
                <span className="text-brand-blue">SCALABLE </span>
              </span>
              <span className="block text-[38px] leading-[1.5] text-brand-blue sm:text-[52px] sm:leading-[1.25] lg:text-[52px] lg:leading-[1.35]">
                SOLUTIONS
              </span>
            </h1>

            <p className="max-w-[760px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-lg">
              Unlock the full potential of blockchain with expert guidance, proven frameworks, and strategic planning. Our blockchain consulting services help businesses understand, design, and implement blockchain solutions that are scalable, secure, and commercially viable. Whether you're validating an idea, refining tokenomics, or designing a complete architecture — we help you build with confidence.
            </p>
          </div>

          <div className="flex w-full items-center justify-center ">
            <div className="w-full max-w-[400px]">
              <img src={heroImg} alt="Blockchain consulting" className="h-auto w-full object-contain" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Approach */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              CONSULTING <span className="text-brand-blue">APPROACH</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[920px] font-sans text-[15px] font-medium leading-[1.7] text-black/70 transition-colors duration-300 dark:text-white/75 sm:text-[16px]">
              Our consulting process is structured to give you clarity, technical accuracy, and a strong execution roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3">
            {consultingApproach.map((c, index) => (
              <div
                key={c.title}
                className={`group relative
                      ${index === 4
                    ? "md:col-span-2 md:flex md:justify-center lg:col-span-1 lg:col-start-2"
                    : ""
                  }
                    `}
              >
                <div className="absolute -inset-4 rounded-[22px] bg-brand-blue transition-transform duration-300 translate-x-2 translate-y-2 -rotate-[3deg] group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-[4deg]" />

                <div className="relative w-full max-w-[520px] rounded-[22px] border border-[#c8d7e4] bg-white p-7 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="font-heading text-[20px] font-bold uppercase leading-tight text-brand-blue dark:text-white">
                      {c.title}
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-brand-blue/35 bg-white dark:border-white/25 dark:bg-black/20">
                      <img src={c.icon} alt="" className="h-9 w-9 object-contain" />
                    </div>
                  </div>

                  <p className="mt-4 font-sans text-[15px] font-medium leading-[1.65] text-black/70 dark:text-white/80">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">

          {/* Heading */}
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              AREAS OF <span className="text-brand-blue">EXPERTISE</span>
            </h2>

            <p className="mx-auto mt-4 max-w-[920px] font-sans text-[15px] font-medium leading-[1.7] text-black/70 transition-colors duration-300 dark:text-white/75 sm:text-[16px]">
              Our consulting expertise covers the full spectrum of blockchain and Web3 technologies
            </p>
          </div>

          {/* Cards */}
          <div className="mx-auto flex max-w-[1100px] flex-col gap-10">
            {expertise.map((e) => (
              <div
                key={e.title}
                className="
            grid grid-cols-1 gap-10
            rounded-[18px]
            border border-black/10
            bg-white p-8
            shadow-[0_12px_34px_rgba(0,0,0,0.10)]
            transition-colors duration-300
            dark:border-white/25 dark:bg-black/20
            lg:grid-cols-[1fr_420px]
          "
              >
                {/* LEFT CONTENT */}
                <div>
                  <h3 className="font-heading text-[20px] font-bold uppercase tracking-wide text-black transition-colors duration-300 dark:text-white">
                    {e.title}
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-[7px] h-2 w-2 rounded-full bg-brand-blue" />
                        <span className="font-sans text-[15px] font-medium leading-relaxed text-black/75 transition-colors duration-300 dark:text-white/80">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-[250px] overflow-hidden rounded-2xl">
                    <img
                      src={e.image}
                      alt={e.alt}
                      className="h-auto w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Deliverables */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">

          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-brand-blue transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              DELIVERABLES
            </h2>
            <p className="mx-auto mt-4 max-w-[980px] font-sans text-[15px] font-medium leading-[1.7] text-black/70 dark:text-white/75 sm:text-[16px]">
              We provide detailed, actionable documents that help founders, teams, and investors execute their blockchain vision.
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-10 flex flex-wrap justify-evenly gap-10 border-b border-brand-blue/30">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="flex items-center gap-3 pb-4 font-semibold text-black/70 transition-colors duration-300 hover:text-brand-blue dark:text-white/70"
              >
                {/* ICON (jo tumne upar banaya hua hai) */}
                <span className="flex h-11 w-11 items-center justify-center rounded-lg text-brand-blue">
                  {tab.icon}
                </span>

                {/* NAME */}
                <span className="whitespace-nowrap">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>


          {/* Sliding Content */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeTab * 100}%)` }}
            >
              {deliverableTabs.map((d) => (
                <div key={d.title} className="w-full shrink-0">
                  <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[320px_1fr]">

                    {/* Image (LEFT) */}
                    <div className="flex justify-center">
                      <div className="h-[180px] w-full max-w-[280px] overflow-hidden rounded-2xl border border-brand-blue/25 bg-black/[0.03] dark:border-white/20 dark:bg-white/[0.04]">
                        <img
                          src={d.image}
                          alt={d.title}
                          className="h-full w-full object-contain p-4"
                        />
                      </div>
                    </div>

                    {/* Content (RIGHT) */}
                    <div>
                      <h3 className="font-heading text-[20px] font-bold uppercase tracking-wide text-brand-blue dark:text-white">
                        {d.title}
                      </h3>
                      <p className="mt-2 font-sans text-[14px] font-medium leading-relaxed text-black/75 dark:text-white/80">
                        {d.para}
                      </p>
                      <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {d.points.map((p) => (
                          <li key={p} className="flex items-start gap-3">
                            <span className="mt-[7px] h-2 w-2 rounded-full bg-brand-blue" />
                            <span className="font-sans text-[14px] font-medium leading-relaxed text-black/75 dark:text-white/80">
                              {p}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* CTA */}
      <BeforeFooter
        title="Ready To Build A Secure And Scalable Blockchain Product?"
        buttonText="Get A Quote"
        paddingClassName="py-10 sm:py-12"
        containerClassName="mx-auto max-w-layout px-4 text-center sm:px-6 md:px-10"
        headingAs="h3"
        headingClassName="font-heading text-[32px] font-bold uppercase leading-tight text-white sm:text-[40px] md:text-[48px]"
      />
    </div>
  );
};

export default BlockchainConsulting;

