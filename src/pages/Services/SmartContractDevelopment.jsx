import { Helmet } from "react-helmet";

import heroImg from '../../assets/services images/SmartContractDevimages/SmartContractDev-hero.png';
import securityStandardsImg from '../../assets/services images/SmartContractDevimages/securityStandards.png';
import devTestingProcessImg from '../../assets/services images/SmartContractDevimages/DevTestingProcess.png';
import DevelopmentProcess from '../../components/common/DevelopmentProcess';
import BeforeFooter from '../../components/common/BeforeFooter';
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
    // { n: 1, t: 'Architecture & Logic Planning', pos: 'lg:left-1/2 lg:top-[30px] lg:-translate-x-1/2 lg:ml-24' },
    // { n: 2, t: 'Smart Contract Coding (Solidity/Rust/Move)', pos: 'lg:right-0 lg:top-[210px]' },
    
    // { n: 4, t: 'Gas Optimization', pos: 'lg:left-1/2 lg:bottom-[20px] lg:-translate-x-1/2 lg:ml-72' },
    
    // { n: 6, t: 'Audit & Security Review', pos: 'lg:left-0 lg:top-[360px]' },
    // { n: 7, t: 'Mainnet Release', pos: 'lg:left-0 lg:top-[210px]' },
    
    // { n: 5, t: 'Deployment on Testnet', pos: 'lg:left-0 lg:bottom-[30px]' },
    // { n: 3, t: 'Unit & Integration Tests', pos: 'lg:right-0 lg:top-[360px]' },
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
    <>
  <Helmet>
    <title>
      Smart Contract Development Company | Secure & Audited Web3 Contracts
    </title>

    <meta
      name="description"
      content="We build secure, audited smart contracts for tokens, DeFi protocols, NFTs, DAOs, and real-world asset tokenization. Expert Solidity, Rust & Web3 contract development services."
    />

    <meta
      name="keywords"
      content="smart contract development, solidity development company, web3 smart contracts, ERC20 development, NFT smart contracts, DeFi smart contracts, DAO governance contracts, blockchain development services"
    />

    {/* Open Graph */}
    <meta property="og:title" content="Smart Contract Development Company | Secure Web3 Contracts" />
    <meta
      property="og:description"
      content="Enterprise-grade smart contract development with auditing, gas optimization, and multi-chain compatibility."
    />
    <meta property="og:type" content="website" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Secure Smart Contract Development for Web3 Applications"
    />
    <meta
      name="twitter:description"
      content="Custom ERC20, NFT, DeFi, DAO and tokenization smart contract development with security-first architecture."
    />
  </Helmet>

    <div className="w-full bg-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative w-full bg-white pt-4 pb-4 transition-colors duration-300 sm:pb-16 md:pt-6 md:pb-4 lg:pt-8 lg:pb-8 xl:pt-10 xl:pb-10">
        <div className="mx-auto grid w-full grid-cols-1 items-start gap-8 lg:gap-0
 lg:grid-cols-[65%_35%]">
          {/* Left */}
          <div className="px-4 sm:px-6 md:px-10 lg:px-16
 flex w-full flex-col justify-start gap-5 leading-[1.4]">
            <h2 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300">
              <span className="block  leading-[1.2] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[68px] lg:leading-[1.4]">
                SECURE &amp; AUDITED SMART
              </span>
              <span className="block  leading-[1.2] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[68px] lg:leading-[1.4]">
                CONTRACT DEVELOPMENT
              </span>
              <span className="block  leading-[1.2] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[68px] lg:leading-[1.4]">
                <span className="text-black transition-colors duration-300">FOR </span>
                <span className="text-brand-blue">WEB3 APPLICATIONS</span>
              </span>
            </h2>

            <p className="max-w-[720px] font-sans text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-[1.7] text-black/75 transition-colors duration-300">
              Transform your business with custom AI systems that think, learn, and optimize processes at scale. We build
              cutting-edge automation tools, predictive models, generative AI solutions, and neural network architectures that
              unlock efficiency, accuracy, and new digital capabilities across your operations.
            </p>
          </div>

          {/* Right */}
          <div className="flex w-full items-center justify-center ">
            <div className="w-full max-w-[360px]">
              <div className="overflow-hidden rounded-3xl  transition-colors duration-300 ">
                <img src={heroImg} alt="Smart contract development" className="h-auto w-full object-contain" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Security Standards */}
      <section className="w-full bg-white pt-4 pb-8 transition-colors duration-300 sm:pt-10 sm:pb-12">
        <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-10 lg:px-14
">
          <div className="mb-12 text-center">
            <h2 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]
">
              {/* <span className="text-black"> </span> */}
              <span className="text-brand-blue">SECURITY STANDARDS</span>
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
                  className="flex items-center gap-4 w-[35rem] rounded-xl border border-brand-blue/35 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-[1px] hover:border-brand-blue/60 hover:shadow-[0_14px_36px_rgba(0,0,0,0.14)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg  border-brand-blue/40 bg-white/80 text-brand-blue transition-colors duration-300">
                    <img src={it.icon} alt="" className="h-7 w-7 sm:h-8 sm:w-8 object-contain" loading="lazy" />
                  </div>
                  <p className="font-sans font-semibold text-black transition-colors duration-300 text-sm sm:text-base md:text-lg">
                    {it.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Contract Types */}
      <section className="w-full bg-white py-4 transition-colors duration-300 sm:py-6">
        <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-10 lg:px-14
">
          <div className="mb-12 text-center">
            <h2 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
              <span className="text-black">CONTRACT </span>
              <span className="text-brand-blue">TYPES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2">
            {contractTypes.slice(0, 6).map((c) => (
              <div
                key={c.title}
                className="flex flex-col sm:flex-row items-start sm:items-stretch gap-6 rounded-[10px] border border-black/10 bg-gradient-to-b from-white to-[#cfe6fb] p-4 hover:border-2 hover:shadow-lg hover:shadow-blue/80 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 md:h-[260px] lg:h-[280px]"
              >
                <div className="flex-1">
                  <h3 className="font-sans text-lg sm:text-xl md:text-2xl font-bold leading-snug text-black transition-colors duration-300">
                    {c.title}
                  </h3>
                  <p className="mt-4 font-sans text-sm sm:text-base md:text-lg font-medium leading-[1.65] text-black/70 transition-colors duration-300">
                    {c.desc}
                  </p>
                </div>
                <div className="flex w-full sm:w-[150px] shrink-0 items-center justify-center">
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
              <div className="flex flex-col sm:flex-row items-start sm:items-stretch gap-6 rounded-[10px] border border-black/10 bg-gradient-to-b from-white to-[#cfe6fb] p-6 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 md:h-[260px] lg:h-[280px]">
                <div className="flex-1">
                  <h3 className="font-sans text-lg sm:text-xl md:text-2xl font-bold leading-snug text-black transition-colors duration-300 ">
                    {contractTypes[6].title}
                  </h3>
                  <p className="mt-4 font-sans text-sm sm:text-base md:text-lg font-medium leading-[1.65] text-black/70 transition-colors duration-300">
                    {contractTypes[6].desc}
                  </p>
                </div>
                <div className="flex w-full sm:w-[150px] shrink-0 items-center justify-center">
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
      <section className="w-full bg-white pt-6 pb-16 transition-colors duration-300 sm:pt-8 sm:pb-20">
        <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-10 lg:px-14
">
          <div className="mb-12 text-center">
            <h2 className="font-heading  font-bold uppercase tracking-tight transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
              <span className="text-brand-blue">BLOCKCHAIN </span>
              <span className="text-black">COMPATIBILITY</span>
            </h2>
          </div>

          <div className="mx-auto flex max-w-[980px] flex-wrap justify-center gap-6">
            {compatibility.map((name) => (
              <div
                key={name}
                className="min-w-[120px] sm:min-w-[150px] px-5 sm:px-6 py-3 text-sm sm:text-base rounded-[10px] border border-brand-blue/25 bg-transparent text-center font-sans hover:border-brand-blue hover:bg-gradient-to-b hover:from-white hover:to-[#cfe6fb] hover:text-brand-blue font-semibold text-black shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {/* <section className="w-full bg-brand-blue py-10 transition-colors duration-300 sm:py-12">
        <div className="mx-auto max-w-layout px-4 text-center sm:px-6 md:px-10">
          <h3 className="font-heading text-[36px] font-bold uppercase leading-tight text-white sm:text-[44px] md:text-[52px]">
            Start Your Smart Contract Project
          </h3>
          <button className="mt-7 rounded-lg border-2 border-white bg-transparent px-10 py-3 text-xl font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black">
            Contact Now
          </button>
        </div>
      </section> */}
            <BeforeFooter
        title="Start Your Smart Contract Project"
        buttonText="Contact Now"
        paddingClassName="py-8"
        buttonLink="/contact"
        containerClassName="mx-auto max-w-layout px-4 text-center"
        headingAs="h3"
        headingClassName="font-heading text-[28px] sm:text-[40px] md:text-[48px]
 font-bold uppercase leading-tight text-white"
      />
    </div>
    </>
  );
};

export default SmartContractDevelopment;

