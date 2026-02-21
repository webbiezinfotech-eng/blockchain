import { useState } from 'react';

const DevelopmentProcess = ({
  title = "DEVELOPMENT PROCESS",
  steps = [],
  centerImage = null,
  titlePrefix = "DEVELOPMENT"
}) => {
  // Access steps for style detection
  const stepsForStyle = steps;
  const [hoveredStep, setHoveredStep] = useState(null);

  // Default positions for steps arranged in U-shape around center
  const getStepPosition = (index, totalSteps) => {
    if (totalSteps === 8) {
      const positions = [
        { cls: 'left-1/2 top-0 -translate-x-1/2 ml-10 w-[480px]' }, // Step 1 - Top right
        { cls: '-right-2 top-[95px] w-[420px]' }, // Step 2 - Right upper
        { cls: '-right-2 top-[220px] w-[420px]' }, // Step 3 - Right middle
        { cls: '-right-2 top-[350px] w-[420px]' }, // Step 4 - Right lower
        { cls: 'left-1/2 bottom-[20px] -translate-x-1/2 ml-20 w-[520px]' }, // Step 5 - Bottom center
        { cls: 'left-0 top-[350px] w-[400px]' }, // Step 6 - Left lower
        { cls: 'left-0 top-[220px] w-[400px]' }, // Step 7 - Left middle
        { cls: 'left-0 top-[95px] w-[400px]' }, // Step 8 - Left upper
      ];
      return positions[index] || { cls: '' };
    } else if (totalSteps === 7) {
      // Check if it's DApp style (different positioning)
      const isDAppStyle = stepsForStyle && stepsForStyle.length > 0 && stepsForStyle[0].title && stepsForStyle[0].title.toLowerCase().includes('requirement study');
      if (isDAppStyle) {
        // const positions = [
        //   { cls: 'left-1/2 -translate-x-1/2 -top-2 w-[480px]' }, // Step 1 - Top center
        //   { cls: 'right-0 top-[110px] w-[370px]' }, // Step 2 - Right top
        //   { cls: 'right-0 bottom-[200px] w-[370px]' }, // Step 3 - Right bottom
        //   { cls: 'left-1/2 -translate-x-1/2 bottom-[80px] w-[480px]' }, // Step 4 - Bottom center
        //   { cls: 'left-0 bottom-[240px] w-[370px]' }, // Step 5 - Left bottom
        //   { cls: 'left-0 top-[200px] w-[370px]' }, // Step 6 - Left middle
        //   { cls: 'left-0 top-[50px] w-[370px]' }, // Step 7 - Left top
        // ];
        const positions = [
          { cls: 'left-1/2 top-[40px] -translate-x-1/2 ml-24 w-[470px]' }, // 1 ↓ niche
          { cls: 'right-0 top-[200px] w-[440px]' },                      // 2
          { cls: 'right-0 top-[340px] w-[440px]' },                      // 3
          { cls: 'left-1/2 bottom-[70px] -translate-x-1/2 ml-72 w-[470px]' }, // 4 ↑
          { cls: 'left-0 bottom-[80px] w-[420px]' },                     // 5 ↑
          { cls: 'left-0 top-[330px] w-[420px]' },                       // 6 ↑ closer
          { cls: 'left-5 top-[210px] w-[420px]' },                       // 7 ↓ closer
        ];

        return positions[index] || { cls: '' };
      } else {
        // SmartContractDevelopment style
        const positions = [
          { cls: 'left-1/2 top-[25px] -translate-x-1/2 ml-24 w-[470px]' }, // Step 1 - Top center
          { cls: 'right-0 top-[180px] w-[440px]' }, // Step 2 - Right upper
          { cls: 'right-0 top-[330px] w-[440px]' }, // Step 3 - Right lower
          { cls: 'left-1/2 bottom-[10px] -translate-x-1/2 ml-72 w-[470px]' }, // Step 4 - Bottom center
          { cls: 'left-1/4 -translate-x-20 bottom-[10px] w-[420px]' }, // Step 5 - Left bottom
          { cls: 'left-0 top-[330px] w-[420px]' }, // Step 6 - Left lower
          { cls: 'left-5 top-[180px] w-[420px]' }, // Step 7 - Left upper
        ];
        return positions[index] || { cls: '' };
      }
    }
    // For other step counts, use a grid layout
    return { cls: '' };
  };

  return (
    <section className="w-full bg-white py-4 transition-colors duration-300 dark:bg-black sm:py-8">
      <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
        <div className="text-center">
          <h2 className="font-heading font-bold uppercase tracking-tight text-[32px] sm:text-[40px] md:text-[48px] lg:text-[76px] xl:text-[76px] transition-colors duration-300">
            <span className="text-black dark:text-white">{titlePrefix} </span>
            <span className="text-brand-blue">PROCESS</span>
          </h2>
        </div>

        {/* Mobile layout */}
        <div className="mt-12 flex flex-col gap-4 lg:hidden">
          {steps.map((step) => (
            <div
              key={step.no}
              className="flex items-center gap-4 rounded-xl border border-brand-blue/30 bg-[#EAF3FF] px-4 py-3 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-300 dark:border-white/15 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand-blue bg-white text-xl font-bold text-brand-blue">
                {step.no}
              </div>
              <p className="font-sans text-[16px] font-medium text-brand-blue dark:text-white">{step.title}</p>
            </div>
          ))}
        </div>

        {/* Desktop layout with circular center and U-shaped steps */}
        <div className="relative mt-14 hidden min-h-[560px] overflow-x-clip md:block">
          {/* Center Graphic */}
          <div className="pointer-events-none absolute left-1/2 z-0 h-[280px] w-[280px] -translate-x-1/2 items-center justify-center  backdrop-blur-[2px] transition-colors duration-300 dark:border-white/25 dark:bg-black/40 dark:shadow-[0_18px_60px_rgba(0,0,0,0.65)] md:top-[130px] md:flex">
            {centerImage ? (
              <div className="relative z-10 h-[320px] w-[320px] overflow-hidden rounded-full">
                <img
                  src={centerImage}
                  alt="Development process"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="absolute inset-6 from-brand-blue/20 via-brand-blue/10 to-transparent" />
            )}
          </div>

          {/* Steps arranged around center */}
          {steps.map((step, index) => {
            const position = getStepPosition(index, steps.length);
            // Dynamic width based on step count and position
            let stepWidth = 'md:w-[460px]';
            if (steps.length === 8) {
              stepWidth = index === 0 || index === 4 ? 'md:w-[460px]' : index === 1 || index === 2 || index === 3 ? 'md:w-[420px]' : 'md:w-[400px]';
            } else if (steps.length === 7) {
              const isDAppStyle = stepsForStyle && stepsForStyle.length > 0 && stepsForStyle[0].title && stepsForStyle[0].title.toLowerCase().includes('requirement study');
              if (isDAppStyle) {
                stepWidth = 'md:w-[370px]';
              } else {
                // SmartContractDevelopment style
                stepWidth = index === 0 || index === 3 ? 'md:w-[470px]' : index === 1 || index === 2 ? 'md:w-[440px]' : 'md:w-[420px]';
              }
            }
            return (
              <div
                key={step.no}
                className={`relative mb-4 flex items-center justify-start md:absolute md:mb-0 ${position.cls}`}
                onMouseEnter={() => setHoveredStep(step.no)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div
                  className={`relative z-10 flex w-full ${stepWidth} items-center gap-4 rounded-[10px] border border-brand-blue/20 bg-white px-5 py-4 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-all duration-300 dark:border-white/30 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)] ${hoveredStep === step.no ? 'scale-[1.03] border-brand-blue shadow-[0_14px_35px_rgba(0,99,182,0.20)]' : ''
                    }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-blue bg-white text-xl font-bold text-black dark:text-brand-blue">
                    {step.no}
                  </div>
                  <div className="font-sans text-xl leading-[1.6] font-semibold text-brand-blue transition-colors duration-300 dark:text-white sm:text-base">
                    {step.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;

