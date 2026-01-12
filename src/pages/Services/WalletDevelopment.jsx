import BeforeFooter from '../../components/common/BeforeFooter';
import ServiceCard from '../../components/common/ServiceCard';

import heroImg from '../../assets/services images/WalletDevimages/WalletDev-hero.png';

import wCustodialImg from '../../assets/services images/WalletDevimages/CentralizedExchanges.png';
import wNonCustodialImg from '../../assets/services images/WalletDevimages/NonCustodialWallet.png';
import wMobileImg from '../../assets/services images/WalletDevimages/MobileWallet.png';
import wWebImg from '../../assets/services images/WalletDevimages/WebWallet.png';
import wHardwareImg from '../../assets/services images/WalletDevimages/HardwareWalletIntegration.png';

import f1Img from '../../assets/services images/WalletDevimages/MultichainAssetSupport.png';
import f2Img from '../../assets/services images/WalletDevimages/TokenSwaps.png';
import f3Img from '../../assets/services images/WalletDevimages/StakingYieldEarning.png';
import f4Img from '../../assets/services images/WalletDevimages/NFTSupport.png';
import f5Img from '../../assets/services images/WalletDevimages/QRPayments.png';
import f6Img from '../../assets/services images/WalletDevimages/PortfolioTracker.png';
import f7Img from '../../assets/services images/WalletDevimages/PushNotifications.png';
import f8Img from '../../assets/services images/WalletDevimages/SocialBiometricLogin.png';

import iconMpc from '../../assets/services images/WalletDevimages/icons/MPC.gif';
import iconEnd2EndEncryption from '../../assets/services images/WalletDevimages/icons/End2EndEncryption.gif';
import iconSecureKeyManagement from '../../assets/services images/WalletDevimages/icons/SecureKeyManagement.gif';
import iconAntiPhishing from '../../assets/services images/WalletDevimages/icons/AntiPhishingModule.gif';
import iconDeviceBinding from '../../assets/services images/WalletDevimages/icons/DeviceBnding.gif';
import iconRiskScoring from '../../assets/services images/WalletDevimages/icons/TransactionRiskScoring.gif';

const WalletDevelopment = () => {
  const walletTypes = [
    {
      title: 'Custodial Wallets (CEX)',
      description: 'Secure, compliance-ready custody with admin controls, hot/cold wallet workflows, and enterprise monitoring.',
      image: wCustodialImg,
    },
    {
      title: 'Non-Custodial Wallets',
      description: 'User-owned keys with seed phrase setup, secure signing, on-chain swaps, and transparent control.',
      image: wNonCustodialImg,
    },
    {
      title: 'Mobile Wallets',
      description: 'Fast, clean UX with push notifications, QR payments, and biometric login for everyday usage.',
      image: wMobileImg,
    },
    {
      title: 'Web Wallets',
      description: 'Browser-based wallets with strong security, session controls, and multi-chain account handling.',
      image: wWebImg,
    },
    {
      title: 'Hardware Integration',
      description: 'Ledger/Trezor-style integrations for secure signing, approvals, and high-value asset protection.',
      image: wHardwareImg,
    },
  ];

  const coreFeatures = [
    {
      title: 'Multi-Chain Asset Support',
      desc: 'Support multiple networks for tokens, NFTs, and transfers with unified balances and clear portfolio views.',
      image: f1Img,
      alt: 'Multi-chain asset support',
    },
    {
      title: 'Token Swaps (DEX Integration)',
      desc: 'Enable secure token swapping with routing, slippage protection, and best-price execution.',
      image: f2Img,
      alt: 'Token swaps',
    },
    {
      title: 'Staking & Yield Earning',
      desc: 'Let users stake assets, earn rewards, and manage positions with transparent on-chain activity.',
      image: f3Img,
      alt: 'Staking and yield earning',
    },
    {
      title: 'NFT Support',
      desc: 'Display NFT collections, manage transfers, and support marketplace actions with smooth media rendering.',
      image: f4Img,
      alt: 'NFT support',
    },
    {
      title: 'QR Payments',
      desc: 'Support QR-based transfers for fast payments, invoicing, and frictionless checkout flows.',
      image: f5Img,
      alt: 'QR payments',
    },
    {
      title: 'Portfolio Tracker',
      desc: 'Real-time valuations, PnL insights, and asset analytics with configurable views and history.',
      image: f6Img,
      alt: 'Portfolio tracker',
    },
    {
      title: 'Push Notifications',
      desc: 'Notify users about incoming transfers, confirmations, approvals, and suspicious activity.',
      image: f7Img,
      alt: 'Push notifications',
    },
    {
      title: 'Social Login / Biometric Login',
      desc: 'Optional OAuth and device biometrics to improve onboarding and strengthen account protection.',
      image: f8Img,
      alt: 'Social login and biometric login',
    },
  ];

  const securityTop = [
    { t: 'MPC (Multi-Party Computation)', icon: iconMpc },
    { t: 'End-to-End Encryption', icon: iconEnd2EndEncryption },
    { t: 'Secure Key Management', icon: iconSecureKeyManagement },
  ];
  const securityBottom = [
    { t: 'Anti-Phishing Modules', icon: iconAntiPhishing },
    { t: 'Device Binding', icon: iconDeviceBinding },
    { t: 'Transaction Risk Scoring', icon: iconRiskScoring },
  ];

  const supportedChains = ['Ethereum', 'BNB Chain', 'Solana', 'Polygon', 'Avalanche', 'Tron', 'Aptos', 'Bitcoin'];

  return (
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero */}
      <section className="w-full bg-white pt-4 pb-12 transition-colors duration-300 dark:bg-black sm:pt-6 sm:pb-14 lg:pt-8 lg:pb-16">
        <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[58%_42%] lg:pl-[3rem] lg:pr-[5rem]">
          <div className="flex w-full flex-col gap-6">
            <h1 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white">
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35]">
                NEXT-GEN CRYPTO WALLET
              </span>
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35]">
                DEVELOPMENT FOR{' '}
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">SECURE</span>
              </span>
              <span className="block text-[28px] leading-[1.25] sm:text-[36px] sm:leading-[1.25] lg:text-[40px] lg:leading-[1.25]">
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">DIGITAL ASSET</span> MANAGEMENT
              </span>
            </h1>

            <p className="max-w-[760px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-lg">
              Build a modern wallet experience with multi-chain support, high-performance UX, secure key management, and
              optional compliance tooling. We ship mobile and web wallets designed for real users and real scale.
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[560px]">
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.04]">
                <img src={heroImg} alt="Wallet development" className="h-auto w-full object-contain" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Types */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              WALLET <span className="text-brand-blue">TYPES</span>
            </h2>
          </div>

          <div className="flex w-full gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {walletTypes.map((card, idx) => (
              <ServiceCard
                key={card.title}
                title={card.title}
                description={card.description}
                image={card.image}
                isExpanded={idx === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              CORE <span className="text-brand-blue">FEATURES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {coreFeatures.map((f) => (
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
        </div>
      </section>

      {/* Security Architecture */}
      <section className="w-full bg-white pt-4 pb-14 transition-colors duration-300 dark:bg-black sm:pt-6 sm:pb-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              SECURITY <span className="text-brand-blue">ARCHITECTURE</span>
            </h2>
          </div>

          <div className="mx-auto max-w-[980px]">
            {/* Desktop/tablet layout */}
            <div className="hidden sm:block">
              {/* Top row */}
              <div className="grid grid-cols-3 gap-10">
                {securityTop.map((i) => (
                  <div key={i.t} className="flex flex-col items-center">
                    <div className="flex w-full max-w-[260px] flex-col items-center rounded-[10px] border border-[#c8d7e4] bg-white px-5 py-6 text-center shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-colors duration-300 dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-brand-blue/45 bg-white text-brand-blue transition-colors duration-300 dark:border-white/30 dark:bg-black dark:text-white">
                        <img src={i.icon} alt="" className="h-10 w-10 object-contain" loading="lazy" />
                      </div>
                      <div className="mt-4 max-w-[220px] font-sans text-[18px] font-semibold leading-snug text-black transition-colors duration-300 dark:text-white">
                        {i.t}
                      </div>
                    </div>

                    <div className="mt-8 h-20 w-0 border-l-2 border-dashed border-brand-blue/60 dark:border-white/50" />
                  </div>
                ))}
              </div>

              {/* Middle thick line */}
              <div className="h-[6px] w-full rounded-full bg-brand-blue dark:bg-white" />

              {/* Bottom row */}
              <div className="grid grid-cols-3 gap-10">
                {securityBottom.map((i) => (
                  <div key={i.t} className="flex flex-col items-center">
                    <div className="h-20 w-0 border-l-2 border-dashed border-brand-blue/60 dark:border-white/50" />

                    <div className="mt-8 flex w-full max-w-[260px] flex-col items-center rounded-[10px] border border-[#c8d7e4] bg-white px-5 py-6 text-center shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-colors duration-300 dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-brand-blue/45 bg-white text-brand-blue transition-colors duration-300 dark:border-white/30 dark:bg-black dark:text-white">
                        <img src={i.icon} alt="" className="h-10 w-10 object-contain" loading="lazy" />
                      </div>
                      <div className="mt-4 max-w-[220px] font-sans text-[18px] font-semibold leading-snug text-black transition-colors duration-300 dark:text-white">
                        {i.t}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile fallback */}
            <div className="grid grid-cols-1 gap-4 sm:hidden">
              {[...securityTop, ...securityBottom].map((i) => (
                <div
                  key={i.t}
                  className="flex items-center gap-4 rounded-xl border border-[#c8d7e4] bg-white px-5 py-4 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/20 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-blue bg-white text-brand-blue">
                    <img src={i.icon} alt="" className="h-9 w-9 object-contain" loading="lazy" />
                  </div>
                  <p className="font-sans text-[16px] font-semibold text-black transition-colors duration-300 dark:text-white">
                    {i.t}
                  </p>
                </div>
              ))}
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
        title="Build Your Crypto Wallet"
        buttonText="Contact Now"
        paddingClassName="py-10 sm:py-12"
        containerClassName="mx-auto max-w-layout px-4 text-center sm:px-6 md:px-10"
        headingAs="h3"
        headingClassName="font-heading text-[36px] font-bold uppercase leading-tight text-white sm:text-[44px] md:text-[52px]"
      />
    </div>
  );
};

export default WalletDevelopment;

