
import { Helmet } from "react-helmet";
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import BeforeFooter from '../../components/common/BeforeFooter';
import PageHero from "../../components/common/PageHero";
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

import DiscoveryRequirementAnalysis from '../../assets/services images/BlockchainConsultingimages/DiscoveryRequirementAnalysis.png';
import SolutionArchitectureTechnicalDesign from '../../assets/services images/BlockchainConsultingimages/SolutionArchitectureTechnicalDesign.png';
import TokenomicsBusinessStrategy from '../../assets/services images/BlockchainConsultingimages/TokenomicsBusinessStrategy.png';
import PrototypeValidation from '../../assets/services images/BlockchainConsultingimages/PrototypeValidation.png';
import ImplementationPlanning from '../../assets/services images/BlockchainConsultingimages/ImplementationPlanning.png';

import cutCardLbg from '../../assets/common/cut_card_lbg.png';
const BlockchainConsulting = () => {
  const [activeTab, setActiveTab] = useState(0);

  const consultingApproach = [
    {
      title: 'Discovery & Requirement Analysis',
      desc: 'We begin by understanding your business goals, target users, technical needs, and regulatory considerations. This helps us validate the feasibility of your idea and identify the right blockchain approach.',
      image: DiscoveryRequirementAnalysis,
    },
    {
      title: 'Solution Architecture & Technical Design',
      desc: 'Our architects design secure, scalable blockchain systems tailored to your use case — from smart contracts and consensus and backend infrastructure.',
      image: SolutionArchitectureTechnicalDesign,
    },
    {
      title: 'Tokenomics & Business Strategy',
      desc: 'For Web3 and token-based products, we create token models focused on sustainability, utility, user incentives, and long-term ecosystem growth.',
      image: TokenomicsBusinessStrategy,
    },
    {
      title: 'Prototype & Validation',
      desc: 'We develop functional prototypes or PoCs to validate technical assumptions, reduce risks, and ensure smooth progression into full development.',
      image: PrototypeValidation,
    },
    {
      title: 'Implementation Planning',
      desc: 'We provide a complete execution plan covering development phases, timelines, security considerations, testing flows, and launch strategy.',
      image: ImplementationPlanning,
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

  const dappCarouselRef = useRef(null);
  const [dappActiveIdx, setDappActiveIdx] = useState(0);
  const [dappPaused, setDappPaused] = useState(false);

  useEffect(() => {
    if (dappPaused || !dappCarouselRef.current) return;

    const interval = setInterval(() => {
      setDappActiveIdx((prev) => (prev + 1) % consultingApproach.length);

    }, 3500);

    return () => clearInterval(interval);
  }, [dappPaused, consultingApproach.length]);
  useEffect(() => {
    const el = dappCarouselRef.current;
    if (!el) return;

    const card = el.querySelector('[data-dapp-card]');
    if (!card) return;

    const gap = 32; // gap-8
    const width = card.offsetWidth + gap;

    el.scrollTo({
      left: dappActiveIdx * width,
      behavior: 'smooth',
    });
  }, [dappActiveIdx]);

  const dappPrev = () => {
    const el = dappCarouselRef.current;
    if (!el) return;

    const card = el.querySelector('[data-dapp-card]');
    if (!card) return;

    const gap = 32; // gap-8
    const step = card.offsetWidth + gap;

    el.scrollBy({
      left: -step,
      behavior: 'smooth',
    });
  };

  const dappNext = () => {
    const el = dappCarouselRef.current;
    if (!el) return;

    const card = el.querySelector('[data-dapp-card]');
    if (!card) return;

    const gap = 32;
    const step = card.offsetWidth + gap;

    el.scrollBy({
      left: step,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (dappPaused) return;

    const el = dappCarouselRef.current;
    if (!el) return;

    const card = el.querySelector('[data-dapp-card]');
    if (!card) return;

    const gap = 32;
    const step = card.offsetWidth + gap;

    const interval = setInterval(() => {
      el.scrollBy({
        left: step,
        behavior: 'smooth',
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [dappPaused]);


  return (
    <>
      <Helmet>
        <title>
          Blockchain Consulting Services | Strategy, Tokenomics & Architecture
        </title>

        <meta
          name="description"
          content="Expert blockchain consulting services including tokenomics design, technical architecture, Web3 product strategy, and enterprise blockchain implementation planning."
        />

        <meta
          name="keywords"
          content="blockchain consulting, tokenomics consulting, blockchain architecture design, web3 consulting services, defi product strategy, enterprise blockchain consulting"
        />

        <meta name="author" content="BlueFalcon Technologies" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Expert Blockchain Consulting for Scalable Web3 Solutions" />
        <meta
          property="og:description"
          content="Strategic blockchain consulting covering architecture, tokenomics, security, compliance, and implementation planning."
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="w-full bg-white transition-colors duration-300">
        {/* Hero */}
        {/* <section className="relative w-full bg-white pt-4 pb-2 transition-colors duration-300 sm:pb-8 md:pt-6 md:pb-8 lg:pt-8 lg:pb-8 xl:pt-10 xl:pb-8">
          <div className="mx-auto grid w-full grid-cols-1 items-start gap-0 lg:grid-cols-[65%_35%]">
            <div className="px-4 sm:px-8 md:px-16 lg:px-20 flex w-full flex-col justify-start gap-5 leading-[1.4]">
              <h1 className="font-heading font-bold uppercase tracking-tight transition-colors duration-300">
                <span className="block  leading-[1.5] text-brand-blue  sm:leading-[1.25] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[68px] lg:leading-[1.35]">
                  EXPERT BLOCKCHAIN
                </span>
                <span className="block  leading-[1.5] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[68px]">
                  <span className="text-brand-blue">CONSULTING</span>{' '}
                  <span className="text-black">FOR</span>{' '}
                  <span className="text-brand-blue">SCALABLE </span>
                </span>
                <span className="block  leading-[1.5] text-brand-blue  sm:leading-[1.25] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[68px] lg:leading-[1.35]">
                  SOLUTIONS
                </span>
              </h1>

              <p className="max-w-[760px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 sm:text-xl">
                Unlock the full potential of blockchain with expert guidance, proven frameworks, and strategic planning. Our blockchain consulting services help businesses understand, design, and implement blockchain solutions that are scalable, secure, and commercially viable. Whether you're validating an idea, refining tokenomics, or designing a complete architecture — we help you build with confidence.
              </p>
            </div>

            <div className="flex w-full items-center justify-center ">
              <div className="w-full max-w-[400px]">
                <img src={heroImg} alt="Blockchain consulting" className="h-auto w-full object-contain" loading="eager" />
              </div>
            </div>
          </div>
        </section> */}

<PageHero
  titleLines={[
    { text: "EXPERT BLOCKCHAIN", highlight: true },
    { text: "CONSULTING FOR SCALABLE", highlight: false },
    { text: "SOLUTIONS", highlight: true },
  ]}
  // highlightedWords={["CONSULTING", "SCALABLE"]}
  description="Unlock the full potential of blockchain with expert guidance, proven frameworks, and strategic planning. Our blockchain consulting services help businesses understand, design, and implement blockchain solutions that are scalable, secure, and commercially viable. Whether you're validating an idea, refining tokenomics, or designing a complete architecture — we help you build with confidence."
  image={heroImg}
  imageAlt="Blockchain consulting"
  // imageMaxWidth="400px"
/>
        {/* Consulting Approach */}
        <section className="w-full bg-white py-4 transition-colors duration-300 sm:py-8">
          <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">

            {/* HEADING */}
            <div className=" text-center">
              <h2 className="font-heading font-bold uppercase tracking-tight text-black text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
                CONSULTING <span className="text-brand-blue">APPROACH</span>
              </h2>
              <p className="mx-auto mt-8 mb-8 max-w-[920px] font-sans text-[16px] sm:text-[18px] font-medium leading-[1.7] text-black/70 ">
                Our consulting process is structured to give you clarity, technical accuracy, and a strong execution roadmap.
              </p>
            </div>

            {/* CAROUSEL */}
            {/* CAROUSEL */}
            <div
              ref={dappCarouselRef}
              onMouseEnter={() => setDappPaused(true)}
              onMouseLeave={() => setDappPaused(false)}
              className="
    mx-auto
    flex
    items-stretch
    gap-6 sm:gap-8
    overflow-x-auto
    snap-x snap-mandatory
    scroll-smooth
    px-4
    lg:px-0
    [-ms-overflow-style:none]
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
  "
            >
              {consultingApproach.map((c, idx) => (
                <div
                  key={`${c.title}-${idx}`}
                  data-dapp-card
                  className="
        snap-center
        shrink-0
        w-[90%]
        sm:w-[75%]
        md:w-[48%]
        lg:w-[31%]
      "
                >
                  <div className="relative flex flex-col items-center h-full min-h-[480px] sm:min-h-[520px]">

                    {/* CUT CARD BG */}
                    <img
                      src={cutCardLbg}
                      alt=""
                      aria-hidden
                      className="pointer-events-none absolute inset-0 w-full h-full object-fill"
                    />

                    {/* CONTENT */}
                    <div className="relative z-10 flex flex-col items-center justify-between h-full px-6 py-10 sm:px-8 sm:py-12">

                      {/* IMAGE */}
                      <div className="rounded-xl bg-white p-4 shadow-sm">
                        <img
                          src={c.image}
                          alt={c.title}
                          className="h-[160px] sm:h-[180px] w-full "
                          loading="lazy"
                        />
                      </div>

                      {/* TITLE */}
                      <h3 className="mt-6 text-center font-heading text-[18px] sm:text-[20px] font-bold uppercase tracking-wide text-brand-blue">
                        {c.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="mt-3 text-center text-[14px] sm:text-[16px] leading-relaxed text-black/75 flex-grow">
                        {c.desc}
                      </p>

                    </div>
                  </div>
                </div>
              ))}
            </div>


            {/* NAVIGATION BUTTONS */}
            <div className="mt-8 flex items-center justify-center gap-6">

              {/* LEFT */}
              <button
                onClick={dappPrev}
                aria-label="Previous"
                className="
          flex h-11 w-11 items-center justify-center
          rounded-full border border-black/20
          transition-all duration-300
          hover:bg-brand-blue hover:text-white
        "
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* RIGHT */}
              <button
                onClick={dappNext}
                aria-label="Next"
                className="
          flex h-11 w-11 items-center justify-center
          rounded-full border border-black/20
          transition-all duration-300
          hover:bg-brand-blue hover:text-white
        "
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>

            </div>

          </div>
        </section>


        {/* Areas of Expertise */}
        <section className="w-full bg-white py-4 transition-colors duration-300">
          <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">

            {/* Heading */}
            <div className="mb-10 text-center">
              <h2 className="font-heading  font-bold uppercase tracking-tight text-black transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
                AREAS OF <span className="text-brand-blue">EXPERTISE</span>
              </h2>

              <p className="mx-auto mt-4 max-w-[920px] font-sans text-[15px] font-medium leading-[1.7] text-black/70 transition-colors duration-300 sm:text-[16px]">
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
            bg-white p-5 sm:p-8
            shadow-[0_12px_34px_rgba(0,0,0,0.10)]
            transition-colors duration-300
            lg:grid-cols-[1fr_420px]  hover:border-1 hover:border-brand-blue
          "
                >
                  {/* LEFT CONTENT */}
                  <div>
                    <h3 className="font-heading text-[24px] font-bold uppercase tracking-wide text-black transition-colors duration-300">
                      {e.title}
                    </h3>

                    <ul className="mt-4 space-y-3">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-[7px] h-2 w-2 rounded-full bg-brand-blue" />
                          <span className="font-sans text-[15px] sm:text-[18px] font-medium leading-relaxed text-black/75 transition-colors duration-300">
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
        <section className="w-full bg-white py-4 transition-colors duration-300 sm:py-8">
          <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">

            {/* Heading */}
            <div className="mb-12 text-center">
              <h2 className="font-heading font-bold uppercase tracking-tight text-brand-blue transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
                DELIVERABLES
              </h2>
              <p className="mx-auto mt-4 max-w-[980px] font-sans font-medium leading-[1.7] text-black/70 text-[16px] sm:text-[18px]">
                We provide detailed, actionable documents that help founders, teams, and investors execute their blockchain vision.
              </p>
            </div>

            {/* Tabs */}
            <div className="mb-10 flex flex-wrap justify-center gap-6 border-b border-brand-blue/30">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="flex items-center gap-3 pb-4 font-semibold text-black/70 transition-colors duration-300 hover:text-brand-blue"
                >
                  {/* ICON (jo tumne upar banaya hua hai) */}
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg text-brand-blue">
                    {tab.icon}
                  </span>

                  {/* NAME */}
                  <span className="whitespace-nowrap text-[16px] sm:text-[20px]">
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
                        <div className="h-[180px] w-full max-w-[280px] overflow-hidden rounded-2xl border border-brand-blue/25 bg-black/[0.03]">
                          <img
                            src={d.image}
                            alt={d.title}
                            className="h-full w-full object-contain p-4"
                          />
                        </div>
                      </div>

                      {/* Content (RIGHT) */}
                      <div>
                        <h3 className="font-heading text-[24px] font-bold uppercase tracking-wide text-brand-blue">
                          {d.title}
                        </h3>
                        <p className="mt-2 font-sans text-[16px] sm:text-[20px] font-medium leading-relaxed text-black/75">
                          {d.para}
                        </p>
                        <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {d.points.map((p) => (
                            <li key={p} className="flex items-start gap-3">
                              <span className="mt-[7px] h-2 w-2 rounded-full bg-brand-blue" />
                              <span className="font-sans text-[15px] sm:text-[18px] font-medium leading-relaxed text-black/75">
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
          buttonLink="/contact"
          paddingClassName="py-10 sm:py-12"
          containerClassName="mx-auto max-w-layout px-4 text-center sm:px-6 md:px-10"
          headingAs="h3"
          headingClassName="font-heading text-[32px] font-bold uppercase leading-tight text-white sm:text-[40px] md:text-[48px]"
        />
      </div>
    </>
  );
};

export default BlockchainConsulting;

