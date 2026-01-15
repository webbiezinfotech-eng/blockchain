import heroImg from '../../assets/services images/NFTMarkletplaceDevimages/NFTMarketplaceDev-hero.png';
import monetizationImg from '../../assets/services images/NFTMarkletplaceDevimages/MonetizationOptions.png';
import auditImg from '../../assets/services images/NFTMarkletplaceDevimages/AuditProcess.png';

import mintingImg from '../../assets/services images/NFTMarkletplaceDevimages/NFTMinting.png';
import auctionsImg from '../../assets/services images/NFTMarkletplaceDevimages/AuctionFixedPriceListing.png';
import royaltiesImg from '../../assets/services images/NFTMarkletplaceDevimages/RoyaltiesRevenueSharing.png';
import dashboardImg from '../../assets/services images/NFTMarkletplaceDevimages/CreatorStorefronts.png';
import walletImg from '../../assets/services images/NFTMarkletplaceDevimages/IntegratedWalletSupport.png';
import metadataImg from '../../assets/services images/NFTMarkletplaceDevimages/MetadataManagement.png';
import multichainImg from '../../assets/services images/NFTMarkletplaceDevimages/MultichainCompatibility.png';

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

  const supportedChains = ['Ethereum', 'BNB Chain', 'Solana', 'Polygon', 'Avalanche', 'Tezos', 'Flow'];

  const auditProcess = [
    'Smart contract layer',
    'Off-chain middle storage (IPFS/Arweave)',
    'Admin dashboard',
    'Analytics & reporting module',
    'Auditing & API integrations',
  ];

  return (
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero */}
      <section className="w-full bg-white pt-4 pb-12 transition-colors duration-300 dark:bg-black sm:pt-6 sm:pb-14 lg:pt-8 lg:pb-16">
        <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[58%_42%] lg:pl-[3rem] lg:pr-[5rem]">
          <div className="flex w-full flex-col gap-6">
            <h1 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white">
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[60px] lg:leading-[1.50]">
                CUSTOM NFT MARKETPLACE
              </span>
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.50]">
                DEVELOPMENT FOR{' '}
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">WEB3</span>
              </span>
              <span className="block text-[28px] leading-[1.25] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.50]">
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">CREATORS</span>{' '}
                <span className="text-black transition-colors duration-300 dark:text-white">&amp; </span>
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">INNOVATORS</span>
              </span>
            </h1>

            <p className="max-w-[760px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-lg">
              Launch a launch-ready NFT marketplace with minting, listings, auctions, royalties, wallets, and scalable storage.
              We build secure, performant platforms with a clean UX and production-grade architecture.
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[440px] lg:max-w-[480px]">
              <img src={heroImg} alt="NFT marketplace development" className="h-auto w-full object-contain" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* NFT Marketplace Features */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              NFT MARKETPLACE <span className="text-brand-blue">FEATURES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {features.slice(0, 6).map((f) => (
              <div
                key={f.title}
                className="flex items-stretch justify-between gap-6 rounded-[14px] border border-black/10 bg-gradient-to-b from-white to-[#cfe6fb] p-7 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-brand-blue/40 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] dark:shadow-[0_10px_30px_rgba(0,0,0,0.65)]"
              >
                <div className="flex-1">
                  <h3 className="text-[22px] font-semibold leading-snug text-black transition-colors duration-300 dark:text-white sm:text-[24px]">
                    {f.title}
                  </h3>
                  <p className="mt-4 text-[16px] font-medium leading-[1.75] text-black/70 transition-colors duration-300 dark:text-white/80 sm:text-[17px]">
                    {f.desc}
                  </p>
                </div>

                <div className="flex w-[180px] shrink-0 items-center justify-center">
                  <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-white/70 transition-colors duration-300 dark:bg-black/20">
                    <img src={f.image} alt={f.alt} className="h-full w-full object-contain p-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Centered last feature */}
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-[780px]">
              <div className="flex items-stretch justify-between gap-6 rounded-[14px] border border-black/10 bg-gradient-to-b from-white to-[#cfe6fb] p-7 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-brand-blue/40 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] dark:shadow-[0_10px_30px_rgba(0,0,0,0.65)]">
                <div className="flex-1">
                  <h3 className="text-[22px] font-semibold leading-snug text-black transition-colors duration-300 dark:text-white sm:text-[24px]">
                    {features[6].title}
                  </h3>
                  <p className="mt-4 text-[16px] font-medium leading-[1.75] text-black/70 transition-colors duration-300 dark:text-white/80 sm:text-[17px]">
                    {features[6].desc}
                  </p>
                </div>

                <div className="flex w-[180px] shrink-0 items-center justify-center">
                  <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-white/70 transition-colors duration-300 dark:bg-black/20">
                    <img src={features[6].image} alt={features[6].alt} className="h-full w-full object-contain p-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monetization Options */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-left">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              <span className="text-brand-blue">MONETIZATION </span>OPTIONS
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

            <div className="flex w-full items-center justify-center lg:justify-end lg:pl-12">
              <div className="w-full max-w-[520px]">
                <img src={monetizationImg} alt="Monetization illustration" className="h-auto w-full object-contain" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Blockchains */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              SUPPORTED <span className="text-brand-blue">BLOCKCHAINS</span>
            </h2>
          </div>

          <div className="mx-auto flex max-w-[980px] flex-wrap justify-center gap-6">
            {supportedChains.map((name) => (
             <div
  key={name}
  className="min-w-[170px] rounded-[10px] border border-brand-blue bg-white px-8 py-4 text-center font-sans text-[18px] font-semibold text-black shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 
dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] dark:text-white dark:shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
>
  {name}
</div>

            ))}
          </div>
        </div>
      </section>

      {/* Audit Process Overview */}
      <section className="w-full bg-white pt-6 pb-14 transition-colors duration-300 dark:bg-black sm:pt-8 sm:pb-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[38px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[52px] lg:text-[64px]">
              <span className="text-black dark:text-white">AUDIT PROCESS </span>
              <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">OVERVIEW</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[42%_58%] lg:gap-14">
            <div className="flex items-center justify-center lg:justify-start">
              <div className="w-full max-w-[520px]">
                <img src={auditImg} alt="Audit process illustration" className="h-auto w-full object-contain" loading="lazy" />
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 lg:max-w-[520px]">
              {auditProcess.map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-brand-blue/25 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-[1px] hover:border-brand-blue/60 hover:shadow-[0_14px_36px_rgba(0,0,0,0.14)] dark:border-white/25 dark:bg-black dark:hover:border-brand-blue/70"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-blue/40 bg-white/80 text-brand-blue transition-colors duration-300 dark:border-white/35 dark:bg-black/30 dark:text-white">
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

      {/* Final CTA */}
      <section className="w-full bg-brand-blue py-10 transition-colors duration-300 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] sm:py-12">
        <div className="mx-auto max-w-layout px-4 text-center sm:px-6 md:px-10">
          <h3 className="font-heading text-[34px] font-bold uppercase leading-tight text-white sm:text-[44px] md:text-[52px]">
            Launch Your NFT Marketplace
          </h3>
          <button className="mt-7 rounded-lg border-2 border-white bg-transparent px-10 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black">
            Contact Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default NFTMarketplaceDevelopment;

