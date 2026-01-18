import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { SERVICES } from '../../constants/services';
import { useTheme } from '../../context/ThemeContext';
import cutCardLbg from '../../assets/common/cut_card_lbg.png';
import cutCardDbg from '../../assets/common/cut_card_dbg.png';
import BeforeFooter from '../../components/common/BeforeFooter';
import s1 from '../../assets/services images/s1.png';
import s2 from '../../assets/services images/s2.png';
import s3 from '../../assets/services images/s3.png';
import s4 from '../../assets/services images/s4.png';
import s5 from '../../assets/services images/s5.png';
import s7 from '../../assets/services images/s7.png';
import s8 from '../../assets/services images/s8.png';
import s9 from '../../assets/services images/s9.png';
import s10 from '../../assets/services images/s10.png';
import s11 from '../../assets/services images/s11.png';
import consultingImg from '../../assets/home_images/blockchain.png';
import customDevImg from '../../assets/home_images/enterprise-grade.png';
import serviceHeroVideoLight from '../../assets/services images/service_video/5622723_Coll_wavebreak_Animation_1280x720.mp4';
import serviceHeroVideoDark from '../../assets/services images/service_video/GettyImages-1366942366.mp4';
import whyChooseImg from '../../assets/services images/B (20) 1.png';


const Services = () => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  // Service cards with descriptions and images
  const serviceCards = [
    {
      id: 'custom-development',
      title: 'Custom Development',
      description: 'Ideal for: web, mobile, and digital product teams needing end-to-end engineering.',
      image: customDevImg,
    },
    {
      id: 'blockchain-development',
      title: 'Blockchain Development',
      description: 'Ideal for: businesses seeking decentralized operations, secure data exchange, or tokenized ecosystems.',
      image: s1,
    },
    {
      id: 'ai-development',
      title: 'AI Development',
      description: 'Ideal for: companies looking to optimize operations or build AI-based digital products.',
      image: s2,
    },
    {
      id: 'smart-contract-development',
      title: 'Smart Contract Development',
      description: 'Ideal for: startups, enterprises, and Web3 platforms needing automation and trustless execution.',
      image: s3,
    },
    {
      id: 'smart-contract-audit',
      title: 'Smart Contract Audit',
      description: 'Ideal for: projects requiring security validation and vulnerability assessment.',
      image: s4,
    },
    {
      id: 'token-development',
      title: 'Token Development',
      description: 'Ideal for: launching cryptocurrencies, governance tokens, or utility tokens.',
      image: s5,
    },
    {
      id: 'crypto-exchange-development',
      title: 'Crypto Exchange Development',
      description: 'Ideal for: building secure trading platforms with advanced features.',
      image: s7,
    },
    {
      id: 'blockchain-consulting',
      title: 'Blockchain Consulting',
      description: 'Ideal for: product strategy, architecture planning, tokenomics, and go-to-market clarity.',
      image: consultingImg,
    },
    {
      id: 'defi-development',
      title: 'DeFi Development',
      description: 'Ideal for: creating decentralized finance protocols and platforms.',
      image: s8,
    },
    {
      id: 'nft-marketplace-development',
      title: 'NFT Marketplace Development',
      description: 'Ideal for: launching NFT platforms with minting and trading capabilities.',
      image: s9,
    },
    {
      id: 'dapp-development',
      title: 'DApp Development',
      description: 'Ideal for: building decentralized applications across industries.',
      image: s10,
    },
    {
      id: 'wallet-development',
      title: 'Wallet Development',
      description: 'Ideal for: creating secure multi-chain cryptocurrency wallets.',
      image: s11,
    },
  ];

  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const maxSlide = Math.max(0, serviceCards.length - cardsPerView);

  useEffect(() => {
    const handleResize = () => {
      const newCardsPerView = getCardsPerView();
      setCardsPerView(newCardsPerView);
      setCurrentSlide((prev) => Math.min(prev, Math.max(0, serviceCards.length - newCardsPerView)));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const getServiceRoute = (id) => {
    const service = SERVICES.find((s) => s.id === id);
    return service ? service.route : '/services';
  };

  return (
    <div className="bg-white transition-colors duration-300 dark:bg-black">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        {/* Background Video */}
        <video
          key={theme}
          src={theme === 'dark' ? serviceHeroVideoDark : serviceHeroVideoLight}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 dark:bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-layout px-5 sm:px-8 md:px-14 lg:px-[3rem]">
            <div className="max-w-[900px]">

              <h1 className="font-heading font-bold uppercase leading-tight">
                {/* Line 1 */}
                <span className="block text-[30px] leading-[1.2] sm:text-[44px] md:text-[52px] lg:text-[58px]">
                  <span className="text-black dark:text-white">OUR </span>
                  <span className="text-brand-blue dark:text-white">BLOCKCHAIN </span>
                  <span className="text-black dark:text-white">& </span>
                  <span className="text-brand-blue dark:text-white">AI</span>
                </span>

                {/* Line 2 */}
                <span className="block text-[30px] leading-[1.2] sm:text-[44px] md:text-[52px] lg:text-[58px] text-brand-blue">
                  DEVELOPMENT SERVICES
                </span>
              </h1>

              <p className="mt-6 max-w-[520px] text-[15px] sm:text-base leading-relaxed text-black/90 dark:text-white/85">
                Future-ready solutions designed to help businesses innovate, automate, and scale with intelligent Web3 and AI technologies.
              </p>

              <p className="mt-5 max-w-[520px] text-[15px] sm:text-base leading-relaxed text-black/90 dark:text-white/85">
                Blockchain App Advisor offers an extensive suite of development services that combine decentralized architecture with advanced automation, security, and high-performance engineering. From smart contracts to AI-driven systems — our solutions empower startups, enterprises, and global innovators to thrive in the digital future.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES CAROUSEL ================= */}
      <section className="mx-auto max-w-layout px-4 sm:px-8 md:px-10 py-14 lg:py-20">
        <div className="text-center">
          <h2 className="font-heading text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-bold uppercase leading-tight">
            <span className="text-black dark:text-white">EXPLORE ALL </span>
            <span className="text-brand-blue">OUR SERVICES</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-black/70 dark:text-white/70">
            Below is the complete range of services we offer, each engineered for security, scalability, and real-world impact.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)` }}
          >
            {serviceCards.map((card) => {
              const serviceRoute = getServiceRoute(card.id);
              return (
                <div
                  key={card.id}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <NavLink
                    to={serviceRoute}
                    className="group block h-full w-full overflow-hidden rounded-2xl border border-black/15 bg-white dark:bg-black/20 dark:border-white/15 transition-all hover:border-brand-blue/50 hover:shadow-xl"
                    style={{
                      backgroundImage: `url(${theme === 'dark' ? cutCardDbg : cutCardLbg})`,
                      backgroundSize: 'cover',
                    }}
                  >
                    <div className="flex h-full min-h-[360px] flex-col p-5 sm:p-6">
                      <div className="mb-4 aspect-[4/3] w-full overflow-hidden rounded-xl">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-black dark:text-white">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-black/70 dark:text-white/70">
                        {card.description}
                      </p>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="mt-8 flex justify-center gap-4">
            <button onClick={prevSlide} disabled={currentSlide === 0} className="rounded-full bg-brand-blue p-3 text-white disabled:opacity-40">
              ‹
            </button>
            <button onClick={nextSlide} disabled={currentSlide >= maxSlide} className="rounded-full bg-brand-blue p-3 text-white disabled:opacity-40">
              ›
            </button>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="mx-auto max-w-layout px-4 sm:px-8 md:px-10 py-14 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-center">
          <div>
            <h2 className="font-heading text-[32px] sm:text-[44px] md:text-[60px] font-bold uppercase leading-tight">
              <span className="text-black dark:text-white">WHY CHOOSE</span>{' '}
              <span className="text-brand-blue">BLOCKCHAIN APP ADVISOR</span>{' '}
              <span className="text-black dark:text-white">FOR </span>
               <span className="text-brand-blue">YOUR PROJECT?</span>{' '}
            </h2>

            <ul className="mt-8 space-y-4">
              {[
                'Multi-chain expertise',
                'Security-first engineering',
                'AI + blockchain combined capabilities',
                'Transparent development approach',
                'Post-launch support & scaling',
                'Enterprise-level performance',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-black/80 dark:text-white/80">
                  <span className="text-brand-blue">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            {/* <div className="h-[360px] w-[260px] rounded-[40px] border-8 border-black/20 bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl dark:border-white/20 dark:from-gray-800 dark:to-gray-900"> */}
            <img
              src={whyChooseImg}
              alt="Why choose Blockchain App Advisor"
              className="h-full w-full object-contain p-4"
              loading="lazy"
            />
            {/* </div> */}
          </div>
        </div>
      </section>

      <BeforeFooter
        title="Build With The Best In Blockchain & AI"
        description="We transform ideas into secure, scalable, and high-performing digital products."
        buttonText="Get A Quote"
      />
    </div>

  );
};

export default Services;
