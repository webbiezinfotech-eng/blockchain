import BeforeFooter from '../../components/common/BeforeFooter';

import heroImg from '../../assets/services images/DappDevimages/DappDev-hero.png';
import useCase1Img from '../../assets/services images/DappDevimages/DefiPlatforms.png';
import useCase2Img from '../../assets/services images/DappDevimages/Web3Games.png';
import useCase3Img from '../../assets/services images/DappDevimages/SupplychainTracking.png';

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

  return (
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero */}
      <section className="w-full bg-white pt-4 pb-12 transition-colors duration-300 dark:bg-black sm:pt-6 sm:pb-14 lg:pt-8 lg:pb-16">
        <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[58%_42%] lg:pl-[3rem] lg:pr-[5rem]">
          <div className="flex w-full flex-col gap-6">
            <h1 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white">
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35]">
                HIGH-PERFORMANCE DAPP
              </span>
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35]">
                DEVELOPMENT FOR
              </span>
              <span className="block text-[34px] leading-[1.2] sm:text-[48px] sm:leading-[1.25] lg:text-[58px] lg:leading-[1.35]">
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">DECENTRALIZED</span> INNOVATION
              </span>
            </h1>

            <p className="max-w-[760px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-lg">
              Turn your Web3 idea into a powerful decentralized application—secure, scalable, and user-friendly. We design and
              develop full-stack dApps with modern blockchain frameworks and optimized token-based adoption.
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[560px]">
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.04]">
                <img src={heroImg} alt="DApp development" className="h-auto w-full object-contain" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dapp Use Cases */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              DAPP <span className="text-brand-blue">USE CASES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((c) => (
              <div
                key={c.title}
                className="rounded-[14px] border-2 border-brand-blue bg-white p-6 shadow-[0_12px_34px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_16px_44px_rgba(0,0,0,0.14)] dark:border-white/30 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]"
              >
                <div className="h-[120px] w-full overflow-hidden rounded-xl bg-black/[0.03] transition-colors duration-300 dark:bg-white/[0.06]">
                  <img src={c.image} alt={c.alt} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-5 text-center font-heading text-[18px] font-bold uppercase tracking-wide text-black transition-colors duration-300 dark:text-white">
                  {c.title}
                </h3>
                <p className="mt-3 text-center font-sans text-[14px] leading-relaxed text-black/75 transition-colors duration-300 dark:text-white/85">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              DEVELOPMENT <span className="text-brand-blue">PROCESS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_380px_1fr] lg:gap-12">
            {/* Left steps (1-4) */}
            <div className="flex flex-col gap-4">
              {process.slice(0, 4).map((s) => (
                <div
                  key={s.n}
                  className="flex items-center gap-4 rounded-xl border border-brand-blue/20 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition-colors duration-300 dark:border-white/25 dark:bg-black"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue text-white">
                    <span className="font-heading text-[14px] font-bold">{s.n}</span>
                  </div>
                  <p className="font-sans text-[15px] font-semibold text-black transition-colors duration-300 dark:text-white">
                    {s.t}
                  </p>
                </div>
              ))}
            </div>

            {/* Center image */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[420px]">
                <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.04]">
                  <img src={processImg} alt="Development process" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>

            {/* Right steps (5-7) */}
            <div className="flex flex-col gap-4">
              {process.slice(4).map((s) => (
                <div
                  key={s.n}
                  className="flex items-center gap-4 rounded-xl border border-brand-blue/20 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition-colors duration-300 dark:border-white/25 dark:bg-black"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue text-white">
                    <span className="font-heading text-[14px] font-bold">{s.n}</span>
                  </div>
                  <p className="font-sans text-[15px] font-semibold text-black transition-colors duration-300 dark:text-white">
                    {s.t}
                  </p>
                </div>
              ))}
            </div>
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

          <div className="mx-auto flex max-w-[980px] flex-wrap justify-center gap-3">
            {techStack.map((n) => (
              <span
                key={n}
                className="rounded-full border border-black/15 bg-white px-5 py-2 font-sans text-[14px] font-semibold text-black/80 shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-colors duration-300 dark:border-white/25 dark:bg-black dark:text-white/85"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Monetization Options */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
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

            <div className="flex w-full items-center justify-center lg:justify-end">
              <div className="w-full max-w-[520px]">
                <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.04]">
                  <img src={monetizationImg} alt="Monetization options" className="h-full w-full object-cover" />
                </div>
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

