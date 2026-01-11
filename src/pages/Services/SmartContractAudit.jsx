const SmartContractAudit = () => {
  const auditProcess = [
    'Code review & architecture analysis',
    'Automated vulnerability testing',
    'Manual vulnerability testing',
    'Gas usage & performance optimization',
    'Final audit report with fixes',
  ];

  const checklistTop = [
    { t: 'Reentrancy' },
    { t: 'Integer Overflow / Underflow' },
    { t: 'Access Control Issues' },
    { t: 'Front Running' },
  ];

  const checklistBottom = [
    { t: 'Logic Flaws' },
    { t: 'Denial of Service' },
    { t: 'Oracle Manipulation' },
    { t: 'Contract Upgradeability Issues' },
  ];

  const automatedTools = ['Cortex', 'Echidna', 'Mythril', 'Slither'];
  const manualTesting = ['Line-by-line review', 'Attack simulation', 'Exploit scenario recreation'];

  const reportItems = [
    {
      title: 'Risk classification',
      desc: 'Categorizes vulnerabilities based on impact and likelihood.',
    },
    {
      title: 'Issue severity',
      desc: 'Prioritizes findings from low to critical for fast remediation.',
    },
    {
      title: 'Code fix & recommendations',
      desc: 'Proposed mitigations and best-practice secure patterns.',
    },
    {
      title: 'Final verification',
      desc: 'Confirms all fixes are correctly implemented and secured.',
    },
  ];

  return (
    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero */}
      <section className="w-full bg-white pt-12 pb-14 transition-colors duration-300 dark:bg-black sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20">
        <div className="mx-auto grid w-full max-w-layout grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-[60%_40%] lg:pl-[3rem] lg:pr-[5rem]">
          {/* Left */}
          <div className="flex w-full flex-col gap-6">
            <h1 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white">
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35]">
                EXPERT SMART CONTRACT
              </span>
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35] lg:whitespace-nowrap">
                AUDITS FOR <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">MAXIMUM SECURITY</span>
              </span>
              <span className="block text-[38px] leading-[1.2] sm:text-[52px] sm:leading-[1.25] lg:text-[62px] lg:leading-[1.35]">
                &amp; <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">ZERO VULNERABILITIES</span>
              </span>
            </h1>

            <p className="max-w-[720px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-lg">
              We identify vulnerabilities before attackers do. Our audit workflow combines automated tooling, manual review, and
              best-practice standards to harden your smart contracts for production.
            </p>
          </div>

          {/* Right (media) */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[560px]">
              <div className="flex aspect-[4/3] w-full items-center justify-center rounded-3xl bg-black/[0.03] text-2xl font-bold text-brand-blue/30 transition-colors duration-300 dark:bg-white/[0.04] dark:text-white/20">
                Media
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Process Overview */}
      <section className="w-full bg-white pt-10 pb-14 transition-colors duration-300 dark:bg-black sm:pt-12 sm:pb-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[38px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[52px] lg:text-[64px]">
              <span className="text-black dark:text-white">AUDIT PROCESS </span>
              <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">OVERVIEW</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[42%_58%] lg:gap-14">
            {/* Left media */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="w-full max-w-[520px]">
                <div className="flex aspect-[4/3] w-full items-center justify-center rounded-3xl bg-black/[0.03] text-2xl font-bold text-brand-blue/30 transition-colors duration-300 dark:bg-white/[0.04] dark:text-white/20">
                  Media
                </div>
              </div>
            </div>

            {/* Right list */}
            <div className="flex w-full flex-col gap-4 lg:max-w-[480px]">
              {auditProcess.map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-brand-blue/25 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-[1px] hover:border-brand-blue/60 hover:shadow-[0_14px_36px_rgba(0,0,0,0.14)] dark:border-white/25 dark:bg-black dark:hover:border-brand-blue/70"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-blue/40 bg-white/80 text-brand-blue transition-colors duration-300 dark:border-white/35 dark:bg-black/30 dark:text-white">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="opacity-90">
                      <path d="M12 2 20 6v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4Z" stroke="currentColor" strokeWidth="1.8" />
                      <path d="m9 12 2 2 4-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="font-sans text-[16px] font-semibold text-black transition-colors duration-300 dark:text-white sm:text-[17px]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vulnerability Checklist */}
      <section className="w-full bg-white pt-6 pb-14 transition-colors duration-300 dark:bg-black sm:pt-8 sm:pb-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[38px] font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white sm:text-[52px] lg:text-[64px]">
              <span className="text-black dark:text-white">VULNERABILITY </span>
              <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">CHECKLIST</span>
            </h2>
          </div>

          <div className="mx-auto max-w-[980px]">
            {/* Desktop/tablet layout (matches Figma) */}
            <div className="hidden sm:block">
              {/* Top row */}
              <div className="grid grid-cols-4 gap-10">
                {checklistTop.map((i) => (
                  <div key={i.t} className="flex flex-col items-center">
                    <div className="flex w-full max-w-[220px] flex-col items-center rounded-[10px] border border-[#c8d7e4] bg-white px-5 py-6 text-center shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-colors duration-300 dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-brand-blue/45 bg-white text-brand-blue transition-colors duration-300 dark:border-white/30 dark:bg-black dark:text-white">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2 20 6v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4Z" stroke="currentColor" strokeWidth="1.7" />
                        </svg>
                      </div>
                      <div className="mt-4 max-w-[180px] font-sans text-[18px] font-semibold leading-snug text-black transition-colors duration-300 dark:text-white">
                        {i.t}
                      </div>
                    </div>

                    <div className="mt-8 h-24 w-0 border-l-2 border-dashed border-brand-blue/60 dark:border-white/50" />
                  </div>
                ))}
              </div>

              {/* Middle thick line */}
              <div className="h-[6px] w-full rounded-full bg-brand-blue dark:bg-white" />

              {/* Bottom row */}
              <div className="grid grid-cols-4 gap-10">
                {checklistBottom.map((i) => (
                  <div key={i.t} className="flex flex-col items-center">
                    <div className="h-24 w-0 border-l-2 border-dashed border-brand-blue/60 dark:border-white/50" />

                    <div className="mt-8 flex w-full max-w-[220px] flex-col items-center rounded-[10px] border border-[#c8d7e4] bg-white px-5 py-6 text-center shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-colors duration-300 dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-brand-blue/45 bg-white text-brand-blue transition-colors duration-300 dark:border-white/30 dark:bg-black dark:text-white">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2 20 6v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4Z" stroke="currentColor" strokeWidth="1.7" />
                        </svg>
                      </div>
                      <div className="mt-4 max-w-[190px] font-sans text-[18px] font-semibold leading-snug text-black transition-colors duration-300 dark:text-white">
                        {i.t}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile fallback */}
            <div className="grid grid-cols-2 gap-5 sm:hidden">
              {[...checklistTop, ...checklistBottom].map((i) => (
                <div
                  key={i.t}
                  className="flex flex-col items-center rounded-[10px] border border-[#c8d7e4] bg-white px-4 py-5 text-center shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-colors duration-300 dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-brand-blue/45 bg-white text-brand-blue transition-colors duration-300 dark:border-white/30 dark:bg-black dark:text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2 20 6v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4Z" stroke="currentColor" strokeWidth="1.7" />
                    </svg>
                  </div>
                  <div className="mt-3 font-sans text-[14px] font-semibold leading-snug text-black transition-colors duration-300 dark:text-white">
                    {i.t}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Automated vs Manual Testing */}
      <section className="w-full bg-white pt-4 pb-14 transition-colors duration-300 dark:bg-black sm:pt-6 sm:pb-16">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[34px] font-bold uppercase tracking-tight transition-colors duration-300 sm:text-[48px] lg:text-[60px]">
              <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">AUTOMATED </span>
              <span className="text-black dark:text-white">VS </span>
              <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">MANUAL TESTING</span>
            </h2>
          </div>

          <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-[12px] border border-black/10 bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]">
              <h3 className="text-center font-heading text-[18px] font-bold uppercase tracking-wide text-brand-blue transition-colors duration-300 dark:text-white">
                Automated Tools
              </h3>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {automatedTools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/10 bg-white px-5 py-2 font-sans text-sm font-semibold text-black/80 shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-colors duration-300 dark:border-white/15 dark:bg-black dark:text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[12px] border border-black/10 bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/25 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000]">
              <h3 className="text-center font-heading text-[18px] font-bold uppercase tracking-wide text-brand-blue transition-colors duration-300 dark:text-white">
                Manual Testing
              </h3>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {manualTesting.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/10 bg-white px-5 py-2 font-sans text-sm font-semibold text-black/80 shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-colors duration-300 dark:border-white/15 dark:bg-black dark:text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Audit Reports Include */}
      <section className="w-full bg-white pt-2 pb-16 transition-colors duration-300 dark:bg-black sm:pt-4 sm:pb-20">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[34px] font-bold uppercase tracking-tight transition-colors duration-300 sm:text-[48px] lg:text-[60px]">
              <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">SAMPLE AUDIT REPORTS </span>
              <span className="text-black transition-colors duration-300 dark:text-white">INCLUDE</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[60%_40%] lg:gap-14">
            {/* Left: 2x2 cards */}
            <div className="grid grid-cols-1 gap-[4.5rem] sm:grid-cols-2">
              {reportItems.map((it) => (
                <div key={it.title} className="group relative">
                  {/* Blue backing (tilted) */}
                  <div className="absolute -inset-4 rounded-[22px] bg-brand-blue transition-transform duration-300 translate-x-2 translate-y-2 -rotate-[3deg] group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-[4deg]" />

                  {/* Foreground card */}
                  <div className="relative rounded-[22px] border border-[#c8d7e4] bg-white p-7 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300 dark:border-white/25 dark:bg-black">
                    <div className="flex items-start justify-between gap-4">
                      <div className="font-heading text-[22px] font-bold text-brand-blue transition-colors duration-300 dark:text-white">
                        {it.title}
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-blue/35 bg-white text-brand-blue transition-colors duration-300 dark:border-white/25 dark:bg-black dark:text-white">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M4 4h16v16H4V4Z" stroke="currentColor" strokeWidth="1.7" />
                          <path d="M8 9h8M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>

                    <p className="mt-4 font-sans text-[15px] font-medium leading-[1.6] text-black/70 transition-colors duration-300 dark:text-white/75">
                      {it.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right media */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-[520px]">
                <div className="flex aspect-[4/3] w-full items-center justify-center rounded-3xl bg-black/[0.03] text-2xl font-bold text-brand-blue/30 transition-colors duration-300 dark:bg-white/[0.04] dark:text-white/20">
                  Media
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-brand-blue py-10 transition-colors duration-300 dark:bg-gradient-to-r dark:from-[#004b8a] dark:to-[#000000] sm:py-12">
        <div className="mx-auto max-w-layout px-4 text-center sm:px-6 md:px-10">
          <h3 className="font-heading text-[34px] font-bold uppercase leading-tight text-white sm:text-[44px] md:text-[52px]">
            Request a Smart Contract Audit
          </h3>
          <button className="mt-7 rounded-lg border-2 border-white bg-transparent px-10 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black">
            Contact Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default SmartContractAudit;

