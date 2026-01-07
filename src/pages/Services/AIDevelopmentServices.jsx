import { useState, useEffect } from 'react';
import BeforeFooter from '../../components/common/BeforeFooter';

const AIDevelopmentServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const services = [
    {
      title: "Blockchain Development",
      idealFor: "Businesses seeking decentralized operations, secure data exchange, or tokenized ecosystems."
    },
    {
      title: "AI Development",
      idealFor: "Companies looking to optimize operations or build AI-based digital products."
    },
    {
      title: "Smart Contract Development",
      idealFor: "Startups, enterprises, and Web3 platforms needing automation and trustless execution."
    },
    {
      title: "Smart Contract Audit",
      idealFor: "Projects preparing for launch, fundraising, or exchange listing."
    },
    {
      title: "Token Development",
      idealFor: "Startups, DeFi protocols, fundraising projects, communities, and crypto ecosystems."
    },
    {
      title: "Crypto Exchange Development",
      idealFor: "Businesses entering the trading ecosystem or launching niche exchange solutions."
    },
    {
      title: "Defi Development",
      idealFor: "Web3 finance innovators and companies expanding into next-gen financial products."
    },
    {
      title: "NFT Marketplace Development",
      idealFor: "Art, gaming, IP licensing, digital collectibles, and metaverse ecosystems."
    },
    {
      title: "DApp Development",
      idealFor: "Startups, Web3 platforms, and enterprises entering decentralized markets."
    },
    {
      title: "Wallet Development",
      idealFor: "Exchanges, DeFi platforms, fintech apps, and ecosystem developers."
    }
  ];

  const cardsToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const totalItems = services.length;

  // Handle infinite loop reset
  useEffect(() => {
    if (currentIndex === totalItems) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500); // Matches the duration-500
      return () => clearTimeout(timer);
    }
  }, [currentIndex, totalItems]);

  // Restore transition after reset
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, totalItems]);

  const nextSlide = () => {
    if (!isTransitioning && currentIndex === 0) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(totalItems);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(totalItems - 1);
      }, 50);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

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
              style={{ lineHeight: '100px' }}
            >
              <div className="block w-full whitespace-nowrap text-[36px] transition-colors duration-300 sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px]">
                <span className="text-black dark:text-white">OUR </span>
                <span className="text-brand-blue">BLOCKCHAIN </span>
                <span className="text-black dark:text-white">& </span>
                <span className="text-brand-blue">AI</span>
              </div>
              <div className="block w-full whitespace-nowrap text-[36px] text-brand-blue transition-colors duration-300 dark:[-webkit-text-stroke:1px_#ffffff] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px]">
                DEVELOPMENT SERVICES
              </div>
            </h3>

            <div className="flex flex-col gap-4 max-w-[650px]">
              <p className="font-normal text-sm leading-[1.5] text-black transition-colors duration-300 dark:text-white sm:text-base md:text-lg">
                Future-ready solutions designed to help businesses innovate, 
                automate, and scale with intelligent Web3 and AI technologies.
              </p>
              <p className="text-xs leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white/80 sm:text-sm md:text-base">
                Blockchain App Advisor offers an extensive suite of development 
                services that combine decentralized architecture with advanced 
                automation, security, and high-performance engineering. From 
                smart contracts to AI-driven systems — our solutions empower 
                startups, enterprises, and global innovators to thrive in the 
                digital future.
              </p>
            </div>
          </div>

          {/* Right Side - Media Placeholder */}
          <div className="flex w-full items-center justify-center">
            <div className="flex aspect-video w-full max-w-[500px] items-center justify-center rounded-2xl border-2 border-dashed border-brand-blue/20 bg-brand-blue/5 text-2xl font-bold text-brand-blue/40 dark:border-white/10 dark:bg-white/5 dark:text-white/20">
              Media
            </div>
          </div>
        </div>
      </section>

      {/* Explore All Our Services Section - CAROUSEL */}
      <section className="w-full overflow-hidden bg-white py-12 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-[34px] font-bold uppercase leading-tight tracking-tight transition-colors duration-300 sm:text-[46px] md:text-[54px]">
              <span className="text-black dark:text-white">EXPLORE ALL</span> <span className="text-brand-blue">OUR SERVICES</span>
            </h2>
            <p className="mx-auto mt-2 max-w-[800px] font-sans text-sm font-medium text-black/80 transition-colors duration-300 dark:text-white/80 sm:text-base">
              Below is the complete range of services we offer, each engineered for security, scalability, and real-world impact.
            </p>
          </div>

          {/* Carousel Container */}
          <div 
            className="relative mt-4 px-4 sm:px-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="overflow-hidden">
              <div 
                className={`flex py-12 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
              >
                {[...services, ...services.slice(0, cardsToShow)].map((service, idx) => (
                  <div key={idx} className="w-full shrink-0 px-4 md:w-1/2 lg:w-1/3">
                    {/* Fixed aspect-ratio container - Vertical Rectangle as per SS */}
                    <div className="group relative mx-auto h-[380px] w-full max-w-[340px]">
                      {/* Outer Cyber Frame (Blue) */}
                      <div 
                        className="absolute -inset-[10px] z-0 bg-brand-blue transition-all duration-300"
                        style={{
                          clipPath: 'polygon(40px 0, calc(100% - 40px) 0, 100% 40px, 100% calc(25% - 10px), calc(100% - 15px) 25%, 100% calc(25% + 10px), 100% calc(100% - 40px), calc(100% - 40px) 100%, 40px 100%, 0 calc(100% - 40px), 0 calc(75% + 10px), 15px 75%, 0 calc(75% - 10px), 0 40px)'
                        }}
                      />
                      
                      {/* Inner Content Card (White) */}
                      <div 
                        className="relative z-20 h-full w-full bg-white p-8 transition-colors duration-300 dark:bg-black"
                        style={{
                          clipPath: 'polygon(40px 0, calc(100% - 40px) 0, 100% 40px, 100% calc(25% - 10px), calc(100% - 15px) 25%, 100% calc(25% + 10px), 100% calc(100% - 40px), calc(100% - 40px) 100%, 40px 100%, 0 calc(100% - 40px), 0 calc(75% + 10px), 15px 75%, 0 calc(75% - 10px), 0 40px)'
                        }}
                      >
                        <div className="flex h-full flex-col justify-center">
                          {/* Content */}
                          <h3 className="no-stroke font-heading text-xl font-bold uppercase text-brand-blue transition-colors duration-300 dark:text-white sm:text-2xl md:text-[26px] leading-tight">
                            {service.title}
                          </h3>
                          <div className="mt-6 space-y-3">
                            <p className="font-sans text-lg font-bold text-black dark:text-white">Ideal for:</p>
                            <p className="font-sans text-base font-medium leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white sm:text-lg">
                              {service.idealFor}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons - Moved Below */}
            <div className="mt-8 flex items-center justify-center gap-6">
              <button 
                onClick={prevSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-blue bg-white text-brand-blue shadow-md transition-all hover:bg-brand-blue hover:text-white dark:bg-black"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-blue bg-white text-brand-blue shadow-md transition-all hover:bg-brand-blue hover:text-white dark:bg-black"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full bg-white py-12 transition-colors duration-300 dark:bg-black sm:py-16 md:py-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:pl-[3rem] lg:pr-[5rem]">
          <div className="grid grid-cols-1 items-center lg:grid-cols-2">
            {/* Left Side Content */}
            <div className="flex flex-col gap-6">
              <h3 
                className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white"
                style={{ fontSize: '55px', lineHeight: '70px' }}
              >
                WHY CHOOSE <span className="text-brand-blue">BLOCKCHAIN</span><br />
                <span className="text-brand-blue">APP ADVISOR</span> FOR YOUR<br />
                <span className="text-brand-blue">PROJECT?</span>
              </h3>
              <ul className="flex flex-col gap-0">
                {[
                  "Multi-chain expertise",
                  "Security-first engineering",
                  "AI + blockchain combined capabilities",
                  "Transparent development approach",
                  "Post-launch support & scaling",
                  "Enterprise-level performance"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 py-0 font-sans text-base font-medium leading-[1.2] text-black transition-colors duration-300 dark:text-white sm:text-lg">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-black dark:bg-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative h-[300px] w-full max-w-[500px] sm:h-[400px]">
                {/* Media Placeholder - User can replace with actual image */}
                <div className="flex h-full w-full items-center justify-center rounded-3xl border-2 border-dashed border-brand-blue/20 bg-brand-blue/5 text-2xl font-bold text-brand-blue/40 dark:border-white/10 dark:bg-white/5 dark:text-white/20">
                  Media
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Blue CTA Section */}
      <section className="w-full bg-brand-blue py-[5rem] transition-colors duration-300">
        <div className="mx-auto max-w-layout px-6 text-center sm:px-10">
          <h2 className="font-heading text-[36px] font-bold uppercase leading-tight text-white sm:text-[48px] md:text-[56px] lg:text-[64px]">
            Build With The Best In Blockchain & AI
          </h2>
          <p className="mx-auto mt-6 max-w-[800px] font-sans text-lg font-medium text-white/90 sm:text-xl">
            We transform ideas into secure, scalable, and high-performing digital products.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="rounded-md border-2 border-white px-10 py-3 text-lg font-bold text-white transition-all hover:bg-white hover:text-brand-blue">
              Get A Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDevelopmentServices;
