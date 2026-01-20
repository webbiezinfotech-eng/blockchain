import { useEffect, useRef, useState } from 'react';

import BeforeFooter from '../../components/common/BeforeFooter';

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
      desc: 'Enable community-driven decision-making through decentralized voting, proposal management, and automated governance using secure smart contracts.',
      image: useCase4Img,
      alt: 'Governance & DAOs',
    },
      {
      title: 'Identity Systems',
      desc: 'Provide self-sovereign digital identities enabling secure authentication, credential verification, and privacy-preserving access across decentralized platforms.',
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


  return (
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero */}
      <section className="w-full bg-white pt-10 pb-16 transition-colors duration-300 dark:bg-black sm:pt-16 sm:pb-16 lg:pt-18 lg:pb-22">
        <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[58%_42%] lg:pl-[3rem] lg:pr-[5rem]">
          <div className="flex w-full flex-col gap-6">
            <h1 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white">
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[61px] lg:leading-[1.50]">
                HIGH-PERFORMANCE DAPP
              </span>
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.50]">
                DEVELOPMENT FOR
              </span>
              <span className="block text-[34px] leading-[1.2] sm:text-[48px] sm:leading-[1.25] lg:text-[58px] lg:leading-[1.5-]">
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">DECENTRALIZED INNOVATION</span>
              </span>
            </h1>

            <p className="max-w-[760px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-lg">
              Turn your Web3 idea into a powerful decentralized application—secure, scalable, and user-friendly. We design and
              develop full-stack dApps with modern blockchain frameworks and optimized token-based adoption.
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[440px] lg:max-w-[400px]">
              <img src={heroImg} alt="DApp development" className="h-auto w-full object-contain" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* Dapp Use Cases */}
   {/* Dapp Use Cases */}
<section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
  <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
    <div className="mb-10 text-center">
      <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
        DAPP <span className="text-brand-blue">USE CASES</span>
      </h2>
    </div>

    {/* Carousel */}
    <div
      ref={dappCarouselRef}
      onMouseEnter={() => setDappPaused(true)}
      onMouseLeave={() => setDappPaused(false)}
      className="
        mx-auto
        flex
        gap-8
        overflow-x-auto
        snap-x snap-mandatory
        scroll-smooth
        overscroll-x-contain
        [-ms-overflow-style:none]
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
      "
    >
      {useCases.map((c, idx) => (
        <div
          key={`${c.title}-${idx}`}
          data-dapp-card
          className="snap-start shrink-0 w-[320px] sm:w-[360px] lg:w-[380px]"
        >
          <div
            className="rounded-[20px] border-[6px] border-brand-blue bg-white p-5
              shadow-[0_12px_40px_rgba(0,90,200,0.25)]
              transition-all duration-300 hover:-translate-y-[4px]
              dark:border-[#2f80ff]
              dark:bg-gradient-to-br dark:from-[#003b73] dark:to-black
              dark:shadow-[0_18px_50px_rgba(0,80,200,0.45)]"
          >
            <div className="h-[180px] w-full overflow-hidden rounded-xl bg-[#eaf3ff] dark:bg-black/40">
              <img
                src={c.image}
                alt={c.alt}
                className="h-full w-full object-cover p-3"
              />
            </div>

            <h3 className="mt-5 text-center font-heading text-[18px] font-bold uppercase tracking-wide text-brand-blue dark:text-white">
              {c.title}
            </h3>

            <p className="mt-3 text-center font-sans text-[14px] leading-relaxed text-black/75 dark:text-white/85">
              {c.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Dots */}
    <div className="mt-8 flex justify-center gap-2">
      {useCases.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setDappActiveIdx(idx)}
          className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
            idx === dappActiveIdx
              ? 'bg-brand-blue'
              : 'bg-black/20 hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/40'
          }`}
        />
      ))}
    </div>
  </div>
</section>

      {/* Development Process */}
      <section className="w-full bg-white py-16 transition-colors duration-300 dark:bg-black sm:py-10">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase leading-[1.08] tracking-tight transition-colors duration-300 sm:text-[52px] lg:text-[68px]">
              <span className="text-black dark:text-white">DEVELOPMENT </span>
              <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">PROCESS</span>
            </h2>
          </div>

          {/* Mobile */}
          <div className="mt-10 flex flex-col gap-4 lg:hidden">
            {process.map((s) => (
              <div
                key={s.n}
                className="flex items-center gap-4 rounded-xl border border-[#c8d7e4] bg-white px-5 py-4 shadow-[0_10px_28px_rgba(0,0,0,0.10)]
          dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-black"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-blue text-lg font-bold text-white shadow-[0_0_12px_rgba(0,90,255,0.6)]">
                  {s.n}
                </div>

                <p className="font-sans text-[16px] font-semibold text-brand-blue dark:text-[#5aa9ff]">
                  {s.t}
                </p>

              </div>
            ))}
          </div>

          {/* Desktop Diagram */}
          <div className="relative mt-16 hidden min-h-[640px] lg:block">

            {/* Center Image */}
            <div className="absolute left-1/2 top-1/2 w-[399px] -translate-x-1/2 -translate-y-1/2">
              <div className="overflow-hidden rounded-3xl 
        dark:border-white/20 dark:bg-white/[0.04]">
                <img
                  src={processImg}
                  alt="Development process"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            {/* Step Positions */}
            {[
              { ...process[0], pos: 'left-1/2 -translate-x-1/2 -top-2' },

              // 2 – right top
              { ...process[1], pos: 'right-0 top-[110px]' },

              // 3 – right bottom
              { ...process[2], pos: 'right-0 bottom-[200px]' },

              // 4 – bottom center but a little UP
              { ...process[3], pos: 'left-1/2 -translate-x-1/2 bottom-[80px]' },

              // 5 – left bottom
              { ...process[4], pos: 'left-0 bottom-[240px]' },

              // 6 – left middle
              { ...process[5], pos: 'left-0 top-[200px]' },

              // 7 – left top (above 6)
              { ...process[6], pos: 'left-0 top-[50px]' },
            ].map((step) => (
              <div key={step.n} className={`absolute ${step.pos}`}>
                <div
                  className="flex w-[370px] items-center gap-4 rounded-xl border border-[#c8d7e4] bg-white px-4 py-3
            shadow-[0_10px_28px_rgba(0,0,0,0.10)]
            dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-black dark:shadow-[0_14px_40px_rgba(0,80,200,0.45)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-blue text-lg font-bold text-white shadow-[0_0_14px_rgba(0,90,255,0.7)]">
                    {step.n}
                  </div>

                  <p className="font-sans text-[17px] font-semibold text-brand-blue dark:text-[#6bb2ff]">
                    {step.t}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-brand-blue transition-colors duration-300 sm:text-[54px] lg:text-[72px]">
              TECH STACK
            </h2>
          </div>

          <div className="mx-auto grid max-w-[1000px] grid-cols-2 gap-6 sm:grid-cols-5">
            {techStack.map((n, i) => (
              <div
                key={n}
                className={`flex items-center justify-center rounded-xl border border-brand-blue/30 bg-white px-7 py-5 text-[17px] font-semibold text-black shadow-[0_10px_24px_rgba(0,0,0,0.10)] transition-all duration-300
                dark:border-[#ffffff] 
                dark:bg-gradient-to-br dark:from-[#003b73] dark:via-[#001a33] dark:to-black
                dark:text-white dark:shadow-[0_14px_40px_rgba(0,80,200,0.45)]
                ${i >= 5 ? 'sm:translate-x-[50%]' : ''}`}
              >
                {n}
              </div>

            ))}

          </div>
        </div>
      </section>

      {/* Monetization Options */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              MONETIZATION <span className="text-brand-blue">OPTIONS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[56%_44%] lg:gap-14">
            <div className="flex w-full flex-col gap-3">
              {monetization.map((label) => (
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

            <div className="flex w-full items-center justify-center">
              <div className="w-full max-w-[400px]">
                <img src={monetizationImg} alt="Monetization options" className="h-auto w-full object-contain" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BeforeFooter title="Build Your DApp" buttonText="Contact Now" />
    </div>
  );
};

export default DAppDevelopment;

