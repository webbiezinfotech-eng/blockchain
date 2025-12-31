import { useEffect, useRef, useState } from 'react';
import { heroImages, serviceImages, homeSec2_1, homeSec2_2, homeSec2_3, homeSec2_4, homeSec2_5, homeSec2_6, homeSec2_7, homeSec2_8, homeSec2_9, homeSec2_10, homeSec3_1, homeSec3_2, homeSec3_3, homeSec3_4, homeSec3_5, homeSec3_6 } from '../utils/images'; 
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { theme } = useTheme();
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isTrustVisible, setIsTrustVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const servicesRef = useRef(null);
  const trustRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === servicesRef.current) {
              setIsServicesVisible(true);
            }
            if (entry.target === trustRef.current) {
              setIsTrustVisible(true);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (servicesRef.current) observer.observe(servicesRef.current);
    if (trustRef.current) observer.observe(trustRef.current);

    return () => {
      if (servicesRef.current) observer.unobserve(servicesRef.current);
      if (trustRef.current) observer.unobserve(trustRef.current);
    };
  }, []);

  const serviceCards = [
    { id: 1, title: "Blockchain Development", description: "We design and develop custom blockchain ecosystems tailored to your business model. From private blockchain networks to public-layer integrations, our solutions deliver transparency, automation, and security for modern digital operations.", image: homeSec2_1 },
    { id: 2, title: "AI Development", description: "Supercharge your platform with intelligent automation and advanced AI capabilities. We build AI engines, predictive models, automation bots, and data-driven systems that boost decision-making, efficiency, and user experience.", image: homeSec2_2 },
    { id: 3, title: "Smart Contract Development", description: "We create secure, gas-efficient, and audit-ready smart contracts for DeFi, NFTs, enterprises, and automated workflows. Every contract follows strict industry standards and undergoes multi-layer testing.", image: homeSec2_3 },
    { id: 4, title: "Smart Contract Audit", description: "Ensure your smart contracts are free from vulnerabilities and deployment risks. Our audit service includes automated scans, manual code review, logical testing, and a detailed final audit report with recommendations.", image: homeSec2_4 },
    { id: 5, title: "Token Development", description: "Launch your own cryptocurrency with complete tokenomics and technical execution. Whether you need ERC-20, BEP-20, governance tokens, stablecoins, or advanced RWA-backed models — we build fully compliant and scalable token solutions.", image: homeSec2_5 },
    { id: 6, title: "Crypto Exchange Development", description: "Build a powerful, secure trading platform with features like multi-chain support, wallets, liquidity modules, order matching, admin dashboards, KYC/AML, spot trading, futures, and more. We support centralized, decentralized, and hybrid exchange models.", image: homeSec2_6 },
    { id: 7, title: "DeFi Development", description: "From staking to lending protocols, liquidity farms to IDO launchpads, we develop decentralized finance platforms that deliver transparent, automated, and trustless financial services across multiple blockchains.", image: homeSec2_7 },
    { id: 8, title: "NFT Marketplace Development", description: "Create a high-performance marketplace for buying, selling, and minting digital assets. Our platforms support auctions, royalties, lazy minting, multi-chain integration, storefront customization, and creator analytics.", image: homeSec2_8 },
    { id: 9, title: "DApp Development", description: "We build user-friendly, secure, and scalable decentralized applications across industries. Each DApp is designed for seamless on-chain execution, robust architecture, and a smooth front-end experience.", image: homeSec2_9 },
    { id: 10, title: "Wallet Development", description: "Develop multi-currency, multi-chain crypto wallets with features like private key security, biometric login, portfolio tracking, swap features, and seamless integration with your Web3 platform.", image: homeSec2_10 },
  ];

  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg
      if (window.innerWidth >= 768) return 2; // md
      return 1; // mobile
    }
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const totalSlides = Math.max(1, Math.ceil((serviceCards.length - cardsPerView) / cardsPerView) + 1);

  useEffect(() => {
    const handleResize = () => {
      const newCardsPerView = getCardsPerView();
      setCardsPerView(newCardsPerView);
      const newTotalSlides = Math.max(1, Math.ceil((serviceCards.length - newCardsPerView) / newCardsPerView) + 1);
      if (currentSlide >= newTotalSlides) {
        setCurrentSlide(Math.max(0, newTotalSlides - 1));
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    const newTotalSlides = Math.max(1, Math.ceil((serviceCards.length - cardsPerView) / cardsPerView) + 1);
    setCurrentSlide((prev) => Math.min(prev + 1, newTotalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const whyTrustCards = [
    { id: 1, title: "Specialized in Blockchain + AI Combined Solutions", description: "We uniquely blend decentralized systems with modern AI to create intelligent, next-gen architectures.", image: homeSec3_1 },
    { id: 2, title: "Enterprise-Grade Security Standards", description: "Our development follows industry-approved security protocols, multi-layer audits and best practices — ensuring zero vulnerabilities.", image: homeSec3_2 },
    { id: 3, title: "Transparent & Collaborative Development", description: "From weekly updates to milestone tracking, we maintain complete transparency with clients.", image: homeSec3_3 },
    { id: 4, title: "Scalable Infrastructure", description: "We build solutions that scale effortlessly with user-growth, transaction volume and extended features.", image: homeSec3_4 },
    { id: 5, title: "Launch-Ready, Market-Ready Execution", description: "Whether it's a token, application, or enterprise platform — we make sure it's robust and ready for real-world operations.", image: homeSec3_5 },
    { id: 6, title: "Multi-Blockchain Expertise", description: "Ethereum, BSC, Solana, Polygon, Avalanche, Bitcoin L2, Cosmos, Hyperledger — you name it, we build on it.", image: homeSec3_6 },
    { id: 7, title: "Dedicated Post-Launch Support", description: "Your product doesn't stop at deployment. We provide maintenance, upgrades, version improvements and ongoing assistance.", image: homeSec3_6 }
  ];

  return (
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero Section */}
      <section className="relative z-[1] w-full bg-white pt-2 pb-12 transition-colors duration-300 dark:bg-black sm:pt-4 sm:pb-16 md:pt-6 md:pb-20 lg:pt-8 lg:pb-24 xl:pt-10 xl:pb-24">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-start gap-0 lg:grid-cols-[65%_35%]">
          {/* Left Side - Text Content */}
          <div className="ml-[30px] flex w-full flex-col justify-start gap-4 leading-[1.4] sm:gap-6 md:gap-8 lg:gap-10">
            <h1 className="font-heading font-bold uppercase tracking-[0%] text-left">
              <div className="block w-full text-[32px] text-black transition-colors duration-300 dark:text-white sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px]">BUILD THE FUTURE WITH</div>
              <div className="block w-full text-[36px] text-brand-blue transition-colors duration-300 dark:[-webkit-text-stroke:2px_#ffffff] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[70px]">WORLD-CLASS BLOCKCHAIN</div>
              <div className="block w-full text-[36px] text-brand-blue transition-colors duration-300 dark:[-webkit-text-stroke:2px_#ffffff] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[70px]">& AI DEVELOPMENT</div>
            </h1>

            <p className="w-full max-w-[600px] text-xs leading-[1.6] text-black transition-colors duration-300 dark:text-white/80 sm:text-sm sm:leading-[1.65] md:text-base lg:text-lg">
              We engineer secure, scalable and intelligent blockchain ecosystems
              –powered by advanced smart contracts, AI automation, token development,
              and next-gen decentralized applications.
            </p>

            <button className="mt-2 flex w-fit items-center gap-2 rounded border border-[#4A9EFF] bg-white px-4 py-2 text-xs font-semibold text-black transition-all duration-300 hover:bg-[#4A9EFF] hover:text-white dark:border-white/60 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black sm:mt-4 sm:px-5 sm:py-2.5 sm:text-sm md:px-6 md:py-3 md:text-base">
              Get a Quote →
            </button>
          </div>

          {/* Right Side - Graphics Placeholder */}
          <div className="flex w-full items-center justify-center">
            <img 
              src={theme === 'dark' ? heroImages.dark : heroImages.light}
              alt="Blockchain & AI Development"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <div className="relative">
        {/* Core Services Section */}
        <div ref={servicesRef} className="relative min-h-[100vh] sm:min-h-[120vh] md:min-h-[140vh]">
          <section className={`sticky top-0 z-[10] bg-white pb-8 pt-4 transition-all duration-700 dark:bg-black sm:top-0 sm:pb-12 sm:pt-6 md:top-0 md:pb-16 md:pt-8 ${isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mx-auto max-w-layout px-4 sm:px-5 md:px-10">
              <h2 className="mx-auto max-w-full text-center font-heading font-bold uppercase leading-[1.1] tracking-[0%]">
                <div className="block text-[32px] transition-colors duration-300 sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px]">
                  <span className="text-black dark:text-white">OUR </span>
                  <span className="text-brand-blue dark:[-webkit-text-stroke:2px_#ffffff]">CORE BLOCKCHAIN </span>
                  <span className="text-black dark:text-white">& </span>
                  <span className="text-brand-blue dark:[-webkit-text-stroke:2px_#ffffff]">AI DEVELOPMENT</span>
                </div>
                <div className="block mt-1 text-[32px] text-brand-blue transition-colors duration-300 dark:[-webkit-text-stroke:2px_#ffffff] sm:mt-2 sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px]">SERVICES</div>
              </h2>

              <p className="mx-auto mt-3 max-w-full text-center text-xs leading-[1.6] text-black/75 transition-colors duration-300 dark:text-white/75 sm:mt-4 sm:text-sm sm:leading-[1.65] md:mt-6 md:max-w-[920px] md:text-base lg:text-lg">
                We offer a fully specialized suite of blockchain and AI solutions designed to help startups, enterprises, and innovators build secure, scalable, and future-ready digital products.
              </p>

              <div className="relative mt-6 sm:mt-8 lg:mt-10">
                <div className="overflow-hidden" ref={carouselRef}>
                  <div 
                    className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6 lg:gap-8" 
                    style={{ 
                      transform: `translateX(calc(-${currentSlide * (100 / cardsPerView)}% - ${currentSlide * (cardsPerView === 3 ? 1.33 : cardsPerView === 2 ? 1.5 : 1)}rem))`
                    }}
                  >
                    {serviceCards.map((card) => (
                      <div 
                        key={card.id} 
                        className="flex-shrink-0 w-full h-[500px] md:w-[calc(50%-12px)] md:h-[500px] lg:w-[calc(33.333%-21.33px)] lg:h-[500px] overflow-hidden rounded-lg bg-black/[0.04] shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-1 dark:bg-white/[0.03] dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:rounded-xl sm:shadow-[0_12px_40px_rgba(0,0,0,0.25)] dark:sm:shadow-[0_12px_40px_rgba(0,0,0,0.55)] md:rounded-2xl md:shadow-[0_18px_60px_rgba(0,0,0,0.35)] dark:md:shadow-[0_18px_60px_rgba(0,0,0,0.75)]"
                      >
                        <div className="relative w-full h-full overflow-hidden">
                          <img 
                            src={card.image} 
                            alt={card.title || `Service ${card.id}`}
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_70%,rgba(0,0,0,0.9)_100%)]" />
                          {card.title && (
                            <div className="absolute inset-x-0 bottom-0">
                              <div className="backdrop-blur-sm bg-black/30 p-4">
                                <div className="font-heading text-lg font-bold uppercase text-white sm:text-xl md:text-2xl lg:text-2xl mb-3 sm:mb-4 whitespace-nowrap">{card.title}</div>
                                {card.description && (
                                  <div className="text-white text-sm sm:text-base md:text-lg leading-relaxed">{card.description}</div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carousel Navigation Buttons */}
                <div className="mt-6 flex items-center gap-3 sm:mt-8 lg:mt-10">
                  <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-white transition-all duration-300 hover:bg-black hover:text-white  disabled:cursor-not-allowed dark:border-white/20 dark:bg-black dark:hover:bg-white dark:hover:text-black sm:h-12 sm:w-12"
                    aria-label="Previous slide"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={currentSlide >= totalSlides - 1}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-white transition-all duration-300 hover:bg-black hover:text-white  disabled:cursor-not-allowed dark:border-white/20 dark:bg-black dark:hover:bg-white dark:hover:text-black sm:h-12 sm:w-12"
                    aria-label="Next slide"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Why Trust Section */}
        <div ref={trustRef} className="relative min-h-[100vh] sm:min-h-[120vh] md:min-h-[140vh]">
          <section className={`sticky top-0 z-[20] bg-white pb-10 pt-8 transition-all duration-700 dark:bg-black sm:top-0 sm:pb-12 sm:pt-10 md:top-0 md:pb-16 md:pt-12 lg:pb-20 lg:pt-16`}>
            <div className="mx-auto max-w-layout px-4 sm:px-5 md:px-10">
              <h2 className="mx-auto max-w-full text-center font-heading font-bold uppercase leading-[1.1] tracking-[0%] sm:max-w-[1200px]">
                <div className="block text-[36px] transition-colors duration-300 sm:text-[48px] md:text-[60px] lg:text-[70px]">
                  <span className="text-black dark:text-white">WHY </span>
                  <span className="text-brand-blue dark:[-webkit-text-stroke:2px_#ffffff]">BUSINESS </span>
                  <span className="text-black dark:text-white">TRUST </span>
                  <span className="text-brand-blue dark:[-webkit-text-stroke:2px_#ffffff]">BLOCKCHAIN </span>
                  <span className="text-black dark:text-white">APP</span>
                </div>
                <div className="block mt-1 text-[36px] transition-colors duration-300 sm:mt-2 sm:text-[48px] md:text-[60px] lg:text-[70px]">
                  <span className="text-brand-blue dark:[-webkit-text-stroke:2px_#ffffff]">ADVISOR</span>
                </div>
              </h2>

              <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:gap-6 md:mt-12 md:gap-8">
                {whyTrustCards.map((card) => (
                  <div key={card.id} className="rounded-lg border border-black/15 bg-black/[0.03] p-4 shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:scale-[1.01] dark:border-white/15 dark:bg-white/[0.03] dark:shadow-[0_4px_16px_rgba(0,0,0,0.25)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] sm:rounded-xl sm:p-5 md:rounded-2xl md:p-6 md:shadow-[0_8px_24px_rgba(0,0,0,0.12)] md:hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] dark:md:shadow-[0_8px_24px_rgba(0,0,0,0.3)] dark:md:hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
                    <div className="grid grid-cols-1 items-start gap-4 sm:gap-5 md:items-center md:grid-cols-[1fr_280px] lg:gap-8 lg:grid-cols-[1fr_320px]">
                      <div>
                        <h3 className="font-heading text-base font-bold text-black transition-colors duration-300 dark:text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-xs leading-[1.55] text-black/75 transition-colors duration-300 dark:text-white/75 sm:mt-3 sm:text-sm sm:leading-[1.6] md:text-base">
                          {card.description}
                        </p>
                      </div>
                      <div className="w-full">
                        <div className="overflow-hidden">
                          {card.image && (
                            <img 
                              src={card.image} 
                              alt={card.title}
                              className="w-full h-auto object-contain"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
