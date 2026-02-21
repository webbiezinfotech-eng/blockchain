import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import lightLogo from '../../assets/common/light_logo.png';
import { SERVICES } from '../../constants/services';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const [isServicesDesktopOpen, setIsServicesDesktopOpen] = useState(false);
  const servicesDesktopRef = useRef(null);

  useEffect(() => {
    const onMouseDown = (e) => {
      if (!isServicesDesktopOpen) return;
      if (!servicesDesktopRef.current) return;
      if (servicesDesktopRef.current.contains(e.target)) return;
      setIsServicesDesktopOpen(false);
    };

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsServicesDesktopOpen(false);
    };

    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isServicesDesktopOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-[1000] border-b border-gray-100 bg-white/95 backdrop-blur transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-layout items-center justify-between px-4 sm:h-20 sm:px-5 md:px-10">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <NavLink to="/" className="flex items-center justify-center">
            <img
              src={lightLogo}
              alt="Blockchain App Advisor Logo"
              className="block h-16 w-16 object-contain sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-[180px] xl:w-[180px]"
            />
          </NavLink>
        </div>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-5 md:flex lg:gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-xl font-medium transition-colors duration-300 lg:text-xl ${
                isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue'
              }`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative text-xl font-medium transition-colors duration-300 lg:text-xl ${
                isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue'
              }`
            }
          >
            About
          </NavLink>
          <div ref={servicesDesktopRef} className="relative flex items-center">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `relative inline-flex items-center text-sm font-medium transition-colors duration-300 lg:text-xl ${
                  isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue'
                }`
              }
              onClick={() => setIsServicesDesktopOpen(false)}
            >
              Services
            </NavLink>

            <button
              type="button"
              className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-lg text-black/70 transition-colors duration-200 hover:bg-black/[0.04] hover:text-black"
              aria-label="Toggle Services menu"
              aria-haspopup="menu"
              aria-expanded={isServicesDesktopOpen}
              onClick={() => setIsServicesDesktopOpen((v) => !v)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                className={`opacity-70 transition-transform duration-200 ${isServicesDesktopOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {isServicesDesktopOpen && (
              <div
                className="absolute left-1/2 top-full z-[1001] mt-3 w-[760px] max-w-[92vw] -translate-x-1/2 rounded-2xl border border-black/10 bg-white p-4 shadow-xl transition-all duration-200"
                role="menu"
                aria-label="Services submenu"
              >
                <div className="grid grid-cols-1 gap-1 lg:grid-cols-2">
                  {SERVICES.map((s) => (
                    <NavLink
                      key={s.id}
                      to={s.route}
                      className={({ isActive }) =>
                        `rounded-xl px-3 py-2 text-lg font-medium transition-colors ${
                          isActive
                            ? 'bg-brand-blue/10 text-brand-blue font-semibold'
                            : 'text-black/80 hover:bg-black/[0.04] hover:text-black'
                        }`
                      }
                      role="menuitem"
                      onClick={() => setIsServicesDesktopOpen(false)}
                    >
                      {s.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavLink
            to="/industries"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-colors duration-300 lg:text-xl ${
                isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue'
              }`
            }
          >
            Industries
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-colors duration-300 lg:text-xl ${
                isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue'
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-colors duration-300 lg:text-xl ${
                isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue'
              }`
            }
          >
            FAQ
          </NavLink>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <NavLink
            to="/contact"
            className="hidden items-center gap-2 rounded bg-brand-blue px-4 py-2 text-xl font-medium text-white transition-all duration-300 hover:-translate-y-[1px] hover:opacity-90 sm:flex sm:px-6 sm:py-[10px] sm:text-base"
          >
            Contact
          </NavLink>
          
          {/* Mobile Menu Button */}
          <button
            className="flex h-8 w-8 items-center justify-center md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
        <div className="border-t border-gray-100 bg-white transition-colors duration-300 md:hidden">
          <nav className="mx-auto max-w-layout px-4 py-4">
            <div className="flex flex-col gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-xl font-medium transition-colors duration-300 ${
                    isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue'
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
                  `text-xl font-medium transition-colors duration-300 ${
                    isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-left text-xl font-medium text-black transition-colors duration-300 hover:text-brand-blue"
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
                        className={({ isActive }) =>
                          `text-xl font-medium transition-colors duration-300 ${
                            isActive
                              ? 'text-brand-blue font-semibold'
                              : 'text-black/80 hover:text-brand-blue'
                          }`
                        }
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
                  `text-xl font-medium transition-colors duration-300 ${
                    isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `text-xl font-medium transition-colors duration-300 ${
                    isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </NavLink>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  `text-xl font-medium transition-colors duration-300 ${
                    isActive ? 'text-brand-blue' : 'text-black hover:text-brand-blue'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </NavLink>
              <NavLink
                to="/contact"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded bg-brand-blue px-4 py-2 text-xl font-medium text-white transition-all duration-300 hover:opacity-90"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

