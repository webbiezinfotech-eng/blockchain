import heroImg from '../../assets/services images/SmartContractAuditimages/SmartContractAudit-hero.png';
import auditProcessImg from '../../assets/services images/SmartContractAuditimages/AuditProcess.png';
import sampleReportImg from '../../assets/services images/SmartContractAuditimages/SampleAuditReport.png';

import iconCodeReview from '../../assets/services images/SmartContractAuditimages/icons/codeReviewArchitecture.gif';
import iconAutomatedVuln from '../../assets/services images/SmartContractAuditimages/icons/AutomatedVulnerability.gif';
import iconManualTesting from '../../assets/services images/SmartContractAuditimages/icons/ManualPenetration.gif';
import iconGasPerf from '../../assets/services images/SmartContractAuditimages/icons/GasUsagePerformance.gif';
import iconFinalReport from '../../assets/services images/SmartContractAuditimages/icons/FinalAuditReport.gif';

import iconReentrancy from '../../assets/services images/SmartContractAuditimages/icons/Reentrancy.gif';
import iconOverflow from '../../assets/services images/SmartContractAuditimages/icons/IntegerOverflowUnderflow.gif';
import iconAccessControl from '../../assets/services images/SmartContractAuditimages/icons/AccessControlIssues.gif';
import iconFrontRunning from '../../assets/services images/SmartContractAuditimages/icons/FrontRunning.gif';
import iconLogicalFlaws from '../../assets/services images/SmartContractAuditimages/icons/LogicalFlaws.gif';
import iconDos from '../../assets/services images/SmartContractAuditimages/icons/DenialOfService.gif';
import iconOracle from '../../assets/services images/SmartContractAuditimages/icons/OracleManipulation.gif';
import iconUpgradeability from '../../assets/services images/SmartContractAuditimages/icons/ContractUpgradeability.gif';

const SmartContractAudit = () => {
  const auditProcess = [
    { label: 'Code review & architecture analysis', icon: iconCodeReview },
    { label: 'Automated vulnerability testing', icon: iconAutomatedVuln },
    { label: 'Manual vulnerability testing', icon: iconManualTesting },
    { label: 'Gas usage & performance optimization', icon: iconGasPerf },
    { label: 'Final audit report with fixes', icon: iconFinalReport },
  ];

  const checklistTop = [
    { t: 'Reentrancy', icon: iconReentrancy },
    { t: 'Integer Overflow / Underflow', icon: iconOverflow },
    { t: 'Access Control Issues', icon: iconAccessControl },
    { t: 'Front Running', icon: iconFrontRunning },
  ];

  const checklistBottom = [
    { t: 'Logic Flaws', icon: iconLogicalFlaws },
    { t: 'Denial of Service', icon: iconDos },
    { t: 'Oracle Manipulation', icon: iconOracle },
    { t: 'Contract Upgradeability Issues', icon: iconUpgradeability },
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
      <section className="w-full bg-white pt-4 pb-14 transition-colors duration-300 dark:bg-black sm:pt-6 sm:pb-16 lg:pt-8 lg:pb-20">
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
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]"> &amp; ZERO VULNERABILITIES</span>
              </span>
            </h1>

            <p className="max-w-[720px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 sm:text-lg">
            Protect your Web3 ecosystem with industry-leading smart contract audits that uncover vulnerabilities before attackers do. Our auditors combine automated testing, manual code review, and real-world exploit simulation to ensure your contract is secure, optimized, and ready for mainnet deployment.
            </p>
          </div>

          {/* Right (media) */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[360px]">
              <div className="overflow-hidden rounded-3xl  duration-300 ">
                <img src={heroImg} alt="Smart contract audit" className="h-auto w-full object-contain" loading="eager" />
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
                <div className="overflow-hidden rounded-3xl  duration-300 ">
                  <img src={auditProcessImg} alt="Audit process overview" className="h-auto w-full object-contain" loading="lazy" />
                </div>
              </div>
            </div>

            {/* Right list */}
            <div className="flex w-full flex-col gap-4 lg:max-w-[480px]">
              {auditProcess.map((it) => (
                <div
                  key={it.label}
                  className="flex items-center gap-4 rounded-xl border border-brand-blue/25 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-[1px] hover:border-brand-blue/60 hover:shadow-[0_14px_36px_rgba(0,0,0,0.14)] dark:border-white/25 dark:bg-black dark:hover:border-brand-blue/70"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-blue/40 bg-white/80 text-brand-blue transition-colors duration-300 dark:border-white/35 dark:bg-black/30 dark:text-white">
                    <img src={it.icon} alt="" className="h-8 w-8 object-contain" loading="lazy" />
                  </div>
                  <p className="font-sans text-[16px] font-semibold text-black transition-colors duration-300 dark:text-white sm:text-[17px]">
                    {it.label}
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
                        <img src={i.icon} alt="" className="h-10 w-10 object-contain" loading="lazy" />
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
                        <img src={i.icon} alt="" className="h-10 w-10 object-contain" loading="lazy" />
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
                    <img src={i.icon} alt="" className="h-9 w-9 object-contain" loading="lazy" />
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
                <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.04]">
                  <img src={sampleReportImg} alt="Sample audit report" className="h-auto w-full object-contain" loading="lazy" />
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

