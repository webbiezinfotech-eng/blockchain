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
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero Section */}
      <section className="w-full bg-white pt-4 pb-2 transition-colors duration-300 dark:bg-black sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-8">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="grid grid-cols-1 items-center lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Left */}
            <div>
              <h2 className="font-heading font-bold uppercase leading-[1.06] tracking-tight text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[76px]" >
                <span className="block text-black transition-colors duration-300 dark:text-white sm:whitespace-nowrap">
                  PROFESSIONAL
                </span>
                <span className="block sm:whitespace-nowrap">
                  <span className="text-black transition-colors duration-300 dark:text-white">WEBSITE </span>
                  <span className="text-brand-blue">DEVELOPMENT</span>
                </span>
                <span className="block text-brand-blue sm:whitespace-nowrap">FOR MODERN</span>
                <span className="block text-brand-blue sm:whitespace-nowrap">BUSINESSES</span>
              </h2>

              <p className="mt-8 max-w-[720px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-lg">
                Build powerful, scalable, and user-friendly websites that drive business growth. We create responsive web solutions using modern technologies, ensuring optimal performance, SEO optimization, and seamless user experiences across all devices and platforms.
              </p>
            </div>

            {/* Right */}
            <div className="flex w-full items-center justify-center lg:justify-end">
              <div className="w-full max-w-[560px]">
                <div className="overflow-hidden rounded-3xl">
                  <img src={heroImg} alt="Website development" className="h-auto w-full object-contain" loading="eager" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Use Cases (Section 2) */}
      <section className="w-full bg-white py-8 transition-colors duration-300 dark:bg-black sm:py-10">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="text-center">
            <h2 className="font-heading font-bold uppercase tracking-tight text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[76px] text-black transition-colors duration-300 dark:text-white">
              <span className="text-black dark:text-white">WEBSITE </span>
              <span className="text-brand-blue">USE CASES</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 items-center gap-0 lg:grid-cols-[0.95fr_1.05fr] lg:gap-0">
            {/* Left Illustration */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="w-full max-w-[450px]">
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
                  className="flex items-center gap-[9px] rounded-xl border border-[#c8d7e4] bg-white px-[10px] py-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 dark:border-white/15 dark:bg-black"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#c8d7e4] bg-white transition-colors duration-300 dark:border-white/15 dark:bg-black">
                    {item.icon}
                  </div>
                  <p className="font-sans text-base font-medium text-black transition-colors duration-300 dark:text-white sm:text-[17px]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Website Capabilities (Section 3) */}
      <section className="w-full bg-white transition-colors duration-300 dark:bg-black">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="text-center">
            <h2 className="font-heading font-bold uppercase tracking-tight text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[76px] text-black transition-colors duration-300 dark:text-white">
              <span className="text-black dark:text-white">WEBSITE </span>
              <span className="text-brand-blue">CAPABILITIES</span>
            </h2>
          </div>

          <div className="relative mt-14">
            {/* Top row */}
            <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {capabilitiesTop.map((c) => (
                <div
                  key={c.title}
                  className="relative w-full max-w-[220px] rounded-[10px] border border-brand-blue/45 bg-white px-5 py-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 hover:border-brand-blue dark:border-white/45 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] dark:hover:border-white"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-brand-blue/45 bg-white transition-colors duration-300 dark:border-white/15 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]">
                    {c.icon}
                  </div>
                  <p className="font-sans text-[17px] font-semibold leading-snug text-black transition-colors duration-300 dark:text-white">
                    {c.title}
                  </p>

                  {/* connector down to line (desktop) */}
                  <span className="pointer-events-none hidden lg:block">
                    <span className="absolute left-1/2 top-full h-16 -translate-x-1/2 border-l-2 border-dashed border-brand-blue/55 dark:border-white/55" />
                  </span>
                </div>
              ))}
            </div>

            {/* Middle line (desktop) */}
            <div className="relative hidden lg:block">
              <div className="mt-16 h-[6px] w-full rounded-full bg-brand-blue dark:bg-white" />
            </div>

            {/* Bottom row */}
            <div className="mt-10 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-10">
              {capabilitiesBottom.map((c) => (
                <div
                  key={c.title}
                  className="relative w-full max-w-[260px] rounded-[10px] border border-brand-blue/45 bg-white px-5 py-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 hover:border-brand-blue dark:border-white/45 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] dark:hover:border-white"
                >
                  {/* connector up to line (desktop) */}
                  <span className="pointer-events-none hidden lg:block">
                    <span className="absolute left-1/2 bottom-full h-16 -translate-x-1/2 border-l-2 border-dashed border-brand-blue/55 dark:border-white/55" />
                  </span>

                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-brand-blue/45 bg-white transition-colors duration-300 dark:border-white/15 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]">
                    {c.icon}
                  </div>
                  <p className="font-sans text-[17px] font-semibold leading-snug text-black transition-colors duration-300 dark:text-white">
                    {c.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Frameworks (Section 4) */}
      <section className="w-full bg-white transition-colors duration-300 dark:bg-black sm:py-10">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="text-center">
            <h2 className="font-heading font-bold uppercase tracking-tight text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[76px] transition-colors duration-300">
              <span className="text-brand-blue">TOOLS </span>
              <span className="text-black dark:text-white">&amp; </span>
              <span className="text-brand-blue">FRAMEWORKS</span>
            </h2>
          </div>

          <div className="mt-12 flex max-w-[1130px] flex-wrap justify-center gap-6">
            {toolsAndFrameworks.map((t) => (
              <div
                key={t}
                className="inline-flex items-center justify-center rounded-lg border border-[#c8d7e4] bg-white px-10 py-[10px] font-sans text-[18px] font-medium text-black shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 hover:border-brand-blue dark:border-white/45 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] dark:text-white dark:hover:border-white"
              >
                {t}
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
      />

      {/* Final CTA Section */}
      

      <BeforeFooter
        title="Get Your Professional Website Today"
        buttonText="Contact Now"
        paddingClassName="py-8"
        containerClassName="mx-auto max-w-layout px-4 text-center"
        headingAs="h3"
        headingClassName="font-heading text-[3rem] font-bold uppercase leading-tight text-white"
      />
    </div>
  );
};

export default WebsiteDevelopment;

