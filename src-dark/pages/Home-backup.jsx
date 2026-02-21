import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const clamp01 = (n) => Math.min(1, Math.max(0, n));

const useScrollRevealProgress = ({ topOffsetPx = 80, rangePx = 220 } = {}) => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const distanceToTop = rect.top - topOffsetPx;
      const next = clamp01(1 - distanceToTop / rangePx);
      setProgress(next);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [topOffsetPx, rangePx]);

  return { ref, progress };
};

const Home = () => {
  const coreServicesReveal = useScrollRevealProgress({ topOffsetPx: 80, rangePx: 260 });
  const whyTrustReveal = useScrollRevealProgress({ topOffsetPx: 80, rangePx: 260 });

  const serviceCards = [
    {
      id: 1,
      title: "Blockchain Development",
      description: "We design and develop custom blockchain solutions tailored to your business needs.",
      imageText: "Blockchain Development Image"
    },
    {
      id: 2,
      title: "AI Development",
      description: "Supercharge your platform with intelligent automation and machine learning capabilities.",
      imageText: "AI Development Image"
    },
    {
      id: 3,
      title: "Smart Contract Development",
      description: "We create secure, gas-efficient, and audit-ready smart contracts for your decentralized applications.",
      imageText: "Smart Contract Development Image"
    },
    {
      id: 4,
      title: "Token Development",
      description: "We develop custom tokens and cryptocurrency solutions for your blockchain projects.",
      imageText: "Token Development Image"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative z-[1] bg-white py-20 transition-colors duration-300 dark:bg-black">
        <div className="mx-auto grid max-w-layout grid-cols-1 items-center gap-10 px-5 md:px-10 lg:grid-cols-2 lg:gap-[60px]">
          {/* Left Side - Text Content */}
          <div className="flex flex-col gap-[26px] pt-10 md:pt-0">
            <h1 className="flex w-full max-w-[820px] flex-col gap-5 font-heading leading-[1.05]">
              <span className="text-[42px] font-bold uppercase leading-[1.05] text-black transition-colors duration-300 dark:text-white md:text-[60px] lg:text-[86px]">BUILD THE FUTURE WITH</span>
              <span className="inline-block text-[42px] font-bold uppercase leading-[1.05] text-brand-blue [-webkit-text-stroke:1px_rgba(255,255,255,0.9)] dark:[-webkit-text-stroke:1px_rgba(255,255,255,0.9)] md:text-[60px] lg:text-[86px]">WORLD-CLASS BLOCKCHAIN</span>
              <span className="inline-block text-[42px] font-bold uppercase leading-[1.05] text-brand-blue [-webkit-text-stroke:1px_rgba(255,255,255,0.9)] dark:[-webkit-text-stroke:1px_rgba(255,255,255,0.9)] md:text-[60px] lg:text-[86px]">& AI DEVELOPMENT</span>
            </h1>
            
            <p className="max-w-[640px] text-[16px] leading-[1.55] text-black/80 transition-colors duration-300 dark:text-white/85 md:text-[18px]">
              We engineer secure, scalable and intelligent blockchain ecosystems
              –powered by advanced smart contracts, AI automation, token development,
              and next-gen decentralized applications.
            </p>
          <Link to="/contact">
            <button className="mt-2 flex w-fit items-center gap-2 rounded border border-black/60 bg-transparent px-5 py-2 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-[1px] hover:bg-black hover:text-white dark:border-white/60 dark:text-white dark:hover:bg-white dark:hover:text-black">
              Get a Quote →
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            </Link>  
          </div>

          {/* Right Side - Graphics Placeholder */}
          <div className="flex min-h-[340px] items-center justify-center lg:min-h-[520px]">
            <div className="flex h-[340px] w-full items-center justify-center rounded-2xl bg-gray-100 dark:bg-black lg:h-[520px]">
              <div className="h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,99,182,0.65)_0%,rgba(0,99,182,0)_60%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(0,99,182,0.55)_0%,rgba(0,99,182,0)_62%)] lg:h-[380px] lg:w-[380px]" />
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        {/* Core Services Section (Scroll Stack Start) */}
        <div ref={coreServicesReveal.ref} className="relative min-h-[220vh]">
          <section
            className="sticky top-[80px] z-[10] min-h-[calc(100vh-80px)] rounded-t-[28px] bg-white pb-[90px] pt-[80px] shadow-[0_-8px_24px_rgba(0,0,0,0.08)] will-change-transform dark:bg-black dark:shadow-[0_-8px_24px_rgba(0,0,0,0.35)]"
            style={{
              transform: `translateY(${(1 - coreServicesReveal.progress) * 24}px)`,
              opacity: 0.7 + coreServicesReveal.progress * 0.3,
            }}
          >
            <div className="mx-auto max-w-layout px-5 md:px-10">
              <h2 className="mx-auto flex max-w-[1200px] flex-col text-center font-heading leading-[1.05]">
                <span className="text-[44px] font-bold uppercase text-black transition-colors duration-300 dark:text-white md:text-[64px] lg:text-[86px]">OUR CORE</span>
                <span className="mt-2 inline-block text-[44px] font-bold uppercase text-brand-blue [-webkit-text-stroke:1px_rgba(255,255,255,0.9)] dark:[-webkit-text-stroke:1px_rgba(255,255,255,0.9)] md:text-[64px] lg:text-[86px]">BLOCKCHAIN & AI DEVELOPMENT</span>
                <span className="mt-2 inline-block text-[44px] font-bold uppercase text-brand-blue [-webkit-text-stroke:1px_rgba(255,255,255,0.9)] dark:[-webkit-text-stroke:1px_rgba(255,255,255,0.9)] md:text-[64px] lg:text-[86px]">SERVICES</span>
              </h2>
              
              <p className="mx-auto mt-6 max-w-[900px] px-4 text-center text-[14px] leading-[1.65] text-black/70 transition-colors duration-300 dark:text-white/80 md:text-[16px]">
                We offer a fully specialized suite of blockchain and AI solutions designed to help startups, enterprises,
                and innovators build secure, scalable, and future-ready digital products.
              </p>

              <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                {serviceCards.slice(0, 3).map((card) => (
                  <div key={card.id} className="overflow-hidden rounded-2xl bg-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1 dark:bg-black">
                    <div className="relative aspect-[16/11] w-full overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,99,182,0.55)_0%,rgba(0,0,0,0)_65%)]" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_40%,rgba(0,0,0,0.85)_100%)]" />
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <h3 className="font-heading text-xl font-bold uppercase text-white">{card.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Why Trust Section */}
        <div ref={whyTrustReveal.ref} className="relative min-h-[220vh]">
          <section
            className="sticky top-[80px] z-[20] min-h-[calc(100vh-80px)] rounded-t-[28px] bg-white pb-[100px] pt-[80px] shadow-[0_-8px_24px_rgba(0,0,0,0.08)] will-change-transform dark:bg-black dark:shadow-[0_-8px_24px_rgba(0,0,0,0.35)]"
            style={{
              transform: `translateY(${(1 - whyTrustReveal.progress) * 24}px)`,
              opacity: 0.7 + whyTrustReveal.progress * 0.3,
            }}
          >
            <div className="mx-auto max-w-layout px-5 md:px-10">
              <h2 className="mx-auto mb-12 flex max-w-[1200px] flex-wrap justify-center gap-x-4 gap-y-2 text-center font-heading leading-[1.05]">
                <span className="text-[44px] font-bold uppercase text-black transition-colors duration-300 dark:text-white md:text-[64px] lg:text-[86px]">WHY</span>
                <span className="inline-block text-[44px] font-bold uppercase text-brand-blue [-webkit Chewy text-stroke:1px_rgba(255,255,255,0.9)] dark:[--webkit-text-stroke:1px_rgba(255,255,255,0.9)] md:text-[64px] lg:text-[86px">BUSINESS</span>
                <span className="text-[44px] font-bold uppercase text-black transition-colors duration-300 dark:text-white md:text-[64px] lg:text-[86px]">TRUST</span>
                <span className="inline-block text-[44px] font-bold uppercase text-brand-blue [-webkit-text-stroke:1px_rgba(255,255,255,0.9)] dark:[-webkit-text-stroke:1px_rgba(255,255,255,0.9)] md:text-[64px] lg:text-[86px]">BLOCKCHAIN APP</span>
                <span className="inline-block text-[44px] font-bold uppercase text-brand-blue [-webkit-text-stroke:1px_rgba(255,255,255,0.9)] dark:[-webkit-text-stroke:1px_rgba(255,255,255,0.9)] md:text-[64px] lg:text-[86px]">ADVISOR</span>
              </h2>

              {/* Content Sections */}
              <div className="flex flex-col gap-8">
                <div className="rounded-2xl border border-black/30 bg-white/70 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.25)] backdrop-blur transition-colors duration-300 dark:border-white/30 dark:bg-black/60">
                  <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_320px]">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-black transition-colors duration-300 dark:text-white md:text-3xl">Specialized in Blockchain + AI Combined Solutions</h3>
                      <p className="mt-3 max-w-[680px] text-[14px] leading-[1.6] text-black/75 transition-colors duration-300 dark:text-white/75 md:text-base">
                        We uniquely blend decentralized systems with modern AI to create intelligent, next-gen architectures.
                      </p>
                    </div>
                    <div className="aspect-square w-full rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(0,99,182,0.65)_0%,rgba(0,0,0,0)_68%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(0,99,182,0.65)_0%,rgba(0,0,0,0)_70%)]" />
                  </div>
                </div>

                <div className="rounded-2xl border border-black/30 bg-white/70 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.25)] backdrop-blur transition-colors duration-300 dark:border-white/30 dark:bg-black/60">
                  <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_320px]">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-black transition-colors duration-300 dark:text-white md:text-3xl">Enterprise-Grade Security Standards</h3>
                      <p className="mt-3 max-w-[680px] text-[14px] leading-[1.6] text-black/75 transition-colors duration-300 dark:text-white/75 md:text-base">
                        Our development follows industry-approved security protocols, multi-layer audits and best practices — ensuring
                        your blockchain solutions are protected against threats.
                      </p>
                    </div>
                    <div className="aspect-square w-full rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(0,99,182,0.65)_0%,rgba(0,0,0,0)_68%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(0,99,182,0.65)_0%,rgba(0,0,0,0)_70%)]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
