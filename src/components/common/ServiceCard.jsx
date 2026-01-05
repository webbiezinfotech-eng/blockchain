import { useState } from 'react';

const ServiceCard = ({ title, description, image, isExpanded = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isExpandedState = isHovered || isExpanded;

  return (
    <div
      className={`group relative flex-shrink-0 overflow-hidden border border-brand-blue/30 bg-black/[0.03] shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-500 ease-in-out dark:border-white/40 dark:bg-white/[0.03] dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)] md:shadow-[0_12px_32px_rgba(0,0,0,0.18)] dark:md:shadow-[0_12px_32px_rgba(0,0,0,0.45)]
        ${isExpandedState 
          ? 'w-[300px] h-[360px] sm:w-[360px] sm:h-[420px] md:w-[460px] md:h-[460px] rounded-[70px] border-2 border-brand-blue/40 shadow-[0_16px_48px_rgba(0,0,0,0.25)] -translate-y-2 z-10 dark:border-white dark:shadow-[0_16px_48px_rgba(0,0,0,0.55)] md:shadow-[0_24px_64px_rgba(0,0,0,0.3)] dark:md:shadow-[0_24px_64px_rgba(0,0,0,0.65)]' 
          : 'w-32 h-[450px] rounded-[70px]'
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative w-full h-full overflow-hidden transition-all duration-500 ${
        isExpandedState ? 'rounded-[70px]' : 'rounded-[70px]'
      }`}>
        {/* Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className={`absolute inset-0 transition-opacity duration-500 ${
            isExpandedState
              ? 'bg-[linear-gradient(180deg,rgba(0,0,0,0)_20%,rgba(0,0,0,0.5)_60%,rgba(0,0,0,0.9)_100%)]'
              : 'bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.8)_100%)]'
          }`} />
        </div>
        
        {/* Content - Vertical Title when compact, Horizontal when expanded */}
        {isExpandedState ? (
          // Expanded State - Horizontal Title at bottom
          <div className="absolute inset-x-0 bottom-0 p-6 transition-all duration-500">
            <div className="backdrop-blur-sm bg-black/50 rounded-lg p-4 transition-all duration-500">
              <h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-3 transition-all duration-500">
                {title}
              </h3>
              <p className="text-white leading-relaxed opacity-100 max-h-[200px] text-sm sm:text-base md:text-base transition-all duration-500">
                {description}
              </p>
            </div>
          </div>
        ) : (
          // Compact State - Vertical (rotated) Title
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-heading font-bold text-white text-base sm:text-lg md:text-xl tracking-wide whitespace-nowrap -rotate-90 origin-center transition-all duration-500"
            >
              {title}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;

