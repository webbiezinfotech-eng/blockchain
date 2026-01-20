import { useMemo, useState } from 'react';
import BeforeFooter from '../components/common/BeforeFooter';

import heroImg from '../assets/FAQs-hero.png';

const FAQ = () => {
  const data = useMemo(
    () => ({
      'General FAQs': [
        {
          q: 'What services does Blockchain App Advisor offer?',
          a:
            'We provide end-to-end solutions including blockchain development, AI & automation, Web3/NFT platforms, tokenization, DeFi solutions, smart contract development, enterprise consulting, app design, and post-launch support.',
        },
        {
          q: 'Who do you work with?',
          a: 'We work with startups, enterprises, and Web3 innovators—anyone building secure and scalable blockchain, AI, or digital products.',
        },
        {
          q: 'Can you help refine or develop my idea?',
          a: 'Yes. We can validate your concept, define scope, create wireframes, and build an MVP roadmap before full-scale development.',
        },
        {
          q: 'Do you work with global clients?',
          a: 'Yes. We collaborate remotely across time zones with transparent communication and regular delivery updates.',
        },
        {
          q: 'Do you offer post-launch support?',
          a: 'Yes. We provide monitoring, maintenance, upgrades, and scaling support after deployment.',
        },
      ],
      'Service-Specific FAQs': [
        {
          q: 'Do you build both CEX and DEX platforms?',
          a: 'Yes. We build centralized, decentralized, hybrid, and P2P exchanges with trading features, liquidity tooling, and security layers.',
        },
        {
          q: 'Can you integrate KYC/AML and payment gateways?',
          a: 'Yes. We can integrate KYC/AML providers, on-ramp/off-ramp solutions, and payment systems based on your needs and region.',
        },
        {
          q: 'Do you provide smart contract audits?',
          a: 'Yes. We offer audit workflows combining automated tools and manual review to identify vulnerabilities and provide remediation guidance.',
        },
      ],
      'AI & Automation': [
        {
          q: 'What AI solutions do you implement?',
          a: 'We implement chatbots, intelligent automation, analytics pipelines, recommendation systems, and AI-assisted workflows tailored to your product.',
        },
        {
          q: 'Can AI be integrated with blockchain apps?',
          a: 'Yes. We integrate AI services with Web3 applications for analytics, fraud detection, personalization, and automation.',
        },
      ],
      'Web3, NFT & Metaverse': [
        {
          q: 'Do you build NFT marketplaces and minting platforms?',
          a: 'Yes. We build NFT marketplaces, minting flows, metadata pipelines, and wallet integrations across EVM and non-EVM chains.',
        },
        {
          q: 'Which standards do you support?',
          a: 'We support common token standards such as ERC-20, BEP-20, ERC-721, ERC-1155, and chain-specific equivalents.',
        },
      ],
      'Pricing FAQs': [
        {
          q: 'How do you price projects?',
          a: 'Pricing depends on scope, complexity, timeline, and integrations. We typically propose fixed-scope milestones or dedicated team models.',
        },
        {
          q: 'Do you offer MVP packages?',
          a: 'Yes. We can define a focused MVP scope to validate market fit and launch quickly, then iterate based on feedback.',
        },
      ],
      'Technical FAQs': [
        {
          q: 'Which blockchains do you support?',
          a: 'We support Ethereum, BNB Chain, Polygon, Solana, Avalanche, Tron, and more—based on product requirements and ecosystem fit.',
        },
        {
          q: 'How do you ensure security?',
          a: 'We follow security-first engineering practices: code reviews, access control patterns, threat modeling, testing, and (when applicable) audits.',
        },
        {
          q: 'Do you provide documentation and handover?',
          a: 'Yes. We provide technical documentation, deployment guides, and knowledge transfer for smooth long-term ownership.',
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
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero */}
      <section className="w-full bg-white pb-10 sm:pt-14 sm:pb-12 lg:pb-[8.5rem] transition-colors duration-300 dark:bg-black">
        <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[58%_42%] lg:pl-[3rem] lg:pr-[5rem]">
          <div className="flex w-full flex-col gap-6">
            <h1 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white">
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35]">
                CLARITY ON <span className="text-brand-blue">BLOCKCHAIN</span>,
              </span>
              <span className="block text-[34px] leading-[1.2] sm:text-[48px] sm:leading-[1.25] lg:text-[58px] lg:leading-[1.35]">
                <span className="text-brand-blue">AI &amp;</span>  <span className="text-brand-blue">WEB3 DEVELOPMENT</span>  
              </span>
            </h1>

            <p className="max-w-[760px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-lg">
              From idea validation and MVP development to enterprise-scale deployment, we answer the most common questions founders
              and organizations ask before building blockchain or AI-powered solutions.
            </p>
          </div>

          <div className="flex w-full items-center justify-center ">
            <div className="w-full max-w-[400px] lg:max-w-[400px]">
              <div className="overflow-hidden rounded-3xl transition-colors duration-300  dark:bg-white/[0.04]">
                <img src={heroImg} alt="FAQ illustration" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs + Accordion */}
      <section className="w-full bg-white pb-14 transition-colors duration-300 dark:bg-black sm:pb-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="flex flex-wrap justify-center gap-x-[5.25rem] gap-y-3 border-b border-black/10 pb-4 text-center transition-colors duration-300 dark:border-white/15">
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
                  className={`font-sans text-[13px] font-semibold transition-colors duration-300 sm:text-[14px]
                    ${isActive ? 'text-brand-blue underline underline-offset-4' : 'text-black/70 hover:text-brand-blue dark:text-white/70 dark:hover:text-brand-blue'}`}
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
                  className="overflow-hidden rounded-xl border border-[#c8d7e4] bg-[#eaf3ff] transition-colors duration-300
                    dark:border-white/40 dark:bg-gradient-to-r dark:from-[#19385b] dark:to-black"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx((prev) => (prev === idx ? -1 : idx))}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded bg-brand-blue text-[12px] font-bold text-white">
                        {idx + 1}
                      </span>
                      <span className="font-sans text-[15px] font-semibold text-black transition-colors duration-300 dark:text-white sm:text-[16px]">
                        {it.q}
                      </span>
                    </div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      className={`shrink-0 text-black/70 transition-transform duration-300 dark:text-white/80 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    >
                      <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Smooth accordion panel */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-400 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`px-6 pb-6 pt-0 transition-all duration-300 ${
                          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                        }`}
                      >
                        <p className="font-sans text-[14px] leading-relaxed text-black/75 transition-colors duration-300 dark:text-white/80 sm:text-[15px]">
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

      <BeforeFooter title="Still Have Questions? Contact Us" buttonText="Contact Us Today" />
    </div>
  );
};

export default FAQ;

