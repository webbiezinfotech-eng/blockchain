import { Helmet } from "react-helmet";
import BeforeFooter from '../components/common/BeforeFooter';
import TwoLayerCard from '../components/common/TwoLayerCard';
import OneSideBorderCard from '../components/common/OneSideBorderCard';
/* ================= HERO & SECTION IMAGES ================= */
import aboutHero from '../assets/about_images/about-hero.png';
import whoWeAreImg from '../assets/about_images/whoWeAre.png';
import leadershipTeamImg from '../assets/about_images/leadershipTeam.png';

/* ================= MISSION & VISION ICONS ================= */
import missionIcon from '../assets/about_images/icons/mission.gif';
import visionIcon from '../assets/about_images/icons/vision.gif';

/* ================= CORE VALUES ICONS ================= */
import innovationFirst from '../assets/about_images/icons/innovationFirst.gif';
import transparencyTrust from '../assets/about_images/icons/transparencyTrust.gif';
import securityCore from '../assets/about_images/icons/securityCore.gif';
import qualityWithoutCompromise from '../assets/about_images/icons/qualtiyWithoutCompromise.gif';
import longTermCollaboration from '../assets/about_images/icons/longTermCollabration.gif';
import ethicalTechnology from '../assets/about_images/icons/EthicalTechnology.gif';

/* ================= TECHNOLOGY EXPERTISE ICONS ================= */
import blockchainExpertiseIcon from '../assets/about_images/icons/blockchainExpertise.gif';
import aiExpertiseIcon from '../assets/about_images/icons/AIExpertise.gif';

/* ================= OUR APPROACH ICONS ================= */
import deepResearchIcon from '../assets/about_images/icons/DeepResearchAnalysis.gif';
import architectureBlueprintIcon from '../assets/about_images/icons/ArchitectureBlueprinting.gif';
import agileDevIcon from '../assets/about_images/icons/AgileDev.gif';
import auditsSecurityIcon from '../assets/about_images/icons/auditsSecurity.gif';
import deploymentOptimizationIcon from '../assets/about_images/icons/DeploymentOptimization.gif';
import longTermSupportIcon from '../assets/about_images/icons/LongTermSupport.gif';

/* ================= ROADMAP IMAGES ================= */
import foundationImg from '../assets/about_images/foundation.png';
import web3ExpansionImg from '../assets/about_images/Web3Expansion.png';
import aiAutomationImg from '../assets/about_images/aiAutomationIntegration.png';
import globalCollaborationImg from '../assets/about_images/GlobalCollaboration.png';
import futureInnovationImg from '../assets/about_images/FutureInnovation.png';
import phase1 from '../assets/about_images/phase1.png';


const About = () => {
  return (
    <>
  <Helmet>
    <title>
      About Us | Blockchain & AI Development Company | BlueFalcon Technologies
    </title>

    <meta
      name="description"
      content="Learn about BlueFalcon Technologies — a next-generation Blockchain & AI development company building secure, scalable Web3 ecosystems, smart contracts, AI automation systems, and enterprise digital solutions."
    />

    <meta
      name="keywords"
      content="about blockchain company, blockchain development team, AI development company, web3 experts, smart contract developers, decentralized technology company, enterprise blockchain solutions"
    />

    {/* Open Graph */}
    <meta
      property="og:title"
      content="Empowering the World with Blockchain & AI | BlueFalcon Technologies"
    />
    <meta
      property="og:description"
      content="Meet our expert team building decentralized ecosystems, AI-powered automation systems, and enterprise-grade blockchain solutions."
    />
    <meta property="og:type" content="website" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Blockchain & AI Experts | About BlueFalcon Technologies"
    />
    <meta
      name="twitter:description"
      content="A trusted global partner for blockchain development, AI engineering, smart contracts, tokenization, and Web3 innovation."
    />
  </Helmet>

    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">

      {/* ========================================
           SECTION 1: HERO SECTION
           Main hero area with title and tagline
      ======================================== */}
      <section className="relative w-full bg-white pt-4 pb-8 transition-colors duration-300 dark:bg-black sm:pb-16 md:pt-6 md:pb-18 lg:pt-8 lg:pb-18 xl:pt-10 xl:pb-18">
        <div className="mx-auto grid w-full grid-cols-1 items-center gap-0 lg:grid-cols-[60%_40%]">
          {/* Left Side - Text Content */}
          <div className="px-4 sm:px-6 md:px-10 lg:px-16
 flex w-full flex-col justify-start gap-5 leading-[1.4]">
            <h1 className="font-heading font-bold uppercase tracking-[0%] text-left">
              <div className="block w-full text-[36px] text-brand-blue transition-colors duration-300 dark:[-webkit-text-stroke:1px_#ffffff] sm:text-[40px] md:text-[48px] lg:text-[76px] xl:text-[76px]">
                EMPOWERING THE
              </div>
              <div className="block w-full text-[36px] transition-colors duration-300 sm:text-[44px] md:text-[52px] lg:text-[76px] xl:text-[76px]">
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">WORLD </span>
                <span className="text-black dark:text-white">WITH</span>
              </div>
              <div className="block w-full text-[36px] text-brand-blue transition-colors duration-300 dark:[-webkit-text-stroke:1px_#ffffff] sm:text-[44px] md:text-[52px] lg:text-[76px] xl:text-[76px]">
                BLOCKCHAIN & AI
              </div>
          </h1>

            <p className="w-full max-w-[600px] leading-[1.6] text-black transition-colors duration-300 dark:text-white/80 sm:leading-[1.65] text-xl md:text-2xl">
            We are a technology-driven company focused on building next-generation digital solutions using
  Blockchain, Artificial Intelligence, and decentralized architectures. Our mission is to help
  businesses move beyond traditional systems and adopt secure, transparent, and scalable technologies.

            </p>
          </div>

          {/* Right Side - Hero Graphic */}
          <div className="flex w-full items-center justify-center lg:pl-0">
            <img
                src={aboutHero}
                alt="Who we are"
                className="w-full max-w-[600px] object-contain shadow-sm rounded-lg"
              />

            {/* <div className="w-full max-w-[500px] h-[300px] rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(0,99,182,0.15)_0%,rgba(0,0,0,0)_70%)] border border-black/5 dark:border-white/5 dark:bg-[radial-gradient(circle_at_30%_30%,rgba(0,99,182,0.1)_0%,rgba(0,0,0,0)_72%)]" /> */}
          </div>
        </div>
      </section>

      {/* ========================================
           SECTION 2: WHO WE ARE
           Introduction about the company
      ======================================== */}
      <section className="w-full bg-white pt-4 pb-8 transition-colors duration-300 dark:bg-black sm:pt-6 sm:pb-16 md:pt-4 md:pb-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-20">
          <h2 className="text-center font-heading font-bold uppercase leading-[1] tracking-[0.02em] text-[34px] sm:text-[46px] md:text-[56px] lg:text-[68px] xl:text-[78px]">
            <span className="text-black transition-colors duration-300 dark:text-white">WHO </span>
            <span className="text-brand-blue">WE ARE</span>
          </h2>

          <div className=" grid grid-cols-1 items-center gap-6 md:mt-16 md:grid-cols-[400px_1fr] md:gap-8 lg:mt-14 lg:grid-cols-[440px_1fr] lg:gap-12">
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
              <p className="  text-base sm:text-xl md:text-xl lg:text-2xl leading-[1.7] text-black/80 transition-colors duration-300 dark:text-white dark:font-medium">
                BlueFalcon Technologies is a next-generation Blockchain & AI development company dedicated to building decentralized, automated, and enterprise-grade digital ecosystems. We help startups, enterprises, and global innovators harness the power of distributed technology to create meaningful business transformation.
              </p>

              <p className="mt-6 text-base sm:text-xl md:text-xl lg:text-2xl leading-[1.7] text-black/80 transition-colors duration-300 dark:text-white dark:font-medium">
                From smart contract engineering to AI-driven automation and full-scale Web3 ecosystems, we bring unmatched expertise, innovation, and execution excellence to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
           SECTION 3: COMPANY STORY
           Background and history of the company
      ======================================== */}
      <section className="w-full bg-white py-4 transition-colors duration-300 dark:bg-black sm:py-6">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="w-full rounded-[24px] border border-brand-blue/10 bg-[#c0e1e23b] p-5 transition-all duration-300 dark:border-white/30 dark:bg-white/[0.03] sm:p-8 lg:p-10">
            <h2 className="font-heading font-bold leading-[1.2] tracking-[0.02em] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px]">
              <span className="text-black transition-colors duration-300 dark:text-white">Our </span>
              <span className="text-brand-blue">COMPANY STORY</span>
            </h2>

            <div className="mt-6 space-y-4 md:mt-8 lg:mt-10">
              <p className="text-base sm:text-xl md:text-xl lg:text-2xl  leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white dark:font-medium">
                BlueFalcon Technologies began with a mission to make decentralized technology accessible and business-ready. As blockchain grew beyond cryptocurrencies, we saw the need for a development partner that understood both cutting-edge engineering and real-world business challenges.
              </p>

              <p className="text-base sm:text-xl md:text-xl lg:text-2xl  leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white dark:font-medium">
                What started as a small team of blockchain engineers evolved into a full-fledged Blockchain & AI expertise hub—serving clients across industries like finance, gaming, supply chain, healthcare, and more.
              </p>

              <p className="text-base sm:text-xl md:text-xl lg:text-2xl  leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white dark:font-medium">
                Today, we stand as a trusted partner for next-gen digital transformation, delivering secure, scalable, and intelligent solutions that shape the future of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
           SECTION 4: MISSION & VISION
           Company mission and vision statements
      ======================================== */}
      <section className="w-full bg-white py-4 transition-colors duration-300 dark:bg-black sm:py-8 md:py-10">
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
                <img
                  src={missionIcon}
                  alt="Mission icon"
                  className="h-16 w-16 object-contain"
                  loading="lazy"
                />
              </div>
              <p className="mt-6 text-xl leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white dark:font-medium sm:text-base md:text-xl">
                To empower businesses with reliable, secure, and innovative Blockchain & AI solutions that drive automation, transparency, and digital trust worldwide
              </p>
            </div>

            {/* Vision Card */}
            <div className="rounded-[24px] border border-brand-blue/20 bg-white p-8 transition-all duration-300 hover:shadow-lg dark:border-white/30 dark:bg-white/[0.03] sm:p-10">
              <div className="flex items-center justify-between">
                <h3 className="no-stroke font-heading text-xl font-bold uppercase text-brand-blue sm:text-2xl">OUR VISION</h3>
                <img
                  src={visionIcon}
                  alt="Vision icon"
                  className="h-12 w-12 object-contain"
                  loading="lazy"
                />
              </div>
              <p className="mt-6 text-xl leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white dark:font-medium sm:text-base md:text-xl">
                To become a global leader in decentralized intelligence—where blockchain and AI merge to create smarter, autonomous, and high-performing digital ecosystems that redefine industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
           SECTION 5: CORE VALUES
           Company values and principles
      ======================================== */}
      <section className="w-full bg-white pb-16  transition-colors duration-300 dark:bg-black">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-20">
          <h2 className="text-center font-heading font-bold uppercase leading-[1] tracking-[0.02em] text-[34px] sm:text-[46px] md:text-[56px] lg:text-[76px]">
            <span className="text-black transition-colors duration-300 dark:text-white">OUR </span>
            <span className="text-brand-blue">CORE VALUES</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {[
              {
                title: "Innovation First",
                desc: "We constantly push boundaries to engineer new possibilities in Blockchain, AI, and automation.",
                icon: <img src={innovationFirst} alt="Innovation First" className="h-14 w-14 object-contain" loading="lazy" />
              },
              {
                title: "Transparency & Trust",
                desc: "We follow clear communication, open development practices, and dependable partnerships.",
                icon: <img src={transparencyTrust} alt="Transparency & Trust" className="h-14 w-14 object-contain" loading="lazy" />
              },
              {
                title: "Security at the Core",
                desc: "Every product we build follows rigorous security frameworks, audits, and defense-grade protection.",
                icon: <img src={securityCore} alt="Security at the Core" className="h-14 w-14 object-contain" loading="lazy" />
              },
              {
                title: "Quality without Compromise",
                desc: "From architecture to deployment—every line of code is engineered with precision.",
                icon: <img src={qualityWithoutCompromise} alt="Quality without Compromise" className="h-14 w-14 object-contain" loading="lazy" />
              },
              {
                title: "Long Term Collaboration",
                desc: "We don't just build solutions—we support and scale them with you.",
                icon: <img src={longTermCollaboration} alt="Long Term Collaboration" className="h-14 w-14 object-contain" loading="lazy" />
              },
              {
                title: "Ethical Technology",
                desc: "We develop responsibly, ensuring privacy, sustainability, and long-term value creation.",
                icon: <img src={ethicalTechnology} alt="Ethical Technology" className="h-14 w-14 object-contain" loading="lazy" />
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


      {/* ========================================
           SECTION 6: LEADERSHIP & TEAM
           Team introduction and expertise
      ======================================== */}
      <section className="w-full bg-white transition-colors duration-300 dark:bg-black">
        <div className="mx-auto max-w-layout">
          <div className="grid grid-cols-1 items-center lg:grid-cols-2">
            {/* Left Content */}
            <div className="flex flex-col gap-6 ml-[30px] lg:ml-[58px]">
              <h2 className="font-heading font-bold uppercase leading-[1.1] tracking-[0.02em] text-brand-blue text-[28px] sm:text-[38px] md:text-[45px] lg:text-[60px]">
                LEADERSHIP & TEAM
              </h2>

              <div className="max-w-[750px] space-y-4">
                <p className="font-sans text-xl leading-[1.6] font-medium  text-black/80 transition-colors duration-300 dark:text-white sm:text-base md:text-xl">
                  Behind BlueFalcon Technologies is a team of expert blockchain developers, AI engineers, security auditors, architects, researchers, designers, and strategists.
                </p>

                <div className="space-y-2">
                  <h3 className="font-heading text-xl text-black transition-colors duration-300 dark:text-white sm:text-xl md:text-2xl">
                    A Team Built on Excellence
                  </h3>
                  <div className="space-y-1">
                    {[
                      "Multi-year experience in blockchain protocols, AI models, and decentralized applications",
                      "Delivered projects across Ethereum, BSC, Solana, Polygon, Avalanche, Hyperledger & Bitcoin L2",
                      "Smart contract specialists with expertise in audits, tokenomics, and scalable system design",
                      "Leaders who combine technical mastery with strategic business understanding"
                    ].map((item, idx) => (
                      <p key={idx} className="flex items-start gap-3 font-sans text-xl font-large leading-[1.6] text-black/75 transition-colors duration-300 dark:text-white sm:text-base">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue" />
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <p className="font-sans text-xl font-medium leading-[1.6] text-black/80 transition-colors duration-300 dark:text-white sm:text-base md:text-xl">
                  Our leadership believes in empowering teams, encouraging innovation, and driving global impact through technology.
                </p>
              </div>
            </div>

            {/* Right Graphics */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative flex w-full max-w-[600px] justify-center lg:justify-end">
                <img
                  src={leadershipTeamImg}
                  alt="Leadership and Team"
                  className="w-full max-w-[500px] object-contain shadow-sm rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================
           SECTION 7: TECHNOLOGY EXPERTISE
           Blockchain and AI skills and capabilities
      ======================================== */}
      <section className="w-full bg-white py-8 transition-colors duration-300 dark:bg-black sm:py-12 md:py-10">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-20">
          <h2 className="text-center font-heading font-bold uppercase leading-[1.1] tracking-[0.02em] text-[34px] sm:text-[46px] md:text-[50px] lg:text-[55px]">
            TECHNOLOGY <span className="text-brand-blue">EXPERTISE</span>
          </h2>
          <p className="mt-4 text-center font-sans text-xl font-medium text-black/80 transition-colors duration-300 dark:text-white sm:text-base md:text-xl">
            We bring advanced expertise across all layers of Blockchain & AI ecosystems:
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Blockchain Expertise Card */}
            <div className="group relative rounded-[24px] border border-brand-blue/30 bg-white p-8 transition-all duration-300 hover:border-brand-blue hover:shadow-xl dark:border-white/30 dark:bg-transparent sm:p-10">
              <div className="absolute right-8 top-8 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                <img
                  src={blockchainExpertiseIcon}
                  alt="Blockchain expertise icon"
                  className="h-14 w-14 object-contain"
                  loading="lazy"
                />
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
                  <li key={idx} className="flex items-start gap-3 font-sans text-xlleading-[1.6] font-medium leading-none text-black/80 dark:text-white sm:text-base py-1">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-black/40 dark:bg-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Expertise Card */}
            <div className="group relative rounded-[24px] border border-brand-blue/30 bg-white p-8 transition-all duration-300 hover:border-brand-blue hover:shadow-xl dark:border-white/30 dark:bg-transparent sm:p-10">
              <div className="absolute right-8 top-8 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                <img
                  src={aiExpertiseIcon}
                  alt="AI expertise icon"
                  className="h-14 w-14 object-contain"
                  loading="lazy"
                />
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
                  <li key={idx} className="flex items-start gap-3 font-sans text-xl leading-[1.6] font-medium leading-none text-black/80 dark:text-white sm:text-base py-1">
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
                <div key={idx} className="flex items-center hover:border-brand-blue hover:bg-gradient-to-b hover:from-white hover:to-[#cfe6fb] justify-center rounded-xl border border-black/10 bg-white px-2 py-3 text-center font-sans text[28px] leading-[1.6] font-medium text-black/80 transition-all duration-300 hover:border-brand-blue hover:text-brand-blue dark:border-white/30 dark:bg-white/[0.05] dark:text-white sm:text-base">
                  {tech}
                </div>
              ))}
            </div>

            <p className="mt-10 text-center font-sans text-xl leading-[1.6] font-medium text-black/70 transition-colors duration-300 dark:text-white sm:text-base">
              Our technological versatility ensures powerful, scalable, and future-ready solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
           SECTION 8: OUR APPROACH
           Development methodology and process
      ======================================== */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16 md:py-8">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-20">
          <h2 className="text-center font-heading font-bold uppercase leading-[1.1] tracking-[0.02em] text-[34px] sm:text-[46px] md:text-[50px] lg:text-[55px]">
            OUR <span className="text-brand-blue">APPROACH</span>
          </h2>
          <p className="mt-4 text-center font-sans text-xl leading-[1.6] font-medium text-black/80 transition-colors duration-300 dark:text-white sm:text-base md:text-xl">
            We believe that great technology is built through collaboration, transparency, and strategic planning.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-[4.5rem] sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Deep Research & Analysis",
                desc: "We study your vision, market, and technology requirements.",
                icon: <img src={deepResearchIcon} alt="Deep Research & Analysis" className="h-10 w-10 object-contain" loading="lazy" />
              },
              {
                title: "Architecture & Blueprinting",
                desc: "We create a structured, secure, and scalable development roadmap.",
                icon: <img src={architectureBlueprintIcon} alt="Architecture & Blueprinting" className="h-10 w-10 object-contain" loading="lazy" />
              },
              {
                title: "Agile Development",
                desc: "Rapid, iterative development with full transparency and weekly updates.",
                icon: <img src={agileDevIcon} alt="Agile Development" className="h-10 w-10 object-contain" loading="lazy" />
              },
              {
                title: "Quality, Audits & Security",
                desc: "Multi-layer testing, code reviews, and vulnerability audits.",
                icon: <img src={auditsSecurityIcon} alt="Quality, Audits & Security" className="h-10 w-10 object-contain" loading="lazy" />
              },
              {
                title: "Deployment & Optimization",
                desc: "Seamless launch with post-live optimization and monitoring.",
                icon: <img src={deploymentOptimizationIcon} alt="Deployment & Optimization" className="h-10 w-10 object-contain" loading="lazy" />
              },
              {
                title: "Long-Term Support",
                desc: "Updates, maintenance, upgrades, and scaling assistance.",
                icon: <img src={longTermSupportIcon} alt="Long-Term Support" className="h-10 w-10 object-contain" loading="lazy" />
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

      {/* ========================================
           SECTION 9: ROADMAP
           Company growth timeline and future plans
      ======================================== */}
      <section className="w-full bg-white py-16 transition-colors duration-300 dark:bg-black sm:py-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-20">
          <h2 className="text-center font-heading font-bold uppercase leading-[1.1] tracking-[0.02em] text-[34px] text-brand-blue sm:text-[46px] md:text-[50px] lg:text-[55px]">
            ROADMAP
          </h2>
          <div className="flex justify-center">
            <p className="mt-4 max-w-[600px] text-center font-sans text-xl leading-[1.6] font-medium text-black/80 transition-colors duration-300 dark:text-white sm:text-base md:text-xl">
              A strategic path shaping the future of BlueFalcon Technologies:
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
                  image: phase1
                },
                {
                  phase: "02",
                  title: "Phase 2 — Web3 Expansion",
                  desc: "Expanded to NFTs, DeFi, smart contract audits, and multi-chain deployments.",
                  image: web3ExpansionImg
                },
                {
                  phase: "03",
                  title: "Phase 3 — AI Automation Integration",
                  desc: "Integrated AI-driven automation and intelligence into Web3 products.",
                  image: aiAutomationImg
                },
                {
                  phase: "04",
                  title: "Phase 4 — Global Collaborations",
                  desc: "Strengthened global partnerships with enterprises, startups, and investors.",
                  image: globalCollaborationImg
                },
                {
                  phase: "05",
                  title: "Phase 5 — Future Innovation",
                  desc: "Developing next-gen decentralized AI agents, autonomous Web3 ecosystems, and high-integrity digital infrastructure.",
                  image: futureInnovationImg
                }
              ].map((item, idx) => (
                <div key={idx} className={`relative flex flex-col items-center md:flex-row ${idx % 2 === 0 ? 'md:justify-center' : 'md:justify-center'}`}>
                  {/* Phase Card Container */}
                  <div className={`relative w-full pl-16 md:w-[42%]  ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-14 md:order-2'}`}>
                    {/* Phase Number Badge - Positioned fully outside the card edge */}
                    <div className={`absolute top-10 z-10 flex h-10 w-14 items-center justify-center rounded-xl bg-brand-blue font-bold text-white shadow-lg ${idx % 2 === 0 ? '-left-2' : '-right-10 md:-right-14'}`}>
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
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-64 w-full max-w-[440px] object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
           SECTION 10: CALL TO ACTION (BEFORE FOOTER)
           Final CTA section before footer
      ======================================== */}
      <BeforeFooter
        title="Ready To Build The Future With Us?"
        description="Let's turn your blockchain or AI idea into a powerful, scalable, and secure solution."
        buttonText="Contact Us Today"
        buttonLink="/contact"
        className="!py-12 md:!py-16"
      />
    </div>
    </>
  );
};

export default About;
