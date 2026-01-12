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
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-brand-blue dark:text-white" aria-hidden="true">
                    <path
                      d="M4.5 6.5c0-1.1.9-2 2-2h2.2c.8 0 1.5.5 1.8 1.3l1 2.6c.3.8 0 1.7-.7 2.1l-1.6 1c1.1 2.2 2.9 4 5.1 5.1l1-1.6c.4-.7 1.3-1 2.1-.7l2.6 1c.8.3 1.3 1 1.3 1.8V18c0 1.1-.9 2-2 2H19c-8 0-14.5-6.5-14.5-14.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-base text-black dark:text-white">+91 xxxxx xxxxx</p>
              </div>

              {/* Email */}
              <div className={`flex items-center gap-4 ${boxCard}`}>
                <div className="flex h-10 w-10 items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-brand-blue dark:text-white" aria-hidden="true">
                    <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M5.5 7.5 12 12l6.5-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-base text-black dark:text-white">
                  contact@blockchainappadvisor.com
                </p>
              </div>

              {/* Address */}
              <div className={`flex items-start gap-4 ${boxCard}`}>
                <div className="mt-1 flex h-10 w-10 items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-brand-blue dark:text-white" aria-hidden="true">
                    <path
                      d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
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
