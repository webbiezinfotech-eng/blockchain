import { useEffect, useRef, useState } from 'react';
import { Helmet } from "react-helmet";

import BeforeFooter from '../../components/common/BeforeFooter';
import DevelopmentProcess from '../../components/common/DevelopmentProcess';

import heroImg from '../../assets/services images/DappDevimages/DappDev-hero.png';
import useCase1Img from '../../assets/services images/DappDevimages/DefiPlatforms.png';
import useCase2Img from '../../assets/services images/DappDevimages/Web3Games.png';
import useCase3Img from '../../assets/services images/DappDevimages/SupplychainTracking.png';
import useCase4Img from '../../assets/services images/DappDevimages/GovernanceDAOs.png';
import useCase5Img from '../../assets/services images/DappDevimages/IdentitySystems.png';
import useCase6Img from '../../assets/services images/DappDevimages/NFTApps.png';
import useCase7Img from '../../assets/services images/DappDevimages/RealEstateMarketplace.png';

import processImg from '../../assets/services images/DappDevimages/DevelopmentProcess.png';
import monetizationImg from '../../assets/services images/DappDevimages/MonetizationOptions.png';
import cutCardLbg from '../../assets/common/cut_card_lbg.png';
import AnalyticsMonitoring from '../../assets/services images/DappDevimages/icons/AnalyticsMonitoring.gif';
import CrossChainBridging from '../../assets/services images/DappDevimages/icons/CrosschainBridges.gif';
import PaymentGateways from '../../assets/services images/DappDevimages/icons/PaymentGateways.gif';
import Oracles from '../../assets/services images/DappDevimages/icons/Oracles.gif';
import Wallets from '../../assets/services images/DappDevimages/icons/wallets.gif';
// import DEXs from '../../assets/services images/DappDevimages/DEXs.png';
const DAppDevelopment = () => {

 

  const useCases = [
    {
      title: 'DeFi Platforms',
      desc: 'Build decentralized financial systems including lending, staking, and yield strategies with secure contracts.',
      image: useCase1Img,
      alt: 'DeFi platforms',
    },
    {
      title: 'Web3 Games',
      desc: 'Create immersive blockchain games with NFTs, token economies, and secure decentralized marketplaces.',
      image: useCase2Img,
      alt: 'Web3 games',
    },
    {
      title: 'Supply Chain Tracking',
      desc: 'Track goods end-to-end with transparent records, provenance proof, and immutable on-chain audit trails.',
      image: useCase3Img,
      alt: 'Supply chain tracking',
    },
    {
      title: 'Governance & DAOs',
      desc: 'Enable community-driven decision-making through decentralized voting, proposal management, and secure smart contracts.',
      image: useCase4Img,
      alt: 'Governance & DAOs',
    },
    {
      title: 'Identity Systems',
      desc: 'Provide self-sovereign digital identities enabling secure authentication, credential verification, and across decentralized platforms.',
      image: useCase5Img,
      alt: 'Identity Systems',
    },
    {
      title: 'NFT Apps',
      desc: 'Develop NFT-powered applications supporting minting, trading, utility integration, and interactive digital experiences for creators and users.',
      image: useCase6Img,
      alt: 'NFT Apps',
    },
    {
      title: 'Real Estate Marketplaces',
      desc: 'Tokenize property assets, enable fractional ownership, streamlined transactions, and transparent on-chain records for real-estate operations.',
      image: useCase7Img,
      alt: 'Real Estate Marketplaces',
    },
  ];

  const process = [
    // { n: 1, t: 'Requirement study' },
    // { n: 2, t: 'UI/UX wireframing' },

    // { n: 4, t: 'Backend & API' },

    // { n: 6, t: 'Testing & audits' },
    // { n: 7, t: 'Deployment & scaling' },
    // { n: 5, t: 'Frontend integration' },
    // { n: 3, t: 'Smart contract development' },
    { n: 1, t: 'Requirement study' },
    { n: 2, t: 'UI/UX wireframing' },
    { n: 3, t: 'Smart contract development' },
    { n: 4, t: 'Backend & API' },
    { n: 5, t: 'Frontend integration' },
    { n: 6, t: 'Testing & audits' },
    { n: 7, t: 'Deployment & scaling' },
    
    
  ];

  const techStack = ['Solidity', 'Rust', 'Web3.js', 'ethers.js', 'React', 'Next.js', 'IPFS', 'Hardhat', 'Substrate'];

  const monetization = [
    'Wallets (MetaMask, Phantom, WalletConnect)',
    'DEXs (Uniswap, Balancer)',
    'Analytics & monitoring',
    'Cross-chain bridging',
    'Payment gateways',
  ];

const monetizationIcons = [
  Wallets,
  Oracles,
  AnalyticsMonitoring,
  CrossChainBridging,
  PaymentGateways,
];

  const dappCarouselRef = useRef(null);
  const [dappActiveIdx, setDappActiveIdx] = useState(0);
  const [dappPaused, setDappPaused] = useState(false);

  useEffect(() => {
    if (dappPaused || !dappCarouselRef.current) return;

    const interval = setInterval(() => {
      setDappActiveIdx((prev) => (prev + 1) % useCases.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [dappPaused, useCases.length]);

  useEffect(() => {
    const el = dappCarouselRef.current;
    if (!el) return;

    const card = el.querySelector('[data-dapp-card]');
    if (!card) return;

    const gap = 32; // gap-8
    const width = card.offsetWidth + gap;

    el.scrollTo({
      left: dappActiveIdx * width,
      behavior: 'smooth',
    });
  }, [dappActiveIdx]);

  const dappPrev = () => {
    const el = dappCarouselRef.current;
    if (!el) return;

    const card = el.querySelector('[data-dapp-card]');
    if (!card) return;

    const gap = 32; // gap-8
    const step = card.offsetWidth + gap;

    el.scrollBy({
      left: -step,
      behavior: 'smooth',
    });
  };

  const dappNext = () => {
    const el = dappCarouselRef.current;
    if (!el) return;

    const card = el.querySelector('[data-dapp-card]');
    if (!card) return;

    const gap = 32;
    const step = card.offsetWidth + gap;

    el.scrollBy({
      left: step,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (dappPaused) return;

    const el = dappCarouselRef.current;
    if (!el) return;

    const card = el.querySelector('[data-dapp-card]');
    if (!card) return;

    const gap = 32;
    const step = card.offsetWidth + gap;

    const interval = setInterval(() => {
      el.scrollBy({
        left: step,
        behavior: 'smooth',
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [dappPaused]);



  return (
    <>
       <Helmet>
  <title>DApp Development Services | High-Performance Web3 Applications</title>
  <meta
    name="description"
    content="Build secure, scalable, high-performance decentralized applications (dApps) for DeFi, Web3 gaming, DAOs, NFT apps and more."
  />
</Helmet>
    
    <div className="w-full bg-white transition-colors duration-300">
      {/* Hero */}
      <section className="relative w-full bg-white pt-4 pb-2 transition-colors duration-300 sm:pb-8 md:pt-6 md:pb-8 lg:pt-8 lg:pb-8 xl:pt-10 xl:pb-8">
        <div className="mx-auto grid w-full grid-cols-1 items-start gap-0 lg:grid-cols-[65%_35%]">
          <div className="mx-4 md:mx-20 flex w-full flex-col justify-start gap-5 leading-[1.4] lg:text-left">
            <h1 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300">
              <span className="block  leading-[1.2]  sm:leading-[1.25] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[68px] lg:leading-[1.50]">
                HIGH-PERFORMANCE DAPP
              </span>
              <span className="block  leading-[1.2]  sm:leading-[1.25] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px] lg:leading-[1.50]">
                DEVELOPMENT FOR
              </span>
              <span className="block  leading-[1.2]  sm:leading-[1.25] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[65px] lg:leading-[1.50">
                <span className="text-brand-blue">DECENTRALIZED INNOVATION</span>
              </span>
            </h1>

            <p className="max-w-[760px] font-sans font-medium leading-[1.7] text-black/75 transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl">
              Turn your Web3 idea into a powerful decentralized application—secure, scalable, and user-friendly. We design and
              develop full-stack dApps with modern blockchain frameworks and optimized token-based adoption.
            </p>
          </div>

         <div className="flex w-full items-center justify-center mt-6 lg:mt-0">
            <div className="w-full max-w-[440px] lg:max-w-[400px]">
              <img src={heroImg} alt="DApp development" className="h-auto w-full object-contain" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* Dapp Use Cases */}
    <section className="w-full bg-white py-2 transition-colors duration-300">
  <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">

    {/* HEADING */}
    <div className=" text-center">
      <h2 className="font-heading font-bold uppercase tracking-tight text-black text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
        DAPP <span className="text-brand-blue">USE CASES</span>
      </h2>
    </div>

    {/* CAROUSEL */}
    <div
      ref={dappCarouselRef}
      onMouseEnter={() => setDappPaused(true)}
      onMouseLeave={() => setDappPaused(false)}
     className="
  mx-auto
  flex
  gap-6
  overflow-x-auto
  snap-x snap-mandatory
  scroll-smooth
  overscroll-x-contain
  px-4
  [-ms-overflow-style:none]
  [scrollbar-width:none]
  [&::-webkit-scrollbar]:hidden
"

    >
      {useCases.map((c, idx) => (
        <div
          key={`${c.title}-${idx}`}
          data-dapp-card
        className="snap-center shrink-0 w-[90%] sm:w-[360px] lg:w-[380px] flex"
        >
          <div className="relative w-full min-h-[460px]">

            {/* CUT CARD BACKGROUND */}
            <img
              src={cutCardLbg}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full object-contain"
            />

            {/* CONTENT */}
          <div className="relative z-10 flex h-full flex-col px-6 py-10 sm:p-12">


              {/* IMAGE */}
            <div className="mt-12 flex items-center justify-center rounded-xl bg-white p-4 shadow-sm min-h-[170px]">

                <img
                  src={c.image}
                  alt={c.alt}
                 className="max-h-[130px] w-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-center font-heading text-[20px] font-bold uppercase tracking-wide text-brand-blue">
                {c.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-center mb-14 font-sans text-[16px] leading-relaxed text-black/75">
                {c.desc}
              </p>

            </div>
          </div>
        </div>
      ))}
    </div>

    {/* NAVIGATION BUTTONS */}
    <div className="mt-6 flex items-center justify-center gap-6">


      {/* LEFT */}
      <button
        onClick={dappPrev}
        aria-label="Previous"
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
        onClick={dappNext}
        aria-label="Next"
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


      {/* Development Process */}
      <DevelopmentProcess
        title="DEVELOPMENT PROCESS"
        titlePrefix="DEVELOPMENT"
        steps={process.map(p => ({ no: p.n, title: p.t }))}
        centerImage={processImg}
      />

      {/* Tech Stack */}
      <section className="w-full bg-white transition-colors duration-300 sm:py-8">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-8 text-center">
            <h2 className="font-heading  font-bold uppercase tracking-tight text-brand-blue transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
              TECH STACK
            </h2>
          </div>

<div className="mx-auto flex max-w-[980px] flex-wrap justify-center gap-6">
          {/* <div className="mx-auto grid max-w-[1000px] grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 justify-items-center"> */}
            {techStack.map((n, i) => (
              <div
                key={n}
                // className={`flex items-center w-full justify-center rounded-xl  hover:text-brand-blue border border-brand-blue/30 bg-white px-7 py-5 text-[17px] font-semibold text-black shadow-[0_10px_24px_rgba(0,0,0,0.10)] transition-all duration-300  hover:border-brand-blue hover:bg-gradient-to-b hover:from-white hover:to-[#cfe6fb]
                // ''`}
                className='min-w-[120px] sm:min-w-[150px] px-5 sm:px-6 py-3 text-sm sm:text-base rounded-[10px] border border-brand-blue/25 bg-transparent text-center font-sans hover:border-brand-blue hover:bg-gradient-to-b hover:from-white hover:to-[#cfe6fb] hover:text-brand-blue font-semibold text-black shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300'
              >
                {n}
              </div>

            ))}

          </div>
        </div>
      </section>

      {/* Monetization Options */}
      <section className="w-full bg-white py-4 transition-colors duration-300 sm:py-8">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="">
            <h2 className="font-heading  font-bold uppercase tracking-tight text-black transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
              MONETIZATION <span className="text-brand-blue">OPTIONS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[50%_50%] lg:gap-14">
            <div className="flex w-full flex-col gap-3">
              {monetization.map((label,idx) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-brand-blue/20 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-[1px] hover:border-brand-blue/55 hover:shadow-[0_14px_36px_rgba(0,0,0,0.12)]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg  border-brand-blue/35 bg-black/[0.02] text-brand-blue transition-colors duration-300">
                  
                      <img
          src={monetizationIcons[idx]} 
          alt=""
          className="h-8 w-8 object-contain"
        />
                  </div>
                  <p className="font-sans text-[16px] font-semibold text-black transition-colors duration-300 sm:text-[17px]">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex w-full items-center justify-center mt-6 lg:mt-0">
              <div className="w-full max-w-[400px]">
                <img src={monetizationImg} alt="Monetization options" className="h-auto w-full object-contain" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <BeforeFooter title="Build Your DApp" buttonText="Contact Now" /> */}

       <BeforeFooter
        title="Build Your DApp"
        buttonText="CONTACT NOW"
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

export default DAppDevelopment;

