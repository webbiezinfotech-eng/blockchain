import BeforeFooter from '../components/common/BeforeFooter';
import TwoLayerCard from '../components/common/TwoLayerCard';
import OneSideBorderCard from '../components/common/OneSideBorderCard';

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
                src=" "
                alt="Who we are"
                className="w-full max-w-[400px] object-contain shadow-sm rounded-lg"
              />
            </div>

            {/* Right content */}
            <div className="max-w-[600px]">
              <p className="text-sm sm:text-base md:text-lg leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white dark:font-medium">
                Blockchain App Advisor is a next-generation Blockchain & AI development company dedicated to building decentralized, automated, and enterprise-grade digital ecosystems. We help startups, enterprises, and global innovators harness the power of distributed technology to create meaningful business transformation.
              </p>

              <p className="mt-6 text-sm sm:text-base md:text-lg leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white dark:font-medium">
                From smart contract engineering to AI-driven automation and full-scale Web3 ecosystems, we bring unmatched expertise, innovation, and execution excellence to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Company Story Section (3rd Section) */}
      <section className="w-full bg-white py-4 transition-colors duration-300 dark:bg-black sm:py-6">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="w-full rounded-[24px] border border-brand-blue/10 bg-[#c0e1e23b] p-5 transition-all duration-300 dark:border-white/30 dark:bg-white/[0.03] sm:p-8 lg:p-10">
            <h2 className="font-heading font-bold leading-[1.2] tracking-[0.02em] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px]">
              <span className="text-black transition-colors duration-300 dark:text-white">Our </span>
              <span className="text-brand-blue">COMPANY STORY</span>
            </h2>

            <div className="mt-6 space-y-4 md:mt-8 lg:mt-10">
              <p className="text-sm sm:text-base leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white dark:font-medium">
                Blockchain App Advisor began with a mission to make decentralized technology accessible and business-ready. As blockchain grew beyond cryptocurrencies, we saw the need for a development partner that understood both cutting-edge engineering and real-world business challenges.
              </p>

              <p className="text-sm sm:text-base leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white dark:font-medium">
                What started as a small team of blockchain engineers evolved into a full-fledged Blockchain & AI expertise hub—serving clients across industries like finance, gaming, supply chain, healthcare, and more.
              </p>

              <p className="text-sm sm:text-base leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white dark:font-medium">
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
            <div className="rounded-[24px] border border-brand-blue/20 bg-white p-8 transition-all duration-300 hover:shadow-lg dark:border-white/30 dark:bg-white/[0.03] sm:p-10">
              <div className="flex items-center justify-between">
                <h3 className="no-stroke font-heading text-xl font-bold uppercase text-brand-blue sm:text-2xl">OUR MISSION</h3>
                <div className="text-brand-blue">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                  </svg>
                </div>
              </div>
              <p className="mt-6 text-sm leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white dark:font-medium sm:text-base md:text-lg">
                To empower businesses with reliable, secure, and innovative Blockchain & AI solutions that drive automation, transparency, and digital trust worldwide
              </p>
            </div>

            {/* Vision Card */}
            <div className="rounded-[24px] border border-brand-blue/20 bg-white p-8 transition-all duration-300 hover:shadow-lg dark:border-white/30 dark:bg-white/[0.03] sm:p-10">
              <div className="flex items-center justify-between">
                <h3 className="no-stroke font-heading text-xl font-bold uppercase text-brand-blue sm:text-2xl">OUR VISION</h3>
                <div className="text-brand-blue">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 9v1M12 14v1M9 12h1M14 12h1" />
                  </svg>
                </div>
              </div>
              <p className="mt-6 text-sm leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white dark:font-medium sm:text-base md:text-lg">
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
            {[
              {
                title: "Innovation First",
                desc: "We constantly push boundaries to engineer new possibilities in Blockchain, AI, and automation.",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                )
              },
              {
                title: "Transparency & Trust",
                desc: "We follow clear communication, open development practices, and dependable partnerships.",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )
              },
              {
                title: "Security at the Core",
                desc: "Every product we build follows rigorous security frameworks, audits, and defense-grade protection.",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                )
              },
              {
                title: "Quality without Compromise",
                desc: "From architecture to deployment—every line of code is engineered with precision.",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                )
              },
              {
                title: "Long Term Collaboration",
                desc: "We don't just build solutions—we support and scale them with you.",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )
              },
              {
                title: "Ethical Technology",
                desc: "We develop responsibly, ensuring privacy, sustainability, and long-term value creation.",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2v20" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                )
              }
            ].map((value, idx) => (
              <OneSideBorderCard
                key={idx}
                title={value.title}
                description={value.desc}
                icon={value.icon}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Leadership & Team Section (6th Section) */}
      <section className="w-full bg-white transition-colors duration-300 dark:bg-black">
        <div className="mx-auto max-w-layout">
          <div className="grid grid-cols-1 items-center lg:grid-cols-2">
            {/* Left Content */}
            <div className="flex flex-col gap-6 ml-[30px] lg:ml-[58px]">
              <h2 className="font-heading font-bold uppercase leading-[1.1] tracking-[0.02em] text-brand-blue text-[28px] sm:text-[38px] md:text-[45px] lg:text-[55px]">
                LEADERSHIP & TEAM
              </h2>

              <div className="max-w-[750px] space-y-4">
                <p className="font-sans text-sm font-medium leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white sm:text-base md:text-lg">
                  Behind Blockchain App Advisor is a team of expert blockchain developers, AI engineers, security auditors, architects, researchers, designers, and strategists.
                </p>

                <div className="space-y-2">
                  <h3 className="font-heading text-lg text-black transition-colors duration-300 dark:text-white sm:text-xl md:text-2xl">
                    A Team Built on Excellence
                  </h3>
                  <div className="space-y-1">
                    {[
                      "Multi-year experience in blockchain protocols, AI models, and decentralized applications",
                      "Delivered projects across Ethereum, BSC, Solana, Polygon, Avalanche, Hyperledger & Bitcoin L2",
                      "Smart contract specialists with expertise in audits, tokenomics, and scalable system design",
                      "Leaders who combine technical mastery with strategic business understanding"
                    ].map((item, idx) => (
                      <p key={idx} className="flex items-start gap-3 font-sans text-sm font-medium leading-[1.6] text-black/75 transition-colors duration-300 dark:text-white sm:text-base">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue" />
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <p className="font-sans text-sm font-medium leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white sm:text-base md:text-lg">
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


      {/* Technology Expertise Section */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16 md:py-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-20">
          <h2 className="text-center font-heading font-bold uppercase leading-[1.1] tracking-[0.02em] text-[34px] sm:text-[46px] md:text-[50px] lg:text-[55px]">
            TECHNOLOGY <span className="text-brand-blue">EXPERTISE</span>
          </h2>
          <p className="mt-4 text-center font-sans text-sm font-medium text-black/80 transition-colors duration-300 dark:text-white sm:text-base md:text-lg">
            We bring advanced expertise across all layers of Blockchain & AI ecosystems:
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Blockchain Expertise Card */}
            <div className="group relative rounded-[24px] border border-brand-blue/30 bg-white p-8 transition-all duration-300 hover:border-brand-blue hover:shadow-xl dark:border-white/30 dark:bg-transparent sm:p-10">
              <div className="absolute right-8 top-8 text-brand-blue/60 group-hover:text-brand-blue transition-colors duration-300">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v2M12 20v2M2 12h2M20 12h2M19.07 4.93l-1.41 1.41M6.34 17.66l-1.41 1.41M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41" />
                  <path d="M12 7a5 5 0 0 1 5 5" />
                </svg>
              </div>
              <h3 className="no-stroke font-heading text-2xl font-bold text-brand-blue sm:text-3xl">BLOCKCHAIN EXPERTISE</h3>
              <ul className="mt-8">
                {[
                  "Smart Contract Development",
                  "Token Development (Utility, Governance, Security Tokens)",
                  "Layer 1 & Layer 2 Solutions",
                  "DeFi Ecosystems",
                  "NFT & Metaverse Platforms",
                  "Enterprise Blockchain Integrations",
                  "Crypto Exchange & Wallet Solutions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-sans text-sm font-medium leading-none text-black/80 dark:text-white sm:text-base py-1">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-black/40 dark:bg-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Expertise Card */}
            <div className="group relative rounded-[24px] border border-brand-blue/30 bg-white p-8 transition-all duration-300 hover:border-brand-blue hover:shadow-xl dark:border-white/30 dark:bg-transparent sm:p-10">
              <div className="absolute right-8 top-8 text-brand-blue/60 group-hover:text-brand-blue transition-colors duration-300">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                  <path d="M12 6a6 6 0 0 1 6 6M12 18a6 6 0 0 1-6-6" />
                  <path d="M12 10a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                </svg>
              </div>
              <h3 className="no-stroke font-heading text-2xl font-bold text-brand-blue sm:text-3xl">AI EXPERTISE</h3>
              <ul className="mt-8">
                {[
                  "Intelligent Automation",
                  "Predictive Models",
                  "AI-Powered Analytics",
                  "NLP + Machine Learning Systems",
                  "AI ChatBots & Agents",
                  "AI-driven fraud detection",
                  "Enterprise AI Optimization"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-sans text-sm font-medium leading-none text-black/80 dark:text-white sm:text-base py-1">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-black/40 dark:bg-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Multi-Chain Development Card */}
          <div className="group mt-10 w-full rounded-[24px] border border-brand-blue/30 bg-white p-8 transition-all duration-300 hover:border-brand-blue hover:shadow-xl dark:border-white/30 dark:bg-transparent sm:mt-12 sm:p-10 lg:p-12">
            <h3 className="no-stroke text-center font-heading text-2xl font-bold text-brand-blue sm:text-3xl uppercase">
              MULTI-CHAIN DEVELOPMENT
            </h3>
            
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                "Ethereum", "Binance Smart Chain", "Solana", "Polygon",
                "Avalanche", "Cosmos", "Hyperledger", "Bitcoin L2 & more"
              ].map((tech, idx) => (
                <div key={idx} className="flex items-center justify-center rounded-xl border border-black/10 bg-white px-2 py-3 text-center font-sans text-sm font-medium text-black/80 transition-all duration-300 hover:border-brand-blue hover:text-brand-blue dark:border-white/30 dark:bg-white/[0.05] dark:text-white sm:text-base">
                  {tech}
                </div>
              ))}
            </div>

            <p className="mt-10 text-center font-sans text-sm font-medium text-black/70 transition-colors duration-300 dark:text-white sm:text-base">
              Our technological versatility ensures powerful, scalable, and future-ready solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16 md:py-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-20">
          <h2 className="text-center font-heading font-bold uppercase leading-[1.1] tracking-[0.02em] text-[34px] sm:text-[46px] md:text-[50px] lg:text-[55px]">
            OUR <span className="text-brand-blue">APPROACH</span>
          </h2>
          <p className="mt-4 text-center font-sans text-sm font-medium text-black/80 transition-colors duration-300 dark:text-white sm:text-base md:text-lg">
            We believe that great technology is built through collaboration, transparency, and strategic planning.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-[4.5rem] sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Deep Research & Analysis",
                desc: "We study your vision, market, and technology requirements.",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                )
              },
              {
                title: "Architecture & Blueprinting",
                desc: "We create a structured, secure, and scalable development roadmap.",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                )
              },
              {
                title: "Agile Development",
                desc: "Rapid, iterative development with full transparency and weekly updates.",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                )
              },
              {
                title: "Quality, Audits & Security",
                desc: "Multi-layer testing, code reviews, and vulnerability audits.",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                )
              },
              {
                title: "Deployment & Optimization",
                desc: "Seamless launch with post-live optimization and monitoring.",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 2.67-2 3.5 0 1.21.95 2 2.12 2 1.04 0 2.12-.58 2.38-1.5.26-.92-.26-1.5-.76-2.5-.5-1-.5-2.5 0-3.5" />
                    <path d="M13.5 7.5c1.5-1.26 2-2.67 2-3.5 0-1.21-.95-2-2.12-2-1.04 0-2.12.58-2.38 1.5-.26.92.26 1.5.76 2.5.5 1 .5 2.5 0 3.5" />
                    <path d="M8 8.5c1.5-1.26 2-2.67 2-3.5 0-1.21-.95-2-2.12-2-1.04 0-2.12.58-2.38 1.5-.26.92.26 1.5.76 2.5.5 1 .5 2.5 0 3.5" />
                    <path d="M19.5 16.5c-1.5 1.26-2 2.67-2 3.5 0 1.21.95 2 2.12 2 1.04 0 2.12-.58 2.38-1.5.26-.92-.26-1.5-.76-2.5-.5-1-.5-2.5 0-3.5" />
                  </svg>
                )
              },
              {
                title: "Long-Term Support",
                desc: "Updates, maintenance, upgrades, and scaling assistance.",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <polyline points="16 11 18 13 22 9" />
                  </svg>
                )
              }
            ].map((card, idx) => (
              <TwoLayerCard
                key={idx}
                title={card.title}
                description={card.desc}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="w-full bg-white py-16 transition-colors duration-300 dark:bg-black sm:py-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-20">
          <h2 className="text-center font-heading font-bold uppercase leading-[1.1] tracking-[0.02em] text-[34px] text-brand-blue sm:text-[46px] md:text-[50px] lg:text-[55px]">
            ROADMAP
          </h2>
          <div className="flex justify-center">
            <p className="mt-4 max-w-[600px] text-center font-sans text-sm font-medium text-black/80 transition-colors duration-300 dark:text-white sm:text-base md:text-lg">
              A strategic path shaping the future of Blockchain App Advisor:
            </p>
          </div>

          <div className="relative mt-16">
            {/* Central vertical line */}
            <div className="absolute left-[20px] top-0 h-full w-1 bg-brand-blue md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-16 md:space-y-24">
              {[
                {
                  phase: "01",
                  title: "Phase 1 — Foundation",
                  desc: "Built core blockchain development team and launched first enterprise solutions.",
                },
                {
                  phase: "02",
                  title: "Phase 2 — Web3 Expansion",
                  desc: "Expanded to NFTs, DeFi, smart contract audits, and multi-chain deployments.",
                },
                {
                  phase: "03",
                  title: "Phase 3 — AI Automation Integration",
                  desc: "Integrated AI-driven automation and intelligence into Web3 products.",
                },
                {
                  phase: "04",
                  title: "Phase 4 — Global Collaborations",
                  desc: "Strengthened global partnerships with enterprises, startups, and investors.",
                },
                {
                  phase: "05",
                  title: "Phase 5 — Future Innovation",
                  desc: "Developing next-gen decentralized AI agents, autonomous Web3 ecosystems, and high-integrity digital infrastructure.",
                }
              ].map((item, idx) => (
                <div key={idx} className={`relative flex flex-col items-center md:flex-row ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  {/* Phase Card Container */}
                  <div className={`relative w-full pl-16 md:w-[48%] md:pl-0 ${idx % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:order-2'}`}>
                    {/* Phase Number Badge - Positioned fully outside the card edge */}
                    <div className={`absolute top-10 z-10 flex h-10 w-14 items-center justify-center rounded-xl bg-brand-blue font-bold text-white shadow-lg ${idx % 2 === 0 ? '-left-10 md:-left-14' : '-right-10 md:-right-14'}`}>
                      {item.phase}
                    </div>

                    <div className="flex min-h-[180px] flex-col justify-center rounded-2xl border-2 border-brand-blue/30 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand-blue hover:shadow-lg dark:border-white dark:bg-black sm:p-8">
                      <h3 className="no-stroke font-heading text-xl font-bold text-brand-blue dark:text-white sm:text-2xl">{item.title}</h3>
                      <p className="mt-4 max-w-[350px] font-sans text-base font-medium leading-[1.6] text-black/80 dark:text-white">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Empty Spacer Side */}
                  <div className={`hidden w-full items-center justify-center md:flex md:w-[48%] ${idx % 2 === 0 ? 'md:order-2 md:pl-16' : 'md:order-1 md:pr-16'}`}>
                    <div className="h-64 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before Footer Section */}
      <BeforeFooter
        title="Ready To Build The Future With Us?"
        description="Let's turn your blockchain or AI idea into a powerful, scalable, and secure solution."
        buttonText="Contact Us Today"
        className="!py-12 md:!py-16"
      />
    </div>
  );
};

export default About;
