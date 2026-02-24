import { Helmet } from "react-helmet";

import { useEffect, useRef, useLayoutEffect, useState } from 'react';
import BeforeFooter from '../../components/common/BeforeFooter';
import ServiceCard from '../../components/common/ServiceCard';
import PageHero from "../../components/common/PageHero";
import heroImg from '../../assets/services images/CryptoExchangeDevimages/CryptoExchangeDev-hero.png';
import cexImg from '../../assets/services images/CryptoExchangeDevimages/CentralizedExchange.png';
import dexImg from '../../assets/services images/CryptoExchangeDevimages/DecentralizedExchange.png';
import hybridImg from '../../assets/services images/CryptoExchangeDevimages/HybridExchanges.png';
import p2pImg from '../../assets/services images/CryptoExchangeDevimages/P2PTradingPlatform.png';
import derivativesImg from '../../assets/services images/CryptoExchangeDevimages/MarginFuturesExchange.png';

import orderBookIcon from '../../assets/services images/CryptoExchangeDevimages/OrderBookSystem.png';
import liquidityPoolsIcon from '../../assets/services images/CryptoExchangeDevimages/LiquidityPools.png';
import ammIcon from '../../assets/services images/CryptoExchangeDevimages/AutomatedMarketMaker.png';
import multichainWalletIcon from '../../assets/services images/CryptoExchangeDevimages/MultichainWalletintegration.png';
import stakingIcon from '../../assets/services images/CryptoExchangeDevimages/StakingEarningModules.png';
import adminAnalyticsIcon from '../../assets/services images/CryptoExchangeDevimages/AdminDashboardAnalytics.png';
import kycAmlIcon from '../../assets/services images/CryptoExchangeDevimages/KYCAMLSystem.png';
import matchingEngineIcon from '../../assets/services images/CryptoExchangeDevimages/MatchingEngine.png';

import securityImg from '../../assets/services images/CryptoExchangeDevimages/SecurityStack.png';
import cutCardLbg from '../../assets/common/cut_card_lbg.png';

import Mulrilayer from '../../assets/services images/CryptoExchangeDevimages/icons/MultilayerEncryption.gif';
import Firewall from '../../assets/services images/CryptoExchangeDevimages/icons/FirewallsDDosProtection.gif';
import hotcold from '../../assets/services images/CryptoExchangeDevimages/icons/HotColdWalletArchitecture.gif';
import biometrics from '../../assets/services images/CryptoExchangeDevimages/icons/BiometricsRoleBased.gif';
import Smart from '../../assets/services images/CryptoExchangeDevimages/icons/SmartContractAudits.gif';
import Realtime from '../../assets/services images/CryptoExchangeDevimages/icons/RealtimeMonitoring.gif';

const CryptoExchangeDevelopment = () => {

  const exchangeTypes = [
    {
      title: 'Centralized Exchange (CEX)',
      description: 'High-throughput trading with advanced order books, admin controls, custody, and enterprise-grade monitoring.',
      image: cexImg,
    },
    {
      title: 'Decentralized Exchange (DEX)',
      description: 'Non-custodial, on-chain swaps with AMM pools, liquidity incentives, and smart contract-first architecture.',
      image: dexImg,
    },
    {
      title: 'Hybrid Exchange',
      description: 'Best of both worlds: CEX-like performance with DEX-style control and stronger user ownership.',
      image: hybridImg,
    },
    {
      title: 'P2P Exchange',
      description: 'Escrow-based trading with dispute management, user ratings, KYC/AML options, and flexible payment rails.',
      image: p2pImg,
    },
    {
      title: 'Derivatives Exchange',
      description: 'Futures/perps with risk engine, margin management, liquidation logic, and real-time position monitoring.',
      image: derivativesImg,
    },
  ];

  const tradingFeatures = [
    {
      title: 'Order Book System',
      desc: 'Displays real-time buy and sell orders, enabling transparent price discovery and efficient market-driven trading execution.',
      icon: orderBookIcon,
    },
    {
      title: 'Liquidity Pools',
      desc: 'Provide continuous trading liquidity through pooled user funds, reducing slippage and enabling instant token swaps effortlessly.',
      icon: liquidityPoolsIcon,
    },
    {
      title: 'Automated Market Maker (AMM)',
      desc: 'Enables permissionless trading by automatically pricing assets without relying on traditional order books.',
      icon: ammIcon,
    },
    {
      title: 'Multi-chain Wallet Integration',
      desc: 'Enables secure deposits, withdrawals, and storage across multiple blockchains with unified wallet management for users.',
      icon: multichainWalletIcon,
    },
    {
      title: 'Staking & Earnings Modules',
      desc: 'Allow users to stake assets or participate in yield programs for passive earnings and platform engagement.',
      icon: stakingIcon,
    },
    {
      title: 'Admin Dashboards & Analytics',
      desc: 'Provide operators with real-time insights, user management tools, financial tracking, and system monitoring for effective operation.',
      icon: adminAnalyticsIcon,
    },
    {
      title: 'KYC/AML Systems',
      desc: 'Automates user identity verification and compliance checks to ensure regulatory adherence and prevent illicit platform activities.',
      icon: kycAmlIcon,
    },
    {
      title: 'Matching Engine',
      desc: 'Processes and matches trades instantly with high-speed algorithms for ultra-low latency and institutional-grade performance.',
      icon: matchingEngineIcon,
    },
  ];

  // Trading features carousel (auto-scroll every ~3.5s)
  const tradingCarouselRef = useRef(null);
  const tradingScrollRafRef = useRef(0);
  const [tradingStepPx, setTradingStepPx] = useState(0);
  const [tradingActiveIdx, setTradingActiveIdx] = useState(0);
  const [tradingPaused, setTradingPaused] = useState(false);

  useLayoutEffect(() => {
    const el = tradingCarouselRef.current;
    if (!el) return;

    const calcStep = () => {
      const first = el.querySelector('[data-trading-slide="true"]');
      if (!first) return;

      const styles = window.getComputedStyle(el);
      const gap =
        Number.parseFloat(styles.columnGap || styles.gap || styles.rowGap || '0') || 0;
      const w = first.getBoundingClientRect().width;
      setTradingStepPx(Math.max(0, w + gap));
    };

    calcStep();
    const ro = new ResizeObserver(calcStep);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // useEffect(() => {
  //   if (!tradingStepPx || tradingPaused || tradingFeatures.length <= 1) return;
  //   const id = window.setInterval(() => {
  //     setTradingActiveIdx((prev) => (prev + 1) % tradingFeatures.length);
  //   }, 3500);
  //   return () => window.clearInterval(id);
  // }, [tradingPaused, tradingStepPx, tradingFeatures.length]);

  useEffect(() => {
    if (!tradingStepPx || tradingPaused) return;

    const el = tradingCarouselRef.current;
    if (!el) return;

    const id = setInterval(() => {
      el.scrollBy({
        left: tradingStepPx,
        behavior: 'smooth',
      });
    }, 3500);

    return () => clearInterval(id);
  }, [tradingPaused, tradingStepPx]);


  useEffect(() => {
    const el = tradingCarouselRef.current;
    if (!el || !tradingStepPx) return;
    el.scrollTo({ left: tradingActiveIdx * tradingStepPx, behavior: 'smooth' });
  }, [tradingActiveIdx, tradingStepPx]);

  const onTradingScroll = () => {
    const el = tradingCarouselRef.current;
    if (!el || !tradingStepPx) return;

    if (tradingScrollRafRef.current) {
      window.cancelAnimationFrame(tradingScrollRafRef.current);
    }

    tradingScrollRafRef.current = window.requestAnimationFrame(() => {
      const idx = Math.round(el.scrollLeft / tradingStepPx);
      setTradingActiveIdx((prev) => (prev === idx ? prev : idx));
    });
  };

  const tradingPrev = () => {
    const el = tradingCarouselRef.current;
    if (!el || !tradingStepPx) return;

    el.scrollBy({
      left: -tradingStepPx,
      behavior: 'smooth',
    });
  };

  const tradingNext = () => {
    const el = tradingCarouselRef.current;
    if (!el || !tradingStepPx) return;

    el.scrollBy({
      left: tradingStepPx,
      behavior: 'smooth',
    });
  };


  const securityStack = [
    'Multi-layer encryption',
    'Firewall & DDoS protection',
    'KYC/AML & fraud monitoring',
    '2FA, biometrics & role-based access',
    'Secure session handling',
    'Smart contract audits (for DEX)',
  ];

  const securityStackIcons = [
    Mulrilayer,
    Firewall,
    hotcold,
    biometrics,
    Realtime,
    Smart,
  ];

  const networks = ['Ethereum', 'BNB Chain', 'Solana', 'Polygon', 'Avalanche', 'Tron', 'Polkadot', 'Cosmos'];


  return (
    <>  <Helmet>
    <title>Crypto Exchange Development Company | CEX, DEX & Hybrid Solutions</title>

    <meta
      name="description"
      content="Build secure, scalable crypto exchanges including CEX, DEX, hybrid, P2P, and derivatives platforms with advanced trading engines, KYC/AML modules, and multi-chain support."
    />

    <meta
      name="keywords"
      content="crypto exchange development, cex development, dex development, p2p exchange, derivatives exchange, blockchain trading platform"
    />

    <meta property="og:title" content="Crypto Exchange Development Services" />
    <meta
      property="og:description"
      content="Enterprise-grade crypto exchange solutions with high-performance matching engines, liquidity systems, and institutional security."
    />
    <meta property="og:type" content="website" />
  </Helmet>
    <div className="w-full bg-white transition-colors duration-300">
      {/* Hero */}
      {/* <section className="w-full bg-white pt-6 pb-12 transition-colors duration-300 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-16">
        <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10  lg:grid-cols-[58%_42%] px-4 sm:px-6 md:px-10 lg:px-14">
          <div className="flex w-full flex-col gap-6">
            <h1 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300">
              <span className="block leading-[1.2] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px] lg:leading-[1.35]">
                FULL-SCALE CRYPTO
              </span>
              <span className="block leading-[1.2] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px] lg:leading-[1.35]">
                EXCHANGE DEVELOPMENT
              </span>
              <span className="block leading-[1.25] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px] lg:leading-[1.25]">
                FOR{' '}
                <span className="text-brand-blue">
                  CEX, DEX &amp; HYBRID PLATFORMS
                </span>{' '}
              </span>
            </h1>

            <p className="max-w-[760px] font-sans font-medium leading-[1.7] text-black/75 transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl">
              Create a world-class crypto trading platform with institutional-grade performance and security. Whether centralized, decentralized, or hybrid, we develop exchanges with advanced trading engines, liquidity systems, KYC/AML modules, and multi-chain support—ready for high-volume global users.
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[640px]">
              
              <img
                src={heroImg}
                alt="Crypto exchange development"
                className="h-auto w-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section> */}

<PageHero
  titleLines={[
    { text: "FULL-SCALE CRYPTO", highlight: false },
    { text: "EXCHANGE DEVELOPMENT", highlight: false },
    { text: "FOR", highlight: false },
    { text: "CEX, DEX & HYBRID PLATFORMS", highlight: true },
  ]}
  description="Create a world-class crypto trading platform with institutional-grade performance and security. Whether centralized, decentralized, or hybrid, we develop exchanges with advanced trading engines, liquidity systems, KYC/AML modules, and multi-chain support—ready for high-volume global users."
  image={heroImg}
  imageAlt="Crypto exchange development"
/>

      {/* Types of Exchanges */}
      <section className="w-full bg-white py-4 transition-colors duration-300 sm:py-10">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
              TYPES OF <span className="text-brand-blue">EXCHANGES</span>
            </h2>
          </div>

          <div className="mx-auto max-w-[1200px]">
            <div className="flex w-full justify-start sm:justify-center gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory
 pb-4 px-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {exchangeTypes.map((card) => (
                <ServiceCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  isExpanded={false}
                  size="pill"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trading Features */}
      <section className="w-full bg-white py-8 transition-colors duration-300 sm:py-10">
        <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-10 lg:px-14">

          {/* HEADING */}
          <div className="text-center">
            <h2 className="font-heading font-bold uppercase tracking-tight text-[32px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
              <span className="text-black">TRADING </span>
              <span className="text-brand-blue">FEATURES</span>
            </h2>
          </div>

          {/* CAROUSEL */}
          <div
            ref={tradingCarouselRef}
            onScroll={onTradingScroll}
            onMouseEnter={() => setTradingPaused(true)}
            onMouseLeave={() => setTradingPaused(false)}
            className="
        mx-auto
        flex
        max-w-[1200px]
        snap-x snap-mandatory
        gap-4 sm:gap-6
        overflow-x-auto
        pb-2
        scroll-smooth
        overscroll-x-contain
        px-2
        [-ms-overflow-style:none]
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
      "
          >
            {tradingFeatures.map((f) => (
              <div
                key={f.title}
                data-trading-slide="true"
                className="
    snap-center
    shrink-0
    w-[88%]
    sm:w-[300px]
    md:w-[340px]
    lg:w-[360px]
  "
              >
                <div className="relative w-full aspect-[3/4]">

                  {/* Background */}
                  <img
                    src={cutCardLbg}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 w-full h-full object-contain"
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-8 md:px-10">

                    {/* IMAGE */}
                    <div className="mb-5 rounded-xl bg-white/95 p-3 shadow-sm">
                      <img
                        src={f.icon}
                        alt={f.title}
                        className="h-[70px] sm:h-[100px] md:h-[120px] w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    {/* TEXT */}
                    <h3 className="font-heading text-[16px] sm:text-[18px] font-bold text-brand-blue text-center">
                      {f.title}
                    </h3>

                    <p className="mt-3 text-[13px] sm:text-[14px] leading-[1.6] text-black/80 text-center">
                      {f.desc}
                    </p>

                  </div>
                </div>
              </div>

            ))}
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="mt-6 flex items-center justify-center gap-5 sm:gap-6">
            <button
              onClick={tradingPrev}
              aria-label="Previous feature"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-black/20 transition-all duration-300 hover:bg-brand-blue hover:text-white"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={tradingNext}
              aria-label="Next feature"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-black/20 transition-all duration-300 hover:bg-brand-blue hover:text-white"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>

        </div>
      </section>


      {/* Security Stack */}
      <section className="w-full bg-white  transition-colors duration-300">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-8 lg:px-[3rem]">
          <div className="">
            <h2 className="font-heading  pb-8 font-bold uppercase tracking-tight text-black transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
              <span className="text-brand-blue">SECURITY STACK</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[56%_44%] lg:gap-14">
            <div className="flex w-full flex-col gap-3">
              {securityStack.map((label, idx) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-brand-blue/20 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-[1px] hover:border-brand-blue/55 hover:shadow-[0_14px_36px_rgba(0,0,0,0.12)]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-brand-blue/35 bg-black/[0.02] text-brand-blue transition-colors duration-300">

                    <img
                      src={securityStackIcons[idx]}
                      alt=""
                      className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
                    />
                  </div>
                  <p className="font-sans font-semibold text-black transition-colors duration-300 text-sm sm:text-base md:text-lg
">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex w-full items-center justify-center">
              <div className="w-full max-w-[400px]">
                <img src={securityImg} alt="Security shield" className="h-auto w-full object-contain" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Networks Supported */}
    <section className="w-full bg-white py-6 transition-colors duration-300 sm:py-10">
  <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-10 lg:px-14">

    {/* Heading */}
    <div className="mb-8 sm:mb-12 text-center">
      <h2 className="font-heading font-bold uppercase tracking-tight text-black text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
        BLOCKCHAIN <span className="text-brand-blue">NETWORKS SUPPORTED</span>
      </h2>
    </div>

    {/* Grid Wrapper */}
    <div className="mx-auto max-w-[1100px]">

      <div className="grid place-items-center gap-5 sm:gap-6 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-4">

        {networks.map((n) => (
          <div
            key={n}
            className="
              w-[85%] sm:w-[260px] lg:w-[240px]
              rounded-xl
              border border-[#c8d7e4]
              bg-white
              py-4
              text-center
              font-sans
              text-sm sm:text-base md:text-lg
              font-medium
              text-black
              shadow-[0_6px_18px_rgba(0,0,0,0.06)]
              transition-all duration-300
              hover:-translate-y-[2px]
             hover:border-brand-blue hover:bg-gradient-to-b hover:from-white hover:to-[#cfe6fb]
              hover:shadow-[0_10px_26px_rgba(0,0,0,0.10)] hover:text-brand-blue
            "
          >
            {n}
          </div>
        ))}

      </div>

    </div>
  </div>
</section>



      {/* <BeforeFooter title="Build Your Crypto Exchange" buttonText="GET STARTED NOW" buttonLink="/contact" /> */}

       <BeforeFooter
        title="Build Your Crypto Exchange"
        buttonText="GET STARTED NOW"
        paddingClassName="py-10 sm:py-12"
         buttonLink="/contact"
        containerClassName="mx-auto max-w-layout px-4 text-center sm:px-6 md:px-10"
        headingAs="h3"
        headingClassName="font-heading  font-bold uppercase leading-tight text-white text-[22px] sm:text-[32px] md:text-[44px] lg:text-[52px]"
      />
    </div>
    </>
  );
};

export default CryptoExchangeDevelopment;

