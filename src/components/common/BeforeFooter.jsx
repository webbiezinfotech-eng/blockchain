const BeforeFooter = ({ title, description, buttonText = 'Contact Us Today' }) => {
  return (
    <section className="bg-brand-blue py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-layout px-5 text-center md:px-10">
        <h2 className="font-heading text-4xl font-bold uppercase leading-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            {description}
          </p>
        )}
        <button className="mt-8 rounded-lg border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-brand-blue">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default BeforeFooter;

