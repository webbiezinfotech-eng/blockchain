import { Helmet } from "react-helmet";

import BeforeFooter from '../../components/common/BeforeFooter';
import DevelopmentProcess from '../../components/common/DevelopmentProcess';

// Using placeholder images - replace with actual images when available
import heroImg from '../../assets/services images/MobileAppDevimages/hero.png';
import second from '../../assets/services images/MobileAppDevimages/second.png';
// Icons for use cases
import iconNativeApps from '../../assets/services images/CustomDevimages/icons/DiscoveryPlanning.gif';
import iconCrossPlatform from '../../assets/services images/CustomDevimages/icons/UIUXDesign.gif';
import iconEcommerceMobile from '../../assets/services images/AIDevimages/icons/RecommendationSystem.gif';
import iconSocialMedia from '../../assets/services images/CustomDevimages/icons/MaintenanceSupport.gif';
import iconBusinessProductivity from '../../assets/services images/CustomDevimages/icons/TestingQA.gif';
import iconHealthcareFitness from '../../assets/services images/BlockchainDevimages/icons/Healthcare.gif';
import iconGamingEntertainment from '../../assets/services images/BlockchainDevimages/icons/gamingMetaverse.gif';

// Icons for capabilities
import iconNativeiOS from '../../assets/services images/CustomDevimages/icons/DiscoveryPlanning.gif';
import iconNativeAndroid from '../../assets/services images/CustomDevimages/icons/Deployment.gif';
import iconCrossPlatformDev from '../../assets/services images/CustomDevimages/icons/UIUXDesign.gif';
import iconMobileUX from '../../assets/services images/CustomDevimages/icons/UIUXDesign.gif';
import iconAPIIntegration from '../../assets/services images/DappDevimages/icons/PaymentGateways.gif';
import iconASO from '../../assets/services images/CustomDevimages/icons/MaintenanceSupport.gif';
import iconPushNotifications from '../../assets/services images/CustomDevimages/icons/TestingQA.gif';
import mobiledevprocess from '../../assets/services images/MobileAppDevimages/mobiledevprocess.png';
const MobileApplicationDevelopment = () => {
  const useCases = [
    {
      title: 'iOS & Android native applications',
      icon: <img src={iconNativeApps} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    },
    {
      title: 'Cross-platform apps (React Native, Flutter)',
      icon: <img src={iconCrossPlatform} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    },
    {
      title: 'E-commerce mobile apps',
      icon: <img src={iconEcommerceMobile} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    },
    {
      title: 'Social media & communication apps',
      icon: <img src={iconSocialMedia} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    },
    // {
    //   title: 'Business & productivity apps',
    //   icon: <img src={iconBusinessProductivity} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    // },
    // {
    //   title: 'Healthcare & fitness applications',
    //   icon: <img src={iconHealthcareFitness} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    // },
    {
      title: 'Gaming & entertainment apps',
      icon: <img src={iconGamingEntertainment} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    },
  ];

  const capabilitiesTop = [
    {
      title: 'Native iOS Development (Swift, Objective-C)',
      icon: <img src={iconNativeiOS} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
    {
      title: 'Native Android Development (Kotlin, Java)',
      icon: <img src={iconNativeAndroid} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
    {
      title: 'Cross-Platform Development',
      icon: <img src={iconCrossPlatformDev} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
    {
      title: 'UI/UX Mobile Design',
      icon: <img src={iconMobileUX} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
  ];

  const capabilitiesBottom = [
    {
      title: 'API Integration & Backend Services',
      icon: <img src={iconAPIIntegration} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
    {
      title: 'App Store Optimization (ASO)',
      icon: <img src={iconASO} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
    {
      title: 'Push Notifications & Analytics',
      icon: <img src={iconPushNotifications} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
  ];

  const toolsAndFrameworks = [
    'React Native',
    'Flutter',
    'Swift',
    'Kotlin',
    'Xamarin',
    'Ionic',
    'Firebase',
    'AWS Amplify',
    'App Store',
    'Google Play',
    'Figma',
    'Adobe XD',
  ];

  const developmentSteps = [
    // { no: 1, title: 'Requirement Analysis & Planning' },
    // { no: 2, title: 'UI/UX Design & Prototyping' },
    
    // { no: 4, title: 'Backend Integration & APIs' },
    
    // { no: 6, title: 'App Store Submission' },
    // { no: 7, title: 'Launch & Deployment' },
    // { no: 8, title: 'Maintenance & Updates' },
    // { no: 5, title: 'Testing & Quality Assurance' },
    // { no: 3, title: 'App Architecture & Development' },
    { no: 1, title: 'Requirement Analysis & Planning' },
    { no: 2, title: 'UI/UX Design & Prototyping' },
    { no: 3, title: 'App Architecture & Development' },
    { no: 4, title: 'Backend Integration & APIs' },
    { no: 5, title: 'Testing & Quality Assurance' },
    { no: 6, title: 'App Store Submission' },
    { no: 7, title: 'Launch & Deployment' },
    { no: 8, title: 'Maintenance & Updates' },
    
    
  ];

  return (
    <>
  <Helmet>
    <title>Mobile Application Development Services | iOS & Android Apps</title>
    <meta
      name="description"
      content="Professional mobile application development services for iOS and Android. We build native and cross-platform apps using React Native, Flutter, Swift, and Kotlin."
    />
    <meta
      name="keywords"
      content="mobile app development, iOS app development, Android app development, React Native apps, Flutter development"
    />
    <link
      rel="canonical"
      href="https://yourdomain.com/services/mobile-application-development"
    />
  </Helmet>

    <div className="w-full bg-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="w-full bg-white pt-4 pb-2 transition-colors duration-300 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-8">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="grid grid-cols-1 items-center lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Left */}
            <div>
              <h1 className="font-heading font-bold uppercase leading-[1.26] tracking-tight text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
                <span className="block text-black transition-colors duration-300 sm:whitespace-nowrap">
                  MOBILE APPLICATION
                </span>
                <span className="block sm:whitespace-nowrap">
                  <span className="text-black transition-colors duration-300">DEVELOPMENT </span>
                  <span className="text-brand-blue">FOR</span>
                </span>
                <span className="block text-brand-blue sm:whitespace-nowrap">IOS & ANDROID</span>
                <span className="block text-brand-blue sm:whitespace-nowrap">PLATFORMS</span>
              </h1>

              <p className="mt-8 max-w-[720px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 sm:text-xl">
                Create powerful, user-friendly mobile applications that engage users and drive business growth. We develop native and cross-platform mobile apps with cutting-edge technologies, ensuring optimal performance, seamless user experiences, and successful app store launches.
              </p>
            </div>

            {/* Right */}
            <div className="flex w-full items-center justify-center">
              <div className="w-full max-w-[560px]">
                <div className="overflow-hidden rounded-3xl">
                  <img src={heroImg} alt="Mobile application development" className="h-auto w-full object-contain" loading="eager" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Use Cases (Section 2) */}
      <section className="w-full bg-white py-4 transition-colors duration-300 sm:py-8">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="text-center">
            <h2 className="font-heading font-bold uppercase tracking-tight text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px] text-black transition-colors duration-300">
              <span className="text-black">MOBILE APP </span>
              <span className="text-brand-blue">USE CASES</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 items-center lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16">
            {/* Left Illustration */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="w-full max-w-[450px]">
                <div className="overflow-hidden rounded-3xl transition-colors duration-300">
                  <img src={second} alt="Mobile app use cases" className="h-auto w-full object-contain" loading="lazy" />
                </div>
              </div>
            </div>

            {/* Right List */}
            <div className="flex w-full flex-col gap-4">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="flex transition-all duration-300 hover:-translate-y-[1px] hover:border-brand-blue/60 hover:shadow-[0_14px_36px_rgba(0,0,0,0.14)] items-center items-center gap-3 rounded-xl border border-[#c8d7e4] bg-white px-[10px] py-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.06)] "
                >
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-lg border-[#c8d7e4] bg-white transition-colors duration-300">
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

      {/* Mobile App Capabilities (Section 3) */}
      <section className="w-full bg-white transition-colors duration-300">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="text-center">
            <h2 className="font-heading font-bold uppercase tracking-tight text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px] text-black transition-colors duration-300">
              <span className="text-black">MOBILE APP </span>
              <span className="text-brand-blue">CAPABILITIES</span>
            </h2>
          </div>

          <div className="relative mt-14">
            {/* Top row */}
            <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {capabilitiesTop.map((c) => (
                <div
                  key={c.title}
                  className="relative w-full max-w-[260px] rounded-[10px] border border-brand-blue/45 bg-white px-5 py-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.06)]  transition-all duration-300 hover:shadow-[0_10px_38px_rgba(0,0,0,0.20)] hover:-translate-y-2 hover:scale-[1.02]  hover:border-brand-blue"
                >
                  <div className="mx-auto mb-4 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-md border border-brand-blue/45 bg-white transition-colors duration-300">
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
                  className="relative w-full max-w-[260px] rounded-[10px] border border-brand-blue/45 bg-white px-5 py-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.06)]  transition-all duration-300 hover:shadow-[0_10px_38px_rgba(0,0,0,0.20)] hover:-translate-y-2 hover:scale-[1.02]  hover:border-brand-blue"
                >
                  {/* connector up to line (desktop) */}
                  <span className="pointer-events-none hidden lg:block">
                    <span className="absolute left-1/2 bottom-full h-16 -translate-x-1/2 border-l-2 border-dashed border-brand-blue/55" />
                  </span>

                  <div className="mx-auto mb-4 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-md border border-brand-blue/45 bg-white transition-colors duration-300">
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
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="text-center">
            <h2 className="font-heading font-bold uppercase tracking-tight text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px] transition-colors duration-300">
              <span className="text-brand-blue">TOOLS </span>
              <span className="text-black">&amp; </span>
              <span className="text-brand-blue">FRAMEWORKS</span>
            </h2>
          </div>

          <div className="mt-12 mx-auto max-w-[960px] flex flex-wrap justify-center gap-4 sm:gap-6">
            {toolsAndFrameworks.map((t) => (
              <div
                key={t}
                className="inline-flex items-center justify-center hover:text-brand-blue rounded-lg border border-[#c8d7e4] bg-white px-6 sm:px-8 py-3 hover:border-brand-blue hover:bg-gradient-to-b hover:from-white hover:to-[#cfe6fb] font-sans text-[15px] sm:text-[18px] font-medium text-black shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 hover:border-brand-blue"
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
      centerImage={mobiledevprocess}
      />



      <BeforeFooter
        title="Get Your Mobile App Developed Today"
        buttonText="Contact Now"
         buttonLink="/contact"
        paddingClassName="py-8"
        containerClassName="mx-auto max-w-layout px-4 text-center"
        headingAs="h3"
        headingClassName="font-heading text-[26px] sm:text-[36px] md:text-[44px] font-bold uppercase leading-tight text-white"
      />
    </div>
    </>
  );
};

export default MobileApplicationDevelopment;

