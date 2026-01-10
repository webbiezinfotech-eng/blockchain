import { useEffect, useState } from 'react';
import BeforeFooter from '../../components/common/BeforeFooter';

import tokenDevHero from '../../assets/home_images/tokendev.png';
import tokenomicsImg from '../../assets/home_images/web3-growth.png';
import feature1Img from '../../assets/home_images/airdrop.png';
import feature2Img from '../../assets/home_images/wallets.png';
import feature3Img from '../../assets/home_images/icons/multi-chain.gif';

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
      title: 'Automated Tools & Rewards',
      desc: 'Airdrops, referrals, rewards and automation logic to drive adoption and engagement.',
      image: feature1Img,
      alt: 'Token rewards and airdrop illustration',
    },
    {
      title: 'Liquidity Management',
      desc: 'Launch-ready liquidity controls, tax logic, and pool configuration for DEX listings.',
      image: feature2Img,
      alt: 'Liquidity and wallet illustration',
    },
    {
      title: 'Anti-Whale Mechanics',
      desc: 'Limits, cooldowns, and configurable rules that discourage unhealthy market manipulation.',
      image: feature3Img,
      alt: 'Multi-chain illustration',
    },
    {
      title: 'Minting & Burning',
      desc: 'Supply control through mint/burn methods, caps, and role-based access permissions.',
      image: feature2Img,
      alt: 'Token mint and burn illustration',
    },
    {
      title: 'Vesting & Lockups',
      desc: 'Time-based release schedules for teams, advisors, investors, and ecosystem allocations.',
      image: feature1Img,
      alt: 'Token vesting illustration',
    },
    {
      title: 'Staking & Rewards',
      desc: 'Staking contracts with flexible APRs, lock periods, and reward distribution logic.',
      image: feature3Img,
      alt: 'Staking illustration',
    },
  ];

  const tokenomicsSupport = [
    'Token supply structuring',
    'Allocation strategy',
    'Liquidity planning',
    'Fundraising & ecosystem planning',
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

  return (
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero */}
      <section className="w-full bg-white pt-12 pb-16 transition-colors duration-300 dark:bg-black sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
        <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[60%_40%] lg:pl-[3rem] lg:pr-[5rem]">
          <div className="flex w-full flex-col gap-6">
            <h1 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white">
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.4] lg:whitespace-nowrap">
                CUSTOM TOKEN DEVELOPMENT
              </span>
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.4] lg:whitespace-nowrap">
                FOR <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">UTILITY</span>,{' '}
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">GOVERNANCE</span>
              </span>
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.4] lg:whitespace-nowrap">
                AND <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">DIGITAL ASSETS</span>
              </span>
            </h1>

            <p className="max-w-[720px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-lg">
              Launch your cryptocurrency with secure smart contracts, launch-ready tokenomics, and flexible features. We build
              standards-based tokens (ERC-20, BEP-20, SPL, ERC-721/1155) with audit-friendly code and scalable distribution
              frameworks tailored to your project goals.
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[560px]">
              <div className="overflow-hidden rounded-3xl bg-black/[0.03] transition-colors duration-300 dark:bg-white/[0.04]">
                <img src={tokenDevHero} alt="Token development illustration" className="h-full w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Types */}
      <section className="w-full bg-white py-16 transition-colors duration-300 dark:bg-black sm:py-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[44px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[56px] lg:text-[72px]">
              TOKEN <span className="text-brand-blue">TYPES</span>
            </h2>
          </div>

          <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="overflow-hidden">
              <div
                className={`flex py-6 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
              >
                {visibleItems.map((card, idx) => (
                  <div key={`${card.title}-${idx}`} className="flex w-full shrink-0 justify-center px-4 md:w-1/2 lg:w-1/3">
                    <div className="w-full max-w-[360px] rounded-[14px] border border-brand-blue/25 bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] dark:shadow-[0_10px_30px_rgba(0,0,0,0.55)]">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-sans text-[18px] font-bold text-black transition-colors duration-300 dark:text-white sm:text-[20px]">
                          {card.title}
                        </h3>
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-brand-blue/30 bg-white transition-colors duration-300 dark:border-white/20 dark:bg-black/20">
                          {card.icon}
                        </div>
                      </div>
                      <p className="mt-4 font-sans text-[15px] font-medium leading-[1.6] text-black/70 transition-colors duration-300 dark:text-white/80 sm:text-[16px]">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {tokenTypes.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to token type ${i + 1}`}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
                    activeDot === i ? 'border-brand-blue bg-brand-blue' : 'border-black/30 bg-transparent dark:border-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Token Features */}
      <section className="w-full bg-white py-16 transition-colors duration-300 dark:bg-black sm:py-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[44px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[56px] lg:text-[72px]">
              TOKEN <span className="text-brand-blue">FEATURES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {tokenFeatures.map((f) => (
              <div
                key={f.title}
                className="flex items-stretch justify-between gap-6 rounded-[14px] border border-black/10 bg-gradient-to-b from-white to-[#cfe6fb] p-6 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/20 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] dark:shadow-[0_10px_30px_rgba(0,0,0,0.60)]"
              >
                <div className="flex-1">
                  <h3 className="font-sans text-[20px] font-bold leading-snug text-black transition-colors duration-300 dark:text-white sm:text-[22px]">
                    {f.title}
                  </h3>
                  <p className="mt-3 font-sans text-[15px] font-medium leading-[1.65] text-black/70 transition-colors duration-300 dark:text-white/80 sm:text-[16px]">
                    {f.desc}
                  </p>
                </div>
                <div className="flex w-[150px] shrink-0 items-center justify-center">
                  <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-white/70 transition-colors duration-300 dark:bg-black/20">
                    <img src={f.image} alt={f.alt} className="h-full w-full object-contain p-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Support */}
      <section className="w-full bg-white pt-6 pb-16 transition-colors duration-300 dark:bg-black sm:pt-8 sm:pb-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[44px] font-bold uppercase tracking-tight transition-colors duration-300 sm:text-[56px] lg:text-[72px]">
              <span className="text-black dark:text-white">TOKENOMICS </span>
              <span className="text-brand-blue">SUPPORT</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[55%_45%] lg:gap-14">
            <div className="w-full">
              <p className="mb-5 font-sans text-[16px] font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-[18px]">
                We help you design a token economy that works in the real world — aligned incentives, sustainable emissions,
                and launch strategy.
              </p>

              <div className="flex flex-col gap-4">
                {tokenomicsSupport.map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 rounded-xl border border-[#c8d7e4] bg-white px-5 py-4 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/20 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] dark:shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-blue bg-white text-brand-blue">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="m9 12 2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 2 20 6v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4Z" stroke="currentColor" strokeWidth="1.8" />
                      </svg>
                    </div>
                    <p className="font-sans text-[16px] font-semibold text-black transition-colors duration-300 dark:text-white sm:text-[17px]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-[520px] overflow-hidden rounded-3xl bg-black/[0.03] transition-colors duration-300 dark:bg-white/[0.04]">
                <img src={tokenomicsImg} alt="Tokenomics support illustration" className="h-full w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Networks Supported */}
      <section className="w-full bg-white pb-16 transition-colors duration-300 dark:bg-black sm:pb-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[44px] font-bold uppercase tracking-tight transition-colors duration-300 sm:text-[56px] lg:text-[72px]">
              <span className="text-black dark:text-white">BLOCKCHAIN NETWORKS </span>
              <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">SUPPORTED</span>
            </h2>
          </div>

          <div className="mx-auto flex max-w-[980px] flex-wrap justify-center gap-6">
            {networks.map((name) => (
              <div
                key={name}
                className="min-w-[170px] rounded-[10px] border border-brand-blue/25 bg-transparent px-8 py-4 text-center font-sans text-[18px] font-semibold text-black shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] dark:text-white dark:shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
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
        containerClassName="mx-auto max-w-layout px-4 text-center sm:px-6 md:px-10"
        headingAs="h3"
        headingClassName="font-heading text-[36px] font-bold uppercase leading-tight text-white sm:text-[44px] md:text-[52px]"
      />
    </div>
  );
};

export default TokenDevelopment;

