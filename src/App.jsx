import { Route, Routes } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToHash from './components/common/ScrollToHash';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
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

