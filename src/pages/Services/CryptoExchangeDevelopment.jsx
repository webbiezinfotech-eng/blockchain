import { useEffect, useRef, useState } from 'react';
import BeforeFooter from '../../components/common/BeforeFooter';
import ServiceCard from '../../components/common/ServiceCard';

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
      desc: 'Algorithmically determines asset prices, allowing permissionless trading without traditional order books or centralized intermediaries involved.',
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

  useEffect(() => {
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

  useEffect(() => {
    if (!tradingStepPx || tradingPaused || tradingFeatures.length <= 1) return;
    const id = window.setInterval(() => {
      setTradingActiveIdx((prev) => (prev + 1) % tradingFeatures.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, [tradingPaused, tradingStepPx, tradingFeatures.length]);

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
    setTradingActiveIdx((prev) => (prev - 1 + tradingFeatures.length) % tradingFeatures.length);
  };

  const tradingNext = () => {
    setTradingActiveIdx((prev) => (prev + 1) % tradingFeatures.length);
  };

  const securityStack = [
    'Multi-layer encryption',
    'Firewall & DDoS protection',
    'KYC/AML & fraud monitoring',
    '2FA, biometrics & role-based access',
    'Secure session handling',
    'Smart contract audits (for DEX)',
  ];

  const networks = ['Ethereum', 'BNB Chain', 'Solana', 'Polygon', 'Avalanche', 'Tron', 'Polkadot', 'Cosmos'];

  return (
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero */}
      <section className="w-full bg-white pt-4 pb-12 transition-colors duration-300 dark:bg-black sm:pt-6 sm:pb-14 lg:pt-8 lg:pb-16">
        <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[58%_42%] lg:pl-[3rem] lg:pr-[5rem]">
          <div className="flex w-full flex-col gap-6">
            <h1 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white">
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35]">
                FULL-SCALE CRYPTO
              </span>
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35]">
                EXCHANGE DEVELOPMENT
              </span>
              <span className="block text-[28px] leading-[1.25] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.25]">
                FOR{' '}
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">
                  CEX, DEX &amp; HYBRID PLATFORMS
                </span>{' '}
              </span>
            </h1>

            <p className="max-w-[760px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-lg">
            Create a world-class crypto trading platform with institutional-grade performance and security. Whether centralized, decentralized, or hybrid, we develop exchanges with advanced trading engines, liquidity systems, KYC/AML modules, and multi-chain support—ready for high-volume global users.
             </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[640px]">
              {/* Hero graphic (no frame/extra box) */}
              <img
                src={heroImg}
                alt="Crypto exchange development"
                className="h-auto w-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Exchanges */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              TYPES OF <span className="text-brand-blue">EXCHANGES</span>
            </h2>
          </div>

          <div className="mx-auto max-w-[1200px]">
            <div className="flex w-full justify-center gap-6 sm:gap-8 overflow-x-auto pb-4 px-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              TRADING <span className="text-brand-blue">FEATURES</span>
            </h2>
          </div>

          {/* Screenshot-style clipped cards in auto-carousel */}
          <div className="relative">
            <button
              type="button"
              onClick={tradingPrev}
              className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-black/10 bg-white p-3 shadow-[0_10px_28px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1/2 hover:bg-[#f5fbff] dark:border-white/15 dark:bg-black/60 dark:hover:bg-black sm:block"
              aria-label="Previous trading feature"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M12.5 4.5 7.5 10l5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              type="button"
              onClick={tradingNext}
              className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-black/10 bg-white p-3 shadow-[0_10px_28px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1/2 hover:bg-[#f5fbff] dark:border-white/15 dark:bg-black/60 dark:hover:bg-black sm:block"
              aria-label="Next trading feature"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M7.5 4.5 12.5 10l-5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              ref={tradingCarouselRef}
              onScroll={onTradingScroll}
              onMouseEnter={() => setTradingPaused(true)}
              onMouseLeave={() => setTradingPaused(false)}
              className="mx-auto flex w-full max-w-[1200px] snap-x snap-mandatory gap-8 overflow-x-auto px-2 pb-4 pt-2 scroll-smooth overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Trading features carousel"
            >
              {tradingFeatures.map((f) => (
                <div
                  key={f.title}
                  data-trading-slide="true"
                  className="snap-start shrink-0 w-[320px] sm:w-[360px] lg:w-[380px]"
                >
                  <div className="group relative h-full w-full">
                    {/* tilted blue backing (same style as other service cards) */}
                    <div className="absolute -inset-3 rounded-[24px] bg-brand-blue translate-x-2 translate-y-2 -rotate-[2deg] transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-[3deg]" />

                    {/* foreground card */}
                    <div className="relative flex h-full min-h-[320px] flex-col rounded-[24px] border border-[#c8d7e4] bg-white p-7 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] sm:min-h-[340px]">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-sans text-[20px] font-bold text-brand-blue transition-colors duration-300 dark:text-white">
                          {f.title}
                        </h3>

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand-blue/30 bg-white transition-colors duration-300 dark:border-white/20 dark:bg-black/20">
                          {f.icon ? (
                            <img
                              src={f.icon}
                              alt=""
                              className="h-8 w-8 object-contain"
                              loading="lazy"
                            />
                          ) : (
                            <span className="font-heading text-[18px] font-extrabold text-brand-blue transition-colors duration-300 dark:text-white">
                              {f.title?.[0]}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="mt-4 font-sans text-[16px] font-medium leading-[1.65] text-black/70 transition-colors duration-300 dark:text-white/80 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5] overflow-hidden">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {tradingFeatures.map((f, idx) => (
                <button
                  key={f.title}
                  type="button"
                  onClick={() => setTradingActiveIdx(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    idx === tradingActiveIdx
                      ? 'bg-brand-blue'
                      : 'bg-black/15 hover:bg-black/30 dark:bg-white/20 dark:hover:bg-white/35'
                  }`}
                  aria-label={`Go to trading feature ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Stack */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
               <span className="text-brand-blue">SECURITY STACK</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[56%_44%] lg:gap-14">
            <div className="flex w-full flex-col gap-3">
              {securityStack.map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-brand-blue/20 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-[1px] hover:border-brand-blue/55 hover:shadow-[0_14px_36px_rgba(0,0,0,0.12)] dark:border-white/25 dark:bg-black dark:hover:border-brand-blue/70"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-blue/35 bg-black/[0.02] text-brand-blue transition-colors duration-300 dark:border-white/30 dark:bg-white/[0.05] dark:text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-90">
                      <path
                        d="M12 2 20 6v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <path
                        d="m9 12 2 2 4-5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="font-sans text-[16px] font-semibold text-black transition-colors duration-300 dark:text-white sm:text-[17px]">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex w-full items-center justify-center lg:justify-end">
              <div className="w-full max-w-[520px]">
                <img src={securityImg} alt="Security shield" className="h-auto w-full object-contain" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Networks Supported */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              BLOCKCHAIN <span className="text-brand-blue">NETWORKS SUPPORTED</span>
            </h2>
          </div>

          <div className="mx-auto max-w-[1100px]">
            {/* Row 1: 4 cards */}
            <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
              {networks.slice(0, 4).map((n) => (
                <div
                  key={n}
                  className="w-full max-w-[280px] rounded-[10px] border border-[#c8d7e4] bg-white px-10 py-4 text-center font-sans text-[18px] font-medium text-black shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-[1px] hover:border-brand-blue/60 hover:shadow-[0_10px_26px_rgba(0,0,0,0.10)] dark:border-white/25 dark:bg-black dark:text-white sm:text-[20px]"
                >
                  {n}
                </div>
              ))}
            </div>

            {/* Row 2: 3 cards (centered) */}
            <div className="mt-6 flex flex-wrap justify-center gap-6 sm:mt-8 sm:gap-8">
              {networks.slice(4).map((n) => (
                <div
                  key={n}
                  className="w-full max-w-[280px] rounded-[10px] border border-[#c8d7e4] bg-white px-10 py-4 text-center font-sans text-[18px] font-medium text-black shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-[1px] hover:border-brand-blue/60 hover:shadow-[0_10px_26px_rgba(0,0,0,0.10)] dark:border-white/25 dark:bg-black dark:text-white sm:text-[20px]"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BeforeFooter title="Build Your Crypto Exchange" buttonText="GET STARTED NOW" />
    </div>
  );
};

export default CryptoExchangeDevelopment;

