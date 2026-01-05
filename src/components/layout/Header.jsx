import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import lightLogo from '../../assets/imgs/light_logo.png';
import darkLogo from '../../assets/imgs/dark_logo.png';
import { SERVICES } from '../../constants/services';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[1000] bg-white border-b border-gray-100 transition-colors duration-300 dark:bg-black dark:border-white/10">
      <div className="mx-auto flex h-16 max-w-layout items-center justify-between px-4 sm:h-20 sm:px-5 md:px-10">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            <img
              src={theme === 'dark' ? darkLogo : lightLogo}
              alt="Blockchain App Advisor Logo"
              className="block h-16 w-16 object-contain sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-[180px] xl:w-[180px]"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-5 md:flex lg:gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-colors duration-300 lg:text-base ${
                isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue dark:text-white dark:hover:text-brand-blue'
              }`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-colors duration-300 lg:text-base ${
                isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue dark:text-white dark:hover:text-brand-blue'
              }`
            }
          >
            About
          </NavLink>
          <div className="relative group">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `relative inline-flex items-center gap-1 text-sm font-medium transition-colors duration-300 lg:text-base ${
                  isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue dark:text-white dark:hover:text-brand-blue'
                }`
              }
              aria-haspopup="menu"
            >
              Services
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                className="opacity-70 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                aria-hidden="true"
              >
                <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </NavLink>

            <div
              className="invisible absolute left-0 top-full z-[1001] mt-3 w-[520px] rounded-2xl border border-black/10 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 dark:border-white/10 dark:bg-black"
              role="menu"
              aria-label="Services submenu"
            >
              <div className="grid grid-cols-1 gap-1 lg:grid-cols-2">
                {SERVICES.map((s) => (
                  <NavLink
                    key={s.id}
                    to={s.route}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-black/80 transition-colors hover:bg-black/[0.04] hover:text-black dark:text-white/80 dark:hover:bg-white/[0.06] dark:hover:text-white"
                    role="menuitem"
                  >
                    {s.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <NavLink
            to="/industries"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-colors duration-300 lg:text-base ${
                isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue dark:text-white dark:hover:text-brand-blue'
              }`
            }
          >
            Industries
          </NavLink>
          <NavLink
            to="/case-studies"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-colors duration-300 lg:text-base ${
                isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue dark:text-white dark:hover:text-brand-blue'
              }`
            }
          >
            Case studies
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-colors duration-300 lg:text-base ${
                isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue dark:text-white dark:hover:text-brand-blue'
              }`
            }
          >
            Blog
          </NavLink>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            className="group flex h-8 w-8 items-center justify-center rounded border border-brand-blue bg-transparent text-brand-blue transition-all duration-300 hover:bg-brand-blue hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black sm:h-10 sm:w-10"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              // Moon icon for dark mode
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="sm:w-5 sm:h-5">
                <path
                  d="M17.293 13.293C16.378 13.817 15.305 14.142 14.142 14.142C10.228 14.142 7 10.914 7 7C7 5.895 7.325 4.822 7.849 3.907C4.236 4.822 1.5 8.007 1.5 11.929C1.5 16.135 4.865 19.5 9.071 19.5C12.993 19.5 16.178 16.764 17.093 13.151L17.293 13.293Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              // Sun icon for light mode
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="sm:w-5 sm:h-5">
                <circle
                  cx="10"
                  cy="10"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 2V4M10 16V18M18 10H16M4 10H2M16.364 3.636L14.95 5.05M5.05 14.95L3.636 16.364M16.364 16.364L14.95 14.95M5.05 5.05L3.636 3.636"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
          <button className="hidden items-center gap-2 rounded bg-brand-blue px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-[1px] hover:opacity-90 sm:flex sm:px-6 sm:py-[10px] sm:text-base">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M17.5 9.58333C17.5027 10.6831 17.2459 11.7682 16.75 12.75C16.162 13.8945 15.2581 14.8507 14.1395 15.5068C13.0209 16.1628 11.7319 16.4901 10.4167 16.4583C9.31687 16.4611 8.23181 16.2042 7.25 15.7083L2.5 17.5L4.29167 12.75C3.79583 11.7682 3.53898 10.6831 3.54167 9.58333C3.50984 8.26812 3.83715 6.97911 4.49319 5.86052C5.14924 4.74193 6.10547 3.83803 7.25 3.25C8.23181 2.75417 9.31687 2.49731 10.4167 2.5H10.8333C12.5703 2.59783 14.2109 3.32621 15.3875 4.5525C16.5641 5.77879 17.1922 7.40044 17.15 9.13833L17.5 9.58333Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Contact
          </button>
          
          {/* Mobile Menu Button */}
          <button
            className="flex h-8 w-8 items-center justify-center md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white transition-colors duration-300 dark:border-white/10 dark:bg-black md:hidden">
          <nav className="mx-auto max-w-layout px-4 py-4">
            <div className="flex flex-col gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-base font-medium transition-colors duration-300 ${
                    isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue dark:text-white dark:hover:text-brand-blue'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-base font-medium transition-colors duration-300 ${
                    isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue dark:text-white dark:hover:text-brand-blue'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-left text-base font-medium text-black transition-colors duration-300 hover:text-brand-blue dark:text-white dark:hover:text-brand-blue"
                  onClick={() => setIsServicesMobileOpen((v) => !v)}
                  aria-expanded={isServicesMobileOpen}
                  aria-controls="mobile-services-submenu"
                >
                  <span>Services</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`transition-transform duration-200 ${isServicesMobileOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {isServicesMobileOpen && (
                  <div id="mobile-services-submenu" className="mt-3 flex flex-col gap-2 pl-3">
                    {SERVICES.map((s) => (
                      <NavLink
                        key={s.id}
                        to={s.route}
                        className="text-sm font-medium text-black/80 transition-colors duration-300 hover:text-brand-blue dark:text-white/80 dark:hover:text-brand-blue"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServicesMobileOpen(false);
                        }}
                      >
                        {s.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
              <NavLink
                to="/industries"
                className={({ isActive }) =>
                  `text-base font-medium transition-colors duration-300 ${
                    isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue dark:text-white dark:hover:text-brand-blue'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </NavLink>
              <NavLink
                to="/case-studies"
                className={({ isActive }) =>
                  `text-base font-medium transition-colors duration-300 ${
                    isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue dark:text-white dark:hover:text-brand-blue'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Case studies
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `text-base font-medium transition-colors duration-300 ${
                    isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue dark:text-white dark:hover:text-brand-blue'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </NavLink>
              <button className="mt-2 flex w-full items-center justify-center gap-2 rounded bg-brand-blue px-4 py-2 text-base font-medium text-white transition-all duration-300 hover:opacity-90">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M17.5 9.58333C17.5027 10.6831 17.2459 11.7682 16.75 12.75C16.162 13.8945 15.2581 14.8507 14.1395 15.5068C13.0209 16.1628 11.7319 16.4901 10.4167 16.4583C9.31687 16.4611 8.23181 16.2042 7.25 15.7083L2.5 17.5L4.29167 12.75C3.79583 11.7682 3.53898 10.6831 3.54167 9.58333C3.50984 8.26812 3.83715 6.97911 4.49319 5.86052C5.14924 4.74193 6.10547 3.83803 7.25 3.25C8.23181 2.75417 9.31687 2.49731 10.4167 2.5H10.8333C12.5703 2.59783 14.2109 3.32621 15.3875 4.5525C16.5641 5.77879 17.1922 7.40044 17.15 9.13833L17.5 9.58333Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Contact
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

