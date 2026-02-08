import heroImg from '../../assets/services images/SmartContractDevimages/SmartContractDev-hero.png';
import securityStandardsImg from '../../assets/services images/SmartContractDevimages/securityStandards.png';
import devTestingProcessImg from '../../assets/services images/SmartContractDevimages/DevTestingProcess.png';
import DevelopmentProcess from '../../components/common/DevelopmentProcess';

import erc20Img from '../../assets/services images/SmartContractDevimages/ERC20_BEP20_SPL_Tokens.png';
import erc721Img from '../../assets/services images/SmartContractDevimages/ERC721_ERC1155NFTs.png';
import defiContractsImg from '../../assets/services images/SmartContractDevimages/DeFiContracts.png';
import daoGovernanceImg from '../../assets/services images/SmartContractDevimages/DAOGovernanceContracts.png';
import vestingTokenSaleImg from '../../assets/services images/SmartContractDevimages/VestingTokenSaleContracts.png';
import rwaTokenizationImg from '../../assets/services images/SmartContractDevimages/RealworldAssetTokenizationLogic.png';
import customBusinessLogicImg from '../../assets/services images/SmartContractDevimages/CustomBusinessLogicContracts.png';

import iconOwasp from '../../assets/services images/SmartContractDevimages/icons/OWASPBlockchainStandard.gif';
import iconAutomatedScan from '../../assets/services images/SmartContractDevimages/icons/AutomatedVulnerabilityScan.gif';
import iconFormalVerification from '../../assets/services images/SmartContractDevimages/icons/FormalVerificationProcess.gif';
import iconMultiLayerAudit from '../../assets/services images/SmartContractDevimages/icons/MultilayerAuditWorkflow.gif';
import iconSafeMath from '../../assets/services images/SmartContractDevimages/icons/SafemathSecurePattern.gif';

const SmartContractDevelopment = () => {
  const securityStandards = [
    { label: 'OWASP Blockchain Standards', icon: iconOwasp },
    { label: 'Automated vulnerability scanning', icon: iconAutomatedScan },
    { label: 'Formal verification practices', icon: iconFormalVerification },
    { label: 'Multi-layer audit workflow', icon: iconMultiLayerAudit },
    { label: 'SafeMath & secure patterns', icon: iconSafeMath },
  ];

  const contractTypes = [
    {
      title: 'ERC20, BEP20, SPL Tokens',
      desc: 'Token Standards Enabling Secure, Efficient Fungible Asset Creation, Transfers, And Management Across Major EVM And Non-EVM Blockchains.',
      media: erc20Img,
    },
    {
      title: 'ERC721 & ERC1155 NFTs',
      desc: 'Smart Contracts Powering Unique Or Multi-Asset NFTs With Flexible Metadata, Ownership Tracking, And Secure On-Chain Interactions.',
      media: erc721Img,
    },
    {
      title: 'DeFi Contracts – Staking, Farming, Liquidity Pools',
      desc: 'Protocols Enabling Decentralized Rewards, Yield Generation, And Liquidity Provisioning With Automated, Transparent, Trust-Minimized Smart Logic.',
      media: defiContractsImg,
    },
    {
      title: 'DAO Governance Contracts',
      desc: 'On-Chain Voting And Governance Frameworks Enabling Decentralized Decision-Making And Community-Driven Protocol Management With Full Transparency.',
      media: daoGovernanceImg,
    },
    {
      title: 'Vesting & Token Sale Contracts',
      desc: 'Time-Locked Token Release And Automated Sale Mechanisms Ensuring Secure Allocations, Controlled Distributions, And Investor Protection.',
      media: vestingTokenSaleImg,
    },
    {
      title: 'Real-World Asset Tokenization Logic',
      desc: 'Smart Contracts Converting Physical Assets Into Digital Tokens With Compliant Ownership, Transferability, And Programmable Utility Features.',
      media: rwaTokenizationImg,
    },
    {
      title: 'Custom Business Logic Contracts',
      desc: 'Tailored Smart Contract Systems Implementing Unique Workflows, Automation Rules, And Decentralized Execution Aligned With Project Requirements.',
      media: customBusinessLogicImg,
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
      <section className="w-full bg-white pt-4 pb-16 transition-colors duration-300 dark:bg-black sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24">
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
              <div className="overflow-hidden rounded-3xl  transition-colors duration-300 ">
                <img src={heroImg} alt="Smart contract development" className="h-auto w-full object-contain" loading="eager" />
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
              {/* <span className="text-black dark:text-white"> </span> */}
              <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">SECURITY STANDARDS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[42%_58%] lg:gap-14">
            {/* Left media */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="w-full max-w-[520px]">
                <div className="overflow-hidden rounded-3xl transition-colors duration-300 ">
                  <img src={securityStandardsImg} alt="Security standards" className="h-auto w-full object-contain" loading="lazy" />
                </div>
              </div>
            </div>

            {/* Right list */}
            <div className="flex w-full flex-col gap-5">
              {securityStandards.map((it) => (
                <div
                  key={it.label}
                  className="flex items-center gap-4 rounded-xl border border-brand-blue/35 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-brand-blue/45 dark:bg-black"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-blue/40 bg-white/80 text-brand-blue transition-colors duration-300 dark:border-white/35 dark:bg-black/30 dark:text-white">
                    <img src={it.icon} alt="" className="h-9 w-9 object-contain" loading="lazy" />
                  </div>
                  <p className="font-sans text-[16px] font-semibold text-black transition-colors duration-300 dark:text-white sm:text-[17px]">
                    {it.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Contract Types */}
      <section className="w-full bg-white py-8 transition-colors duration-300 dark:bg-black sm:py-10">
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
                  <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl  duration-300">
                    <img src={c.media} alt="" className="h-full w-full object-cover" loading="lazy" />
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
                  <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl duration-300">
                    <img src={contractTypes[6].media} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Development & Testing Process */}
      <DevelopmentProcess
        title="DEVELOPMENT & TESTING PROCESS"
        titlePrefix="DEVELOPMENT & TESTING"
        steps={devTestingSteps.map(s => ({ no: s.n, title: s.t }))}
        centerImage={devTestingProcessImg}
      />

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

