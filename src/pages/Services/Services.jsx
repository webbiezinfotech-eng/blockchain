import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { SERVICES } from '../../constants/services';
import cutCardLbg from '../../assets/common/cut_card_lbg.png';
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
import whyChooseImg from '../../assets/services images/B (20) 1.png';
import OneSideBorderCard from '../../components/common/OneSideBorderCard';
import CustomDevelopment from '../../assets/services images/CustomDevimages/custom-dev 00.19.42.jpg.jpeg';
import mobilejpg from '../../assets/services images/mobile.jpg.jpeg';
import webjpg from '../../assets/services images/website.jpg.jpeg';


const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  // Service cards with descriptions and images
  const serviceCards = [
    {
      id: 'custom-development',
      title: 'Custom Development',
      description: 'Ideal for: web, mobile, and digital product teams needing end-to-end engineering.',
      image: CustomDevelopment,
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
    {
      id: 'website-development',
      title: 'Website Development',
      description: 'Ideal for: businesses needing professional, responsive websites and web applications.',
      image: mobilejpg,
    },
    {
      id: 'mobile-application-development',
      title: 'Mobile Application Development',
      description: 'Ideal for: creating native and cross-platform mobile apps for iOS and Android.',
      image: webjpg,
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
    <div className="bg-white transition-colors duration-300">

      {/* ================= HERO SECTION ================= */}
     <section className="relative min-h-[90vh] md:min-h-[100vh] w-full overflow-hidden">
        {/* Background Video */}
        <video
          src={serviceHeroVideoLight}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 flex pt-8 items-center">
          <div className="mx-auto w-full max-w-layout px-5 sm:px-8 md:px-14 lg:px-[3rem]">
            <div className="max-w-[900px]">

              <h1 className="font-heading font-bold uppercase leading-tight">
                {/* Line 1 */}
                <span className="block leading-[1.2] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
                  <span className="text-black">OUR </span>
                  <span className="text-brand-blue">BLOCKCHAIN </span>
                  <span className="text-black">& </span>
                  <span className="text-brand-blue">AI</span>
                </span>

                {/* Line 2 */}
                <span className="block  leading-[1.2] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px] text-brand-blue">
                  DEVELOPMENT SERVICES
                </span>
              </h1>

             <p className="mt-6 max-w-[620px] text-[17px] sm:text-xl leading-relaxed text-black/90">

                Future-ready solutions designed to help businesses innovate, automate, and scale with intelligent Web3 and AI technologies.
              </p>

              <p className="mt-6 max-w-[620px] text-[17px] sm:text-xl leading-relaxed text-black/90">

                Blockchain App Advisor offers an extensive suite of development services that combine decentralized architecture with advanced automation, security, and high-performance engineering. From smart contracts to AI-driven systems — our solutions empower startups, enterprises, and global innovators to thrive in the digital future.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES CAROUSEL ================= */}
      <section className="mx-auto max-w-layout px-4 sm:px-8 md:px-10 py-8 lg:py-10">
        <div className="text-center">
          <h2 className="font-heading text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px] font-bold uppercase leading-tight">
            <span className="text-black">EXPLORE ALL </span>
            <span className="text-brand-blue">OUR SERVICES</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl leading-[1.6] sm:text-base text-black/70">
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
                    className="group relative block h-full w-full"
                  >
                    {/* CUT CARD BACKGROUND */}
                    <img
                      src={cutCardLbg}
                      alt=""
                      aria-hidden
                      className="
      pointer-events-none
      absolute inset-0
      h-full w-full
      object-contain
    "
                    />

                    {/* CONTENT LAYER */}
                    <div
                      className="
      relative
      z-10
      h-full
      min-h-[360px]
      p-14 sm:p-10
      flex flex-col
    "
                    >
                      {/* IMAGE */}
                      <div className="rounded-xl bg-white/90 mb-4 ">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="h-[160px] w-full object-contain"
                        />
                      </div>

                      {/* TITLE */}
                      <h3 className="font-heading text-xl sm:text-xl font-bold text-black">
                        {card.title}
                      </h3>

                      {/* DESC */}
                      <p className="mb-10 text-xl leading-[1.6] sm:text-base text-black/70">
                        {card.description}
                      </p>
                    </div>
                  </NavLink>

                </div>
              );
            })}
          </div>

          {/* Controls */}
          {/* <div className="mt-8 flex justify-center gap-4">
            <button onClick={prevSlide} disabled={currentSlide === 0} className="rounded-full bg-brand-blue p-3 text-white disabled:opacity-40">
              ‹
            </button>
            <button onClick={nextSlide} disabled={currentSlide >= maxSlide} className="rounded-full bg-brand-blue p-3 text-white disabled:opacity-40">
              ›
            </button>
          </div> */}
            <div className=" flex items-center justify-center pt-10  gap-6">

      {/* LEFT */}
      <button
        onClick={prevSlide}
        aria-label="Previous feature"
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
        onClick={nextSlide}
        aria-label="Next feature"
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

      {/* ================= WHY CHOOSE ================= */}
      <section className="mx-auto max-w-layout px-4 sm:px-8 md:px-10 py-14 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-center">
          <div>
            <h2 className="font-heading text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px] font-bold uppercase leading-tight">
              <span className="text-black">WHY CHOOSE</span>{' '}
              <span className="text-brand-blue">BLOCKCHAIN APP ADVISOR</span>{' '}
              <span className="text-black">FOR </span>
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
                <li key={item} className="flex gap-3 text-black/80 text-[20px]">
                  <span className="text-brand-blue">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            {/* <div className="h-[360px] w-[260px] rounded-[40px] border-8 border-black/20 bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl"> */}
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
        
        buttonLink="/contact"
      />
    </div>

  );
};

export default Services;
