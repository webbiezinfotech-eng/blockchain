const SmartContractDevelopment = () => {
  const securityStandards = [
    'OWASP Blockchain Standards',
    'Automated vulnerability scanning',
    'Formal verification practices',
    'Multi-layer audit workflow',
    'SafeMath & secure patterns',
  ];

  const contractTypes = [
    {
      title: 'ERC20, BEP20, SPL Tokens',
      desc: 'Token Standards Enabling Secure, Efficient Fungible Asset Creation, Transfers, And Management Across Major EVM And Non-EVM Blockchains.',
      media: 'Media',
    },
    {
      title: 'ERC721 & ERC1155 NFTs',
      desc: 'Smart Contracts Powering Unique Or Multi-Asset NFTs With Flexible Metadata, Ownership Tracking, And Secure On-Chain Interactions.',
      media: 'Media',
    },
    {
      title: 'DeFi Contracts – Staking, Farming, Liquidity Pools',
      desc: 'Protocols Enabling Decentralized Rewards, Yield Generation, And Liquidity Provisioning With Automated, Transparent, Trust-Minimized Smart Logic.',
      media: 'Media',
    },
    {
      title: 'DAO Governance Contracts',
      desc: 'On-Chain Voting And Governance Frameworks Enabling Decentralized Decision-Making And Community-Driven Protocol Management With Full Transparency.',
      media: 'Media',
    },
    {
      title: 'Vesting & Token Sale Contracts',
      desc: 'Time-Locked Token Release And Automated Sale Mechanisms Ensuring Secure Allocations, Controlled Distributions, And Investor Protection.',
      media: 'Media',
    },
    {
      title: 'Real-World Asset Tokenization Logic',
      desc: 'Smart Contracts Converting Physical Assets Into Digital Tokens With Compliant Ownership, Transferability, And Programmable Utility Features.',
      media: 'Media',
    },
    {
      title: 'Custom Business Logic Contracts',
      desc: 'Tailored Smart Contract Systems Implementing Unique Workflows, Automation Rules, And Decentralized Execution Aligned With Project Requirements.',
      media: 'Media',
    },
  ];

  const devTestingSteps = [
    { n: 1, t: 'Architecture & Logic Planning', pos: 'lg:left-1/2 lg:top-[30px] lg:-translate-x-1/2 lg:ml-24' },
    { n: 2, t: 'Smart Contract Coding (Solidity/Rust/Move)', pos: 'lg:right-0 lg:top-[210px]' },
    { n: 3, t: 'Unit & Integration Tests', pos: 'lg:right-0 lg:top-[360px]' },
    { n: 4, t: 'Gas Optimization', pos: 'lg:left-1/2 lg:bottom-[20px] lg:-translate-x-1/2 lg:ml-72' },
    { n: 5, t: 'Deployment on Testnet', pos: 'lg:left-0 lg:bottom-[30px]' },
    { n: 6, t: 'Audit & Security Review', pos: 'lg:left-0 lg:top-[360px]' },
    { n: 7, t: 'Mainnet Release', pos: 'lg:left-0 lg:top-[210px]' },
  ];

  const compatibility = ['Ethereum', 'BNB Chain', 'Solana', 'Polygon', 'Avalanche', 'Arbitrum', 'Optimism', 'zkSync', 'Polkadot'];

  return (
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero Section */}
      <section className="w-full bg-white pt-12 pb-16 transition-colors duration-300 dark:bg-black sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
        <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[60%_40%] lg:pl-[3rem] lg:pr-[5rem]">
          {/* Left */}
          <div className="flex w-full flex-col gap-6">
            <h3 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white">
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.4] lg:whitespace-nowrap">
                SECURE &amp; AUDITED SMART
              </span>
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.4] lg:whitespace-nowrap">
                CONTRACT DEVELOPMENT
              </span>
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.4] lg:whitespace-nowrap">
                <span className="text-black transition-colors duration-300 dark:text-white">FOR </span>
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">WEB3 APPLICATIONS</span>
              </span>
            </h3>

            <p className="max-w-[720px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-lg">
              Transform your business with custom AI systems that think, learn, and optimize processes at scale. We build
              cutting-edge automation tools, predictive models, generative AI solutions, and neural network architectures that
              unlock efficiency, accuracy, and new digital capabilities across your operations.
            </p>
          </div>

          {/* Right */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[560px]">
              <div className="flex aspect-[4/3] w-full items-center justify-center rounded-3xl bg-black/[0.03] text-2xl font-bold text-brand-blue/30 transition-colors duration-300 dark:bg-white/[0.04] dark:text-white/20">
                Media
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Security Standards */}
      <section className="w-full bg-white pt-16 pb-10 transition-colors duration-300 dark:bg-black sm:pt-20 sm:pb-12">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[44px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[56px] lg:text-[72px]">
              <span className="text-black dark:text-white">SECURITY </span>
              <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">STANDARDS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[42%_58%] lg:gap-14">
            {/* Left media */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="w-full max-w-[520px]">
                <div className="flex aspect-[4/3] w-full items-center justify-center rounded-3xl bg-black/[0.03] text-2xl font-bold text-brand-blue/30 transition-colors duration-300 dark:bg-white/[0.04] dark:text-white/20">
                  Media
                </div>
              </div>
            </div>

            {/* Right list */}
            <div className="flex w-full flex-col gap-5">
              {securityStandards.map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-brand-blue/35 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-brand-blue/45 dark:bg-black"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-blue/40 bg-white/80 text-brand-blue transition-colors duration-300 dark:border-white/35 dark:bg-black/30 dark:text-white">
                    {/* icon placeholder */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="opacity-90">
                      <path d="M12 2 20 6v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4Z" stroke="currentColor" strokeWidth="1.8" />
                      <path d="m9 12 2 2 4-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="font-sans text-[16px] font-semibold text-black transition-colors duration-300 dark:text-white sm:text-[17px]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Contract Types */}
      <section className="w-full bg-white py-16 transition-colors duration-300 dark:bg-black sm:py-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[44px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[56px] lg:text-[72px]">
              <span className="text-black dark:text-white">CONTRACT </span>
              <span className="text-brand-blue">TYPES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-[4.5rem] md:grid-cols-2">
            {contractTypes.slice(0, 6).map((c) => (
              <div
                key={c.title}
                className="flex items-stretch justify-between gap-6 rounded-[10px] border border-black/10 bg-gradient-to-b from-white to-[#cfe6fb] p-6 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 md:h-[260px] lg:h-[280px] dark:border-white dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]"
              >
                <div className="flex-1">
                  <h3 className="font-sans text-[23px] font-bold leading-snug text-black transition-colors duration-300 dark:text-white sm:text-[25px]">
                    {c.title}
                  </h3>
                  <p className="mt-4 font-sans text-[17px] font-medium leading-[1.65] text-black/70 transition-colors duration-300 dark:text-white/80">
                    {c.desc}
                  </p>
                </div>
                <div className="flex w-[150px] shrink-0 items-center justify-center">
                  <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-white/70 text-xs font-bold text-brand-blue/60 transition-colors duration-300 dark:bg-black/20 dark:text-white/30">
                    {c.media}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Last centered card */}
          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-[760px]">
              <div className="flex items-stretch justify-between gap-6 rounded-[10px] border border-black/10 bg-gradient-to-b from-white to-[#cfe6fb] p-6 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 md:h-[260px] lg:h-[280px] dark:border-white dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]">
                <div className="flex-1">
                  <h3 className="font-sans text-[23px] font-bold leading-snug text-black transition-colors duration-300 dark:text-white sm:text-[25px]">
                    {contractTypes[6].title}
                  </h3>
                  <p className="mt-4 font-sans text-[17px] font-medium leading-[1.65] text-black/70 transition-colors duration-300 dark:text-white/80">
                    {contractTypes[6].desc}
                  </p>
                </div>
                <div className="flex w-[150px] shrink-0 items-center justify-center">
                  <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-white/70 text-xs font-bold text-brand-blue/60 transition-colors duration-300 dark:bg-black/20 dark:text-white/30">
                    {contractTypes[6].media}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Development & Testing Process */}
      <section className="w-full bg-white py-16 transition-colors duration-300 dark:bg-black sm:py-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase leading-[1.08] tracking-tight transition-colors duration-300 sm:text-[52px] lg:text-[68px]">
              <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">DEVELOPMENT &amp; </span>
              <span className="text-black dark:text-white">TESTING PROCESS</span>
            </h2>
          </div>

          {/* Mobile layout */}
          <div className="mt-10 flex flex-col gap-4 lg:hidden">
            {devTestingSteps.map((s) => (
              <div
                key={s.n}
                className="flex items-center gap-4 rounded-xl border border-[#c8d7e4] bg-white px-5 py-4 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-blue bg-white text-lg font-bold text-black">
                  {s.n}
                </div>
                <p className="font-sans text-[16px] font-semibold text-black transition-colors duration-300 dark:text-white">
                  {s.t}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop diagram */}
          <div className="relative mt-14 hidden min-h-[620px] overflow-x-clip lg:block">
            {/* Center media */}
            <div className="absolute left-1/2 top-1/2 w-[360px] -translate-x-1/2 -translate-y-1/2">
              <div className="flex aspect-square w-full items-center justify-center rounded-3xl bg-black/[0.03] text-2xl font-bold text-brand-blue/30 shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-colors duration-300 dark:bg-white/[0.04] dark:text-white/20">
                Media
              </div>
            </div>

            {devTestingSteps.map((step) => (
              <div key={step.n} className={`absolute ${step.pos} flex items-center`}>
                <div
                  className={`flex ${
                    step.n === 2 || step.n === 3 ? 'w-[440px]' : step.n === 6 || step.n === 7 ? 'w-[420px]' : 'w-[470px]'
                  } items-center gap-4 rounded-xl border border-[#c8d7e4] bg-white pl-4 pr-3 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] dark:shadow-[0_10px_30px_rgba(0,0,0,0.55)]`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-blue bg-white text-lg font-bold text-black">
                    {step.n}
                  </div>
                  <p className="font-sans text-[17px] font-semibold text-black transition-colors duration-300 dark:text-white">
                    {step.t}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Blockchain Compatibility */}
      <section className="w-full bg-white pt-6 pb-16 transition-colors duration-300 dark:bg-black sm:pt-8 sm:pb-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[44px] font-bold uppercase tracking-tight transition-colors duration-300 sm:text-[56px] lg:text-[72px]">
              <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">BLOCKCHAIN </span>
              <span className="text-black dark:text-white">COMPATIBILITY</span>
            </h2>
          </div>

          <div className="mx-auto flex max-w-[980px] flex-wrap justify-center gap-6">
            {compatibility.map((name) => (
              <div
                key={name}
                className="min-w-[170px] rounded-[10px] border border-brand-blue/25 bg-transparent px-8 py-4 text-center font-sans text-[18px] font-semibold text-black shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] dark:text-white"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-brand-blue py-10 transition-colors duration-300 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] sm:py-12">
        <div className="mx-auto max-w-layout px-4 text-center sm:px-6 md:px-10">
          <h3 className="font-heading text-[36px] font-bold uppercase leading-tight text-white sm:text-[44px] md:text-[52px]">
            Start Your Smart Contract Project
          </h3>
          <button className="mt-7 rounded-lg border-2 border-white bg-transparent px-10 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black">
            Contact Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default SmartContractDevelopment;

