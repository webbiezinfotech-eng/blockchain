import { Link } from "react-router-dom";

const PageHero = ({
  titleLines = [],
  description,
  image,
  imageAlt = "Hero Image",
  showButton = false,
  buttonText = "Get Started",
  buttonLink = "/contact",
}) => {
  return (
    <section className="w-full bg-white pt-4 pb-2 transition-colors duration-300 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-8 dark:bg-black">
      <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
        
        <div className="grid grid-cols-1 items-center lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">

          {/* LEFT SIDE */}
          <div>
            <h1 className="font-heading font-bold uppercase leading-[1.26] tracking-tight text-[32px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[68px]">
              {titleLines.map((line, index) => (
                <div key={index} className="block w-full transition-colors duration-300">
                  <span
                    className={
                      line.highlight
                        ? "text-brand-blue"
                        : "text-black dark:text-white"
                    }
                  >
                    {line.text}
                  </span>
                </div>
              ))}
            </h1>

            {description && (
              <div className="flex flex-col gap-4 mt-4 max-w-[650px]">
                <p className="font-normal text-xl leading-[1.6] text-black transition-colors duration-300 sm:text-base md:text-lg lg:text-xl dark:text-white/80">
                  {description}
                </p>
              </div>
            )}

            {showButton && (
              <Link to={buttonLink}>
                <button className="mt-6 rounded border border-brand-blue px-6 py-3 text-sm sm:text-base font-semibold text-brand-blue transition-all duration-300 hover:bg-brand-blue hover:text-white">
                  {buttonText} →
                </button>
              </Link>
            )}
          </div>

          {/* RIGHT SIDE */}
          {image && (
            <div className="flex w-full items-center justify-center mt-8 lg:mt-0">
              <div className="w-full max-w-[560px]">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={image}
                    alt={imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default PageHero;