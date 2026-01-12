import BeforeFooter from '../components/common/BeforeFooter';

import heroImg from '../assets/Casestudies_images/Web3NFTMetaverse.png';
import fintechImg from '../assets/Casestudies_images/FintechBanking.png';
import supplyImg from '../assets/Casestudies_images/SupplychainLogistics.png';
import healthcareImg from '../assets/Casestudies_images/HealthCare.png';
import realEstateImg from '../assets/Casestudies_images/RealEstateProptech.png';
import web3Img from '../assets/Casestudies_images/Web3NFTMetaverse.png';
import gamingImg from '../assets/home_images/blockchain+ai.png'; // No exact match in Casestudies_images; keeping existing to avoid wrong mapping
import ecommerceImg from '../assets/Casestudies_images/Ecommerce.png';
import energyImg from '../assets/Casestudies_images/EnergySustanability.png';
import automationImg from '../assets/Casestudies_images/AIautomationAnalytics.png';

const CaseStudies = () => {
  const filters = [
    { title: 'FINTECH &\nBANKING', image: fintechImg },
    { title: 'SUPPLY CHAIN &\nLOGISTICS', image: supplyImg },
    { title: 'HEALTHCARE', image: healthcareImg },
    { title: 'REAL ESTATE &\nPROPTECH', image: realEstateImg },
    { title: 'WEB3, NFTS &\nMETAVERSE', image: web3Img },
    { title: 'GAMING &\nENTERTAINMENT', image: gamingImg },
    { title: 'E-COMMERCE', image: ecommerceImg },
    { title: 'ENERGY &\nSUSTAINABILITY', image: energyImg },
    { title: 'AUTOMATION &\nANALYTICS', image: automationImg },
  ];

  return (
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero */}
      <section className="w-full bg-white pt-12 pb-12 transition-colors duration-300 dark:bg-black sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16">
        <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[58%_42%] lg:pl-[3rem] lg:pr-[5rem]">
          <div className="flex w-full flex-col gap-6">
            <h1 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white">
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35]">
                BLOCKCHAIN &amp; AI CASE
              </span>
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35]">
                STUDIES |{' '}
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">BLOCKCHAIN APP</span>
              </span>
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35]">
                ADVISOR
              </span>
            </h1>

            <p className="max-w-[820px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-lg">
              At Blockchain App Advisor, we transform ideas into enterprise-grade blockchain and AI solutions. Explore our curated
              portfolio of real projects delivered across fintech, supply chain, gaming, healthcare, real estate, and emerging
              Web3 sectors.
              <span className="mt-3 block">
                Each case study outlines the <span className="font-semibold text-black dark:text-white">Problem</span> —{' '}
                <span className="font-semibold text-black dark:text-white">Solution</span> —{' '}
                <span className="font-semibold text-black dark:text-white">Results</span>, showcasing measurable business value.
              </span>
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[560px]">
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.04]">
                <img src={heroImg} alt="Case studies" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filters */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              INDUSTRY <span className="text-brand-blue">FILTERS</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl font-sans text-[14px] text-black/65 transition-colors duration-300 dark:text-white/70 sm:text-[15px]">
              Browse case studies by industry
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
            {filters.map((f) => (
              <button
                key={f.title}
                type="button"
                className="group flex flex-col items-center"
              >
                <div className="h-[120px] w-[86px] overflow-hidden rounded-[44px] border border-black/10 bg-black/[0.03] shadow-[0_10px_26px_rgba(0,0,0,0.10)] transition-all duration-300 group-hover:-translate-y-[2px] group-hover:border-brand-blue/45 group-hover:shadow-[0_14px_34px_rgba(0,0,0,0.14)] dark:border-white/15 dark:bg-white/[0.04]">
                  <img src={f.image} alt={f.title.replace('\n', ' ')} className="h-full w-full object-cover" />
                </div>
                <div className="mt-4 text-center font-heading text-[12px] font-bold uppercase leading-snug tracking-wide text-black transition-colors duration-300 dark:text-white">
                  {f.title.split('\n').map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <BeforeFooter
        title="Ready To Build A Secure And Scalable Blockchain Product?"
        description="Book a free consultation with our blockchain experts today."
        buttonText="Get A Quote"
      />
    </div>
  );
};

export default CaseStudies;
