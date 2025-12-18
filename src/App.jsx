import { useTheme } from './context/ThemeContext';
import './styles/variables.css';
import './styles/global.css';
import './styles/themes/light.css';
import './styles/themes/dark.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${theme}-theme`}>
      <div className="container" style={{ paddingTop: '40px' }}>
        <h1>Welcome to Blockchain React App</h1>
        <p>Current theme: {theme}</p>
        <button className="button" onClick={toggleTheme}>
          Toggle Theme ({theme === 'light' ? 'Dark' : 'Light'})
        </button>
      </div>
    </div>
  );
}

export default App;

