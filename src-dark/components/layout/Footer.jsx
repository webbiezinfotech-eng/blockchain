import { useTheme } from '../../context/ThemeContext';
import lightLogo from '../../assets/common/light_logo.png';
import darkLogo from '../../assets/common/dark_logo.png';
import { Link, NavLink } from 'react-router-dom';


const Footer = () => {
  const { theme } = useTheme();

  return (
 <footer className="mt-auto rounded-t-[40px] border border-b-0 border-black/10 bg-white dark:border-white/20 dark:bg-black">
  <div className="mx-auto max-w-[1400px] px-5 pb-8 pt-12 sm:px-8 md:px-12 lg:px-14">

    {/* ===== TOP GRID ===== */}
    <div className="mb-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">

      {/* ===== BRAND ===== */}
      <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-6 text-center sm:text-left">
        <img
          src={theme === 'dark' ? darkLogo : lightLogo}
          alt="Blockchain App Advisor Logo"
          className="h-16 w-auto object-contain mx-auto sm:mx-0"
        />

        <p className="max-w-[420px] text-[14px] sm:text-[15px] leading-[1.8] text-gray-600 dark:text-gray-300 mx-auto sm:mx-0">
          We build intelligent blockchain and AI-powered ecosystems that help
          businesses automate, scale, and launch secure, future-ready digital
          products worldwide.
        </p>

        <div>
          <p className="mb-3 text-[14px] sm:text-[15px] font-semibold text-black dark:text-white">
            Get in Touch
          </p>

          <div className="flex justify-center sm:justify-start gap-3">
            {/* social icons */}
          </div>
        </div>
      </div>

      

      {/* ===== COMPANY ===== */}
      <div className="sm:col-span-1 lg:col-span-2 text-center sm:text-left">
        <h4 className="mb-5 text-[14px] sm:text-[15px] font-bold text-black dark:text-white">
          Company
        </h4>
        <ul className="space-y-3 text-[13px] sm:text-[14px] text-gray-600 dark:text-gray-300">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/casestudies">Case Studies</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/careers">Careers</Link></li>
        </ul>
      </div>

      {/* ===== SUPPORT ===== */}
      <div className="sm:col-span-1 lg:col-span-2 text-center sm:text-left">
        <h4 className="mb-5 text-[14px] sm:text-[15px] font-bold text-black dark:text-white">
          Support
        </h4>
        <ul className="space-y-3 text-[13px] sm:text-[14px] text-gray-600 dark:text-gray-300">
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
          <li><Link to="/sitemap">Sitemap</Link></li>
        </ul>
      </div>

      {/* ===== SERVICES ===== */}
      <div className="sm:col-span-1 lg:col-span-4">
        <h4 className="mb-5 text-[14px] sm:text-[15px] font-bold text-black dark:text-white text-center sm:text-center">
          Services
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-[13px] sm:text-[14px] text-gray-600 dark:text-gray-300 text-center sm:text-left">
          
          <NavLink to="/services/blockchain-development" className="hover:text-brand-blue">
            Blockchain Development
          </NavLink>

          <NavLink to="/services/ai-development" className="hover:text-brand-blue">
            AI Development
          </NavLink>

          <NavLink to="/services/smart-contract-development" className="hover:text-brand-blue">
            Smart Contract Dev
          </NavLink>

          <NavLink to="/services/smart-contract-audit" className="hover:text-brand-blue">
            Smart Contract Audit
          </NavLink>

          <NavLink to="/services/token-development" className="hover:text-brand-blue">
            Token Development
          </NavLink>

          <NavLink to="/services/crypto-exchange-development" className="hover:text-brand-blue">
            Crypto Exchange
          </NavLink>

          <NavLink to="/services/defi-development" className="hover:text-brand-blue">
            DeFi Development
          </NavLink>

          <NavLink to="/services/nft-marketplace-development" className="hover:text-brand-blue">
            NFT Marketplace
          </NavLink>

          <NavLink to="/services/dapp-development" className="hover:text-brand-blue">
            DApp Development
          </NavLink>

          <NavLink to="/services/wallet-development" className="hover:text-brand-blue">
            Wallet Development
          </NavLink>

          <NavLink to="/services/consulting-services" className="hover:text-brand-blue">
            Consulting
          </NavLink>

          <NavLink to="/services/mobile-application-development" className="hover:text-brand-blue">
            Mobile App Dev
          </NavLink>

          <NavLink to="/services/website-development" className="hover:text-brand-blue sm:col-span-2">
            Website Development
          </NavLink>

        </div>
      </div>

    </div>

    {/* ===== BOTTOM ===== */}
    <div className="border-t border-gray-200 pt-5 text-center dark:border-white/20">
      <p className="text-[12px] sm:text-[13px] text-gray-600 dark:text-gray-400">
        © 2026 Blockchain App Advisor. All Rights Reserved.
      </p>
    </div>

  </div>
</footer>

  );
};

export default Footer;
