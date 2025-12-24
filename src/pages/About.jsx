const About = () => {
  return (
    <div className="bg-white transition-colors duration-300 dark:bg-black">
      <section className="mx-auto max-w-layout px-5 py-16 md:px-10">
        <h1 className="font-heading text-4xl font-bold uppercase text-black transition-colors duration-300 dark:text-white md:text-6xl">
          About
        </h1>
        <div className="mt-8 rounded-2xl border border-black/15 bg-black/[0.03] p-6 transition-colors duration-300 dark:border-white/15 dark:bg-white/[0.03]">
          <div className="text-sm font-semibold tracking-wide text-black/70 transition-colors duration-300 dark:text-white/70">MEDIA</div>
          <div className="mt-4 h-[260px] w-full rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(0,99,182,0.5)_0%,rgba(0,0,0,0)_70%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(0,99,182,0.45)_0%,rgba(0,0,0,0)_72%)]" />
        </div>
      </section>
    </div>
  );
};

export default About;
