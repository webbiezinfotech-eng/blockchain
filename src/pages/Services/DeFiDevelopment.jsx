import BeforeFooter from '../../components/common/BeforeFooter';

import heroImg from '../../assets/services images/DefiDevimages/DefiDev-hero.png';
import solution1Img from '../../assets/services images/DefiDevimages/StakingPlatforms.png';
import solution2Img from '../../assets/services images/DefiDevimages/YieldFarming.png';
import solution3Img from '../../assets/services images/DefiDevimages/LendingBorrowingProtocols.png';

import f1Img from '../../assets/services images/DefiDevimages/SmartContractAutomation.png';
import f2Img from '../../assets/services images/DefiDevimages/OnchainGovernance.png';
import f3Img from '../../assets/services images/DefiDevimages/liquidityManagement.png';
import f4Img from '../../assets/services images/DefiDevimages/FeeSharingMechanisms.png';
import f5Img from '../../assets/services images/DefiDevimages/AdvancedTokenEconomics.png';
import f6Img from '../../assets/services images/DefiDevimages/HighPerformanceDashboard.png';

import archImg from '../../assets/services images/DefiDevimages/ArchitectureOverview.png';

const DeFiDevelopment = () => {
  const solutions = [
    {
      title: 'Staking platforms',
      desc:
        'Flexible vesting, lock tokens, earn predictable yields, and strengthen network security through automated smart contracts.',
      image: solution1Img,
      alt: 'Staking platforms',
    },
    {
      title: 'Yield farming',
      desc:
        'Provide liquidity to pools, optimize reward strategies, and maximize APY returns across multi-chain protocols securely.',
      image: solution2Img,
      alt: 'Yield farming',
    },
    {
      title: 'Lending / borrowing protocols',
      desc:
        'Allow trustless collateralized loans, automated interest rate models, and on-chain lending markets for global users.',
      image: solution3Img,
      alt: 'Lending and borrowing protocols',
    },
  ];

  const protocolFeatures = [
    {
      title: 'Smart Contract Automation',
      desc: 'Execute financial actions autonomously: rebalancing, risk limiting, liquidations, and earnings distribution.',
      icon: f1Img,
      image: f1Img,
    },
    {
      title: 'On-Chain Governance',
      desc: 'Token holders vote on upgrades, manage protocol parameters, and shape decentralized decision-making.',
      icon: f2Img,
      image: f2Img,
    },
    {
      title: 'Liquidity Management',
      desc: 'Optimize pool depth, adjust incentives, and maintain healthy markets with dynamic liquidity strategies.',
      icon: f3Img,
      image: f3Img,
    },
    {
      title: 'Fee-Sharing Mechanisms',
      desc: 'Distribute protocol-earned revenue to token holders, stakers, or liquidity providers via automated flows.',
      icon: f4Img,
      image: f4Img,
    },
    {
      title: 'Advanced Token Economics',
      desc: 'Design sustainable incentive models, deflationary mechanics, and utility-driven token ecosystems.',
      icon: f5Img,
      image: f5Img,
    },
    {
      title: 'High-Performance Dashboards',
      desc: 'Deliver real-time analytics, trading insights, and protocol metrics through intuitive, data-rich interfaces.',
      icon: f6Img,
      image: f6Img,
    },
  ];

  const tokenIntegration = ['Ethereum', 'BNB Chain', 'Solana', 'Polygon', 'Avalanche', 'Tron', 'Polkadot'];

  const architecture = [
    'On-chain smart contract layer',
    'Off-chain services (indexers, APIs)',
    'Admin panels for management',
    'Secure wallet & oracle integrations',
  ];

  return (
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero */}
      <section className="w-full bg-white pt-4 pb-12 transition-colors duration-300 dark:bg-black sm:pt-6 sm:pb-14 lg:pt-8 lg:pb-16">
        <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[58%_42%] lg:pl-[3rem] lg:pr-[5rem]">
          {/* Left */}
          <div className="flex w-full flex-col gap-6">
            <h1 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white">
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35]">
                END-TO-END DEFI DEVELOPMENT
              </span>
              <span className="block text-[34px] leading-[1.2] sm:text-[48px] sm:leading-[1.25] lg:text-[58px] lg:leading-[1.35]">
                FOR{' '}
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">
                  NEXT-GENERATION
                </span>
              </span>
              <span className="block text-[34px] leading-[1.2] sm:text-[48px] sm:leading-[1.25] lg:text-[58px] lg:leading-[1.35]">
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">FINANCIAL</span> PLATFORMS
              </span>
            </h1>

            <p className="max-w-[760px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-lg">
              Build powerful decentralized finance solutions that deliver transparency, automation, and real yield. We craft
              lending, staking, and launch-ready DeFi products on EVM and non‑EVM networks with secure, scalable architecture.
            </p>
          </div>

          {/* Right */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[560px]">
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.04]">
                <img src={heroImg} alt="DeFi development" className="h-auto w-full object-contain" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DeFi Solutions */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              DEFI <span className="text-brand-blue">SOLUTIONS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="rounded-[14px] border-2 border-brand-blue bg-white p-6 shadow-[0_12px_34px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_16px_44px_rgba(0,0,0,0.14)] dark:border-white/30 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]"
              >
                <div className="flex items-center justify-center">
                  <div className="h-[120px] w-full overflow-hidden rounded-xl bg-black/[0.03] transition-colors duration-300 dark:bg-white/[0.06]">
                    <img src={s.image} alt={s.alt} className="h-full w-full object-cover" />
                  </div>
                </div>
                <h3 className="mt-5 text-center font-heading text-[18px] font-bold uppercase tracking-wide text-black transition-colors duration-300 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-center font-sans text-[14px] leading-relaxed text-black/75 transition-colors duration-300 dark:text-white/85">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Features */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              PROTOCOL <span className="text-brand-blue">FEATURES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {protocolFeatures.map((f) => (
              <div
                key={f.title}
                className="grid grid-cols-1 gap-6 rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_12px_34px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_16px_44px_rgba(0,0,0,0.14)] dark:border-white/25 dark:bg-black/20 sm:grid-cols-[1fr_170px]"
              >
                <div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-blue/35 bg-black/[0.03] transition-colors duration-300 dark:border-white/30 dark:bg-white/[0.06]">
                      <img src={f.icon} alt="" className="h-8 w-8 object-contain" />
                    </div>
                    <div>
                      <h3 className="font-heading text-[16px] font-bold uppercase tracking-wide text-black transition-colors duration-300 dark:text-white">
                        {f.title}
                      </h3>
                      <p className="mt-2 font-sans text-[13px] leading-relaxed text-black/75 transition-colors duration-300 dark:text-white/85">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center sm:justify-end">
                  <div className="h-[120px] w-[170px] overflow-hidden rounded-xl bg-black/[0.03] transition-colors duration-300 dark:bg-white/[0.06]">
                    <img src={f.image} alt="" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Integration */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-brand-blue transition-colors duration-300 sm:text-[54px] lg:text-[72px]">
              TOKEN INTEGRATION
            </h2>
          </div>

          <div className="mx-auto flex max-w-[980px] flex-wrap justify-center gap-3">
            {tokenIntegration.map((n) => (
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

      {/* Architecture Overview */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              ARCHITECTURE <span className="text-brand-blue">OVERVIEW</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[56%_44%] lg:gap-14">
            <div className="flex w-full flex-col gap-3">
              {architecture.map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-brand-blue/20 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-[1px] hover:border-brand-blue/55 hover:shadow-[0_14px_36px_rgba(0,0,0,0.12)] dark:border-white/25 dark:bg-black dark:hover:border-brand-blue/70"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-blue/35 bg-black/[0.02] text-brand-blue transition-colors duration-300 dark:border-white/30 dark:bg-white/[0.05] dark:text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-90">
                      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M7 9h10M7 12h10M7 15h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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
                  <img src={archImg} alt="DeFi architecture overview" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BeforeFooter title="Start Your DeFi Project" buttonText="Contact Now" />
    </div>
  );
};

export default DeFiDevelopment;

