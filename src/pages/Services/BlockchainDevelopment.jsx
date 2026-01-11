import { useState, useEffect } from 'react';
import BeforeFooter from '../../components/common/BeforeFooter';

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
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10h18" />
          <path d="M5 10V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
          <path d="M7 10v10" />
          <path d="M17 10v10" />
          <path d="M5 20h14" />
          <path d="M10 14h4" />
        </svg>
      ),
    },
    {
      title: 'Supply Chain',
      desc: 'Real-time tracking, provenance, anti-counterfeiting',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z" />
          <path d="M3.3 7l8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      ),
    },
    {
      title: 'Healthcare',
      desc: 'Secure medical records, identity, and data sharing',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21V8a2 2 0 0 0-2-2h-3l-1-2H10L9 6H6a2 2 0 0 0-2 2v13" />
          <path d="M8 21h8" />
          <path d="M12 10v6" />
          <path d="M9 13h6" />
        </svg>
      ),
    },
    {
      title: 'Real Estate',
      desc: 'Tokenized assets, digital deeds, automated agreements',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 10v10h14V10" />
          <path d="M9 20v-6h6v6" />
        </svg>
      ),
    },
    {
      title: 'Gaming & Metaverse',
      desc: 'Play-to-earn systems, NFTs, virtual economies',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 12h3" />
          <path d="M7.5 10.5v3" />
          <path d="M15 11h.01" />
          <path d="M18 13h.01" />
          <path d="M6.5 7h11a3.5 3.5 0 0 1 3.4 4.4l-1.2 5A3 3 0 0 1 16.8 19H15l-2-2H11l-2 2H7.2a3 3 0 0 1-2.9-2.6l-1.2-5A3.5 3.5 0 0 1 6.5 7Z" />
        </svg>
      ),
    },
    {
      title: 'Energy',
      desc: 'Smart metering, carbon credits, renewable trading',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v8" />
          <path d="M7 22a5 5 0 0 1 10 0" />
          <path d="M6 14h12" />
          <path d="M10 14 8 22" />
          <path d="M14 14 16 22" />
        </svg>
      ),
    },
    {
      title: 'Public Sector',
      desc: 'Governance systems, land registries, e-voting',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10h18" />
          <path d="M5 10v10" />
          <path d="M9 10v10" />
          <path d="M15 10v10" />
          <path d="M19 10v10" />
          <path d="M4 20h16" />
          <path d="M12 3 3 8h18l-9-5Z" />
        </svg>
      ),
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

  return (
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero Section */}
      <section className="relative z-[1] w-full overflow-hidden bg-white pt-10 pb-12 transition-colors duration-300 dark:bg-black sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 xl:pt-24 xl:pb-28">
        {/* Background Decorative Lines */}
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
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

        <div className="relative z-10 mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[60%_40%] lg:pl-[3rem] lg:pr-[5rem]">
          
          {/* Left Side - Text Content */}
          <div className="flex w-full flex-col justify-start gap-4 leading-[1.05] sm:gap-6">
            <h3 
              className="font-heading font-bold uppercase tracking-tight text-left"
              style={{ fontSize: '61px', lineHeight: '86px' }}
            >
              <div className="block w-full transition-colors duration-300">
                <span className="text-black dark:text-white">ENTERPRISE-GRADE </span>
              </div>
              <div className="block w-full transition-colors duration-300">
                <span className="text-black dark:text-white">BLOCKCHAIN DEVELOPMENT </span>
              </div>
              <div className="block w-full text-brand-blue transition-colors duration-300 dark:[-webkit-text-stroke:1px_#ffffff]">
                FOR SCALABLE WEB3 
              </div>
              <div className="block w-full text-brand-blue transition-colors duration-300 dark:[-webkit-text-stroke:1px_#ffffff]">
                INNOVATION
              </div>
            </h3>

            <div className="flex flex-col gap-4 max-w-[650px]">
              <p className="font-normal text-sm leading-[1.6] text-black transition-colors duration-300 dark:text-white sm:text-base md:text-lg">
                Build next-generation decentralized ecosystems with secure, 
                high-performance blockchain solutions engineered for real-world use. 
                From custom dApps to private enterprise networks and tokenization 
                systems, we deliver blockchain products that are scalable, 
                trustworthy, and built for long-term growth.
              </p>
            </div>
          </div>

          {/* Right Side - Media Placeholder */}
          <div className="flex w-full items-center justify-center">
            <div className="flex aspect-square w-full max-w-[500px] items-center justify-center rounded-2xl border-2 border-dashed border-brand-blue/20 bg-brand-blue/5 text-2xl font-bold text-brand-blue/40 dark:border-white/10 dark:bg-white/5 dark:text-white/20">
              Media
            </div>
          </div>
        </div>
      </section>

      {/* Solutions We Provide Section */}
      <section className="w-full bg-white pt-12 pb-16 transition-colors duration-300 dark:bg-black sm:pt-16 sm:pb-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:pl-[3rem] lg:pr-[3rem]">
          {/* Section Heading */}
          <div className="mb-16 text-center">
            <h2 className="font-heading text-[36px] font-bold uppercase tracking-tight sm:text-[48px] md:text-[56px]">
              <span className="text-black dark:text-white">BLOCKCHAIN</span> <span className="text-brand-blue">SOLUTIONS WE PROVIDE</span>
            </h2>
          </div>

          {/* Grid Layout - 2 columns */}
          <div className="grid grid-cols-1 gap-[5.25rem] md:grid-cols-2">
            {[
              {
                title: "Custom Blockchain Applications",
                desc: "Build Feature-Rich Decentralized Apps Tailored To Finance, Supply Chain, Gaming, And More."
              },
              {
                title: "Private & Consortium Blockchain Networks",
                desc: "Build Permissioned Networks For Enterprises Using Hyperledger, Quorum, Or Polygon Supernets."
              },
              {
                title: "Tokenization & Digital Assets",
                desc: "Launch Utility Tokens, NFTs, Stablecoins, Asset-Backed Tokens, And Digital Certificates."
              },
              {
                title: "Smart Contract Development",
                desc: "Secure, Auditable Smart Contracts Using Industry-Grade Standards And Best Practices."
              },
              {
                title: "Decentralized Identity (DID) Systems",
                desc: "Implement Next-Gen Identity Frameworks For Authentication And Access Control."
              },
              {
                title: "Blockchain Integrations & API Development",
                desc: "Connect Existing Software, Databases, And ERP Systems To Blockchain Networks."
              }
            ].map((solution, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-[10px] border border-brand-blue/10 bg-gradient-to-br from-white to-[#629fc5] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.22)] dark:border-white/10 dark:from-black dark:to-brand-blue/40 dark:shadow-[0_10px_30px_rgba(0,0,0,0.55)] dark:hover:shadow-[0_18px_60px_rgba(0,0,0,0.70)]"
              >
                <div className="flex h-full items-center justify-between gap-6">
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="font-sans text-2xl font-bold leading-tight text-black transition-colors duration-300 dark:text-white sm:text-[26px]">
                      {solution.title}
                    </h3>
                    <p className="mt-4 font-sans text-base font-medium leading-[1.6] text-black/70 transition-colors duration-300 dark:text-white/80 sm:text-lg">
                      {solution.desc}
                    </p>
                  </div>

                  {/* Media Placeholder */}
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden sm:h-32 sm:w-32">
                    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-brand-blue/5 text-xs font-bold text-brand-blue/30 dark:bg-white/5 dark:text-white/20">
                      Media
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases (Carousel) */}
      <section className="w-full bg-white py-16 transition-colors duration-300 dark:bg-black sm:py-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:pl-[3rem] lg:pr-[3rem]">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[36px] font-bold uppercase leading-[1.1] tracking-tight sm:text-[48px] md:text-[56px]">
              <span className="text-black dark:text-white">INDUSTRY </span>
              <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">USE CASES</span>
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
                      <div className="absolute -inset-3 rounded-[24px] bg-brand-blue transition-transform duration-300 translate-x-1 translate-y-2 -rotate-[3deg] group-hover:translate-x-2 group-hover:translate-y-3 group-hover:-rotate-[4deg]" />

                      <div className="relative h-full rounded-[24px] border border-brand-blue/10 bg-white p-8 transition-all duration-300 dark:border-white/30 dark:bg-gradient-to-r dark:from-black dark:to-brand-blue/40">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="no-stroke font-heading text-xl font-bold leading-tight text-brand-blue transition-colors duration-300 dark:text-white sm:text-2xl">
                            {card.title}
                          </h3>
                          <div className="shrink-0 text-brand-blue transition-colors duration-300 dark:text-white">
                            {card.icon}
                          </div>
                        </div>
                        <p className="mt-6 font-sans text-sm font-medium leading-[1.6] text-black/70 transition-colors duration-300 dark:text-white sm:text-base">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="mt-10 flex justify-center gap-2">
              {industryUseCases.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-3 w-3 rounded-full border transition-all duration-300 ${
                    activeDot === i
                      ? 'border-brand-blue bg-brand-blue'
                      : 'border-black/30 bg-transparent dark:border-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full bg-white pt-8 pb-12 transition-colors duration-300 dark:bg-black sm:pt-8 sm:pb-12">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:pl-[3rem] lg:pr-[3rem]">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff] sm:text-[52px] md:text-[60px]">
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
                className="rounded-[14px] border border-brand-blue/30 bg-white p-8 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/30 dark:bg-gradient-to-r dark:from-brand-blue/35 dark:to-black dark:shadow-[0_10px_30px_rgba(0,0,0,0.65)]"
              >
                <h3 className="text-center font-heading text-[22px] font-bold uppercase tracking-wide text-brand-blue transition-colors duration-300 dark:text-white">
                  {group.title}
                </h3>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {group.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center rounded-full border border-black/15 bg-white px-4 py-2 text-center font-sans text-sm font-medium text-black/80 shadow-[0_6px_16px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/10 dark:bg-black/90 dark:text-white dark:shadow-[0_6px_16px_rgba(0,0,0,0.65)]"
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
      <section className="w-full bg-white py-16 transition-colors duration-300 dark:bg-black sm:py-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:pl-[3rem] lg:pr-[3rem]">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[38px] font-bold uppercase leading-[1.1] tracking-tight sm:text-[52px] md:text-[60px]">
              <span className="text-black dark:text-white">DEVELOPMENT </span>
              <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">PROCESS</span>
            </h2>
          </div>

          {/* Desktop/Tablet: radial layout | Mobile: stacked */}
          <div className="relative mx-auto max-w-[1100px]">
            {/* Center Graphic */}
            <div className="pointer-events-none relative mx-auto hidden h-[280px] w-[280px] items-center justify-center rounded-full border border-brand-blue/20 bg-brand-blue/5 shadow-[0_12px_34px_rgba(0,0,0,0.12)] dark:border-white/20 dark:bg-white/5 dark:shadow-[0_12px_34px_rgba(0,0,0,0.6)] md:flex">
              <div className="absolute inset-6 rounded-full border border-brand-blue/20 dark:border-white/20" />
              <div className="absolute inset-12 rounded-full border border-brand-blue/15 dark:border-white/15" />
              <div className="flex flex-col items-center justify-center gap-2 text-brand-blue/80 dark:text-white/70">
                <div className="text-sm font-semibold uppercase tracking-wider">Media</div>
                <div className="text-xs font-medium opacity-80">(Replace with graphic)</div>
              </div>
            </div>

            {[
              { n: '1', t: 'Requirement Analysis & Architecture Design', pos: 'md:left-1/2 md:top-0 md:-translate-x-1/2' },
              { n: '2', t: 'UI/UX Engineering', pos: 'md:right-0 md:top-[95px]' },
              { n: '3', t: 'Smart Contract Development', pos: 'md:right-0 md:top-[220px]' },
              { n: '4', t: 'Backend & Node Setup', pos: 'md:right-0 md:bottom-[30px]' },
              { n: '5', t: 'Integration (APIs, Oracles, Wallets)', pos: 'md:left-1/2 md:bottom-0 md:-translate-x-1/2' },
              { n: '6', t: 'Security Testing & Audits', pos: 'md:left-0 md:bottom-[95px]' },
              { n: '7', t: 'Deployment on Testnet/Mainnet', pos: 'md:left-0 md:top-[220px]' },
              { n: '8', t: 'Post-Launch Scaling & Support', pos: 'md:left-0 md:top-[95px]' },
            ].map((step, idx) => (
              <div
                key={idx}
                className={`relative mb-4 flex items-center justify-start md:absolute md:mb-0 ${step.pos}`}
              >
                <div className="flex w-full max-w-[460px] items-center gap-4 rounded-[10px] border border-brand-blue/20 bg-white px-5 py-4 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/30 dark:bg-black dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue text-lg font-bold text-white">
                    {step.n}
                  </div>
                  <div className="font-sans text-sm font-semibold text-brand-blue transition-colors duration-300 dark:text-white sm:text-base">
                    {step.t}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeforeFooter
        title="Book Your Free Blockchain Consultation Today"
        buttonText="Contact Now"
        paddingClassName="py-8"
        containerClassName="mx-auto max-w-layout px-4 text-center"
        headingAs="h3"
        headingClassName="font-heading text-[3rem] font-bold uppercase leading-tight text-white"
      />
    </div>
  );
};

export default BlockchainDevelopment;
