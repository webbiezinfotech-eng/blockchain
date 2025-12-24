const Blog = () => {
  return (
    <div className="bg-white transition-colors duration-300 dark:bg-black">
      <section className="mx-auto max-w-layout px-5 py-16 md:px-10">
        <h1 className="font-heading text-4xl font-bold uppercase text-black transition-colors duration-300 dark:text-white md:text-6xl">
          Blog
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <article
              key={i}
              className="overflow-hidden rounded-2xl border border-black/15 bg-black/[0.03] transition-colors duration-300 dark:border-white/15 dark:bg-white/[0.03]"
            >
              <div className="p-5">
                <div className="text-sm font-semibold tracking-wide text-black/70 transition-colors duration-300 dark:text-white/70">MEDIA</div>
                <div className="mt-4 aspect-[16/10] w-full rounded-xl bg-[radial-gradient(circle_at_25%_25%,rgba(0,99,182,0.5)_0%,rgba(0,0,0,0)_70%)] dark:bg-[radial-gradient(circle_at_25%_25%,rgba(0,99,182,0.45)_0%,rgba(0,0,0,0)_72%)]" />
                <h3 className="mt-4 font-heading text-xl font-bold text-black transition-colors duration-300 dark:text-white">Blog Title</h3>
                <p className="mt-2 text-sm leading-6 text-black/70 transition-colors duration-300 dark:text-white/70">
                  Blog excerpt placeholder.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
