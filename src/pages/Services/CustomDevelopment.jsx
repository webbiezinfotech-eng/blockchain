import BeforeFooter from "../../components/common/BeforeFooter";

import heroImg from "../../assets/services images/CustomDevimages/CustomDev-hero.png";
import capability1Img from "../../assets/services images/CustomDevimages/CustomSoftwareDev.png";
import capability2Img from "../../assets/services images/CustomDevimages/WebsiteDevServices.png";
import capability3Img from "../../assets/services images/CustomDevimages/MobileAppDev.png";

import chooseImg from "../../assets/services images/CustomDevimages/WhyChooseBlockchainAppAdvisor.png";

import discoveryPlanningIcon from "../../assets/services images/CustomDevimages/icons/DiscoveryPlanning.gif";
import uiuxDesignIcon from "../../assets/services images/CustomDevimages/icons/UIUXDesign.gif";
import testingQaIcon from "../../assets/services images/CustomDevimages/icons/TestingQA.gif";
import deploymentIcon from "../../assets/services images/CustomDevimages/icons/Deployment.gif";
import maintenanceSupportIcon from "../../assets/services images/CustomDevimages/icons/MaintenanceSupport.gif";

const CustomDevelopment = () => {
  const capabilities = [
    {
      title: "Custom Software Development",

      description:
        "We build fully customized software solutions designed around your workflows, users, and business logic.",

      developHeading: "What we develop:",
      developPoints: [
        "Business applications & internal tools",
        "SaaS platforms & cloud-based systems",
        "CRM, ERP & workflow automation solutions",
        "API development & system integrations",
        "Admin dashboards & analytics panels",
      ],

      benefitsHeading: "Benefits",
      benefits: [
        "Scalable architecture",
        "Secure and optimized codebase",
        "Tailored features with future-ready design",
      ],

      image: capability1Img,
    },

    {
      title: "Website Development Services",

      description:
        "We create high-performing, visually appealing, and conversion-focused websites that strengthen your digital presence.",

      developHeading: "Website solutions we offer:",
      developPoints: [
        "Corporate & business websites",
        "Startup & product landing pages",
        "E-commerce websites",
        "Web portals & dashboards",
        "CMS-based websites (WordPress, Headless CMS)",
      ],

      benefitsHeading: "Our websites are",
      benefits: [
        "SEO-optimized",
        "Mobile-responsive",
        "Fast-loading & secure",
        "Designed for high conversions",
      ],

      image: capability2Img,
    },

    {
      title: "Mobile App Development",

      description:
        "We design and develop feature-rich mobile applications that deliver seamless user experiences across devices.",

      developHeading: "Mobile app solutions:",
      developPoints: [
        "Business applications & internal tools",
        "SaaS platforms & cloud-based systems",
        "CRM, ERP & workflow automation solutions",
        "API development & system integrations",
        "Admin dashboards & analytics panels",
      ],

      benefitsHeading: "App features include:",
      benefits: [
        "Intuitive UI/UX design",
        "High performance & scalability",
        "Secure backend integration",
        "Push notifications & analytics",
      ],

      image: capability3Img,
    },
  ];

  const process = [
    {
      title: "Discovery & Planning",
      desc: "Requirements, scope, timelines, and success metrics.",
      icon: discoveryPlanningIcon,
    },
    {
      title: "UI/UX Design",
      desc: "Wireframes, prototypes, and delightful user experience.",
      icon: uiuxDesignIcon,
    },
    // Icon missing right now — skipping for now
    {
      title: "Development",
      desc: "Agile delivery with clean, maintainable code.",
    },
    {
      title: "Testing & QA",
      desc: "Functional, performance, and security testing.",
      icon: testingQaIcon,
    },
    {
      title: "Deployment",
      desc: "Production rollout, monitoring, and CI/CD setup.",
      icon: deploymentIcon,
    },
    {
      title: "Maintenance & Support",
      desc: "Ongoing improvements, fixes, and scaling.",
      icon: maintenanceSupportIcon,
    },
  ];

  const technologies = [
    { k: "Frontend", v: ["React", "Next.js", "Tailwind CSS", "Vite"] },
    { k: "Backend", v: ["Node.js", "Python", "PHP", "Java"] },
    { k: "Mobile", v: ["Flutter", "React Native", "Swift", "Kotlin"] },
    { k: "Database", v: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
    { k: "Cloud / DevOps", v: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
    { k: "Security", v: ["OAuth", "JWT", "RBAC", "Encryption"] },
  ];

  const whyChoose = [
    "One-stop solution for web, mobile & custom development",
    "Experienced product-focused development team",
    "Agile & transparent development process",
    "Scalable and secure architecture",
    "Long-term technical support & maintenance",
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
                MOBILE &amp;{" "}
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">
                  DIGITAL PRODUCTS
                </span>
              </span>
            </h1>

            <p className="max-w-[780px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-lg">
              We architect, design, and develop digital products that deliver
              transparency, automation, and seamless user experiences. Whether
              you need web platforms, mobile apps, or custom software, we build
              secure and scalable systems tailored to your goals.
            </p>
          </div>

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[560px]">
              <div className="overflow-hidden rounded-3xl  transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.04]">
                <img
                  src={heroImg}
                  alt="Custom development"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black dark:text-white sm:text-[54px] lg:text-[72px]">
              OUR CUSTOM DEVELOPMENT{" "}
              <span className="text-brand-blue">CAPABILITIES</span>
            </h2>
          </div>

          {/* Capability Cards */}
          <div className="flex flex-col gap-14">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="
            grid grid-cols-1 gap-10
            rounded-[20px]
            border border-black/10
            bg-white p-8
            shadow-[0_14px_40px_rgba(0,0,0,0.12)]
            transition-colors duration-300
            dark:border-white/25 dark:bg-black/20
            lg:grid-cols-[1fr_420px]
          "
              >
                {/* LEFT CONTENT */}
                <div>
                  {/* Title */}
                  <h3 className="font-heading text-[22px] font-bold text-black dark:text-white">
                    {c.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 max-w-[780px] font-sans text-[16px] leading-[1.7] text-black/75 dark:text-white/80">
                    {c.description}
                  </p>

                  {/* Develop Section */}
                  <div className="mt-6">
                    <p className="font-sans text-[14px] font-bold uppercase tracking-wide text-black dark:text-white">
                      {c.developHeading}
                    </p>

                    <ul className="mt-3 space-y-2">
                      {c.developPoints.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-brand-blue" />
                          <span className="font-sans text-[15px] text-black/75 dark:text-white/85">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mt-6">
                    <p className="font-sans text-[14px] font-bold uppercase tracking-wide text-black dark:text-white">
                      {c.benefitsHeading}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-3">
                      {c.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="
                      rounded-full
                      border border-brand-blue/40
                      bg-white px-4 py-1.5
                      text-[13px] font-semibold
                      text-brand-blue
                      transition-colors duration-300
                      dark:border-white/40 dark:bg-black dark:text-white
                    "
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex items-center justify-center lg:justify-end">
                  <div className="w-full max-w-[350px] overflow-hidden rounded-2xl bg-black/[0.03] dark:bg-white/[0.05]">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR DEVELOPMENT PROCESS */}
      <section className="w-full bg-white py-16 transition-colors duration-300 dark:bg-black">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[54px] lg:text-[72px]">
              OUR <span className="text-brand-blue">DEVELOPMENT PROCESS</span>
            </h2>
          </div>

          {/* Cards Grid – SAME AS TOKEN TYPES UI */}
          <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p) => (
              <div key={p.title} className="flex justify-center">
                <div className="group relative w-full max-w-[365px] max-h-[380px]">
                  {/* tilted blue backing – EXACT SAME */}
                  <div className="absolute -inset-3 rounded-[24px] bg-brand-blue transition-transform duration-300 translate-x-2 translate-y-2 -rotate-[2deg] group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-[3deg]" />

                  {/* foreground white card – EXACT SAME */}
                  <div className="relative rounded-[24px] border border-[#c8d7e4] bg-white p-7 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-sans text-[20px] font-bold text-brand-blue transition-colors duration-300 dark:text-white">
                        {p.title}
                      </h3>

                      {p.icon && (
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg  bg-white transition-colors duration-300 dark:border-white/20 dark:bg-black/20">
                          <img
                            src={p.icon}
                            alt={p.title}
                            className="h-9 w-9 object-contain"
                          />
                        </div>
                      )}
                    </div>

                    <p className="mt-4 font-montserratAlt  text-[16px] font-medium leading-[1.65] text-black/70 transition-colors duration-300 dark:text-white/80">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          {/* Heading */}
          <div className="mb-14 text-center">
            <h2 className="font-heading text-[42px] font-bold uppercase tracking-tight">
              <span className="text-brand-blue">TECHNOLOGIES</span>{" "}
              <span className="text-black dark:text-white">WE USE</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((t) => (
              <div
                key={t.k}
                className="relative rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:bg-black/30"
                style={{
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                }}
              >
                {/* Blue strip */}
                <div className="absolute left-0 top-0 h-full w-[6px] rounded-l-xl bg-brand-blue" />

                {/* Content */}
                <div className="px-6 py-5">
                  <p className="text-[18px] font-bold uppercase text-black dark:text-white">
                    {t.k}:
                    <span className="ml-2 font-normal uppercase text-black/90 dark:text-white/85">
                      {t.v.join(", ")}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="w-full bg-white py-14 transition-colors duration-300 dark:bg-black sm:py-16">
        <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[42%_58%] lg:pl-[3rem] lg:pr-[5rem]">
          <div className="flex items-center justify-center ">
            <div className="w-full max-w-[400px]">
              <div className="overflow-hidden rounded-3xl transition-colors duration-300 dark:bg-white/[0.04]">
                <img
                  src={chooseImg}
                  alt="Why choose us"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-[34px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[48px] lg:text-[60px]">
              WHY CHOOSE{" "}
              <span className="text-brand-blue">BLOCKCHAIN APP ADVISOR?</span>
            </h2>

            <ul className="mt-6 space-y-3">
              {whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="mt-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-brand-blue/50 text-brand-blue transition-colors duration-300 dark:border-white/35 dark:text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="m6 12 4 4 8-8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
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
        description="Whether you need a custom platform, a high-converting website, or a robust mobile app — we’re here to help you bring your vision to life."
        buttonText="Get Started"
      />
    </div>
  );
};

export default CustomDevelopment;
