import { Helmet } from "react-helmet";
import PageHero from "../../components/common/PageHero";
import heroImg from '../../assets/services images/AIDevimages/AIDev-hero.png';
import useCaseImg from '../../assets/services images/AIDevimages/AIusecase.png';
import processImg from '../../assets/services images/AIDevimages/AIDevProcess.png';
import DevelopmentProcess from '../../components/common/DevelopmentProcess';
import BeforeFooter from '../../components/common/BeforeFooter';
import iconAutomatedCustomer from '../../assets/services images/AIDevimages/icons/AutomatedCustomer.gif';
import iconFinancialForecasting from '../../assets/services images/AIDevimages/icons/FinancialForecasting.gif';
import iconHealthcare from '../../assets/services images/AIDevimages/icons/Healthcare.gif';
import iconPredictiveMaintenance from '../../assets/services images/AIDevimages/icons/PredictiveMaintenance.gif';
import iconRecommendationSystem from '../../assets/services images/AIDevimages/icons/RecommendationSystem.gif';
import iconImageVideo from '../../assets/services images/AIDevimages/icons/imageVideo.gif';
import iconSmartDocumentProcess from '../../assets/services images/AIDevimages/icons/SmartDocumentProcess.gif';

import iconCustomMachine from '../../assets/services images/AIDevimages/icons/CustomMachine.gif';
import iconNeuralNetwork from '../../assets/services images/AIDevimages/icons/neuralnetwork.gif';
import iconGenAISystem from '../../assets/services images/AIDevimages/icons/GenAISystem.gif';
import iconPredictiveBehavioral from '../../assets/services images/AIDevimages/icons/PredictiveBehavioral.gif';

import iconAIAutomationWorkflows from '../../assets/services images/AIDevimages/icons/AIAutomationWorkflows.gif';
import iconComputerVision from '../../assets/services images/AIDevimages/icons/ComputerVision.gif';
import iconNLPSolution from '../../assets/services images/AIDevimages/icons/NLPSolution.gif';

const AIDevelopment = () => {
  const useCases = [
    {
      title: 'Automated customer service (AI agents, chatbots)',
      icon: <img src={iconAutomatedCustomer} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    },
    {
      title: 'Financial forecasting & fraud detection',
      icon: <img src={iconFinancialForecasting} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    },
    {
      title: 'Healthcare diagnostics & analytics',
      icon: <img src={iconHealthcare} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    },
    {
      title: 'Predictive maintenance for manufacturing',
      icon: <img src={iconPredictiveMaintenance} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    },
    {
      title: 'Recommendation systems for eCommerce',
      icon: <img src={iconRecommendationSystem} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    },
    {
      title: 'Image/video processing for surveillance',
      icon: <img src={iconImageVideo} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    },
    {
      title: 'Smart document processing (OCR, extraction)',
      icon: <img src={iconSmartDocumentProcess} alt="" className="h-9 w-9 object-contain" loading="lazy" />,
    },
  ];

  const capabilitiesTop = [
    {
      title: 'Custom Machine Learning Models',
      icon: <img src={iconCustomMachine} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
    {
      title: 'Neural Networks & Deep Learning',
      icon: <img src={iconNeuralNetwork} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
    {
      title: 'GenAI Systems (LLMs, RAG, Chatbots)',
      icon: <img src={iconGenAISystem} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
    {
      title: 'Predictive & Behavioral Analytics',
      icon: <img src={iconPredictiveBehavioral} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
  ];

  const capabilitiesBottom = [
    {
      title: 'AI Automation Workflows',
      icon: <img src={iconAIAutomationWorkflows} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
    {
      title: 'Computer Vision & Image Recognition',
      icon: <img src={iconComputerVision} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
    {
      title: 'NLP Solutions (Text, Speech, Translation)',
      icon: <img src={iconNLPSolution} alt="" className="h-10 w-10 object-contain" loading="lazy" />,
    },
  ];

  const toolsAndFrameworks = [
    'TensorFlow',
    'PyTorch',
    'LangChain',
    'OpenAI',
    'HuggingFace',
    'Scikit-Learn',
    'FastAPI',
    'Kubernetes',
    'AWS/GCP Azure AI Services',
  ];

  const deploymentSteps = [
    // { no: 1, title: 'Requirement Analysis' },
    // { no: 2, title: 'Model Selection or Custom Model Training' },

    // { no: 4, title: 'Model Integration with Apps & APIs' },

    // { no: 6, title: 'Deployment (Cloud or On-Premise)' },
    // { no: 7, title: 'Continuous Monitoring' },
    //     { no: 5, title: 'Fine-tuning & Optimization' },
    //     { no: 3, title: 'Dataset Preparation' },
    { no: 1, title: 'Requirement Analysis' },
    { no: 2, title: 'Model Selection or Custom Model Training' },
    { no: 3, title: 'Dataset Preparation' },
    { no: 4, title: 'Model Integration with Apps & APIs' },
    { no: 5, title: 'Fine-tuning & Optimization' },
    { no: 6, title: 'Deployment (Cloud or On-Premise)' },
    { no: 7, title: 'Continuous Monitoring' },
        
        
  ];

  return (
    <>
  <Helmet>
    <title>
      AI & Machine Learning Development Company | Custom AI Solutions for Enterprise
    </title>

    <meta
      name="description"
      content="We build custom AI and Machine Learning solutions including LLMs, predictive analytics, automation workflows, computer vision, NLP systems, and enterprise AI deployment services."
    />

    <meta
      name="keywords"
      content="AI development company, machine learning development, generative AI solutions, LLM development, NLP solutions, computer vision development, predictive analytics, AI automation services"
    />

    {/* Open Graph */}
    <meta
      property="og:title"
      content="AI & Machine Learning Development for Intelligent Enterprise Automation"
    />
    <meta
      property="og:description"
      content="Custom AI systems including LLMs, predictive models, automation tools, neural networks, and enterprise-grade AI deployment."
    />
    <meta property="og:type" content="website" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Enterprise AI & Machine Learning Development Services"
    />
    <meta
      name="twitter:description"
      content="Build intelligent AI systems with custom ML models, GenAI, NLP, computer vision, and scalable deployment solutions."
    />
  </Helmet>

    <div className="w-full bg-white transition-colors duration-300">
      {/* Hero Section (Figma) */}
      {/* <section className="w-full bg-white pt-4 pb-2 transition-colors duration-300 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-8">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="grid grid-cols-1 items-center lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            
            <div>
              <h2 className="font-heading font-bold uppercase tracking-tight  text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px] leading-[1.26]">
                <span className="block text-black transition-colors duration-300 sm:whitespace-nowrap">
                  AI &amp; MACHINE LEARNING
                </span>
                <span className="block sm:whitespace-nowrap">
                  <span className="text-black transition-colors duration-300">DEVELOPMENT </span>
                  <span className="text-brand-blue">FOR</span>
                </span>
                <span className="block text-brand-blue sm:whitespace-nowrap">INTELLIGENT ENTERPRISE</span>
                <span className="block text-brand-blue sm:whitespace-nowrap">AUTOMATION</span>
              </h2>

              <p className="mt-8 max-w-[720px] font-sans text-base leading-[1.7] text-black/75 transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl">
                Transform your business with custom AI systems that think, learn, and optimize processes at scale. We build
                cutting-edge automation tools, predictive models, generative AI solutions, and neural network architectures that
                unlock efficiency, accuracy, and new digital capabilities across your operations.
              </p>
            </div>

            
            <div className="flex w-full items-center justify-center">
              <div className="w-full max-w-[360px]">
                <div className="overflow-hidden rounded-3xl ">
                  <img src={heroImg} alt="AI development" className="h-auto w-full object-contain" loading="eager" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <PageHero
  titleLines={[
    { text: "AI & MACHINE LEARNING", highlight: false },
    { text: "DEVELOPMENT FOR", highlight: false },
    { text: "INTELLIGENT ENTERPRISE", highlight: true },
    { text: "AUTOMATION", highlight: true },
  ]}
  description="Transform your business with custom AI systems that think, learn, and optimize processes at scale. We build cutting-edge automation tools, predictive models, generative AI solutions, and neural network architectures that unlock efficiency, accuracy, and new digital capabilities across your operations."
  image={heroImg}
  imageAlt="AI development"
/>

      {/* AI Use Cases (Section 2) */}
      <section className="w-full bg-white py-8 transition-colors duration-300 sm:py-10">
        <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-10 lg:px-14">
          <div className="text-center">
            <h2 className="font-heading  font-bold uppercase tracking-tight text-black transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
              <span className="text-black">AI </span>
              <span className="text-brand-blue">USE CASES</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 items-center gap-0 md:grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] lg:gap-0">
            {/* Left Illustration */}
            <div className="flex items-center justify-center mb-8 lg:mb-0 lg:justify-start">
              <div className="w-full max-w-[360px]">
                <div className="overflow-hidden rounded-3xl  transition-colors duration-300 ">
                  <img src={useCaseImg} alt="AI use cases" className="h-auto w-full object-contain" loading="lazy" />
                </div>
              </div>
            </div>

            {/* Right List */}
            <div className="flex w-full flex-col gap-4">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-[9px] rounded-xl border border-[#c8d7e4] bg-white px-[10px] py-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-[1px] hover:border-brand-blue/60 hover:shadow-[0_14px_36px_rgba(0,0,0,0.14)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg  border-[#c8d7e4] bg-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <p className="font-sans text-base font-medium text-black transition-colors duration-300 text-sm sm:text-base md:text-lg">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities (Section 3) */}
      <section className="w-full bg-white  transition-colors duration-300 ">
        <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-10 lg:px-14">
          <div className="text-center">
            <h2 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
              <span className="text-black">AI </span>
              <span className="text-brand-blue">CAPABILITIES</span>
            </h2>
          </div>

          <div className="relative mt-14">
            {/* Top row */}
            <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {capabilitiesTop.map((c) => (
                <div
                  key={c.title}
                  className="relative w-full max-w-[220px] rounded-[10px] border border-brand-blue/45 bg-white px-5 py-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.06)]  transition-all duration-300 hover:shadow-[0_10px_38px_rgba(0,0,0,0.20)] hover:-translate-y-2 hover:scale-[1.02]  duration-300 hover:border-brand-blue"
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
                  className="relative w-full max-w-[260px] rounded-[10px] border border-brand-blue/45 bg-white px-5 py-6 text-center shadow-[0_2px_10px_rgba(0,0,0,0.06)]  transition-all duration-300 hover:shadow-[0_10px_38px_rgba(0,0,0,0.20)] hover:-translate-y-2 hover:scale-[1.02]  hover:border-brand-blue"
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
        <div className="mx-automt-5  max-w-layout px-4 sm:px-6 md:px-10 lg:px-14">
          <div className="text-center">
            <h2 className="font-heading  font-bold uppercase tracking-tight transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
              <span className="text-brand-blue">TOOLS </span>
              <span className="text-black">&amp; </span>
              <span className="text-brand-blue">FRAMEWORKS</span>
            </h2>
          </div>

          <div className="mt-12 mx-auto max-w-[960px] flex flex-wrap justify-center gap-6">
            {toolsAndFrameworks.map((t) => (
              <div
                key={t}
                className="inline-flex shadow-[0_10px_28px_rgba(0,0,0,0.10)] hover:border-brand-blue hover:bg-gradient-to-b hover:from-white hover:to-[#cfe6fb] items-center justify-center rounded-lg hover:text-brand-blue border border-[#c8d7e4] bg-white px-10 py-[10px] font-sans text-[18px] font-medium text-black shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 hover:border-brand-blue"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Deployment Process (Section 5 - Last) */}
      <DevelopmentProcess
        title="AI DEPLOYMENT PROCESS"
        titlePrefix="AI DEPLOYMENT"
        steps={deploymentSteps}
        centerImage={processImg}
      />


 <BeforeFooter
        title="Get a Custom AI Solution Today"
        buttonText="Contact Now"
        paddingClassName="py-8"
        buttonLink="/contact"
        containerClassName="mx-auto max-w-layout px-4 text-center"
        headingAs="h3"
        headingClassName="font-heading text-[28px] sm:text-[40px] md:text-[48px]
 font-bold uppercase leading-tight text-white"
      />
      {/* </section> */}

    </div>
    </>
  );
};

export default AIDevelopment;

