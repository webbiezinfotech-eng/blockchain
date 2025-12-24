import { useEffect, useRef, useState } from 'react';
import { heroImages, serviceImages, homeSec2_1, homeSec2_2, homeSec2_3, homeSec2_4, homeSec2_5, homeSec2_6, homeSec2_7, homeSec2_8, homeSec2_9, homeSec2_10 } from '../utils/images';
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
    { id: 3, title: "Smart Contract Development", description: "We create secure, gas-efficient, and audit-ready smart contracts for your decentralized applications.", image: homeSec2_3 },
    { id: 4, title: "", description: "", image: homeSec2_4 },
    { id: 5, title: "", description: "", image: homeSec2_5 },
    { id: 6, title: "", description: "", image: homeSec2_6 },
    { id: 7, title: "", description: "", image: homeSec2_7 },
    { id: 8, title: "", description: "", image: homeSec2_8 },
    { id: 9, title: "", description: "", image: homeSec2_9 },
    { id: 10, title: "", description: "", image: homeSec2_10 },
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
  const totalSlides = Math.ceil(serviceCards.length / cardsPerView);

  useEffect(() => {
    const handleResize = () => {
      const newCardsPerView = getCardsPerView();
      setCardsPerView(newCardsPerView);
      const newTotalSlides = Math.ceil(serviceCards.length / newCardsPerView);
      if (currentSlide >= newTotalSlides) {
        setCurrentSlide(Math.max(0, newTotalSlides - 1));
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    const newTotalSlides = Math.ceil(serviceCards.length / cardsPerView);
    setCurrentSlide((prev) => Math.min(prev + 1, newTotalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const whyTrustCards = [
    { id: 1, title: "Specialized in Blockchain + AI Combined Solutions", description: "We uniquely blend decentralized systems with modern AI to create intelligent, next-gen architectures." },
    { id: 2, title: "Enterprise-Grade Security Standards", description: "Our development follows industry-approved security protocols, multi-layer audits and best practices — ensuring your blockchain solutions are protected against threats." },
    { id: 3, title: "End-to-End Product Development", description: "From ideation to deployment and maintenance, we handle the entire product lifecycle to ensure seamless execution." },
    { id: 4, title: "Proven Track Record with Global Clients", description: "We have successfully delivered blockchain and AI solutions to startups and enterprises across multiple industries worldwide." },
    { id: 5, title: "Scalable & Future-Ready Architecture", description: "Our solutions are built to scale with your business growth and adapt to emerging technologies and market demands." },
    { id: 6, title: "Transparent Communication & Collaboration", description: "We maintain complete transparency throughout the development process with regular updates and collaborative decision-making." },
    { id: 7, title: "Cost-Effective Innovation", description: "We optimize development costs without compromising quality, delivering maximum value for your investment in blockchain and AI technologies." }
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
                      transform: `translateX(calc(-${currentSlide * (100 / cardsPerView)}%))`
                    }}
                  >
                    {serviceCards.map((card) => (
                      <div 
                        key={card.id} 
                        className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-21.33px)] overflow-hidden rounded-lg bg-black/[0.04] shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-1 dark:bg-white/[0.03] dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:rounded-xl sm:shadow-[0_12px_40px_rgba(0,0,0,0.25)] dark:sm:shadow-[0_12px_40px_rgba(0,0,0,0.55)] md:rounded-2xl md:shadow-[0_18px_60px_rgba(0,0,0,0.35)] dark:md:shadow-[0_18px_60px_rgba(0,0,0,0.75)]"
                      >
                        <div className="relative w-full h-[600px] overflow-hidden">
                          <img 
                            src={card.image} 
                            alt={card.title || `Service ${card.id}`}
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_70%,rgba(0,0,0,0.9)_100%)]" />
                          {card.title && (
                            <div className="absolute inset-x-0 bottom-0">
                              <div className="backdrop-blur-sm bg-black/30 p-4 sm:p-5 md:p-6 lg:p-7">
                                <div className="font-heading text-xl font-bold uppercase text-white sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4">{card.title}</div>
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
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-white transition-all duration-300 hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed dark:border-white/20 dark:bg-black dark:hover:bg-white dark:hover:text-black sm:h-12 sm:w-12"
                    aria-label="Previous slide"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={currentSlide >= totalSlides - 1}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-white transition-all duration-300 hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed dark:border-white/20 dark:bg-black dark:hover:bg-white dark:hover:text-black sm:h-12 sm:w-12"
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
          <section className={`sticky top-0 z-[20] bg-white pb-10 pt-8 transition-all duration-700 dark:bg-black sm:top-0 sm:pb-12 sm:pt-10 md:top-0 md:pb-16 md:pt-12 lg:pb-20 lg:pt-16 ${isTrustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mx-auto max-w-layout px-4 sm:px-5 md:px-10">
              <h2 className="mx-auto max-w-full text-center font-heading font-bold uppercase leading-[1.02] tracking-[0%] sm:max-w-[1200px]">
                <div className="text-[36px] text-black transition-colors duration-300 dark:text-white sm:text-[48px] md:text-[60px] lg:text-[70px]">
                  WHY <span className="text-brand-blue transition-colors duration-300 dark:[-webkit-text-stroke:2px_#ffffff]">BUSINESS</span> TRUST
                </div>
                <div className="mt-1 text-[36px] text-brand-blue transition-colors duration-300 dark:[-webkit-text-stroke:2px_#ffffff] sm:mt-2 sm:text-[48px] md:text-[60px] lg:text-[70px]">BLOCKCHAIN APP ADVISOR</div>
              </h2>

              <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:gap-6 md:mt-12 md:gap-8">
                {whyTrustCards.map((card) => (
                  <div key={card.id} className="rounded-lg border border-black/15 bg-black/[0.03] p-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-colors duration-300 dark:border-white/15 dark:bg-white/[0.03] dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:rounded-xl sm:p-5 md:rounded-2xl md:p-6 md:shadow-[0_12px_32px_rgba(0,0,0,0.12)] dark:md:shadow-[0_12px_32px_rgba(0,0,0,0.45)]">
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
                        <div className="rounded-lg border border-black/10 bg-black/[0.02] p-3 transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.02] sm:rounded-xl sm:p-4">
                          <div className="text-[10px] font-semibold tracking-wide text-black/70 transition-colors duration-300 dark:text-white/70 sm:text-xs md:text-sm">MEDIA</div>
                          <div className="mt-2 aspect-video w-full rounded-md bg-[radial-gradient(circle_at_30%_30%,rgba(0,99,182,0.55)_0%,rgba(0,0,0,0)_70%)] transition-colors duration-300 dark:bg-[radial-gradient(circle_at_30%_30%,rgba(0,99,182,0.45)_0%,rgba(0,0,0,0)_72%)] sm:mt-3 sm:rounded-lg" />
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
