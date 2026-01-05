import whoWeAreImg from '../assets/imgs/WhatsApp Image 2025-11-29 at 00.06.54_e2c49acd 1.png';
import leadershipImg from '../assets/imgs/3d-flat-vector-as-financial-analyst-using-blockchain-secure-transactions-concept-as-vector-ill 1.png';

const About = () => {
  return (
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero Section */}
      <section className="relative z-[1] w-full bg-white pt-2 pb-12 transition-colors duration-300 dark:bg-black sm:pt-4 sm:pb-16 md:pt-6 md:pb-20 lg:pt-8 lg:pb-24 xl:pt-10 xl:pb-24">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-start gap-0 lg:grid-cols-[65%_35%]">
          {/* Left Side - Text Content */}
          <div className="ml-[30px] flex w-full flex-col justify-start gap-4 leading-[1.4] sm:gap-6 md:gap-8 lg:gap-10">
            <h1 className="font-heading font-bold uppercase tracking-[0%] text-left">
              <div className="block w-full text-[32px] text-brand-blue transition-colors duration-300 dark:[-webkit-text-stroke:1px_#ffffff] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px]">
                EMPOWERING THE
              </div>
              <div className="block w-full text-[36px] transition-colors duration-300 sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[70px]">
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">WORLD </span>
                <span className="text-black dark:text-white">WITH</span>
              </div>
              <div className="block w-full text-[36px] text-brand-blue transition-colors duration-300 dark:[-webkit-text-stroke:1px_#ffffff] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[70px]">
                BLOCKCHAIN & AI
              </div>
        </h1>

            <p className="w-full max-w-[600px] text-xs leading-[1.6] text-black transition-colors duration-300 dark:text-white/80 sm:text-sm sm:leading-[1.65] md:text-base lg:text-lg">
              Empowering the world with secure, intelligent, and futuristic 
              Blockchain & AI solutions.
            </p>
          </div>

          {/* Right Side - Graphics Placeholder (Media) */}
          <div className="flex w-full items-center justify-center px-5 lg:pl-0">
            <div className="w-full max-w-[500px] h-[300px] rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(0,99,182,0.15)_0%,rgba(0,0,0,0)_70%)] border border-black/5 dark:border-white/5 dark:bg-[radial-gradient(circle_at_30%_30%,rgba(0,99,182,0.1)_0%,rgba(0,0,0,0)_72%)]" />
          </div>
        </div>
      </section>

      {/* Who We Are Section (2nd Section) */}
      <section className="w-full bg-white pt-4 pb-14 transition-colors duration-300 dark:bg-black sm:pt-6 sm:pb-16 md:pt-8 md:pb-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-20">
          <h2 className="text-center font-heading font-bold uppercase leading-[1] tracking-[0.02em] text-[34px] sm:text-[46px] md:text-[56px] lg:text-[68px] xl:text-[78px]">
            <span className="text-black transition-colors duration-300 dark:text-white">WHO </span>
            <span className="text-brand-blue">WE ARE</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 items-center gap-6 md:mt-16 md:grid-cols-[400px_1fr] md:gap-8 lg:mt-20 lg:grid-cols-[440px_1fr] lg:gap-12">
            {/* Left image */}
            <div className="flex items-center justify-center">
              <img
                src={whoWeAreImg}
                alt="Who we are"
                className="w-full max-w-[400px] object-contain shadow-sm rounded-lg"
              />
            </div>

            {/* Right content */}
            <div className="max-w-[600px]">
              <p className="text-sm sm:text-base md:text-lg leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white/80">
                Blockchain App Advisor is a next-generation Blockchain & AI development company dedicated to building decentralized, automated, and enterprise-grade digital ecosystems. We help startups, enterprises, and global innovators harness the power of distributed technology to create meaningful business transformation.
              </p>

              <p className="mt-6 text-sm sm:text-base md:text-lg leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white/80">
                From smart contract engineering to AI-driven automation and full-scale Web3 ecosystems, we bring unmatched expertise, innovation, and execution excellence to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Company Story Section (3rd Section) */}
      <section className="w-full bg-white py-4 transition-colors duration-300 dark:bg-black sm:py-6">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="w-full rounded-[24px] border border-brand-blue/10 bg-[#c0e1e23b] p-5 transition-all duration-300 dark:border-white/10 dark:bg-white/[0.03] sm:p-8 lg:p-10">
            <h2 className="font-heading font-bold leading-[1.2] tracking-[0.02em] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px]">
              <span className="text-black transition-colors duration-300 dark:text-white">Our </span>
              <span className="text-brand-blue">COMPANY STORY</span>
            </h2>

            <div className="mt-6 space-y-4 md:mt-8 lg:mt-10">
              <p className="text-sm sm:text-base leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white/80">
                Blockchain App Advisor began with a mission to make decentralized technology accessible and business-ready. As blockchain grew beyond cryptocurrencies, we saw the need for a development partner that understood both cutting-edge engineering and real-world business challenges.
              </p>

              <p className="text-sm sm:text-base leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white/80">
                What started as a small team of blockchain engineers evolved into a full-fledged Blockchain & AI expertise hub—serving clients across industries like finance, gaming, supply chain, healthcare, and more.
              </p>

              <p className="text-sm sm:text-base leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white/80">
                Today, we stand as a trusted partner for next-gen digital transformation, delivering secure, scalable, and intelligent solutions that shape the future of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section (5th Section) */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16 md:py-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-20">
          <h2 className="text-center font-heading font-bold uppercase leading-[1] tracking-[0.02em] text-[34px] sm:text-[46px] md:text-[56px] lg:text-[68px]">
            <span className="text-brand-blue">MISSION </span>
            <span className="text-black transition-colors duration-300 dark:text-white">& </span>
            <span className="text-brand-blue">VISION</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 lg:gap-12">
            {/* Mission Card */}
            <div className="rounded-[24px] border border-brand-blue/20 bg-white p-8 transition-all duration-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] sm:p-10">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-xl font-bold uppercase text-brand-blue sm:text-2xl">OUR MISSION</h3>
                <div className="text-brand-blue">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                  </svg>
                </div>
              </div>
              <p className="mt-6 text-sm leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white/80 sm:text-base md:text-lg">
                To empower businesses with reliable, secure, and innovative Blockchain & AI solutions that drive automation, transparency, and digital trust worldwide
              </p>
            </div>

            {/* Vision Card */}
            <div className="rounded-[24px] border border-brand-blue/20 bg-white p-8 transition-all duration-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] sm:p-10">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-xl font-bold uppercase text-brand-blue sm:text-2xl">OUR VISION</h3>
                <div className="text-brand-blue">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 9v1M12 14v1M9 12h1M14 12h1" />
                  </svg>
                </div>
              </div>
              <p className="mt-6 text-sm leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white/80 sm:text-base md:text-lg">
                To become a global leader in decentralized intelligence—where blockchain and AI merge to create smarter, autonomous, and high-performing digital ecosystems that redefine industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section (6th Section) */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16 md:py-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-20">
          <h2 className="text-center font-heading font-bold uppercase leading-[1] tracking-[0.02em] text-[34px] sm:text-[46px] md:text-[56px] lg:text-[68px]">
            <span className="text-black transition-colors duration-300 dark:text-white">OUR </span>
            <span className="text-brand-blue">CORE VALUES</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {/* Value 1: Innovation First */}
            <div className="group relative overflow-hidden rounded-none rounded-tr-[120px] rounded-bl-[120px] bg-gradient-to-r from-[#8be1ea61] via-[#8be1ea61] to-white p-8 transition-all duration-500 hover:from-[#8be1ea80] hover:via-[#8be1ea80] dark:from-white/[0.05] dark:to-transparent sm:p-10">
              <div className="absolute right-12 top-10 text-brand-blue transition-transform duration-500 group-hover:scale-110">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-black transition-colors duration-300 dark:text-white sm:text-2xl">Innovation First</h3>
              <p className="mt-4 max-w-[80%] text-sm leading-[1.6] text-black/70 transition-colors duration-300 dark:text-white/70 sm:text-base">
                We constantly push boundaries to engineer new possibilities in Blockchain, AI, and automation.
              </p>
            </div>

            {/* Value 2: Transparency & trust */}
            <div className="group relative overflow-hidden rounded-none rounded-tr-[120px] rounded-bl-[120px] bg-gradient-to-r from-[#8be1ea61] via-[#8be1ea61] to-white p-8 transition-all duration-500 hover:from-[#8be1ea80] hover:via-[#8be1ea80] dark:from-white/[0.05] dark:to-transparent sm:p-10">
              <div className="absolute right-12 top-10 text-brand-blue transition-transform duration-500 group-hover:scale-110">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-black transition-colors duration-300 dark:text-white sm:text-2xl">Transparency & trust</h3>
              <p className="mt-4 max-w-[80%] text-sm leading-[1.6] text-black/70 transition-colors duration-300 dark:text-white/70 sm:text-base">
                We follow clear communication, open development practices, and dependable partnerships.
              </p>
            </div>

            {/* Value 3: Security at the core */}
            <div className="group relative overflow-hidden rounded-none rounded-tr-[120px] rounded-bl-[120px] bg-gradient-to-r from-[#8be1ea61] via-[#8be1ea61] to-white p-8 transition-all duration-500 hover:from-[#8be1ea80] hover:via-[#8be1ea80] dark:from-white/[0.05] dark:to-transparent sm:p-10">
              <div className="absolute right-12 top-10 text-brand-blue transition-transform duration-500 group-hover:scale-110">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-black transition-colors duration-300 dark:text-white sm:text-2xl">Security at the core</h3>
              <p className="mt-4 max-w-[80%] text-sm leading-[1.6] text-black/70 transition-colors duration-300 dark:text-white/70 sm:text-base">
                Every product we build follows rigorous security frameworks, audits, and defense-grade protection.
              </p>
            </div>

            {/* Value 4: Quality without compromise */}
            <div className="group relative overflow-hidden rounded-none rounded-tr-[120px] rounded-bl-[120px] bg-gradient-to-r from-[#8be1ea61] via-[#8be1ea61] to-white p-8 transition-all duration-500 hover:from-[#8be1ea80] hover:via-[#8be1ea80] dark:from-white/[0.05] dark:to-transparent sm:p-10">
              <div className="absolute right-12 top-10 text-brand-blue transition-transform duration-500 group-hover:scale-110">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-black transition-colors duration-300 dark:text-white sm:text-2xl">Quality without compromise</h3>
              <p className="mt-4 max-w-[80%] text-sm leading-[1.6] text-black/70 transition-colors duration-300 dark:text-white/70 sm:text-base">
                From architecture to deployment—every line of code is engineered with precision.
              </p>
            </div>

            {/* Value 5: Long term collabration */}
            <div className="group relative overflow-hidden rounded-none rounded-tr-[120px] rounded-bl-[120px] bg-gradient-to-r from-[#8be1ea61] via-[#8be1ea61] to-white p-8 transition-all duration-500 hover:from-[#8be1ea80] hover:via-[#8be1ea80] dark:from-white/[0.05] dark:to-transparent sm:p-10">
              <div className="absolute right-12 top-10 text-brand-blue transition-transform duration-500 group-hover:scale-110">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-black transition-colors duration-300 dark:text-white sm:text-2xl">Long term collabration</h3>
              <p className="mt-4 max-w-[80%] text-sm leading-[1.6] text-black/70 transition-colors duration-300 dark:text-white/70 sm:text-base">
                We don't just build solutions—we support and scale them with you.
              </p>
            </div>

            {/* Value 6: Ethical technology */}
            <div className="group relative overflow-hidden rounded-none rounded-tr-[120px] rounded-bl-[120px] bg-gradient-to-r from-[#8be1ea61] via-[#8be1ea61] to-white p-8 transition-all duration-500 hover:from-[#8be1ea80] hover:via-[#8be1ea80] dark:from-white/[0.05] dark:to-transparent sm:p-10">
              <div className="absolute right-12 top-10 text-brand-blue transition-transform duration-500 group-hover:scale-110">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2v20" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-black transition-colors duration-300 dark:text-white sm:text-2xl">Ethical technology</h3>
              <p className="mt-4 max-w-[80%] text-sm leading-[1.6] text-black/70 transition-colors duration-300 dark:text-white/70 sm:text-base">
                We develop responsibly, ensuring privacy, sustainability, and long-term value creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Team Section (6th Section) */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16 md:py-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col gap-6 md:gap-8">
              <h2 className="font-heading font-bold uppercase leading-[1.1] tracking-[0.02em] text-[34px] sm:text-[46px] md:text-[56px] lg:text-[68px]">
                <span className="text-brand-blue">LEADERSHIP </span>
                <span className="text-black transition-colors duration-300 dark:text-white">& </span>
                <span className="text-brand-blue">TEAM</span>
              </h2>

              <div className="space-y-6">
                <p className="text-sm leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white/80 sm:text-base md:text-lg">
                  Behind Blockchain App Advisor is a team of expert blockchain developers, AI engineers, security auditors, architects, researchers, designers, and strategists.
                </p>

                <div className="space-y-4">
                  <h3 className="font-heading text-lg font-bold text-black transition-colors duration-300 dark:text-white sm:text-xl md:text-2xl">
                    A Team Built on Excellence
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Multi-year experience in blockchain protocols, AI models, and decentralized applications",
                      "Delivered projects across Ethereum, BSC, Solana, Polygon, Avalanche, Hyperledger & Bitcoin L2",
                      "Smart contract specialists with expertise in audits, tokenomics, and scalable system design",
                      "Leaders who combine technical mastery with strategic business understanding"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm leading-[1.6] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-base">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white/80 sm:text-base md:text-lg">
                  Our leadership believes in empowering teams, encouraging innovation, and driving global impact through technology.
                </p>
              </div>
            </div>

            {/* Right Graphics/Illustration Placeholder */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[600px]">
                <div className="aspect-square w-full overflow-hidden rounded-[40px] bg-gradient-to-br from-brand-blue/[0.05] to-transparent p-4 dark:from-white/[0.03]">
                  {/* Since I don't have the exact illustration image, I'm using a high-quality placeholder with a subtle pattern */}
                  <div className="flex h-full w-full items-center justify-center rounded-[32px] bg-white shadow-inner dark:bg-black/20">
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-blue/20">
                      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
                      <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="2" />
                      <path d="M100 20V50M100 150V180M20 100H50M150 100H180" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <g className="animate-pulse">
                        <circle cx="100" cy="100" r="10" fill="currentColor" />
                        <circle cx="150" cy="60" r="8" fill="currentColor" fillOpacity="0.6" />
                        <circle cx="50" cy="140" r="8" fill="currentColor" fillOpacity="0.6" />
                      </g>
                    </svg>
                  </div>
                </div>
                {/* Decorative blobs */}
                <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-brand-blue/10 blur-3xl" />
                <div className="absolute -left-6 -top-6 -z-10 h-32 w-32 rounded-full bg-brand-blue/5 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
