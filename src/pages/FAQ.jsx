import { Helmet } from "react-helmet";

import { useMemo, useState } from 'react';
import BeforeFooter from '../components/common/BeforeFooter';
import PageHero from '../components/common/PageHero';
import heroImg from '../assets/FAQs-hero.png';

const FAQ = () => {
  const data = useMemo(
    () => ({
      'General FAQs': [
        {
          q: 'What services does BlueFalcon Technologies offer?',
          a: 'We provide end-to-end solutions including blockchain development, AI & automation, Web3/NFT platforms, tokenization, DeFi solutions, smart contract development, enterprise consulting, app design, and post-launch support.',
        },
        {
          q: 'Who do you work with?',
          a: 'We work with startups, enterprises, government agencies, tech founders, gaming studios, and global brands who want to build blockchain or AI-powered solutions.',
        },
        {
          q: 'Can you help refine or develop my idea?',
          a: 'Absolutely. Our team provides strategy planning, MVP definition, product roadmapping, and technical architecture consulting before development begins.',
        },
        {
          q: 'Do you work with global clients?',
          a: 'Yes. We partner with clients across the US, Europe, Asia, Middle East, Australia, and Africa.',
        },
        {
          q: 'Do you offer post-launch support?',
          a: 'Yes. We provide ongoing maintenance, upgrades, performance monitoring, smart contract audits, and scalability enhancements.',
        },
      ],

      'Service-Specific FAQs': [
        {
          q: 'Which blockchain platforms do you support?',
          a: 'We build on Ethereum, Polygon, BNB Chain, Solana, Avalanche, Hyperledger, Cosmos, Tron, Cardano, Near, and custom private blockchains.',
        },
        {
          q: 'Do you provide smart contract audits?',
          a: 'Yes. We offer internal audits and collaborate with third-party security firms for enterprise-grade audits.',
        },
        {
          q: 'Can you integrate blockchain into existing systems?',
          a: 'Yes. We can integrate blockchain capabilities with your existing mobile apps, web apps, ERP/CRM systems, and backend workflows.',
        },
      ],

      'AI & Automation': [
        {
          q: 'What AI solutions do you offer?',
          a: 'We develop AI agents, predictive analytics, NLP automation, chatbots, workflow automation, recommendation engines, and process optimization tools.',
        },
        {
          q: 'Can you integrate AI into my current business operations?',
          a: 'Yes. We specialize in integrating AI models into CRMs, SaaS products, enterprise software, and internal operations.',
        },
        {
          q: 'Do you build custom AI models?',
          a: 'Yes. We build and deploy custom AI solutions tailored to business goals, datasets, security, and compliance needs.',
        },
      ],

      'Web3, NFT & Metaverse': [
        {
          q: 'Do you build NFT marketplaces?',
          a: 'Yes. We create multi-chain NFT marketplaces with features like minting, royalties, auctions, analytics dashboards, and mobile wallet integration.',
        },
        {
          q: 'Can you develop Web3 games?',
          a: 'Yes. We develop Play-to-Earn games, token economies, NFT-based gameplay assets, and metaverse integrations.',
        },
        {
          q: 'Do you help with tokenization?',
          a: 'We support real estate tokenization, asset-backed tokens, utility tokens, governance tokens, and security token frameworks.',
        },
      ],

      'Pricing FAQs': [
        {
          q: 'How much does a blockchain or AI project cost?',
          a: 'Pricing depends on scope, features, complexity, design needs, security requirements, and integrations. Small MVPs start from $10k–$25k, while full-scale products can range from $40k–$250k+.',
        },
        {
          q: 'Do you offer fixed pricing or hourly billing?',
          a: 'We offer both fixed pricing for well-defined projects and hourly/monthly billing for flexible, ongoing work or R&D.',
        },
        {
          q: 'Is there an upfront payment required?',
          a: 'Yes. Typically, payments are divided into milestones starting with an initial project initiation deposit.',
        },
        {
          q: 'Can you help create an MVP for a lower budget?',
          a: 'Yes. We build lean MVPs that validate your idea quickly before scaling into a full product.',
        },
      ],

      'Technical FAQs': [
        {
          q: 'How long does a project take?',
          a: 'Timelines depend on scope. Simple apps take 4–8 weeks, MVPs take 8–12 weeks, complex platforms take 3–6 months, and enterprise solutions take 6–12 months.',
        },
        {
          q: 'What tech stack do you use?',
          a: 'Front-end: React, Next.js, Vue, Flutter. Backend: Node.js, Python, Go. Blockchain: Solidity, Rust, Move, Hyperledger. AI: Python, TensorFlow, PyTorch, LLM integrations.',
        },
        {
          q: 'Do you follow a structured development process?',
          a: 'Yes. We follow an agile approach including Discovery & Planning, Architecture & Design, Development, QA & Smart Contract Testing, Deployment, and Support & Scaling.',
        },
        {
          q: 'How do you ensure security?',
          a: 'We ensure security through smart contract audits, penetration testing, secure architecture design, robust encryption protocols, and continuous monitoring.',
        },
        {
          q: 'Do you assist with compliance and regulations?',
          a: 'Yes. We help navigate KYC/AML, GDPR, token regulations, and industry-specific compliance requirements.',
        },
      ],
    }),
    [],
  );


  const categories = useMemo(() => Object.keys(data), [data]);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openIdx, setOpenIdx] = useState(0);

  const items = data[activeCategory] ?? [];

  return (
    <>
      <Helmet>
        <title>Blockchain & AI FAQs | BlueFalcon Technologies</title>
        <meta
          name="description"
          content="Find answers to common questions about blockchain development, AI solutions, Web3 platforms, NFT marketplaces, DeFi projects, pricing, and technical processes."
        />
        <meta
          name="keywords"
          content="blockchain FAQ, AI development FAQ, Web3 FAQ, NFT marketplace questions, DeFi development cost"
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/faq"
        />
      </Helmet>


      <div className="w-full bg-white transition-colors duration-300">
        {/* Hero */}
        <section className="w-full bg-white pt-4 pb-2 transition-colors duration-300 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-8">
          <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[58%_42%] lg:pl-[3rem] lg:pr-[5rem]">
            {/* <div className="grid grid-cols-1 items-center lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"> */}

              <div className="flex w-full flex-col gap-6">
                <h1 className="font-heading font-bold uppercase leading-[1.15] text-[32px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
                  <div className="block w-full  transition-colors duration-300">
                    <span className="text-black">CLARITY ON </span>
                  </div>
                  <div className="block w-full  transition-colors duration-300">
                    <span className="text-brand-blue">BLOCKCHAIN </span>
                  </div>
                  <div className="block w-full  transition-colors duration-300">
                    <span className="text-brand-blue">AI &amp; </span><span className="text-brand-blue">WEB3 DEVELOPMENT</span>
                  </div>
                </h1>

                <p className="max-w-[860px] font-sans leading-[1.7] transition-colors duration-300 text-xl md:text-2xl">
                  Gain complete clarity before you build. From idea validation and MVP strategy to enterprise-grade deployment, we address the most important questions founders and organizations have about blockchain, AI, and Web3 development. Our insights help you reduce risk, optimize investment, and confidently move forward with scalable, secure, and future-ready digital solutions.
                </p>
              </div>

              <div className="flex  justify-center">
                <img src={heroImg} alt="FAQ illustration" className="h-full w-full max-w-[400px] object-cover shadow-sm rounded-lg" />
              </div>
            {/* </div> */}
          </div>
        </section>

        {/* <PageHero
          titleLines={[
            { text: "CLARITY ON BLOCKCHAIN,", highlight: false },
            { text: "AI & WEB3 DEVELOPMENT", highlight: true },
          ]}
          description="Gain complete clarity before you build. From idea validation and MVP strategy to enterprise-grade deployment, we address the most important questions founders and organizations have about blockchain, AI, and Web3 development. Our insights help you reduce risk, optimize investment, and confidently move forward with scalable, secure, and future-ready digital solutions."
          image={heroImg}
          imageAlt="FAQ illustration"
        /> */}

        {/* Tabs + Accordion */}
        <section className="w-full bg-white py-14 transition-colors duration-300 sm:pb-16"><h1 className="text-brand-blue font-heading text-center mb-5 md:mb-10 font-bold uppercase tracking-tight text-[26px] sm:text-[34px] md:text-[42px] lg:text-[68px] transition-colors duration-300">
          <span className="text-black">FREQUENTLY </span>
          ASKED QUESTIONS</h1>

          <div className="mx-auto px-10 sm:px-10 md:px-16 lg:px-[5rem]">
            <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-10 gap-y-3 border-b border-black/10 pb-4 text-center transition-colors duration-300">
              {categories.map((c) => {
                const isActive = c === activeCategory;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => {
                      setActiveCategory(c);
                      setOpenIdx(0);
                    }}
                    className={`font-sans  font-semibold transition-colors duration-300 text-[16px] sm:text-[16px] md:text-[20px]
                    ${isActive ? 'text-brand-blue underline underline-offset-4' : 'text-black/70 hover:text-brand-blue'}`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            <div className="mx-auto mt-10 max-w-[1200px] space-y-5">
              {items.map((it, idx) => {
                const isOpen = idx === openIdx;
                return (
                  <div
                    key={it.q}
                    className="overflow-hidden rounded-xl border border-[#c8d7e4] bg-[#eaf3ff] transition-colors duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIdx((prev) => (prev === idx ? -1 : idx))}
                      className="flex w-full items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded bg-brand-blue text-[18px] font-bold text-white">
                          {idx + 1}
                        </span>
                        <span className="font-sans  font-semibold text-black transition-colors duration-300 text-[15px] sm:text-[17px] md:text-[18px]">
                          {it.q}
                        </span>
                      </div>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="none"
                        className={`shrink-0 text-black/70 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      >
                        <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {/* Smooth accordion panel */}
                    <div
                      className={`grid transition-[grid-template-rows] duration-400 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className={`px-6 pb-6 pt-0 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                            }`}
                        >
                          <p className="font-sans  leading-relaxed text-black/75 transition-colors duration-300 text-[14px] sm:text-[15px] md:text-[16px]">
                            {it.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <BeforeFooter title="Still Have Questions? Contact Us" buttonText="Contact Us Today"  buttonLink="/contact"/>
      </div>
    </>
  );
};

export default FAQ;

