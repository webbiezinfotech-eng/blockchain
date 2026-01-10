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
import DeFiDevelopment from './pages/Services/DeFiDevelopment';
import NFTMarketplaceDevelopment from './pages/Services/NFTMarketplaceDevelopment';
import DAppDevelopment from './pages/Services/DAppDevelopment';
import WalletDevelopment from './pages/Services/WalletDevelopment';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';

function App() {
  useTheme(); // This sets data-theme attribute on document root

  return (
    <div className="min-h-screen flex flex-col bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <Header />
      <ScrollToHash />
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
          <Route path="/services/defi-development" element={<DeFiDevelopment />} />
          <Route path="/services/nft-marketplace-development" element={<NFTMarketplaceDevelopment />} />
          <Route path="/services/dapp-development" element={<DAppDevelopment />} />
          <Route path="/services/wallet-development" element={<WalletDevelopment />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

