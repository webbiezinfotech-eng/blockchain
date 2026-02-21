const TwoLayerCard = ({ title, description, icon }) => {
  return (
    <div className="group relative transition-all duration-300">
      {/* Background Tint Card - Tilted and slightly larger */}
      <div className="absolute -inset-2 rounded-[24px] bg-brand-blue transition-transform duration-300 translate-x-1 translate-y-2 -rotate-[3deg] group-hover:translate-x-2 group-hover:translate-y-3 group-hover:-rotate-[4deg]" />
      
      {/* Foreground White Card - Straight */}
      <div className="relative h-full rounded-[24px] border border-brand-blue/10 bg-white p-8 transition-all duration-300">
        <div className="flex items-start justify-between gap-4">
          <h3 className="no-stroke font-heading text-xl font-bold leading-tight text-brand-blue sm:text-2xl">
            {title}
          </h3>
          <div className="text-brand-blue">
            {icon}
          </div>
        </div>
        <p className="mt-6 font-sans text-xl leading-[1.6] font-medium leading-[1.6] text-black/70 transition-colors duration-300 sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TwoLayerCard;

