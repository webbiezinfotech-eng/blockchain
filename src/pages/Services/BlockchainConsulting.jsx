import BeforeFooter from '../../components/common/BeforeFooter';

import heroImg from '../../assets/services images/BlockchainConsultingimages/ConsultingService-hero.png';

// Consulting approach graphics
import approach1Icon from '../../assets/services images/BlockchainConsultingimages/DiscoveryRequirementAnalysis.png';
import approach2Icon from '../../assets/services images/BlockchainConsultingimages/SolutionArchitectureTechnicalDesign.png';
import approach3Icon from '../../assets/services images/BlockchainConsultingimages/TokenomicsBusinessStrategy.png';
import approach4Icon from '../../assets/services images/BlockchainConsultingimages/PrototypeValidation.png';
import approach5Icon from '../../assets/services images/BlockchainConsultingimages/ImplementationPlanning.png';

// Expertise graphics
import exp1Img from '../../assets/services images/BlockchainConsultingimages/BlockchainStrategyArchitecture.png';
import exp2Img from '../../assets/services images/BlockchainConsultingimages/TokenomicsCryptoEconomic.png';
import exp3Img from '../../assets/services images/BlockchainConsultingimages/DefiWeb3ProductStrategy.png';
import exp4Img from '../../assets/services images/BlockchainConsultingimages/BlochchainSecurityCompliance.png';
import exp5Img from '../../assets/services images/BlockchainConsultingimages/EnterpriseBlockchainConsulting.png';

// Deliverables graphics
import iconTechnicalArchitecture from '../../assets/services images/BlockchainConsultingimages/icons/TechnicalArchitecture.gif';
import iconProductRoadmap from '../../assets/services images/BlockchainConsultingimages/icons/ProductRoadmap.gif';
import iconTokenomicsDocument from '../../assets/services images/BlockchainConsultingimages/icons/TokenomicsDocument.gif';
import iconWhitepaperLitepaper from '../../assets/services images/BlockchainConsultingimages/icons/WhitepaperLitepaper.gif';

import whitepaperImg from '../../assets/services images/BlockchainConsultingimages/WhitepaperLitepaper.png';

const BlockchainConsulting = () => {
  const consultingApproach = [
    {
      title: 'Discovery & Requirement Analysis',
      desc: 'We map business goals, user journeys, constraints, and success metrics to build a clear product scope.',
      icon: approach1Icon,
    },
    {
      title: 'Solution Architecture & Technical Design',
      desc: 'We define the right chain, data flows, security model, and system components for scalability and speed.',
      icon: approach2Icon,
    },
    {
      title: 'Tokenomics & Business Strategy',
      desc: 'We design incentives, distribution models, governance, and sustainable revenue mechanics.',
      icon: approach3Icon,
    },
    {
      title: 'Prototype & Validation',
      desc: 'We validate assumptions with rapid proofs-of-concept, UX prototypes, and feasibility checks.',
      icon: approach4Icon,
    },
    {
      title: 'Implementation Planning',
      desc: 'We convert the strategy into a build plan: milestones, tech stack, estimates, and risk mitigation.',
      icon: approach5Icon,
    },
  ];

  const expertise = [
    {
      title: 'Blockchain Strategy & Architecture',
      bullets: ['Public vs private chain selection', 'High-level system design & data flows', 'Scalability and cost planning', 'Integration strategy'],
      image: exp1Img,
      alt: 'Blockchain strategy and architecture',
    },
    {
      title: 'Tokenomics & Crypto Economics',
      bullets: ['Token utility and incentive loops', 'Allocation and vesting structure', 'Liquidity & exchange strategy', 'Governance model design'],
      image: exp2Img,
      alt: 'Tokenomics and crypto economics',
    },
    {
      title: 'DeFi & NFT Product Strategy',
      bullets: ['DeFi primitives (staking, lending, swaps)', 'Marketplace & creator economy flows', 'On-chain/off-chain storage strategy', 'Go-to-market considerations'],
      image: exp3Img,
      alt: 'DeFi and NFT product strategy',
    },
    {
      title: 'Blockchain Security & Compliance',
      bullets: ['Threat modeling & attack surface review', 'Smart contract audit readiness', 'Key management and custody choices', 'Compliance and controls (KYC/AML)'],
      image: exp4Img,
      alt: 'Blockchain security and compliance',
    },
    {
      title: 'Enterprise Blockchain Consulting',
      bullets: ['Consortium networks and permissioning', 'Identity and access control', 'Operational monitoring and governance', 'Enterprise-grade rollout planning'],
      image: exp5Img,
      alt: 'Enterprise blockchain consulting',
    },
  ];

  const deliverables = [
    { title: 'Architecture Diagrams', desc: 'Clear system blueprint for faster execution.', icon: iconTechnicalArchitecture },
    { title: 'Product Roadmap', desc: 'Milestones, scope, priorities, and timeline.', icon: iconProductRoadmap },
    { title: 'Tokenomics Model', desc: 'Supply, allocation, incentives, and governance.', icon: iconTokenomicsDocument },
    { title: 'Implementation Plan', desc: 'Tech stack, estimates, risks, and team roles.', icon: iconWhitepaperLitepaper },
  ];

  const whitepaperPoints = [
    'Problem & vision articulation',
    'Solution overview and technical design',
    'Tokenomics and utility explanation',
    'Security and risk considerations',
    'Roadmap and launch plan',
  ];

  return (
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero */}
      <section className="w-full bg-white pt-4 pb-12 transition-colors duration-300 dark:bg-black sm:pt-6 sm:pb-14 lg:pt-8 lg:pb-16">
        <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[58%_42%] lg:pl-[3rem] lg:pr-[5rem]">
          <div className="flex w-full flex-col gap-6">
            <h1 className="font-heading font-bold uppercase tracking-tight transition-colors duration-300">
              <span className="block text-[38px] leading-[1.2] text-brand-blue sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35]">
                EXPERT BLOCKCHAIN
              </span>
              <span className="block text-[38px] leading-[1.2] text-black transition-colors duration-300 dark:text-white sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35]">
                CONSULTING FOR SCALABLE
              </span>
              <span className="block text-[38px] leading-[1.2] text-brand-blue sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35]">
                SOLUTIONS
              </span>
            </h1>

            <p className="max-w-[760px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-lg">
              We help you choose the right blockchain strategy, architecture, and execution plan—so you build faster with less
              risk. From tokenomics to security and go-to-market planning, our consulting turns ideas into production-ready
              roadmaps.
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[560px]">
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.04]">
                <img src={heroImg} alt="Blockchain consulting" className="h-auto w-full object-contain" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Approach */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              CONSULTING <span className="text-brand-blue">APPROACH</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[920px] font-sans text-[15px] font-medium leading-[1.7] text-black/70 transition-colors duration-300 dark:text-white/75 sm:text-[16px]">
              Our consulting process is designed to minimize risk and maximize clarity—so you can make confident decisions and
              move into development with a solid blueprint.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {consultingApproach.slice(0, 4).map((c) => (
              <div key={c.title} className="group relative">
                <div className="absolute -inset-4 rounded-[22px] bg-brand-blue transition-transform duration-300 translate-x-2 translate-y-2 -rotate-[3deg] group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-[4deg]" />
                <div className="relative rounded-[22px] border border-[#c8d7e4] bg-white p-7 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="font-heading text-[20px] font-bold uppercase leading-tight text-brand-blue transition-colors duration-300 dark:text-white">
                      {c.title}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-brand-blue/35 bg-white transition-colors duration-300 dark:border-white/25 dark:bg-black/20">
                      <img src={c.icon} alt="" className="h-9 w-9 object-contain" />
                    </div>
                  </div>
                  <p className="mt-4 font-sans text-[15px] font-medium leading-[1.65] text-black/70 transition-colors duration-300 dark:text-white/80">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Last centered card */}
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-[520px]">
              <div className="group relative">
                <div className="absolute -inset-4 rounded-[22px] bg-brand-blue transition-transform duration-300 translate-x-2 translate-y-2 -rotate-[3deg] group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-[4deg]" />
                <div className="relative rounded-[22px] border border-[#c8d7e4] bg-white p-7 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="font-heading text-[20px] font-bold uppercase leading-tight text-brand-blue transition-colors duration-300 dark:text-white">
                      {consultingApproach[4].title}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-brand-blue/35 bg-white transition-colors duration-300 dark:border-white/25 dark:bg-black/20">
                      <img src={consultingApproach[4].icon} alt="" className="h-9 w-9 object-contain" />
                    </div>
                  </div>
                  <p className="mt-4 font-sans text-[15px] font-medium leading-[1.65] text-black/70 transition-colors duration-300 dark:text-white/80">
                    {consultingApproach[4].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              AREAS OF <span className="text-brand-blue">EXPERTISE</span>
            </h2>
          </div>

          <div className="mx-auto flex max-w-[1020px] flex-col gap-6">
            {expertise.map((e, idx) => (
              <div
                key={e.title}
                className="grid grid-cols-1 items-center gap-8 rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_12px_34px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/25 dark:bg-black/20 md:grid-cols-[1fr_260px]"
              >
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <h3 className="font-heading text-[18px] font-bold uppercase tracking-wide text-black transition-colors duration-300 dark:text-white sm:text-[20px]">
                    {e.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-[7px] h-2 w-2 rounded-full bg-brand-blue" />
                        <span className="font-sans text-[14px] font-medium leading-relaxed text-black/75 transition-colors duration-300 dark:text-white/80 sm:text-[15px]">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03] transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.04]">
                    <img src={e.image} alt={e.alt} className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              <span className="text-black dark:text-white">DELIVERABLES</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[980px] font-sans text-[15px] font-medium leading-[1.7] text-black/70 transition-colors duration-300 dark:text-white/75 sm:text-[16px]">
              We provide actionable outputs you can build with—clear documentation, technical direction, and a delivery-ready
              plan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((d) => (
              <div
                key={d.title}
                className="rounded-[14px] border border-brand-blue/25 bg-white p-6 text-center shadow-[0_12px_34px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-brand-blue/35 bg-black/[0.03] transition-colors duration-300 dark:border-white/30 dark:bg-white/[0.06]">
                  <img src={d.icon} alt="" className="h-9 w-9 object-contain" loading="lazy" />
                </div>
                <h3 className="mt-4 font-heading text-[16px] font-bold uppercase tracking-wide text-black transition-colors duration-300 dark:text-white">
                  {d.title}
                </h3>
                <p className="mt-3 font-sans text-[14px] font-medium leading-relaxed text-black/70 transition-colors duration-300 dark:text-white/80">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[14px] border border-black/10 bg-white p-7 shadow-[0_12px_34px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/25 dark:bg-black/20">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[280px_1fr]">
              <div className="flex items-center justify-center">
                <div className="h-[160px] w-full max-w-[260px] overflow-hidden rounded-2xl border border-brand-blue/25 bg-black/[0.03] transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.04]">
                  <img src={whitepaperImg} alt="Whitepaper / Litepaper" className="h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-[18px] font-bold uppercase tracking-wide text-black transition-colors duration-300 dark:text-white">
                  Whitepaper / Litepaper
                </h3>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {whitepaperPoints.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-[7px] h-2 w-2 rounded-full bg-brand-blue" />
                      <span className="font-sans text-[14px] font-medium leading-relaxed text-black/75 transition-colors duration-300 dark:text-white/80">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <BeforeFooter
        title="Ready To Build A Secure And Scalable Blockchain Product?"
        buttonText="Get A Quote"
        paddingClassName="py-10 sm:py-12"
        containerClassName="mx-auto max-w-layout px-4 text-center sm:px-6 md:px-10"
        headingAs="h3"
        headingClassName="font-heading text-[32px] font-bold uppercase leading-tight text-white sm:text-[40px] md:text-[48px]"
      />
    </div>
  );
};

export default BlockchainConsulting;

