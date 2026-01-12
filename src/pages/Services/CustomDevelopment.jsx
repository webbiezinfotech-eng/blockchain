import BeforeFooter from '../../components/common/BeforeFooter';

import heroImg from '../../assets/services images/CustomDevimages/CustomDev-hero.png';
import capability1Img from '../../assets/services images/CustomDevimages/CustomSoftwareDev.png';
import capability2Img from '../../assets/services images/CustomDevimages/WebsiteDevServices.png';
import capability3Img from '../../assets/services images/CustomDevimages/MobileAppDev.png';

import chooseImg from '../../assets/services images/CustomDevimages/WhyChooseBlockchainAppAdvisor.png';

import discoveryPlanningIcon from '../../assets/services images/CustomDevimages/icons/DiscoveryPlanning.gif';
import uiuxDesignIcon from '../../assets/services images/CustomDevimages/icons/UIUXDesign.gif';
import testingQaIcon from '../../assets/services images/CustomDevimages/icons/TestingQA.gif';
import deploymentIcon from '../../assets/services images/CustomDevimages/icons/Deployment.gif';
import maintenanceSupportIcon from '../../assets/services images/CustomDevimages/icons/MaintenanceSupport.gif';

const CustomDevelopment = () => {
  const capabilities = [
    {
      title: 'Custom Software Development',
      desc: 'We build tailor-made solutions designed around your workflows, users, and business goals.',
      image: capability1Img,
      bullets: [
        'Custom CRM/ERP systems',
        'Business automation dashboards',
        'Cloud-native applications',
        'API & third-party integrations',
      ],
      tags: ['Custom architecture', 'Secure', 'Scalable'],
    },
    {
      title: 'Website Development Services',
      desc: 'Modern websites optimized for performance, conversion, and SEO—built for growth.',
      image: capability2Img,
      bullets: [
        'Corporate & landing websites',
        'E-commerce websites',
        'CMS integrations (headless)',
        'Analytics & conversion tracking',
      ],
      tags: ['Responsive', 'SEO-ready', 'Fast'],
    },
    {
      title: 'Mobile App Development',
      desc: 'High-quality iOS/Android apps with delightful UX, real-time data, and secure backends.',
      image: capability3Img,
      bullets: [
        'Native & cross-platform apps',
        'Push notifications & realtime',
        'Payments & subscriptions',
        'App store launch support',
      ],
      tags: ['iOS', 'Android', 'Cross-platform'],
    },
  ];

  const process = [
    { title: 'Discovery & Planning', desc: 'Requirements, scope, timelines, and success metrics.', icon: discoveryPlanningIcon },
    { title: 'UI/UX Design', desc: 'Wireframes, prototypes, and delightful user experience.', icon: uiuxDesignIcon },
    // Icon missing right now — skipping for now
    { title: 'Development', desc: 'Agile delivery with clean, maintainable code.' },
    { title: 'Testing & QA', desc: 'Functional, performance, and security testing.', icon: testingQaIcon },
    { title: 'Deployment', desc: 'Production rollout, monitoring, and CI/CD setup.', icon: deploymentIcon },
    { title: 'Maintenance & Support', desc: 'Ongoing improvements, fixes, and scaling.', icon: maintenanceSupportIcon },
  ];

  const technologies = [
    { k: 'Frontend', v: ['React', 'Next.js', 'Tailwind CSS', 'Vite'] },
    { k: 'Backend', v: ['Node.js', 'Python', 'PHP', 'Java'] },
    { k: 'Mobile', v: ['Flutter', 'React Native', 'Swift', 'Kotlin'] },
    { k: 'Database', v: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
    { k: 'Cloud / DevOps', v: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
    { k: 'Security', v: ['OAuth', 'JWT', 'RBAC', 'Encryption'] },
  ];

  const whyChoose = [
    'End-to-end product engineering from idea to launch',
    'Security-first development with best practices',
    'Performance optimized UI + scalable architecture',
    'Transparent process with regular updates',
    'Post-launch support, monitoring & maintenance',
  ];

  return (
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero */}
      <section className="w-full bg-white pt-4 pb-12 transition-colors duration-300 dark:bg-black sm:pt-6 sm:pb-14 lg:pt-8 lg:pb-16">
        <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[58%_42%] lg:pl-[3rem] lg:pr-[5rem]">
          <div className="flex w-full flex-col gap-6">
            <h1 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white">
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35]">
                END-TO-END <span className="text-brand-blue">CUSTOM</span>
              </span>
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35]">
                DEVELOPMENT FOR WEB,
              </span>
              <span className="block text-[34px] leading-[1.2] sm:text-[48px] sm:leading-[1.25] lg:text-[58px] lg:leading-[1.35]">
                MOBILE &amp;{' '}
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">DIGITAL PRODUCTS</span>
              </span>
            </h1>

            <p className="max-w-[780px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-lg">
              We architect, design, and develop digital products that deliver transparency, automation, and seamless user
              experiences. Whether you need web platforms, mobile apps, or custom software, we build secure and scalable systems
              tailored to your goals.
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[560px]">
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.04]">
                <img src={heroImg} alt="Custom development" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              OUR CUSTOM DEVELOPMENT <span className="text-brand-blue">CAPABILITIES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="grid grid-cols-1 gap-8 rounded-[16px] border border-black/10 bg-white p-6 shadow-[0_12px_34px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/25 dark:bg-black/20 lg:grid-cols-[1fr_340px]"
              >
                <div>
                  <h3 className="font-heading text-[18px] font-bold uppercase tracking-wide text-black transition-colors duration-300 dark:text-white">
                    {c.title}
                  </h3>
                  <p className="mt-3 font-sans text-[14px] leading-relaxed text-black/75 transition-colors duration-300 dark:text-white/85">
                    {c.desc}
                  </p>

                  <div className="mt-5 rounded-xl border border-brand-blue/15 bg-white px-4 py-4 transition-colors duration-300 dark:border-white/15 dark:bg-black">
                    <p className="font-sans text-[13px] font-bold uppercase tracking-wide text-black transition-colors duration-300 dark:text-white">
                      Best used for:
                    </p>
                    <ul className="mt-3 space-y-2">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-blue" />
                          <span className="font-sans text-[14px] text-black/75 transition-colors duration-300 dark:text-white/85">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-black/10 bg-white px-3 py-1 text-[12px] font-semibold text-black/70 transition-colors duration-300 dark:border-white/20 dark:bg-black dark:text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-end">
                  <div className="h-[240px] w-full max-w-[340px] overflow-hidden rounded-2xl bg-black/[0.03] transition-colors duration-300 dark:bg-white/[0.06]">
                    <img src={c.image} alt={c.title} className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              OUR DEVELOPMENT <span className="text-brand-blue">PROCESS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {process.map((p) => (
              <div
                key={p.title}
                className="rounded-[14px] border-2 border-brand-blue bg-white p-6 shadow-[0_12px_34px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_16px_44px_rgba(0,0,0,0.14)] dark:border-white/30 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-[16px] font-bold uppercase tracking-wide text-black transition-colors duration-300 dark:text-white">
                    {p.title}
                  </h3>

                  {p.icon ? (
                    <img
                      src={p.icon}
                      alt={`${p.title} icon`}
                      className="h-10 w-10 flex-shrink-0 object-contain"
                      loading="lazy"
                    />
                  ) : null}
                </div>
                <p className="mt-3 font-sans text-[13px] leading-relaxed text-black/75 transition-colors duration-300 dark:text-white/85">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-brand-blue transition-colors duration-300 sm:text-[54px] lg:text-[72px]">
              TECHNOLOGIES WE USE
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((t) => (
              <div
                key={t.k}
                className="rounded-[14px] border border-black/10 bg-white p-5 shadow-[0_10px_26px_rgba(0,0,0,0.08)] transition-colors duration-300 dark:border-white/20 dark:bg-black/20"
              >
                <h3 className="font-heading text-[14px] font-bold uppercase tracking-wide text-black transition-colors duration-300 dark:text-white">
                  {t.k}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {t.v.map((x) => (
                    <span
                      key={x}
                      className="rounded-md border border-black/10 bg-white px-3 py-1 text-[12px] font-semibold text-black/70 transition-colors duration-300 dark:border-white/20 dark:bg-black dark:text-white/80"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[42%_58%] lg:pl-[3rem] lg:pr-[5rem]">
          <div className="flex items-center justify-center lg:justify-start">
            <div className="w-full max-w-[520px]">
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.04]">
                <img src={chooseImg} alt="Why choose us" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-[34px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[48px] lg:text-[60px]">
              WHY CHOOSE <span className="text-brand-blue">BLOCKCHAIN APP ADVISOR?</span>
            </h2>

            <ul className="mt-6 space-y-3">
              {whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="mt-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-brand-blue/50 text-brand-blue transition-colors duration-300 dark:border-white/35 dark:text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="m6 12 4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="font-sans text-[16px] leading-relaxed text-black/80 transition-colors duration-300 dark:text-white/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <BeforeFooter
        title="Let’s Build Your Digital Product"
        description="Whether you need custom software, a high-performance website, or a mobile app—our team is ready to help you ship fast and scale safely."
        buttonText="Get Started"
      />
    </div>
  );
};

export default CustomDevelopment;

