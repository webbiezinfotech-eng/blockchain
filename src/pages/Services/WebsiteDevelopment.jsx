import { Helmet } from "react-helmet";

import BeforeFooter from '../../components/common/BeforeFooter';
import DevelopmentProcess from '../../components/common/DevelopmentProcess';

// Using placeholder images - replace with actual images when available
import heroImg from '../../assets/services images/WesbiteDevimages/hero.png';
import second from '../../assets/services images/WesbiteDevimages/second.png';
// Icons for use cases
import iconEcommerce from '../../assets/services images/AIDevimages/icons/RecommendationSystem.gif';
import iconCMS from '../../assets/services images/CustomDevimages/icons/UIUXDesign.gif';
import iconWebApps from '../../assets/services images/CustomDevimages/icons/DiscoveryPlanning.gif';
import iconPortfolio from '../../assets/services images/CustomDevimages/icons/Deployment.gif';
import iconPWA from '../../assets/services images/CustomDevimages/icons/MaintenanceSupport.gif';
import iconAPI from '../../assets/services images/DappDevimages/icons/PaymentGateways.gif';

// Icons for capabilities
import iconResponsiveDesign from '../../assets/services images/CustomDevimages/icons/UIUXDesign.gif';
import iconFrontend from '../../assets/services images/CustomDevimages/icons/DiscoveryPlanning.gif';
import iconBackend from '../../assets/services images/CustomDevimages/icons/TestingQA.gif';
import iconDatabase from '../../assets/services images/CustomDevimages/icons/Deployment.gif';
import iconSEO from '../../assets/services images/CustomDevimages/icons/MaintenanceSupport.gif';
import iconEcommerceSolution from '../../assets/services images/AIDevimages/icons/RecommendationSystem.gif';
import iconCloudDeployment from '../../assets/services images/CustomDevimages/icons/Deployment.gif';
import websitedevprocess from '../../assets/services images/WesbiteDevimages/websitedevprocess.png';
const WebsiteDevelopment = () => {
  const useCases = [
    {
      title: 'E-commerce platforms & online stores',
      icon: <img src={iconEcommerce} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    },
    {
      title: 'Content management systems (CMS)',
      icon: <img src={iconCMS} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    },
    {
      title: 'Web applications & dashboards',
      icon: <img src={iconWebApps} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    },
    {
      title: 'Portfolio & landing pages',
      icon: <img src={iconPortfolio} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    },
    {
      title: 'Progressive Web Apps (PWA)',
      icon: <img src={iconPWA} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    },
    {
      title: 'API integration & third-party services',
      icon: <img src={iconAPI} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    },
  ];

  const capabilitiesTop = [
    {
      title: 'Responsive Web Design',
      icon: <img src={iconResponsiveDesign} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
    {
      title: 'Frontend Development (React, Next.js, Vue)',
      icon: <img src={iconFrontend} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
    {
      title: 'Backend Development (Node.js, Python, PHP)',
      icon: <img src={iconBackend} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
    {
      title: 'Database Design & Management',
      icon: <img src={iconDatabase} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
  ];

  const capabilitiesBottom = [
    {
      title: 'SEO Optimization & Performance',
      icon: <img src={iconSEO} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
    {
      title: 'E-commerce Solutions',
      icon: <img src={iconEcommerceSolution} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
    {
      title: 'Cloud Deployment & Hosting',
      icon: <img src={iconCloudDeployment} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
  ];

  const toolsAndFrameworks = [
    'React.js',
    'Next.js',
    'Vue.js',
    'Angular',
    'Node.js',
    'Express',
    'Django',
    'Laravel',
    'WordPress',
    'MongoDB',
    'PostgreSQL',
    'AWS',
    'Vercel',
    'Netlify',
  ];

  const developmentSteps = [
    // { no: 1, title: 'Requirement Analysis & Planning' },
    // { no: 2, title: 'UI/UX Design & Wireframing' },
    
    // { no: 4, title: 'Backend Development & API Integration' },
    
    // { no: 6, title: 'Testing & Quality Assurance' },
    
    // { no: 8, title: 'Maintenance & Support' },
    // { no: 7, title: 'Deployment & Launch' },
    // { no: 5, title: 'Database Setup & Integration' },
    // { no: 3, title: 'Frontend Development' },
    { no: 1, title: 'Requirement Analysis & Planning' },
    { no: 2, title: 'UI/UX Design & Wireframing' },
    { no: 3, title: 'Frontend Development' },
    { no: 4, title: 'Backend Development & API Integration' },
    { no: 5, title: 'Database Setup & Integration' },
    { no: 6, title: 'Testing & Quality Assurance' },
    { no: 7, title: 'Deployment & Launch' },
    { no: 8, title: 'Maintenance & Support' },
    
    
    
  ];

  return (
    <>
  <Helmet>
    <title>Professional Website Development Services | Blockchain App Advisor</title>
    <meta
      name="description"
      content="Professional website development services for modern businesses. We build responsive, SEO-optimized, scalable websites using React, Next.js, Node.js and modern technologies."
    />
    <meta
      name="keywords"
      content="website development, responsive web design, ecommerce development, React development, Next.js website, SEO optimization"
    />
    <link rel="canonical" href="https://yourdomain.com/services/website-development" />
  </Helmet>

    <div className="w-full bg-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative w-full bg-white pt-4 pb-8 transition-colors duration-300 sm:pb-16 md:pt-6 md:pb-8 lg:pt-8 lg:pb-8 xl:pt-10 xl:pb-8">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mx-auto grid w-full grid-cols-1 items-start gap-0 lg:grid-cols-[65%_35%]">
            {/* Left */}
            <div className="mx-2 flex w-full flex-col justify-start gap-5 leading-[1.25]">
              <h2 className="font-heading font-bold uppercase leading-[1.45] tracking-tight text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]" >
                <span className="block text-black transition-colors duration-300 sm:whitespace-nowrap">
                  PROFESSIONAL
                </span>
                <span className="block sm:whitespace-nowrap">
                  <span className="text-black transition-colors duration-300">WEBSITE </span>
                  <span className="text-brand-blue">DEVELOPMENT</span>
                </span>
                <span className="block text-brand-blue sm:whitespace-nowrap">FOR MODERN</span>
                <span className="block text-brand-blue sm:whitespace-nowrap">BUSINESSES</span>
              </h2>

              <p className="mt-8 max-w-[720px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 sm:text-xl">
                Build powerful, scalable, and user-friendly websites that drive business growth. We create responsive web solutions using modern technologies, ensuring optimal performance, SEO optimization, and seamless user experiences across all devices and platforms.
              </p>
            </div>

            {/* Right */}
            <div className="flex w-full items-center justify-center lg:justify-end">
              <div className="w-full max-w-[460px]">
                <div className="overflow-hidden rounded-3xl">
                  <img src={heroImg} alt="Website development" className="h-auto w-full object-contain" loading="eager" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Use Cases (Section 2) */}
      <section className="w-full bg-white py-4 transition-colors duration-300 sm:py-8">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="text-center">
            <h2 className="font-heading font-bold uppercase tracking-tight text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px] text-black transition-colors duration-300">
              <span className="text-black">WEBSITE </span>
              <span className="text-brand-blue">USE CASES</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            {/* Left Illustration */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="w-full max-w-[550px]">
                <div className="overflow-hidden rounded-3xl transition-colors duration-300">
                  <img src={second} alt="Website use cases" className="h-auto w-full object-contain" loading="lazy" />
                </div>
              </div>
            </div>

            {/* Right List */}
            <div className="flex w-full flex-col gap-4">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 hover:border-brand-blue hover:text-white items-center gap-[9px] rounded-xl border border-[#c8d7e4] bg-white px-[10px] py-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300"
                >
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg  border-[#c8d7e4] bg-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <p className="font-sans text-base font-medium text-black transition-colors duration-300 sm:text-[17px]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Website Capabilities (Section 3) */}
      <section className="w-full bg-white transition-colors duration-300">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="text-center">
            <h2 className="font-heading font-bold uppercase tracking-tight text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px] text-black transition-colors duration-300">
              <span className="text-black">WEBSITE </span>
              <span className="text-brand-blue">CAPABILITIES</span>
            </h2>
          </div>

          <div className="relative mt-14">
            {/* Top row */}
            <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {capabilitiesTop.map((c) => (
                <div
                  key={c.title}
                  className="relative w-full  rounded-[10px] border border-brand-blue/45 bg-white px-5 py-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 hover:border-brand-blue"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-brand-blue/45 bg-white transition-colors duration-300">
                    {c.icon}
                  </div>
                  <p className="font-sans text-[17px] font-semibold leading-snug text-black transition-colors duration-300">
                    {c.title}
                  </p>

                  {/* connector down to line (desktop) */}
                  <span className="pointer-events-none hidden lg:block">
                    <span className="absolute left-1/2 top-full h-16 -translate-x-1/2 border-l-2 border-dashed border-brand-blue/55" />
                  </span>
                </div>
              ))}
            </div>

            {/* Middle line (desktop) */}
            <div className="relative hidden lg:block">
              <div className="mt-16 h-[6px] w-full rounded-full bg-brand-blue" />
            </div>

            {/* Bottom row */}
            <div className="mt-10 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-10">
              {capabilitiesBottom.map((c) => (
                <div
                  key={c.title}
                  className="relative w-full  rounded-[10px] border border-brand-blue/45 bg-white px-5 py-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 hover:border-brand-blue"
                >
                  {/* connector up to line (desktop) */}
                  <span className="pointer-events-none hidden lg:block">
                    <span className="absolute left-1/2 bottom-full h-16 -translate-x-1/2 border-l-2 border-dashed border-brand-blue/55" />
                  </span>

                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-brand-blue/45 bg-white transition-colors duration-300">
                    {c.icon}
                  </div>
                  <p className="font-sans text-[17px] font-semibold leading-snug text-black transition-colors duration-300">
                    {c.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Frameworks (Section 4) */}
      <section className="w-full bg-white transition-colors duration-300 sm:py-10">
        <div className="mx-auto mt-5 mb-5 max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="text-center">
            <h2 className="font-heading font-bold uppercase tracking-tight text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px] transition-colors duration-300">
              <span className="text-brand-blue">TOOLS </span>
              <span className="text-black">&amp; </span>
              <span className="text-brand-blue">FRAMEWORKS</span>
            </h2>
          </div>

           <div className="mx-auto flex max-w-[980px] mt-4 flex-wrap justify-center gap-4 sm:gap-6">
            {toolsAndFrameworks.map((name) => (
              <div
                key={name}
                className="min-w-[140px] sm:min-w-[170px] hover:border-brand-blue hover:bg-gradient-to-b hover:from-white hover:to-[#cfe6fb] rounded-[10px] border border-brand-blue/25 bg-transparent px-8 py-4 text-center font-sans text-[18px] font-semibold text-black shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process (Section 5 - Last) */}
      <DevelopmentProcess
        title="DEVELOPMENT PROCESS"
        titlePrefix="DEVELOPMENT"
        steps={developmentSteps}
        centerImage={websitedevprocess}
      />

      {/* Final CTA Section */}
      

      <BeforeFooter
        title="Get Your Professional Website Today"
        buttonText="Contact Now"
        paddingClassName="py-8"
         buttonLink="/contact"
        containerClassName="mx-auto max-w-layout px-4 text-center"
        headingAs="h3"
        headingClassName="font-heading text-[28px] sm:text-[36px] md:text-[44px] font-bold uppercase leading-tight text-white"
      />
    </div>
    </>
  );
};

export default WebsiteDevelopment;

