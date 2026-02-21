import { Link } from 'react-router-dom';

const BeforeFooter = ({
  title,
  description,
  buttonText = 'Contact Us Today',
  buttonLink = '/',
  className = '',
  paddingClassName = 'py-10 md:py-16 lg:py-10',
  containerClassName,
  headingAs = 'h2',
  headingClassName,
}) => {
  const Heading = headingAs;
  const containerClasses = containerClassName ?? 'mx-auto max-w-layout px-5 text-center md:px-10';
  const headingClasses =
    headingClassName ??
    'font-heading text-4xl font-bold uppercase leading-tight text-white md:text-5xl lg:text-6xl';

  return (
    <section className={`bg-brand-blue dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] ${paddingClassName} ${className}`}>
      <div className={containerClasses}>
        <Heading className={headingClasses}>
          {title}
        </Heading>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-white/90 md:text-xl">
            {description}
          </p>
        )}
        <Link to={buttonLink}>
        <button className="mt-8 rounded-lg border-2 border-white bg-transparent px-8 py-4 text-xl font-semibold text-white transition-all duration-300 hover:bg-white hover:text-brand-blue">
          {buttonText}
        </button></Link>

      </div>
    </section>
  );
};

export default BeforeFooter;

