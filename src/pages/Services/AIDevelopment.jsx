const AIDevelopment = () => {
  const useCases = [
    {
      title: 'Automated customer service (AI agents, chatbots)',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <path
            d="M7.5 14.5H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5.5a3 3 0 0 1-3 3h-4.5L10 18.5v-4z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M7.5 8h6.5M7.5 11h4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Financial forecasting & fraud detection',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <path d="M4.5 20V5.5A2.5 2.5 0 0 1 7 3h10a2.5 2.5 0 0 1 2.5 2.5V20" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M17.5 14.5l1.8 1.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M15.5 16.3a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      title: 'Healthcare diagnostics & analytics',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <path d="M7 4h10a3 3 0 0 1 3 3v13H4V7a3 3 0 0 1 3-3z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Predictive maintenance for manufacturing',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <path d="M14 3l-2 2 3 3 2-2a5 5 0 0 1 2 6l-2 2-3-3-7.5 7.5a2 2 0 0 1-2.8-2.8L11.2 8 8.2 5 10 3a5 5 0 0 1 4 0z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Recommendation systems for eCommerce',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <path d="M7 6h14v12H7z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 8h4v8H3z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M10 10h8M10 13h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M17.5 17.2l.9-1.8 2 .3-1.4-1.4.8-1.9-1.9.8-1.4-1.4.3 2-1.8.9 2 .3z" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Image/video processing for surveillance',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <path d="M4 7h16v10H4z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 17l-2.5 3M15 17l2.5 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      title: 'Smart document processing (OCR, extraction)',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <path d="M7 3h7l3 3v15H7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M9 12h6M9 15h6M9 18h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const capabilitiesTop = [
    {
      title: 'Custom Machine Learning Models',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 9h2M4 15h2M18 9h2M18 15h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9 4v2M15 4v2M9 18v2M15 18v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Neural Networks & Deep Learning',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M7.7 11.2 10.3 12M13.7 11.2 16.3 7.7M13.7 12.8 16.3 16.3M10.3 12 7.7 12.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'GenAI Systems (LLMs, RAG, Chatbots)',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <path d="M7 8a5 5 0 0 1 10 0v4a5 5 0 0 1-10 0V8z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 7V5a1 1 0 0 1 1-1h.5M15 7V5a1 1 0 0 0-1-1H13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9.5 11h.01M14.5 11h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M8 19h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Predictive & Behavioral Analytics',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <path d="M12 3a7 7 0 0 0-7 7c0 2.6 1.4 4.8 3.5 6v2.5h7V16c2.1-1.2 3.5-3.4 3.5-6a7 7 0 0 0-7-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M10 12l1.2-1.2 1.2 1.2 2.2-2.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const capabilitiesBottom = [
    {
      title: 'AI Automation Workflows',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 10h6M9 13h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M5 12H3M21 12h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Computer Vision & Image Recognition',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <path d="M4 7h16v10H4z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 10a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M7 17l-2 4M17 17l2 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'NLP Solutions (Text, Speech, Translation)',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-brand-blue">
          <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M7 10h5M7 13h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M16.5 10.5h.01M16.5 13.5h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      ),
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
      <section className="w-full bg-white pt-12 pb-16 transition-colors duration-300 dark:bg-black sm:pt-12 sm:pb-20 lg:pt-12 lg:pb-24">
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
                {/* Replace this with your figma image later */}
                <div className="flex aspect-[4/3] w-full items-center justify-center rounded-3xl bg-black/[0.03] text-2xl font-bold text-brand-blue/30 transition-colors duration-300 dark:bg-white/[0.04] dark:text-white/20">
                  Media
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
                <div className="flex aspect-[4/3] w-full items-center justify-center rounded-3xl bg-black/[0.03] text-2xl font-bold text-brand-blue/30 transition-colors duration-300 dark:bg-white/[0.04] dark:text-white/20">
                  Media
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
                className="flex items-center gap-4 rounded-xl border border-[#c8d7e4] bg-white px-4 py-3 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 dark:border-white/15 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand-blue bg-white text-lg font-bold text-black">
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
              <div className="flex aspect-square w-full items-center justify-center rounded-3xl bg-black/[0.03] text-2xl font-bold text-brand-blue/30 shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-colors duration-300 dark:bg-white/[0.04] dark:text-white/20">
                Media
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
                className={`absolute ${s.cls} flex items-center gap-3 rounded-xl border border-[#c8d7e4] bg-white pl-4 pr-3 py-3 shadow-[0_4px_18px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/15 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-blue bg-white text-lg font-bold text-black">
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

