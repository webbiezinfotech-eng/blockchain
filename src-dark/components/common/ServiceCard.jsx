import { useState } from 'react';
import { SHOW_GRAPHICS } from '../../constants/uiFlags';
import { DARK_CARD_GRADIENT } from '../../constants/uiClasses';

const ServiceCard = ({ title, description, image, isExpanded = false, size = 'large' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isExpandedState = isHovered || isExpanded;

  const sizeStyles =
    size === 'pill'
      ? {
          // pipe/pill cards (like "Types of Exchanges" mock) — slim by default, expands on hover
          expanded:
            'w-[320px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[440px] rounded-[40px] sm:rounded-[70px] border-2 border-brand-blue/40 shadow-[0_16px_48px_rgba(0,0,0,0.25)] -translate-y-2 z-10 dark:shadow-[0_16px_48px_rgba(0,0,0,0.55)] md:shadow-[0_24px_64px_rgba(0,0,0,0.3)] dark:md:shadow-[0_24px_64px_rgba(0,0,0,0.65)]',
          collapsed:
            'w-[92px] h-[340px] sm:w-[112px] sm:h-[420px] md:w-[124px] md:h-[440px] rounded-[40px] sm:rounded-[70px]',
        }
      : size === 'compact'
        ? {
            expanded:
              'w-[260px] h-[340px] sm:w-[300px] sm:h-[400px] md:w-[340px] md:h-[420px] rounded-[32px] sm:rounded-[56px] border-2 border-brand-blue/35 shadow-[0_14px_40px_rgba(0,0,0,0.22)] -translate-y-1 z-10 dark:shadow-[0_14px_40px_rgba(0,0,0,0.55)]',
            collapsed: 'w-[220px] h-[320px] sm:w-[260px] sm:h-[380px] md:w-[300px] md:h-[400px] rounded-[32px] sm:rounded-[56px]',
          }
        : {
            // existing (large) sizing used across other pages
            expanded:
              'w-full h-[360px] sm:w-[360px] sm:h-[420px] md:w-[460px] md:h-[460px] rounded-[40px] sm:rounded-[70px] border-2 border-brand-blue/40 shadow-[0_16px_48px_rgba(0,0,0,0.25)] -translate-y-2 z-10 dark:shadow-[0_16px_48px_rgba(0,0,0,0.55)] md:shadow-[0_24px_64px_rgba(0,0,0,0.3)] dark:md:shadow-[0_24px_64px_rgba(0,0,0,0.65)]',
            collapsed: 'w-full sm:w-32 h-[340px] sm:h-[450px] rounded-[40px] sm:rounded-[70px]',
          };

  return (
    <div
      className={`group relative flex-shrink-0 overflow-hidden border border-brand-blue/30 bg-black/[0.03] shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-500 ease-in-out dark:border-white/40 dark:bg-white/[0.03] dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)] md:shadow-[0_12px_32px_rgba(0,0,0,0.18)] dark:md:shadow-[0_12px_32px_rgba(0,0,0,0.45)]
        ${DARK_CARD_GRADIENT}
        ${isExpandedState 
          ? sizeStyles.expanded
          : sizeStyles.collapsed
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative w-full h-full overflow-hidden transition-all duration-500 ${
        isExpandedState ? 'rounded-[70px]' : 'rounded-[70px]'
      }`}>
        {/* Graphics / Background */}
        <div className="absolute inset-0 w-full h-full">
          {SHOW_GRAPHICS && image ? (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div
              className="w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,99,182,0.35),transparent_55%),linear-gradient(90deg,rgba(6,26,51,0.9),rgba(0,0,0,0.95))]"
              aria-hidden="true"
            />
          )}
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
              <p className="text-white leading-relaxed opacity-100 max-h-[200px] text-xl leading-[1.6] sm:text-base md:text-base transition-all duration-500">
                {description}
              </p>
            </div>
          </div>
        ) : (
          // Compact State - Vertical (rotated) Title
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-heading font-bold text-white text-base sm:text-xl md:text-xl tracking-wide whitespace-nowrap -rotate-90 origin-center transition-all duration-500"
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

