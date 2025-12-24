
const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-100 transition-colors duration-300 dark:border-white/10 dark:bg-[#1a1a1a]">
      <div className="mx-auto max-w-layout px-4 pb-5 pt-8 sm:px-5 sm:pt-10 md:px-10 md:pb-5 md:pt-12 lg:pt-[60px]">
        <div className="mb-8 grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3 md:gap-12 lg:mb-10 lg:gap-[60px]">
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M20 5C15 5 10 8 10 13C10 18 15 21 20 21C25 21 30 18 30 13C30 8 25 5 20 5Z"
                    stroke="#0063B6"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M20 19C15 19 10 22 10 27C10 32 15 35 20 35C25 35 30 32 30 27C30 22 25 19 20 19Z"
                    stroke="#0063B6"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="flex flex-col leading-[1.2]">
                <div className="text-base font-bold text-black transition-colors duration-300 dark:text-white sm:text-lg">BLOCKCHAIN</div>
                <div className="text-[10px] font-medium text-black transition-colors duration-300 dark:text-white sm:text-xs">APP ADVISOR</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h4 className="mb-4 text-base font-semibold text-black transition-colors duration-300 dark:text-white sm:mb-5 sm:text-lg">Quick Links</h4>
            <ul className="list-none p-0">
              <li className="mb-2 sm:mb-3"><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/">Home</a></li>
              <li className="mb-2 sm:mb-3"><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/about">About</a></li>
              <li className="mb-2 sm:mb-3"><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/services">Services</a></li>
              <li className="mb-2 sm:mb-3"><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/industries">Industries</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h4 className="mb-4 text-base font-semibold text-black transition-colors duration-300 dark:text-white sm:mb-5 sm:text-lg">Resources</h4>
            <ul className="list-none p-0">
              <li className="mb-2 sm:mb-3"><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/case-studies">Case Studies</a></li>
              <li className="mb-2 sm:mb-3"><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/blog">Blog</a></li>
              <li className="mb-2 sm:mb-3"><a className="text-sm text-gray-600 transition-colors duration-300 hover:text-brand-blue dark:text-gray-300 sm:text-base" href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 text-center transition-colors duration-300 dark:border-white/10 sm:pt-8 lg:pt-[30px]">
          <p className="m-0 text-xs text-gray-600 transition-colors duration-300 dark:text-gray-300 sm:text-sm">&copy; {new Date().getFullYear()} Blockchain App Advisor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

