const Contact = () => {
  const scrollToForm = () => {
    const el = document.getElementById('contact-form');
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const pillCard =
    'rounded-full border border-brand-blue/30 bg-white px-6 py-4 shadow-[0_6px_20px_rgba(0,123,255,0.15)] transition hover:border-brand-blue/60 dark:border-white/50 dark:bg-gradient-to-r dark:from-[#19385b] dark:to-black dark:shadow-[0_8px_26px_rgba(0,99,182,0.20)] dark:backdrop-blur-sm dark:hover:border-white';
  const boxCard =
    'rounded-xl border border-brand-blue/30 bg-white px-6 py-4 shadow-[0_6px_20px_rgba(0,123,255,0.15)] transition hover:border-brand-blue/60 dark:border-white/50 dark:bg-gradient-to-r dark:from-[#19385b] dark:to-black dark:shadow-[0_8px_26px_rgba(0,99,182,0.20)] dark:backdrop-blur-sm dark:hover:border-white';
  const fieldBase =
    'w-full bg-transparent text-base text-black placeholder-black/60 outline-none dark:text-white dark:placeholder-white/80';

  return (
    <div className="w-full bg-white dark:bg-black">
      {/* Heading */}
      <section className="pt-14">
        <div className="mx-auto max-w-layout px-6">
          <h1 className="text-center font-heading text-[36px] font-extrabold uppercase tracking-tight text-black dark:text-white md:text-[44px] lg:text-[52px]">
            GET IN TOUCH WITH{' '}
            <span className="text-brand-blue">BLOCKCHAIN APP ADVISOR</span>
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact-form" className="pt-14 pb-20">
        <div className="mx-auto max-w-layout px-[3.5rem]">
          <div className="grid grid-cols-1 gap-[4.5rem] lg:grid-cols-12">
            {/* LEFT FORM */}
            <div className="lg:col-span-7">
              <form className="flex flex-col gap-6">
                {/* Name + Mobile */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className={pillCard}>
                    <input
                      type="text"
                      placeholder="Name"
                      className={fieldBase}
                    />
                  </div>

                  <div className={pillCard}>
                    <input
                      type="tel"
                      placeholder="Mobile"
                      className={fieldBase}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className={pillCard}>
                  <input
                    type="email"
                    placeholder="Email"
                    className={fieldBase}
                  />
                </div>

                {/* Message */}
                <div
                  className={`rounded-[24px] ${pillCard.replace('rounded-full', '')}`}
                >
                  <textarea
                    rows={6}
                    placeholder="Message"
                    className={`${fieldBase} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-fit rounded-md bg-brand-blue px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-brand-blue/90 dark:bg-black dark:text-white dark:border dark:border-white dark:hover:bg-white dark:hover:text-black"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* RIGHT INFO */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Phone */}
              <div className={`flex items-center gap-4 ${boxCard}`}>
                <div className="flex h-10 w-10 items-center justify-center">
                  📞
                </div>
                <p className="text-base text-black dark:text-white">+91 xxxxx xxxxx</p>
              </div>

              {/* Email */}
              <div className={`flex items-center gap-4 ${boxCard}`}>
                <div className="flex h-10 w-10 items-center justify-center">
                  ✉️
                </div>
                <p className="text-base text-black dark:text-white">
                  contact@blockchainappadvisor.com
                </p>
              </div>

              {/* Address */}
              <div className={`flex items-start gap-4 ${boxCard}`}>
                <div className="mt-1 flex h-10 w-10 items-center justify-center">
                  📍
                </div>
                <p className="text-base text-black dark:text-white">Address...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-blue py-16">
        <div className="mx-auto max-w-layout px-6 text-center">
          <h2 className="font-heading text-4xl font-bold text-white lg:text-5xl">
            Ready To Start Your Project Or Need Expert Guidance?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Our team will reach out with next steps and consultation details.
          </p>
          <button
            onClick={scrollToForm}
            className="mt-8 rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-brand-blue"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
