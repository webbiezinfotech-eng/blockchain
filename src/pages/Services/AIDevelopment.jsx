import heroImg from '../../assets/services images/AIDevimages/AIDev-hero.png';
import useCaseImg from '../../assets/services images/AIDevimages/AIusecase.png';
import processImg from '../../assets/services images/AIDevimages/AIDevProcess.png';

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
    { no: 1, title: 'Requirement Analysis' },
    { no: 2, title: 'Model Selection or Custom Model Training' },
    { no: 3, title: 'Dataset Preparation' },
    { no: 4, title: 'Model Integration with Apps & APIs' },
    { no: 5, title: 'Fine-tuning & Optimization' },
    { no: 6, title: 'Deployment (Cloud or On-Premise)' },
    { no: 7, title: 'Continuous Monitoring' },
  ];

  return (
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero Section (Figma) */}
      <section className="w-full bg-white pt-4 pb-16 transition-colors duration-300 dark:bg-black sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="grid grid-cols-1 items-center lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Left */}
            <div>
              <h2 className="font-heading text-[44px] font-bold uppercase leading-[1.06] tracking-tight sm:text-[56px] lg:text-[67px]" style={{ lineHeight: '81px' }}>
                <span className="block text-black transition-colors duration-300 dark:text-white sm:whitespace-nowrap">
                  AI &amp; MACHINE LEARNING
                </span>
                <span className="block sm:whitespace-nowrap">
                  <span className="text-black transition-colors duration-300 dark:text-white">DEVELOPMENT </span>
                  <span className="text-brand-blue">FOR</span>
                </span>
                <span className="block text-brand-blue sm:whitespace-nowrap">INTELLIGENT ENTERPRISE</span>
                <span className="block text-brand-blue sm:whitespace-nowrap">AUTOMATION</span>
              </h2>

              <p className="mt-8 max-w-[720px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-lg">
                Transform your business with custom AI systems that think, learn, and optimize processes at scale. We build
                cutting-edge automation tools, predictive models, generative AI solutions, and neural network architectures that
                unlock efficiency, accuracy, and new digital capabilities across your operations.
              </p>
            </div>

            {/* Right */}
            <div className="flex w-full items-center justify-center lg:justify-end">
              <div className="w-full max-w-[560px]">
                <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.04]">
                  <img src={heroImg} alt="AI development" className="h-auto w-full object-contain" loading="eager" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Use Cases (Section 2) */}
      <section className="w-full bg-white py-16 transition-colors duration-300 dark:bg-black sm:py-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="text-center">
            <h2 className="font-heading text-[42px] font-bold uppercase tracking-tight text-black transition-colors duration-300 sm:text-[56px] lg:text-[72px] dark:text-white">
              <span className="text-black dark:text-white">AI </span>
              <span className="text-brand-blue">USE CASES</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 items-center gap-0 lg:grid-cols-[0.95fr_1.05fr] lg:gap-0">
            {/* Left Illustration */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="w-full max-w-[560px]">
                <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.04]">
                  <img src={useCaseImg} alt="AI use cases" className="h-auto w-full object-contain" loading="lazy" />
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

      {/* AI Capabilities (Section 3) */}
      <section className="w-full bg-white py-16 transition-colors duration-300 dark:bg-black sm:py-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="text-center">
            <h2 className="font-heading text-[42px] font-bold uppercase tracking-tight text-black transition-colors duration-300 sm:text-[56px] lg:text-[72px] dark:text-white">
              <span className="text-black dark:text-white">AI </span>
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
      <section className="w-full bg-white py-16 transition-colors duration-300 dark:bg-black sm:py-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="text-center">
            <h2 className="font-heading text-[42px] font-bold uppercase tracking-tight transition-colors duration-300 sm:text-[56px] lg:text-[72px]">
              <span className="text-brand-blue">TOOLS </span>
              <span className="text-black dark:text-white">&amp; </span>
              <span className="text-brand-blue">FRAMEWORKS</span>
            </h2>
          </div>

          <div className=" mt-12 flex max-w-[1130px] flex-wrap justify-center gap-6">
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

      {/* AI Deployment Process (Section 5 - Last) */}
      <section className="w-full bg-white py-16 transition-colors duration-300 dark:bg-black sm:py-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="text-center">
            <h2 className="font-heading text-[42px] font-bold uppercase tracking-tight transition-colors duration-300 sm:text-[56px] lg:text-[72px]">
              <span className="text-black dark:text-white">AI DEPLOYMENT </span>
              <span className="text-brand-blue">PROCESS</span>
            </h2>
          </div>

          {/* Mobile layout */}
          <div className="mt-12 flex flex-col gap-4 lg:hidden">
            {deploymentSteps.map((s) => (
              <div
                key={s.no}
                className="flex items-center gap-4 rounded-xl border border-brand-blue/30 bg-[#EAF3FF] px-4 py-3 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 dark:border-white/15 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand-blue bg-white text-lg font-bold text-brand-blue">
                  {s.no}
                </div>
                <p className="font-sans text-[16px] font-medium text-brand-blue dark:text-white">{s.title}</p>
              </div>
            ))}
          </div>

          {/* Desktop diagram layout */}
          <div className="relative mt-14 hidden min-h-[560px] overflow-x-clip lg:block">
            {/* Center media */}
            <div className="absolute left-1/2 top-1/2 w-[340px] -translate-x-1/2 -translate-y-1/2">
              <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.04]">
                <img src={processImg} alt="AI deployment process" className="h-auto w-full object-contain" loading="lazy" />
              </div>
            </div>

            {[
              // 1: slightly left
              { no: 1, title: 'Requirement Analysis', cls: 'left-1/2 top-0 -translate-x-1/2 ml-10 w-[480px]' },
              // 2: slightly more right (reduce width a bit so it sits more to the right)
              { no: 2, title: 'Model Selection or Custom Model Training', cls: '-right-6 top-[190px] w-[405px]' },
              { no: 3, title: 'Dataset Preparation', cls: '-right-2 top-[340px] w-[405px]' },
              { no: 4, title: 'Model Integration with Apps & APIs', cls: 'left-1/2 -bottom-6 -translate-x-1/2 ml-20 w-[520px]' },
              // 5: move slightly down to increase spacing from 6 (but still less than 6-7)
              { no: 5, title: 'Fine-tuning & Optimization', cls: '-left-6 bottom-[55px] w-[400px]' },
              { no: 6, title: 'Deployment (Cloud or On-Premise)', cls: '-left-6 top-[300px] w-[400px]' },
              { no: 7, title: 'Continuous Monitoring', cls: '-left-6 top-[150px] w-[400px]' },
            ].map((s) => (
              <div
                key={s.no}
                className={`absolute ${s.cls} flex items-center gap-3 rounded-xl border border-brand-blue/30 bg-[#EAF3FF] pl-4 pr-3 py-3 shadow-[0_4px_18px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/15 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-blue bg-white text-lg font-bold text-brand-blue">
                  {s.no}
                </div>
                <p className="font-sans text-[16px] font-medium text-brand-blue dark:text-white">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#004b8a] to-[#000000] py-10 transition-colors duration-300 sm:py-12">
        <div className="mx-auto max-w-layout px-4 text-center sm:px-6 md:px-10">
          <h3 className="font-heading text-[36px] font-bold uppercase leading-tight text-white sm:text-[44px] md:text-[52px]">
            Get a Custom AI Solution Today
          </h3>
          <button className="mt-7 rounded-lg border-2 border-white bg-transparent px-10 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black">
            Contact Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AIDevelopment;

