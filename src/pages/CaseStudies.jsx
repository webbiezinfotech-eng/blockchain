const CaseStudies = () => {
  return (
    <div className="bg-white transition-colors duration-300 dark:bg-black">
      <section className="mx-auto max-w-layout px-5 py-16 md:px-10">
        <h1 className="font-heading text-4xl font-bold uppercase text-black transition-colors duration-300 dark:text-white md:text-6xl">
          Case Studies
        </h1>
        <div className="mt-10 space-y-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-black/15 bg-black/[0.03] p-6 transition-colors duration-300 dark:border-white/15 dark:bg-white/[0.03]"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-bold text-black transition-colors duration-300 dark:text-white">Project Title</h3>
                  <p className="mt-2 text-sm leading-6 text-black/70 transition-colors duration-300 dark:text-white/70">
                    Short project summary placeholder.
                  </p>
                </div>
                <div className="w-full md:w-[320px]">
                  <div className="text-sm font-semibold tracking-wide text-black/70 transition-colors duration-300 dark:text-white/70">MEDIA</div>
                  <div className="mt-3 aspect-[16/10] w-full rounded-xl bg-[radial-gradient(circle_at_25%_25%,rgba(0,99,182,0.5)_0%,rgba(0,0,0,0)_70%)] dark:bg-[radial-gradient(circle_at_25%_25%,rgba(0,99,182,0.45)_0%,rgba(0,0,0,0)_72%)]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
