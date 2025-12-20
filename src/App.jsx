import { useTheme } from './context/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import './styles/variables.css';
import './styles/colors.css';
import './styles/global.css';

function App() {
  useTheme(); // This sets data-theme attribute on document root

  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;

