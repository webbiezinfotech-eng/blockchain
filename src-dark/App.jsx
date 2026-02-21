import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToHash from './components/common/ScrollToHash';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services/Services';
import AIDevelopment from './pages/Services/AIDevelopment';
import BlockchainDevelopment from './pages/Services/BlockchainDevelopment';
import SmartContractDevelopment from './pages/Services/SmartContractDevelopment';
import SmartContractAudit from './pages/Services/SmartContractAudit';
import TokenDevelopment from './pages/Services/TokenDevelopment';
import CryptoExchangeDevelopment from './pages/Services/CryptoExchangeDevelopment';
import CustomDevelopment from './pages/Services/CustomDevelopment';
import DeFiDevelopment from './pages/Services/DeFiDevelopment';
import NFTMarketplaceDevelopment from './pages/Services/NFTMarketplaceDevelopment';
import DAppDevelopment from './pages/Services/DAppDevelopment';
import WalletDevelopment from './pages/Services/WalletDevelopment';
import BlockchainConsulting from './pages/Services/BlockchainConsulting';
import WebsiteDevelopment from './pages/Services/WebsiteDevelopment';
import MobileApplicationDevelopment from './pages/Services/MobileApplicationDevelopment';
import Industries from './pages/Industries';
import Products from './pages/Products';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Sitemap from './pages/Sitemap';
import ScrollToTop from './components/common/ScrollToTop';


function App() {
  useTheme(); // This sets data-theme attribute on document root

   useEffect(() => {
    AOS.init({
      duration: 900,        // animation speed
      easing: "ease-out-cubic",
      once: true,           // ek baar hi animate ho
      offset: 120,          // thoda scroll hone ke baad
    });
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <Header />
      <ScrollToHash />
        <ScrollToTop />
      {/* Spacer for fixed header (h-16 sm:h-20) */}
      <div className="h-16 sm:h-20" />
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ai-development" element={<AIDevelopment />} />
          <Route path="/services/blockchain-development" element={<BlockchainDevelopment />} />
          <Route path="/services/smart-contract-development" element={<SmartContractDevelopment />} />
          <Route path="/services/smart-contract-audit" element={<SmartContractAudit />} />
          <Route path="/services/token-development" element={<TokenDevelopment />} />
          <Route path="/services/crypto-exchange-development" element={<CryptoExchangeDevelopment />} />
          <Route path="/services/custom-development" element={<CustomDevelopment />} />
          <Route path="/services/consulting" element={<BlockchainConsulting />} />
          <Route path="/services/defi-development" element={<DeFiDevelopment />} />
          <Route path="/services/nft-marketplace-development" element={<NFTMarketplaceDevelopment />} />
          <Route path="/services/dapp-development" element={<DAppDevelopment />} />
          <Route path="/services/wallet-development" element={<WalletDevelopment />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/mobile-application-development" element={<MobileApplicationDevelopment />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/products" element={<Products />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

