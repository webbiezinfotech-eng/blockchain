import { Helmet } from "react-helmet";

import { useState, useEffect } from 'react';
import BeforeFooter from '../../components/common/BeforeFooter';
import DevelopmentProcess from '../../components/common/DevelopmentProcess';

import heroImg from '../../assets/services images/BlockchainDevimages/hero.png';
import solution1Img from '../../assets/services images/BlockchainDevimages/CustomBlockchainApplications.png';
import solution2Img from '../../assets/services images/BlockchainDevimages/PrivateConsortiumBlockchainNetworks.png';
import solution3Img from '../../assets/services images/BlockchainDevimages/TokenizationDigitalAsset.png';
import solution4Img from '../../assets/services images/BlockchainDevimages/SmartContractDevelopment.png';
import solution5Img from '../../assets/services images/BlockchainDevimages/DecentralizedIdentitySystem.png';
import solution6Img from '../../assets/services images/BlockchainDevimages/BlockchainIntegrationAPIDev.png';
import developmentProcessImg from '../../assets/services images/BlockchainDevimages/DevelopmentProcess.png';

import financeBankingIcon from '../../assets/services images/BlockchainDevimages/icons/FinanceBanking.gif';
import supplyChainIcon from '../../assets/services images/BlockchainDevimages/icons/Supplychain.gif';
import healthcareIcon from '../../assets/services images/BlockchainDevimages/icons/Healthcare.gif';
import realEstateIcon from '../../assets/services images/BlockchainDevimages/icons/realestate.gif';
import gamingMetaverseIcon from '../../assets/services images/BlockchainDevimages/icons/gamingMetaverse.gif';
import energyIcon from '../../assets/services images/BlockchainDevimages/icons/energy.gif';
import publicSectorIcon from '../../assets/services images/BlockchainDevimages/icons/publicsector.gif';

const BlockchainDevelopment = () => {
  const [cardsToShow, setCardsToShow] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // 7 cards (replace content when you share final copy)
  const industryUseCases = [
    {
      title: 'Finance & Banking',
      desc: 'Payments, settlements, tokenized assets, compliance automation',
      icon: financeBankingIcon,
    },
    {
      title: 'Supply Chain',
      desc: 'Real-time tracking, provenance, anti-counterfeiting',
      icon: supplyChainIcon,
    },
    {
      title: 'Healthcare',
      desc: 'Secure medical records, identity, and data sharing',
      icon: healthcareIcon,
    },
    {
      title: 'Real Estate',
      desc: 'Tokenized assets, digital deeds, automated agreements',
      icon: realEstateIcon,
    },
    {
      title: 'Gaming & Metaverse',
      desc: 'Play-to-earn systems, NFTs, virtual economies',
      icon: gamingMetaverseIcon,
    },
    {
      title: 'Energy',
      desc: 'Smart metering, carbon credits, renewable trading',
      icon: energyIcon,
    },
    {
      title: 'Public Sector',
      desc: 'Governance systems, land registries, e-voting',
      icon: publicSectorIcon,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const next = w >= 1024 ? 3 : w >= 768 ? 2 : 1;
      setCardsToShow(next);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // autoplay (2s)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // seamless loop reset
  useEffect(() => {
    // Use >= to avoid edge-cases where timers/visibility changes can skip exact equality
    if (currentIndex >= industryUseCases.length) {
      const t = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [currentIndex, industryUseCases.length]);

  useEffect(() => {
    if (!isTransitioning) {
      const t = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(t);
    }
  }, [isTransitioning]);

  const visibleItems = [...industryUseCases, ...industryUseCases.slice(0, cardsToShow)];
  const activeDot = ((currentIndex % industryUseCases.length) + industryUseCases.length) % industryUseCases.length;

  const handlePrev = () => {
    setCurrentIndex(prev =>
      prev === 0 ? industryUseCases.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex(prev =>
      prev === industryUseCases.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <>
  <Helmet>
    <title>
      Enterprise Blockchain Development Company | Scalable Web3 Solutions
    </title>

    <meta
      name="description"
      content="Enterprise-grade blockchain development services including custom dApps, private blockchain networks, smart contracts, tokenization, DeFi solutions, and scalable Web3 ecosystems."
    />

    <meta
      name="keywords"
      content="blockchain development company, enterprise blockchain solutions, web3 development services, dApp development, smart contract development, tokenization services, private blockchain networks, DeFi development"
    />

    {/* Open Graph */}
    <meta
      property="og:title"
      content="Enterprise Blockchain Development for Scalable Web3 Innovation"
    />
    <meta
      property="og:description"
      content="Build secure, scalable blockchain solutions including custom applications, tokenization platforms, private networks, and Web3 integrations."
    />
    <meta property="og:type" content="website" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Enterprise-Grade Blockchain Development Services"
    />
    <meta
      name="twitter:description"
      content="Custom blockchain solutions, smart contracts, tokenization, and Web3 infrastructure built for real-world enterprise scale."
    />
  </Helmet>

    <div className="w-full bg-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative w-full bg-white pt-4 pb-4 transition-colors duration-300 sm:pb-16 md:pt-6 md:pb-18 lg:pt-8 lg:pb-18 xl:pt-10 xl:pb-10">
        {/* Background Decorative Lines */}
        <div className="absolute z-0 opacity-10">
          <div className="absolute left-[10%] top-0 h-full w-[1px] bg-brand-blue" />
          <div className="absolute left-[30%] top-0 h-full w-[1px] bg-brand-blue" />
          <div className="absolute left-[50%] top-0 h-full w-[1px] bg-brand-blue" />
          <div className="absolute left-[70%] top-0 h-full w-[1px] bg-brand-blue" />
          <div className="absolute left-[90%] top-0 h-full w-[1px] bg-brand-blue" />

          <div className="absolute top-[20%] left-0 w-full h-[1px] bg-brand-blue" />
          <div className="absolute top-[40%] left-0 w-full h-[1px] bg-brand-blue" />
          <div className="absolute top-[60%] left-0 w-full h-[1px] bg-brand-blue" />
          <div className="absolute top-[80%] left-0 w-full h-[1px] bg-brand-blue" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-4 sm:px-6 md:px-10 lg:px-14 lg:grid-cols-[60%_40%] lg:pl-[3rem] lg:pr-[5rem]">

          {/* Left Side - Text Content */}
          <div className="flex w-full flex-col justify-start gap-4 leading-[1.05] sm:gap-6">
            <h3
              className="font-heading font-bold uppercase tracking-tight text-left
text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]
leading-[1.1] sm:leading-[1.15]"
              // style={{ fontSize: 'clamp(60px, 5vw, 61px)', lineHeight: 'clamp(56px, 7vw, 86px)' }}
            >
              <div className="block w-full transition-colors duration-300">
                <span className="text-black">ENTERPRISE-GRADE </span>
              </div>
              <div className="block w-full transition-colors duration-300">
                <span className="text-black">BLOCKCHAIN DEVELOPMENT </span>
              </div>
              <div className="block w-full text-brand-blue transition-colors duration-300">
                FOR SCALABLE WEB3
              </div>
              <div className="block w-full text-brand-blue transition-colors duration-300">
                INNOVATION
              </div>
            </h3>

            <div className="flex flex-col gap-4 max-w-[650px]">
              <p className="font-normal text-xl leading-[1.6] text-black transition-colors duration-300 sm:text-base md:text-lg lg:text-xl">
                Build next-generation decentralized ecosystems with secure,
                high-performance blockchain solutions engineered for real-world use.
                From custom dApps to private enterprise networks and tokenization
                systems, we deliver blockchain products that are scalable,
                trustworthy, and built for long-term growth.
              </p>
            </div>
          </div>

          {/* Right Side - Hero Graphic */}
          <div className="flex w-full items-center justify-center mt-8 lg:mt-0">
            <div className="w-full max-w-[560px]">
              <div className="overflow-hidden rounded-3xl duration-300 ">
                <img src={heroImg} alt="Blockchain development" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions We Provide Section */}
      <section className="w-full bg-white pt-4 pb-16 transition-colors duration-300 sm:pt-8 sm:pb-10">
        <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-10 lg:px-14
">
          {/* Section Heading */}
          <div className="mb-16 text-center">
            <h2 className="font-heading font-bold uppercase tracking-tight text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
              <span className="text-black">BLOCKCHAIN</span> <span className="text-brand-blue">SOLUTIONS WE PROVIDE</span>
            </h2>
          </div>

          {/* Grid Layout - 2 columns */}
          <div className="grid grid-cols-1 gap-10 sm:gap-12 md:gap-16 md:grid-cols-2">
            {[
              {
                title: "Custom Blockchain Applications",
                desc: "Build Feature-Rich Decentralized Apps Tailored To Finance, Supply Chain, Gaming, And More."
                , image: solution1Img
              },
              {
                title: "Private & Consortium Blockchain Networks",
                desc: "Build Permissioned Networks For Enterprises Using Hyperledger, Quorum, Or Polygon Supernets."
                , image: solution2Img
              },
              {
                title: "Tokenization & Digital Assets",
                desc: "Launch Utility Tokens, NFTs, Stablecoins, Asset-Backed Tokens, And Digital Certificates."
                , image: solution3Img
              },
              {
                title: "Smart Contract Development",
                desc: "Secure, Auditable Smart Contracts Using Industry-Grade Standards And Best Practices."
                , image: solution4Img
              },
              {
                title: "Decentralized Identity (DID) Systems",
                desc: "Implement Next-Gen Identity Frameworks For Authentication And Access Control."
                , image: solution5Img
              },
              {
                title: "Blockchain Integrations & API Development",
                desc: "Connect Existing Software, Databases, And ERP Systems To Blockchain Networks."
                , image: solution6Img
              }
            ].map((solution, idx) => (
              <div
                key={idx}
                className="
    group relative overflow-hidden rounded-[10px]
    border border-transparent hover:border-brand-blue/40
    bg-gradient-to-br from-white to-[#629fc5]
    p-6
    shadow-[0_10px_30px_rgba(0,0,0,0.18)]
    transition-all duration-300
    hover:shadow-[0_16px_48px_rgba(0,0,0,0.22)]
  "
              >
                <div className="flex flex-col sm:flex-row h-full items-start sm:items-center justify-between gap-6">

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="font-sans text-2xl font-bold leading-tight text-black text-lg text-sm sm:text-base md:text-lg">
                      {solution.title}
                    </h3>
                    <p className="mt-4 font-sans text-base font-medium leading-[1.6] text-black/70 text-sm sm:text-base md:text-lg">
                      {solution.desc}
                    </p>
                  </div>

                  {/* Image (BIGGER NOW) */}
                  <div className="relative shrink-0 overflow-hidden h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36">
                    <div className="h-full w-full overflow-hidden rounded-2xl bg-brand-blue/5">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                </div>
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases (Carousel) */}
      <section className="w-full bg-white py-4 transition-colors duration-300 sm:py-10">
        <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-10 lg:px-14
">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[36px] font-bold uppercase leading-[1.1] tracking-tight text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
              <span className="text-black">INDUSTRY </span>
              <span className="text-brand-blue">USE CASES</span>
            </h2>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="overflow-hidden">
              <div
                className={`flex py-10 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
              >
                {visibleItems.map((card, idx) => (
                  <div key={idx} className="flex w-full shrink-0 justify-center px-8 md:w-1/2 lg:w-1/3">
                    {/* Same UI as About -> Our Approach cards (but slightly narrower so shape is visible) */}
                    <div className="group relative w-full max-w-[360px] transition-all duration-300">
                      <div className="absolute -inset-4 md:-inset-5 rounded-[24px] bg-brand-blue transition-transform duration-300 translate-x-1 translate-y-2 -rotate-[3deg] group-hover:translate-x-2 group-hover:translate-y-3 group-hover:-rotate-[4deg]" />

                      <div className="relative h-full rounded-[24px] border border-brand-blue/10 bg-white p-8 transition-all duration-300">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="no-stroke font-heading text-[25px] font-bold leading-tight text-brand-blue transition-colors duration-300 ">
                            {card.title}
                          </h3>
                          <div className="shrink-0">
                            <img
                              src={card.icon}
                              alt={`${card.title} icon`}
                              className="h-10 w-10 object-contain"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <p className="mt-6 font-sans text-[20px] leading-[1.6] font-medium leading-[1.6] text-black/70 transition-colors duration-300 sm:text-small">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            {/* NAVIGATION BUTTONS BELOW CARDS */}
            <div className="mt-6 flex items-center justify-center gap-6">
              {/* LEFT */}
              <button
                onClick={handlePrev}
                className="
      flex h-10 w-10 items-center justify-center
      rounded-full border border-black/20
      transition hover:bg-brand-blue hover:text-white
    "
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 4l-6 6 6 6" />
                </svg>
              </button>

              {/* RIGHT */}
              <button
                onClick={handleNext}
                className="
      flex h-10 w-10 items-center justify-center
      rounded-full border border-black/20
      transition hover:bg-brand-blue hover:text-white
    "
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 4l6 6-6 6" />
                </svg>
              </button>
            </div>


          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full bg-white pt-8 pb-12 transition-colors duration-300 sm:pt-8 sm:pb-12">
        <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-10 lg:px-14
">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-brand-blue text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
              TECH STACK
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {[
              {
                title: 'PUBLIC CHAINS',
                items: ['Ethereum', 'Polygon', 'BNB Chain', 'Solana', 'Avalanche', 'Polkadot'],
              },
              {
                title: 'TOOLS',
                items: ['Hardhat', 'Truffle', 'Rust', 'Solidity', 'Web3.Js', 'Ethers.Js'],
              },
              {
                title: 'ENTERPRISE CHAINS',
                items: ['Hyperledger Fabric', 'Quorum', 'R3 Corda'],
              },
              {
                title: 'LAYER-2 NETWORKS',
                items: ['Arbitrum', 'Optimism', 'ZkSync'],
              },
            ].map((group, idx) => (
              <div
                key={idx}
                className="rounded-[14px] border border-brand-blue/30 bg-white p-8 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300"
              >
                <h3 className="text-center font-heading text-[22px] font-bold uppercase tracking-wide text-brand-blue transition-colors duration-300">
                  {group.title}
                </h3>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {group.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center hover:border-brand-blue hover:bg-gradient-to-b hover:from-white hover:to-[#cfe6fb] rounded-full hover:border-brand-blue hover:text-brand-blue border border-black/15 bg-white px-4 py-2 text-center font-sans text-xl leading-[1.6] font-medium text-black/80 shadow-[0_6px_16px_rgba(0,0,0,0.10)] transition-colors duration-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <DevelopmentProcess
        title="DEVELOPMENT PROCESS"
        titlePrefix="DEVELOPMENT"
        steps={[
          // { no: 1, title: 'Requirement Analysis & Architecture Design' },
          // { no: 2, title: 'UI/UX Engineering' },
          //  { no: 4, title: 'Backend & Node Setup' },
          // { no: 6, title: 'Security Testing & Audits' },
          // { no: 8, title: 'Post-Launch Scaling & Support' },
          //  { no: 7, title: 'Deployment on Testnet/Mainnet' },
          // { no: 5, title: 'Integration (APIs, Oracles, Wallets)' },
          //  { no: 3, title: 'Smart Contract Development' },
          { no: 1, title: 'Requirement Analysis & Architecture Design' },
          { no: 2, title: 'UI/UX Engineering' },
          { no: 3, title: 'Smart Contract Development' },
           { no: 4, title: 'Backend & Node Setup' },
           { no: 5, title: 'Integration (APIs, Oracles, Wallets)' },
          { no: 6, title: 'Security Testing & Audits' },
          { no: 7, title: 'Deployment on Testnet/Mainnet' },
          { no: 8, title: 'Post-Launch Scaling & Support' },
           
          
           
        ]}
        centerImage={developmentProcessImg}
      />

      <BeforeFooter
        title="Book Your Free Blockchain Consultation Today"
        buttonText="Contact Now"
        paddingClassName="py-8"
        buttonLink="/contact"
        containerClassName="mx-auto max-w-layout px-4 text-center"
        headingAs="h3"
        headingClassName="font-heading text-[28px] sm:text-[40px] md:text-[48px]
 font-bold uppercase leading-tight text-white"
      />
    </div>
    </>
  );
};

export default BlockchainDevelopment;
