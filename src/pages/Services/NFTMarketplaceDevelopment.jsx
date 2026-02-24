
import BeforeFooter from '../../components/common/BeforeFooter';
import PageHero from "../../components/common/PageHero";
import heroImg from '../../assets/services images/NFTMarkletplaceDevimages/NFTMarketplaceDev-hero.png';
import monetizationImg from '../../assets/services images/NFTMarkletplaceDevimages/MonetizationOptions.png';
import auditImg from '../../assets/services images/NFTMarkletplaceDevimages/AuditProcess.png';
import { Helmet } from 'react-helmet';
import mintingImg from '../../assets/services images/NFTMarkletplaceDevimages/NFTMinting.png';
import auctionsImg from '../../assets/services images/NFTMarkletplaceDevimages/AuctionFixedPriceListing.png';
import royaltiesImg from '../../assets/services images/NFTMarkletplaceDevimages/RoyaltiesRevenueSharing.png';
import dashboardImg from '../../assets/services images/NFTMarkletplaceDevimages/CreatorStorefronts.png';
import walletImg from '../../assets/services images/NFTMarkletplaceDevimages/IntegratedWalletSupport.png';
import metadataImg from '../../assets/services images/NFTMarkletplaceDevimages/MetadataManagement.png';
import multichainImg from '../../assets/services images/NFTMarkletplaceDevimages/MultichainCompatibility.png';
import creatorfeesImg from '../../assets/services images/NFTMarkletplaceDevimages/icons/CreatorFees.gif';
import premiumlistingsImg from '../../assets/services images/NFTMarkletplaceDevimages/icons/PremiumListingPlacement.gif';
import subscriptionImg from '../../assets/services images/NFTMarkletplaceDevimages/icons/SubscriptionModels.gif';
import smartcontractsImg from '../../assets/services images/NFTMarkletplaceDevimages/icons/SmartContractLayer.gif';
import marketplaceLogicImg from '../../assets/services images/NFTMarkletplaceDevimages/icons/MarketplaceCommission.gif';

import smartcontract from '../../assets/services images/NFTMarkletplaceDevimages/icons/SmartContractLayer.gif';
import offchain from '../../assets/services images/NFTMarkletplaceDevimages/icons/OffchainMediaStorage.gif';
import dashboard from '../../assets/services images/NFTMarkletplaceDevimages/icons/AdminDashboard.gif';
import analytics from '../../assets/services images/NFTMarkletplaceDevimages/icons/AnalyticsReportingModule.gif';
import api from '../../assets/services images/NFTMarkletplaceDevimages/icons/SubscriptionModels.gif';


const NFTMarketplaceDevelopment = () => {



  const features = [
    {
      title: 'NFT Minting',
      desc: 'Create unique digital assets instantly with customizable metadata, ownership tracking, and standards support (ERC-721 / ERC-1155).',
      image: mintingImg,
      alt: 'NFT minting',
    },
    {
      title: 'Auctions & Fixed-Price Listings',
      desc: 'Enable bidding, timed auctions, instant buys, and configurable pricing rules with transparent settlement.',
      image: auctionsImg,
      alt: 'Auctions and fixed-price listings',
    },
    {
      title: 'Royalties & Revenue Sharing',
      desc: 'Automate recurring creator royalties and platform fees with transparent on-chain accounting and flexible splits.',
      image: royaltiesImg,
      alt: 'Royalties and revenue sharing',
    },
    {
      title: 'Creator Dashboards',
      desc: 'Offer creator analytics, collection management, sales insights, and listing controls to grow your ecosystem.',
      image: dashboardImg,
      alt: 'Creator dashboards',
    },
    {
      title: 'Integrated Wallet Support',
      desc: 'Support major wallets for secure login, signing, purchases, and transfers with a frictionless UX.',
      image: walletImg,
      alt: 'Wallet support',
    },
    {
      title: 'Metadata Management',
      desc: 'Ensure rich NFT experiences with secure metadata, media handling, and storage integrations for reliability.',
      image: metadataImg,
      alt: 'Metadata management',
    },
    {
      title: 'Multi-Chain Compatibility',
      desc: 'Launch across top networks with adaptable smart contracts, indexing, and marketplace logic.',
      image: multichainImg,
      alt: 'Multi-chain compatibility',
    },
  ];

  const monetization = [
    'Marketplace commissions',
    'Creator fees',
    'Pay-per-minting options',
    'Premium listing placements',
    'Subscription models',
  ];

  const monetizationIcons = [
    marketplaceLogicImg,
    creatorfeesImg,
    smartcontractsImg,
    premiumlistingsImg,
    subscriptionImg,
  ];
  const supportedChains = ['Ethereum', 'BNB Chain', 'Solana', 'Polygon', 'Avalanche', 'Tezos', 'Flow'];

  const auditProcess = [
    'Smart contract layer',
    'Off-chain middle storage (IPFS/Arweave)',
    'Admin dashboard',
    'Analytics & reporting module',
    'Auditing & API integrations',
  ];

  const auditProcessIcons = [
    smartcontract,
    offchain,
    dashboard,
    analytics,
    api,
  ];

  return (
    <><Helmet>
  <title>NFT Marketplace Development Company | Web3 NFT Platform</title>
  <meta
    name="description"
    content="Launch a scalable NFT marketplace with minting, auctions, royalties, wallets, and multi-chain compatibility. Secure and production-ready Web3 development."
  />
  <meta name="keywords" content="NFT Marketplace Development, Web3 NFT Platform, NFT Minting, NFT Auctions, Multi-chain NFT" />
</Helmet>

    <div className="w-full bg-white transition-colors duration-300">
      {/* Hero */}
      {/* <section className="relative w-full bg-white pt-4 pb-8 transition-colors duration-300 sm:pb-8 md:pt-6 md:pb-8 lg:pt-8 lg:pb-8 xl:pt-8 xl:pb-8">
        <div className="mx-auto grid w-full grid-cols-1 items-start gap-0 lg:grid-cols-[65%_35%]">
          <div className="mx-4 md:mx-20 flex w-full flex-col justify-start gap-5 leading-[1.4] lg:text-left">
            <h1 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300">
              <span className="block  leading-[1.2]  sm:leading-[1.25] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[68px] lg:leading-[1.50]">
                CUSTOM NFT MARKETPLACE
              </span>
              <span className="block  leading-[1.2]  sm:leading-[1.25] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[68px] lg:leading-[1.50]">
                DEVELOPMENT FOR{' '}
                <span className="text-brand-blue">WEB3</span>
              </span>
              <span className="block leading-[1.25]  sm:leading-[1.25] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[68px] lg:leading-[1.50]">
                <span className="text-brand-blue">CREATORS</span>{' '}
                <span className="text-black transition-colors duration-300">&amp; </span>
                <span className="text-brand-blue">INNOVATORS</span>
              </span>
            </h1>

            <p className="max-w-[660px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 sm:text-xl">
              Launch a launch-ready NFT marketplace with minting, listings, auctions, royalties, wallets, and scalable storage.
              We build secure, performant platforms with a clean UX and production-grade architecture.
            </p>
          </div>

          <div className="flex w-full items-center justify-center">
            <div className="w-full max-w-[440px] lg:max-w-[380px]">
              <img src={heroImg} alt="NFT marketplace development" className="h-auto w-full object-contain" loading="eager" />
            </div>
          </div>
        </div>
      </section> */}
      <PageHero
  titleLines={[
    { text: "CUSTOM NFT MARKETPLACE", highlight: false },
    { text: "DEVELOPMENT FOR", highlight: false },
    { text: "WEB3", highlight: true },
    { text: "CREATORS & INNOVATORS", highlight: true },
  ]}
  description="Launch a launch-ready NFT marketplace with minting, listings, auctions, royalties, wallets, and scalable storage. We build secure, performant platforms with a clean UX and production-grade architecture."
  image={heroImg}
  imageAlt="NFT marketplace development"
/>

      {/* NFT Marketplace Features */}
      <section className="w-full bg-white py-4 transition-colors duration-300 sm:py-8">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
              NFT MARKETPLACE <span className="text-brand-blue">FEATURES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {features.slice(0, 6).map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-6 md:flex-row md:items-stretch md:justify-between rounded-[14px] hover:border-brand-blue/80 hover:shadow-[0_30px_48px_rgba(0,0,0,0.10)] border border-black/10 bg-gradient-to-b from-white to-[#cfe6fb] p-7 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300"
              >
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-[22px] font-semibold leading-snug text-black transition-colors duration-300 sm:text-[24px]">
                    {f.title}
                  </h3>
                  <p className="mt-4 text-[16px] font-medium leading-[1.75] text-black/70 transition-colors duration-300 sm:text-[17px]">
                    {f.desc}
                  </p>
                </div>

                <div className="mx-auto w-[140px] sm:w-[160px] md:mx-0 md:w-[180px] shrink-0 flex items-center justify-center">
                  <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl transition-colors duration-300">
                    <img src={f.image} alt={f.alt} className="h-full w-full object-contain p-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Centered last feature */}
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-[780px]">
              <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:justify-between rounded-[14px] border border-black/10 bg-gradient-to-b from-white to-[#cfe6fb] p-7 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-[22px] font-semibold leading-snug text-black transition-colors duration-300 sm:text-[24px]">
                    {features[6].title}
                  </h3>
                  <p className="mt-4 text-[16px] font-medium leading-[1.75] text-black/70 transition-colors duration-300 sm:text-[17px]">
                    {features[6].desc}
                  </p>
                </div>

                <div className="mx-auto w-[140px] sm:w-[160px] md:mx-0 md:w-[180px] shrink-0 flex items-center justify-center">
                  <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl transition-colors duration-300">
                    <img src={features[6].image} alt={features[6].alt} className="h-full w-full object-contain p-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monetization Options */}
      <section className="w-full bg-white py-4 transition-colors duration-300 sm:py-8">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-left">
            <h2 className="font-heading  font-bold uppercase tracking-tight text-black transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
              <span className="text-brand-blue">MONETIZATION </span>OPTIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[55%_45%] lg:gap-14">
            <div className="flex w-full flex-col gap-3">
              {monetization.map((label ,idx ) => (
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

            <div className="flex w-full items-center justify-center lg:pl-12 mx-auto lg:mx-0">
              <div className="w-full max-w-[400px]">
                <img src={monetizationImg} alt="Monetization illustration" className="h-auto w-full object-contain" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Blockchains */}
      <section className="w-full bg-white py-4 transition-colors duration-300 sm:py-8">
  <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
    
    {/* Heading */}
    <div className="mb-10 text-center">
      <h2 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
         <span className="text-brand-blue">SUPPORTED BLOCKCHAINS</span>
      </h2>
    </div>

    <div className="mx-auto max-w-[980px]">

      {/* ROW 1 — 4 cards */}
      <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {supportedChains.slice(0, 4).map((name) => (
          <div
            key={name}
            className="min-w-[170px] hover:border-brand-blue hover:bg-gradient-to-b hover:from-white hover:to-[#cfe6fb] rounded-[10px] border border-brand-blue bg-white px-8 py-4
              text-center font-sans text-[18px] font-semibold text-black
              shadow-[0_10px_28px_rgba(0,0,0,0.10)]
              transition-colors duration-300 hover:text-brand-blue"
          >
            {name}
          </div>
        ))}
      </div>

      {/* ROW 2 — 3 cards (centered) */}
      <div className="mt-6 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:mt-8">
        {supportedChains.slice(4, 7).map((name) => (
          <div
            key={name}
            className="min-w-[170px] hover:border-brand-blue hover:bg-gradient-to-b hover:from-white hover:to-[#cfe6fb] rounded-[10px] border border-brand-blue bg-white px-8 py-4
              text-center font-sans text-[18px] font-semibold text-black
              shadow-[0_10px_28px_rgba(0,0,0,0.10)]
              transition-colors duration-300 hover:text-brand-blue"
          >
            {name}
          </div>
        ))}
      </div>

    </div>
  </div>
</section>


      {/* Audit Process Overview */}
      <section className="w-full bg-white pt-4 pb-14 transition-colors duration-300 sm:pt-8 sm:pb-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading  font-bold uppercase tracking-tight text-black transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
              <span className="text-black">AUDIT PROCESS </span>
              <span className="text-brand-blue">OVERVIEW</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[50%_50%] lg:gap-14">
            <div className="flex items-center justify-center lg:justify-start mx-auto lg:mx-0">
              <div className="w-full max-w-[520px]">
                <img src={auditImg} alt="Audit process illustration" className="h-auto w-full object-contain" loading="lazy" />
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 lg:max-w-[520px]">
              {auditProcess.map((label,idx) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-brand-blue/25 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-[1px] hover:border-brand-blue/60 hover:shadow-[0_14px_36px_rgba(0,0,0,0.14)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg  border-brand-blue/40 bg-white/80 text-brand-blue transition-colors duration-300">
                    {/* <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="opacity-90">
                      <path d="M12 2 20 6v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4Z" stroke="currentColor" strokeWidth="1.8" />
                      <path d="m9 12 2 2 4-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> */}
                     <img
                      src={auditProcessIcons?.[idx]}

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
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {/* <section className="w-full bg-brand-blue py-10 transition-colors duration-300 sm:py-12">
        <div className="mx-auto max-w-layout px-4 text-center sm:px-6 md:px-10">
          <h3 className="font-heading text-[34px] font-bold uppercase leading-tight text-white sm:text-[44px] md:text-[52px]">
            Launch Your NFT Marketplace
          </h3>
          <button className="mt-7 rounded-lg border-2 border-white bg-transparent px-10 py-3 text-xl font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black">
            Contact Now
          </button>
        </div>
      </section> */}

       {/* <BeforeFooter title=" Launch Your NFT Marketplace" buttonText="CONTACT NOW" buttonLink="/contact" /> */}
   
    <BeforeFooter
        title="Launch Your NFT Marketplace"
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

export default NFTMarketplaceDevelopment;

