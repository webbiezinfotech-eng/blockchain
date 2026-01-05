import { useTheme } from '../../context/ThemeContext';
import lightLogo from '../../assets/imgs/light_logo.png';
import darkLogo from '../../assets/imgs/dark_logo.png';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="mt-auto rounded-t-[40px] border border-b-0 border-black/10 bg-transparent transition-colors duration-300 dark:border-white/25 dark:bg-transparent">
      <div className="mx-auto max-w-layout px-4 pb-6 pt-8 sm:px-5 sm:pt-10 md:px-10 md:pb-8 md:pt-12 lg:pt-[60px] lg:pb-10">
        <div className="mb-8 grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Left Column - Branding */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center">
                <img
                  src={theme === 'dark' ? darkLogo : lightLogo}
                  alt="Blockchain App Advisor Logo"
                  className="h-20 w-20 object-contain sm:h-24 sm:w-24 md:h-28 md:w-28"
                />
              </div>
            </div>
            
            <p className="text-xs sm:text-sm leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-300 max-w-[300px]">
              We build intelligent blockchain and AI-powered ecosystems that help businesses automate, scale, and launch secure, future-ready digital products worldwide.
            </p>
            
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-black transition-colors duration-300 dark:text-white">Get in Touch</p>
              <div className="flex gap-3">
                {/* LinkedIn */}
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white transition-all duration-300 hover:border-brand-blue hover:bg-brand-blue/10 dark:border-gray-700 dark:bg-gray-800">
                  <svg className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                
                {/* Instagram */}
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white transition-all duration-300 hover:border-brand-blue hover:bg-brand-blue/10 dark:border-gray-700 dark:bg-gray-800">
                  <svg className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* WhatsApp */}
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white transition-all duration-300 hover:border-brand-blue hover:bg-brand-blue/10 dark:border-gray-700 dark:bg-gray-800">
                  <svg className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297a11.815 11.815 0 00-8.415-3.48c-6.624 0-12.01 5.386-12.01 12.01 0 2.096.54 4.142 1.565 5.945l-1.696 6.162 6.335-1.667a11.882 11.882 0 005.806 1.505h.005c6.624 0 12.009-5.386 12.009-12.009 0-3.176-1.24-6.165-3.495-8.411"/>
                  </svg>
                </a>
                
                {/* YouTube */}
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white transition-all duration-300 hover:border-brand-blue hover:bg-brand-blue/10 dark:border-gray-700 dark:bg-gray-800">
                  <svg className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Company Column */}
          <div className="flex flex-col">
            <h4 className="mb-4 text-base font-bold text-black transition-colors duration-300 dark:text-white sm:mb-5 sm:text-lg">Company</h4>
            <ul className="list-none p-0 space-y-2 sm:space-y-3">
              <li><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/">Home</a></li>
              <li><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/about">About Us</a></li>
              <li><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/case-studies">Case Studies</a></li>
              <li><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/blog">Blogs</a></li>
              <li><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/contact">Contact</a></li>
              <li><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/careers">Careers</a></li>
            </ul>
          </div>
          
          {/* Services Column */}
          <div className="flex flex-col">
            <h4 className="mb-4 text-base font-bold text-black transition-colors duration-300 dark:text-white sm:mb-5 sm:text-lg">Services</h4>
            <ul className="list-none p-0 space-y-2 sm:space-y-3">
              <li><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/services">Blockchain Development</a></li>
              <li><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/services">AI Development</a></li>
              <li><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/services">Smart Contract Development</a></li>
              <li><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/services">Token Development</a></li>
              <li><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/services">Exchange Development</a></li>
              <li><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/services">DeFi Solutions</a></li>
              <li><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/services">NFT Marketplace Development</a></li>
              <li><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/services">DApp Development</a></li>
              <li><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/services">Wallet Development</a></li>
            </ul>
          </div>
          
          {/* Support Column */}
          <div className="flex flex-col">
            <h4 className="mb-4 text-base font-bold text-black transition-colors duration-300 dark:text-white sm:mb-5 sm:text-lg">Support</h4>
            <ul className="list-none p-0 space-y-2 sm:space-y-3">
              <li><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/faq">FAQ</a></li>
              <li><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/privacy-policy">Privacy Policy</a></li>
              <li><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/terms-conditions">Terms & Conditions</a></li>
              <li><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/sitemap">Sitemap</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-right transition-colors duration-300">
          <div className="flex justify-end">
            <div className="w-40 border-t border-gray-200 dark:border-white/20" />
          </div>
          <p className="m-0 pt-0 text-xs text-gray-600 transition-colors duration-300 dark:text-gray-300 sm:text-sm">
            © 2026 Blockchain App Advisor. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

