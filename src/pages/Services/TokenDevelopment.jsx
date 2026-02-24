import { Helmet } from "react-helmet";

import { useEffect, useState } from 'react';
import BeforeFooter from '../../components/common/BeforeFooter';
import PageHero from "../../components/common/PageHero";
import heroImg from '../../assets/services images/TokenDevimages/TokenDev-hero.png';
import tokenomicsImg from '../../assets/services images/TokenDevimages/TokenomicsSupport.png';

import featureAutomatedTaxesReward from '../../assets/services images/TokenDevimages/AutomatedTaxesReward.png';
import featureLiquidityManagement from '../../assets/services images/TokenDevimages/LiquidityManagement.png';
import featureAntiWhaleMechanics from '../../assets/services images/TokenDevimages/AntiWhaleMechanics.png';
import featureMintingBurning from '../../assets/services images/TokenDevimages/MintingBurning.png';
import featureVestingLockups from '../../assets/services images/TokenDevimages/VestingLockups.png';
import featureStakingRewards from '../../assets/services images/TokenDevimages/StakingRewards.png';
import featureBridgingCrosschain from '../../assets/services images/TokenDevimages/BridgingCrosschainCompatibility.png';

import tokensupplystructure from '../../assets/services images/TokenDevimages/icons/TokenSupplyStructuring.gif';
import allocationstrategy from '../../assets/services images/TokenDevimages/icons/AllocationStrategies.gif';
import utilitymodeling from '../../assets/services images/TokenDevimages/icons/UtilityModeling.gif';
import roadmapecosystem from '../../assets/services images/TokenDevimages/icons/RoadmapEcosystemPlanning.gif';
const TokenDevelopment = () => {

  const [cardsToShow, setCardsToShow] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const tokenTypes = [
    {
      title: 'Utility Tokens',
      desc: 'Tokens used within your ecosystem for access, discounts, rewards, and in-app transactions.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <path d="M12 2 20 6v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8.8 12.2 11 14.4 15.2 9.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Governance Tokens',
      desc: 'Enable DAO voting, on-chain proposals, and community-driven protocol upgrades.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <path d="M4 10h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M6 10v10h12V10" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 14h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 4 3 9h18l-9-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Memecoins',
      desc: 'Community-first tokens with viral mechanics, launches, and distribution frameworks.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 10h.01M15 10h.01" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M8.8 14.2c.8 1 2 1.6 3.2 1.6s2.4-.6 3.2-1.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Stablecoins',
      desc: 'Asset-pegged tokens with mint/burn control, treasury logic, and redemption flows.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 10h6M9 14h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M5 12H3M21 12h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Security Tokens',
      desc: 'Compliance-ready tokens for regulated offerings and tokenized financial instruments.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <path d="M12 2 20 6v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9.5 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 9.5V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Asset-backed Tokens',
      desc: 'Tokenize real-world assets with ownership controls and programmable transfer rules.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <path d="M4 8h16v12H4z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 13h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const tokenFeatures = [
    {
      title: 'Automated Taxes & Rewards',
      desc: 'Integrate built-in tax mechanics that automate fee distribution, reflections, rewards, and ecosystem funding.',
      image: featureAutomatedTaxesReward,
      alt: 'Taxes and rewards illustration',
    },
    {
      title: 'Liquidity Management',
      desc: 'Support healthy long-term trading with controlled pool balancing, liquidity additions, and stability mechanisms.',
      image: featureLiquidityManagement,
      alt: 'Liquidity management illustration',
    },
    {
      title: 'Anti-Whale Mechanics',
      desc: 'Prevent manipulation by restricting max wallet sizes, transactions, cooldowns, and configurable limits.',
      image: featureAntiWhaleMechanics,
      alt: 'Anti-whale illustration',
    },
    {
      title: 'Minting & Burning',
      desc: 'Flexible supply control with mint/burn permissions, caps, and secure role-based access.',
      image: featureMintingBurning,
      alt: 'Minting and burning illustration',
    },
    {
      title: 'Vesting & Lockups',
      desc: 'Protect investor trust through structured token release schedules, lockups, and automated vesting for teams and early contributors.',
      image: featureVestingLockups,
      alt: 'Vesting and lockups illustration',
    },
    {
      title: 'Staking & Rewards',
      desc: 'Boost participation with staking pools that reward holders for locking tokens, supporting network security, and contributing liquidity.',
      image: featureStakingRewards,
      alt: 'Staking and rewards illustration',
    },
    {
      title: 'Bridging & Cross-Chain Compatibility',
      desc: 'Expand your token’s reach with seamless cross-chain transfers, interoperability, and multi-network deployment for greater accessibility.',
      image: featureBridgingCrosschain,
      alt: 'Cross-chain compatibility illustration',
    },
  ];

  const tokenomicsSupport = [
    'Token supply structuring',
    'Allocation strategy',
    'Utility modeling',
    'Roadmap & ecosystem planning',
  ];
  const tokenomicsGifs = [
    tokensupplystructure,
    allocationstrategy,
    utilitymodeling,
    roadmapecosystem,
  ];

  const networks = ['Ethereum', 'BNB Chain', 'Solana', 'Polygon', 'Avalanche', 'Tron', 'Polkadot', 'Cosmos'];

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const next = w >= 1024 ? 3 : w >= 768 ? 2 : 1;
      setCardsToShow(next);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => setCurrentIndex((prev) => prev + 1), 2200);
    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    if (currentIndex >= tokenTypes.length) {
      const t = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [currentIndex, tokenTypes.length]);

  useEffect(() => {
    if (!isTransitioning) {
      const t = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(t);
    }
  }, [isTransitioning]);

  const visibleItems = [...tokenTypes, ...tokenTypes.slice(0, cardsToShow)];
  const activeDot = ((currentIndex % tokenTypes.length) + tokenTypes.length) % tokenTypes.length;

  // const handlePrev = () => {
  //   setCurrentIndex((prev) =>
  //     prev === 0 ? tokenTypes.length - 1 : prev - 1
  //   );
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prev) =>
  //     prev + 1
  //   );
  // };


  const handleNext = () => {
  const maxIndex = tokenTypes.length - cardsToShow;

  setCurrentIndex((prev) => {
    if (prev >= maxIndex) return maxIndex;
    return prev + 1;
  });
};
const handlePrev = () => {
  setCurrentIndex((prev) => {
    if (prev <= 0) return 0;
    return prev - 1;
  });
};
  return (

    <>  <Helmet>
      <title>Custom Token Development Services | Blockchain App Advisor</title>

      <meta
        name="description"
        content="Launch secure and scalable custom tokens including utility tokens, governance tokens, memecoins, stablecoins, and asset-backed tokens across major blockchain networks."
      />

      <meta
        name="keywords"
        content="token development, erc20 token development, bep20 token creation, cryptocurrency development, tokenomics support, blockchain token services"
      />

      <meta property="og:title" content="Custom Token Development Services" />
      <meta
        property="og:description"
        content="End-to-end token development with tokenomics, vesting, staking, cross-chain compatibility, and secure smart contract deployment."
      />
      <meta property="og:type" content="website" />
    </Helmet>

      <div className="w-full bg-white transition-colors duration-300">
        {/* Hero */}
        {/* <section className="relative w-full bg-white pt-4 pb-8 transition-colors duration-300 sm:pb-8 md:pt-6 md:pb-10 lg:pt-8 lg:pb-8 xl:pt-10 xl:pb-12">
          <div className="mx-auto grid w-full grid-cols-1 items-start gap-0 lg:grid-cols-[65%_35%]">
            <div className="px-4 sm:px-6 md:px-10 lg:px-16
 flex w-full flex-col justify-start gap-5 leading-[1.4]">
              <h1 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300">
                <span className="block leading-[1.2]  sm:leading-[1.25] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[65px]  lg:leading-[1.25] ">
                  CUSTOM TOKEN DEVELOPMENT
                </span>
                <span className="block leading-[1.2]  sm:leading-[1.25] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[65px]  lg:leading-[1.25] ">
                  FOR <span className="text-brand-blue">UTILITY</span>,{' '}
                  <span className="text-brand-blue">GOVERNANCE</span>
                </span>
                <span className="block leading-[1.2]  sm:leading-[1.25] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[65px]  lg:leading-[1.25] ">
                  AND <span className="text-brand-blue">DIGITAL ASSETS</span>
                </span>
              </h1>

              <p className="max-w-[720px] font-sans  font-medium leading-[1.7] text-black/75 transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl">
                Launch your cryptocurrency with confidence. We build secure, scalable tokens for Ethereum, BNB Chain, Solana, and more—whether you’re creating a utility token, memecoin, governance asset, or stablecoin. From tokenomics to deployment, we handle the full lifecycle of token creation.
              </p>
            </div>

            <div className="flex w-full items-center justify-center">
              <div className="w-full max-w-[360px]">
                <img src={heroImg} alt="Token development" className="h-auto w-full object-contain" loading="eager" />
              </div>
            </div>
          </div>
        </section> */}
        <PageHero
  titleLines={[
    { text: "CUSTOM TOKEN DEVELOPMENT", highlight: false },
    { text: "FOR", highlight: false },
    { text: "UTILITY, GOVERNANCE", highlight: true },
    { text: "AND DIGITAL ASSETS", highlight: true },
  ]}
  description="Launch your cryptocurrency with confidence. We build secure, scalable tokens for Ethereum, BNB Chain, Solana, and more—whether you’re creating a utility token, memecoin, governance asset, or stablecoin. From tokenomics to deployment, we handle the full lifecycle of token creation."
  image={heroImg}
  imageAlt="Token development"
/>

        {/* Token Types */}
        <section className="w-full bg-white py-8 transition-colors duration-300 sm:py-4">
          <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-10 lg:px-14">
            <div className="mb-10 text-center">
              <h2 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
                TOKEN <span className="text-brand-blue">TYPES</span>
              </h2>
            </div>

            <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <div className="overflow-hidden">
                <div
                  className={`flex py-6 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                  style={{
  transform: `translateX(-${Math.min(currentIndex, tokenTypes.length - cardsToShow) * (100 / cardsToShow)}%)`
}}
                >
                  {visibleItems.map((card, idx) => (
                    <div key={`${card.title}-${idx}`} className="flex w-full shrink-0 justify-center px-8 md:w-1/2 md:px-10 lg:w-1/3 lg:px-12">
                      <div className="group relative w-full max-w-[380px]">
                        {/* tilted blue backing */}
                        <div className="absolute -inset-3 rounded-[24px] bg-brand-blue transition-transform duration-300 translate-x-2 translate-y-2 -rotate-[2deg] group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-[3deg]" />

                        {/* foreground card */}
                        <div className="relative rounded-[24px] border border-[#c8d7e4] bg-white p-7 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="font-sans text-base sm:text-lg md:text-xl font-bold text-brand-blue transition-colors duration-300">
                              {card.title}
                            </h3>
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-brand-blue/30 bg-white transition-colors duration-300">
                              {card.icon}
                            </div>
                          </div>
                          <p className="mt-4 font-sans text-sm sm:text-base md:text-lg font-medium leading-[1.65] text-black/70 transition-colors duration-300">
                            {card.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Navigation Buttons */}
              <div className="mt-6 flex justify-center gap-6">

                {/* LEFT */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous"
                  className="
      flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center
      rounded-full border border-brand-blue/40
      bg-white
      text-brand-blue
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
                  onClick={handleNext}
                  aria-label="Next"
                  className="
      flex h-9 w-9 sm:h-11 sm:w-11
 items-center justify-center
      rounded-full border border-brand-blue/40
      bg-white
      text-brand-blue
      transition-all duration-300
      hover:bg-brand-blue hover:text-white
    "
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>

              </div>

              {/* <div className="mt-6 flex justify-center gap-2">
              {tokenTypes.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to token type ${i + 1}`}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
                    activeDot === i ? 'border-brand-blue bg-brand-blue' : 'border-black/30 bg-transparent'
                  }`}
                />
              ))}
            </div> */}
            </div>
          </div>
        </section>

        {/* Token Features */}
        <section className="w-full bg-white py-8 transition-colors duration-300 sm:py-4">
          <div
            className="mx-auto max-w-layout px-4 sm:px-6 md:px-10 lg:px-14"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <div className="mb-12 text-center">
              <h2 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
                TOKEN <span className="text-brand-blue">FEATURES</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {tokenFeatures.map((f, idx) => (
                <div
                  key={f.title}
                  className={`flex flex-col sm:flex-row items-start sm:items-stretch gap-6 rounded-[14px] border border-black/10 bg-gradient-to-b from-white to-[#cfe6fb] hover:border-brand-blue/80 hover:shadow-[0_30px_48px_rgba(0,0,0,0.10)] p-7 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 ${idx === tokenFeatures.length - 1 ? 'md:col-span-2 md:mx-auto md:max-w-[780px]' : ''
                    }`}
                >
                  <div className="flex-1">
                    <h3 className="font-semibold leading-snug text-black transition-colors duration-300 text-lg sm:text-xl md:text-2xl">
                      {f.title}
                    </h3>
                    <p className="mt-4 text-sm sm:text-base md:text-lg font-medium leading-[1.75] text-black/70 transition-colors duration-300 ">
                      {f.desc}
                    </p>
                  </div>

                  <div className="flex w-full sm:w-[180px] shrink-0 items-center justify-center">
                    <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl transition-colors duration-300">
                      <img src={f.image} alt={f.alt} className="h-full w-full object-contain p-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tokenomics Support */}
        <section className="w-full bg-white pt-6 pb-16 transition-colors duration-300 sm:pt-8 sm:pb-20">
          <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-10 lg:px-14">
            <div className="mb-12 text-center">
              <h2 className="font-heading font-bold uppercase tracking-tight transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
                <span className="text-black">TOKENOMICS </span>
                <span className="text-brand-blue">SUPPORT</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[55%_45%] lg:gap-14">
              <div className="w-full">
                <p className="mb-5 font-sans text-sm sm:text-base md:text-lg font-medium leading-[1.7] text-black/75 transition-colors duration-300 ">
                  We help with:
                </p>

                <div className="flex flex-col gap-4">
                  {tokenomicsSupport.map((label, idx) => (

                    <div
                      key={label}
                      className="flex items-center gap-4 rounded-xl border border-[#c8d7e4] bg-white px-5 py-4 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-[1px] hover:border-brand-blue/60 hover:shadow-[0_14px_36px_rgba(0,0,0,0.14)]"
                    >
                      <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg  border-brand-blue bg-white text-brand-blue">
                        <img
                          src={tokenomicsGifs[idx]}
                          alt=""
                          className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
                        />
                      </div>
                      <p className="font-sans  font-semibold text-black transition-colors duration-300 text-sm sm:text-base md:text-lg">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full max-w-[420px] overflow-hidden rounded-3xl bg-black/[0.03] transition-colors duration-300">
                  <img src={tokenomicsImg} alt="Tokenomics support illustration" className="h-full w-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blockchain Networks Supported */}
        <section className="w-full bg-white pb-16 transition-colors duration-300 sm:pb-20">
          <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-10 lg:px-14">
            <div className="mb-12 text-center">
              <h2 className="font-heading font-bold uppercase tracking-tight transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
                <span className="text-black">BLOCKCHAIN NETWORKS </span>
                <span className="text-brand-blue">SUPPORTED</span>
              </h2>
            </div>

            <div className="mx-auto flex max-w-[980px] flex-wrap justify-center gap-6">
              {networks.map((name) => (
                <div
                  key={name}
                  className="hover:border-brand-blue hover:text-brand-blue hover:bg-gradient-to-b hover:from-white hover:to-[#cfe6fb] rounded-[10px] border border-brand-blue/25 bg-transparent text-center font-sans min-w-[120px] sm:min-w-[150px] px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-black shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <BeforeFooter
          title="Create your token"
          buttonText="Contact Now"
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

export default TokenDevelopment;

