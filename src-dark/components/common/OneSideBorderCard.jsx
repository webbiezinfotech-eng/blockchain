const OneSideBorderCard = ({ title, description, icon }) => {
  return (
    <div className="group relative rounded-b-[24px] rounded-r-[24px] border border-brand-blue/10 bg-gradient-to-br from-[#0064b63e] to-[#eff6ff4a] p-6 transition-all duration-300 hover:border-brand-blue/30 hover:shadow-lg dark:border-white/30 dark:bg-gradient-to-br dark:from-[#EFF6FF]/20 dark:to-[#0063B6]/30 sm:p-6">
      <div className="absolute right-4 top-4 text-brand-blue transition-transform duration-500 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-bold text-black transition-colors duration-300 dark:text-white sm:text-xl">
        {title}
      </h3>
      <p className="mt-4 text-xl leading-[1.6] text-black/70 transition-colors duration-300 dark:text-white dark:font-medium sm:text-lg">
        {description}
      </p>
    </div>
  );
};

export default OneSideBorderCard;
