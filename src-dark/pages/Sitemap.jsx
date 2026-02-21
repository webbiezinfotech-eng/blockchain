import { Link } from 'react-router-dom';
import BeforeFooter from '../components/common/BeforeFooter';

const Sitemap = () => {
  const mainPages = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  const services = [
    { name: 'Blockchain Development', path: '/services/blockchain-development' },
    { name: 'AI Development', path: '/services/ai-development' },
    { name: 'Smart Contract Development', path: '/services/smart-contract-development' },
    { name: 'Smart Contract Audit', path: '/services/smart-contract-audit' },
    { name: 'Token Development', path: '/services/token-development' },
    { name: 'Crypto Exchange Development', path: '/services/crypto-exchange-development' },
    { name: 'DeFi Development', path: '/services/defi-development' },
    { name: 'NFT Marketplace Development', path: '/services/nft-marketplace-development' },
    { name: 'DApp Development', path: '/services/dapp-development' },
    { name: 'Wallet Development', path: '/services/wallet-development' },
    { name: 'Blockchain Consulting', path: '/services/consulting' },
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'Mobile Application Development', path: '/services/mobile-application-development' },
    { name: 'Custom Development', path: '/services/custom-development' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Sitemap', path: '/sitemap' },
  ];

  return (
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero Section */}
      <section className="w-full bg-white pb-5 pt-5 transition-colors duration-300 dark:bg-black sm:pb-12 lg:pb-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="text-center">
            <h1 className="font-heading font-bold uppercase tracking-tight text-[76px] sm:text-[40px] md:text-[48px] lg:text-[76px] xl:text-[76px] text-black transition-colors duration-300 dark:text-white">
              <span className="text-brand-blue">SITEMAP</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-xl">
              Find all pages and sections of our website organized for easy navigation.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white pb-14 transition-colors duration-300 dark:bg-black sm:pb-16">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="space-y-8">
            {/* Main Pages */}
            <div className="rounded-xl border border-[#c8d7e4] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 dark:border-white/15 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] sm:p-8">
              <h2 className="mb-6 font-heading text-2xl font-bold text-black transition-colors duration-300 dark:text-white sm:text-3xl">
                Main Pages
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {mainPages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="rounded-lg border border-[#c8d7e4] bg-white px-4 py-3 text-center font-sans text-base font-medium text-black transition-all duration-300 hover:border-brand-blue hover:bg-brand-blue/10 hover:text-brand-blue dark:border-white/15 dark:bg-black dark:text-white dark:hover:border-brand-blue dark:hover:bg-brand-blue/10"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="rounded-xl border border-[#c8d7e4] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 dark:border-white/15 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] sm:p-8">
              <h2 className="mb-6 font-heading text-2xl font-bold text-black transition-colors duration-300 dark:text-white sm:text-3xl">
                Services
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="rounded-lg border border-[#c8d7e4] bg-white px-4 py-3 text-center font-sans text-base font-medium text-black transition-all duration-300 hover:border-brand-blue hover:bg-brand-blue/10 hover:text-brand-blue dark:border-white/15 dark:bg-black dark:text-white dark:hover:border-brand-blue dark:hover:bg-brand-blue/10"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal Pages */}
            <div className="rounded-xl border border-[#c8d7e4] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 dark:border-white/15 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] sm:p-8">
              <h2 className="mb-6 font-heading text-2xl font-bold text-black transition-colors duration-300 dark:text-white sm:text-3xl">
                Legal & Information
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {legalPages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="rounded-lg border border-[#c8d7e4] bg-white px-4 py-3 text-center font-sans text-base font-medium text-black transition-all duration-300 hover:border-brand-blue hover:bg-brand-blue/10 hover:text-brand-blue dark:border-white/15 dark:bg-black dark:text-white dark:hover:border-brand-blue dark:hover:bg-brand-blue/10"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BeforeFooter title="Need Help Finding Something?" buttonText="Contact Us" />
    </div>
  );
};

export default Sitemap;

