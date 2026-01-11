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
      {/* Section 1: OUR BLOCKCHAIN & AI DEVELOPMENT SERVICES */}
      <section className="mx-auto max-w-layout px-5 py-16 md:px-10 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
          {/* Left Content */}
          <div>
            <h1 className="font-heading text-4xl font-bold uppercase leading-tight text-black transition-colors duration-300 dark:text-white md:text-5xl lg:text-6xl">
              <span className="text-brand-blue">OUR BLOCKCHAIN</span>
              <br />
              <span className="text-black dark:text-white">& AI DEVELOPMENT</span>
              <br />
              <span className="text-brand-blue">SERVICES</span>
            </h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-black/80 transition-colors duration-300 dark:text-white/80 md:text-lg">
              <p>
                We engineer future-ready solutions that combine intelligent Web3 and AI technologies. Our extensive suite of development services brings together decentralized architecture with advanced automation, security, and high-performance engineering.
              </p>
              <p>
                From smart contract engineering to AI-driven automation and full-scale Web3 ecosystems, we empower startups, enterprises, and global innovators to transform their digital operations with cutting-edge blockchain and AI solutions.
              </p>
            </div>
          </div>

          {/* Right Graphic - Circular Blue Glowing Graphic */}
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-[400px]">
              {/* Outer Glowing Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-blue/20 via-brand-blue/10 to-transparent blur-3xl" />
              
              {/* Main Circle */}
              <div className="relative flex h-full w-full items-center justify-center rounded-full border-2 border-brand-blue/30 bg-gradient-to-br from-brand-blue/5 to-transparent dark:border-brand-blue/20">
                {/* Numbers around the circle */}
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num, idx) => {
                  const angle = (idx * 45 - 90) * (Math.PI / 180);
                  const radius = 160;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  return (
                    <div
                      key={num}
                      className="absolute text-sm font-bold text-brand-blue"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                    >
                      {num}
                    </div>
                  );
                })}

                {/* Center Icon - Firewall/Security */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    className="text-brand-blue"
                  >
                    <rect x="20" y="30" width="80" height="60" rx="4" stroke="currentColor" strokeWidth="3" />
                    <path
                      d="M30 50L50 50M30 60L50 60M30 70L50 70"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="75" cy="60" r="8" fill="currentColor" />
                    <path
                      d="M20 45L10 40L20 35M100 45L110 40L100 35"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Circuit lines */}
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400">
                  <path
                    d="M200 50 Q250 100 300 150 T350 200"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    className="text-brand-blue/30"
                  />
                  <path
                    d="M200 350 Q150 300 100 250 T50 200"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    className="text-brand-blue/30"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: EXPLORE ALL OUR SERVICES */}
      <section className="mx-auto max-w-layout px-5 py-16 md:px-10 lg:py-24">
        <div className="text-center">
          <h2 className="font-heading text-4xl font-bold uppercase leading-tight text-black transition-colors duration-300 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-black dark:text-white">EXPLORE ALL</span>
            <br />
            <span className="text-brand-blue">OUR SERVICES</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-black/70 transition-colors duration-300 dark:text-white/70 md:text-lg">
            Below is the complete range of services we offer, each engineered for security, scalability, and real-world impact.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-12 overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`,
            }}
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
                    className="group relative block h-full w-full overflow-hidden rounded-2xl border border-black/15 bg-white transition-all duration-300 hover:border-brand-blue/50 hover:shadow-xl dark:border-white/15 dark:bg-black/20 dark:hover:border-brand-blue/50"
                    style={{
                      backgroundImage: `url(${theme === 'dark' ? cutCardDbg : cutCardLbg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className=" relative flex h-full min-h-[400px] flex-col items-start justify-start p-6">
                      <div className=" mb-4 aspect-[4/3] w-full overflow-hidden rounded-xl">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="px-2">
                      <h3 className="font-heading text-xl font-bold text-black transition-colors duration-300 dark:text-white md:text-2xl">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-black/70 transition-colors duration-300 dark:text-white/70 md:text-base">
                        {card.description}
                      </p>
                      </div>
                    </div>
                  </NavLink>
                </div>

                
              );
            })}
          </div>

          {/* Carousel Navigation Buttons - Below Cards */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center justify-center rounded-full bg-brand-blue p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-brand-blue/90 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide >= maxSlide}
              className="flex items-center justify-center rounded-full bg-brand-blue p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-brand-blue/90 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: WHY CHOOSE BLOCKCHAIN APP ADVISOR */}
      <section className="mx-auto max-w-layout px-5 py-16 md:px-10 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_500px]">
          {/* Left Content */}
          <div>
            <h2 className="font-heading text-4xl font-bold uppercase leading-tight text-black transition-colors duration-300 dark:text-white md:text-5xl lg:text-6xl">
              <span className="text-black dark:text-white">WHY CHOOSE</span>
              <br />
              <span className="text-brand-blue">BLOCKCHAIN APP ADVISOR</span>
              <br />
              <span className="text-black dark:text-white">FOR YOUR PROJECT?</span>
            </h2>

            <ul className="mt-8 space-y-4">
              {[
                'Multi-chain expertise',
                'Security-first engineering',
                'AI + blockchain combined capabilities',
                'Transparent development approach',
                'Post-launch support & scaling',
                'Enterprise-level performance',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1.5 flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-brand-blue"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M8 12l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-lg leading-relaxed text-black/80 transition-colors duration-300 dark:text-white/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Graphic - Tablet with Bitcoin Logo */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="relative h-[400px] w-[300px]">
                {/* Tablet Frame */}
                <div className="absolute inset-0 rounded-[40px] border-8 border-black/20 bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl dark:border-white/20 dark:from-gray-800 dark:to-gray-900">
                  {/* Screen */}
                  <div className="absolute inset-[8px] rounded-[32px] bg-black overflow-hidden">
                    {/* Bitcoin Logo and Circuit Pattern */}
                    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-blue/10 to-black">
                      {/* Bitcoin Logo */}
                      <div className="relative z-10">
                        <svg
                          width="120"
                          height="120"
                          viewBox="0 0 120 120"
                          fill="none"
                          className="text-brand-blue"
                        >
                          <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="3" />
                          <text
                            x="60"
                            y="75"
                            textAnchor="middle"
                            className="text-6xl font-bold fill-current"
                            fontFamily="Arial, sans-serif"
                          >
                            B
                          </text>
                          <path
                            d="M60 30 L60 50 M60 70 L60 90"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      {/* Circuit Pattern Background */}
                      <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 300 400">
                        <path
                          d="M50 100 Q100 50 150 100 T250 100"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          className="text-brand-blue"
                        />
                        <path
                          d="M50 200 Q100 150 150 200 T250 200"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          className="text-brand-blue"
                        />
                        <path
                          d="M50 300 Q100 250 150 300 T250 300"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          className="text-brand-blue"
                        />
                        <circle cx="100" cy="150" r="3" fill="currentColor" className="text-brand-blue" />
                        <circle cx="200" cy="250" r="3" fill="currentColor" className="text-brand-blue" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before Footer Section */}
      <BeforeFooter
        title="Build With The Best In Blockchain & AI"
        description="We transform ideas into secure, scalable, and high-performing digital products."
        buttonText="Get A Quote"
      />
    </div>
  );
};

export default Services;
