import { Helmet } from "react-helmet";

import heroImg from '../../assets/services images/SmartContractAuditimages/SmartContractAudit-hero.png';
import auditProcessImg from '../../assets/services images/SmartContractAuditimages/AuditProcess.png';
import sampleReportImg from '../../assets/services images/SmartContractAuditimages/SampleAuditReport.png';
import BeforeFooter from '../../components/common/BeforeFooter';
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
      icon:iconReentrancy,
    },
    {
      title: 'Issue severity',
      desc: 'Prioritizes findings from low to critical for fast remediation.',
      icon:iconOverflow,
    },
    {
      title: 'Code fix & recommendations',
      desc: 'Proposed mitigations and best-practice secure patterns.',
      icon:iconAccessControl,
    },
    {
      title: 'Final verification',
      desc: 'Confirms all fixes are correctly implemented and secured.',
      icon:iconFinalReport,
    },
  ];

  return (
    <>
  
  <Helmet>
    <title>Smart Contract Audit Services | Blockchain App Advisor</title>
    
    <meta
      name="description"
      content="Expert smart contract audit services to detect vulnerabilities, optimize gas usage, and secure your Web3 project before mainnet launch."
    />

    <meta
      name="keywords"
      content="smart contract audit, blockchain audit, solidity audit, web3 security, smart contract security review"
    />

    <meta property="og:title" content="Smart Contract Audit Services" />
    <meta
      property="og:description"
      content="Comprehensive manual and automated smart contract audits for maximum blockchain security."
    />
    <meta property="og:type" content="website" />
  </Helmet>

    <div className="w-full bg-white transition-colors duration-300">
      {/* Hero */}
      <section className="relative w-full bg-white pt-4 pb-8 transition-colors duration-300 sm:pb-16 md:pt-6 md:pb-14 lg:pt-8 lg:pb-14 xl:pt-10 xl:pb-12">
        <div className="mx-auto grid w-full grid-cols-1 items-start gap-0 lg:grid-cols-[65%_35%]">
          {/* Left */}
          <div className="px-4 sm:px-6 md:px-10 lg:px-16  flex w-full flex-col justify-start gap-5 leading-[1.4]">
            <h1 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300">
              <span className="block  leading-[1.2]  sm:leading-[1.35] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[65px] lg:leading-[1.35]">
                EXPERT SMART CONTRACT
              </span>
              <span className="block  leading-[1.2]  sm:leading-[1.35] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[65px] lg:leading-[1.35] ">
                AUDITS FOR <span className="text-brand-blue">MAXIMUM SECURITY</span>
              </span>
              <span className="block  leading-[1.2]  sm:leading-[1.35] text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[65px] lg:leading-[1.35]">
                <span className="text-brand-blue"> &amp; ZERO VULNERABILITIES</span>
              </span>
            </h1>

            <p className="max-w-[720px] font-sans font-medium leading-[1.7] text-black/75 transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl">
              Protect your Web3 ecosystem with industry-leading smart contract audits that uncover vulnerabilities before attackers do. Our auditors combine automated testing, manual code review, and real-world exploit simulation to ensure your contract is secure, optimized, and ready for mainnet deployment.
            </p>
          </div>

          {/* Right (media) */}
          <div className="flex w-full items-center justify-center">
            <div className="w-full max-w-[360px]">
              <div className="overflow-hidden rounded-3xl  duration-300 ">
                <img src={heroImg} alt="Smart contract audit" className="h-auto w-full object-contain" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Process Overview */}
      <section className="w-full bg-white pt-4 pb-8 transition-colors duration-300 sm:pt-8 sm:pb-10">
        <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-10 lg:px-14">
          <div className="mb-10 text-center">
            <h2 className="font-heading  font-bold uppercase tracking-tight text-black transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
              <span className="text-black">AUDIT PROCESS </span>
              <span className="text-brand-blue">OVERVIEW</span>
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
                  className="flex items-center gap-4 rounded-xl border border-brand-blue/25 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-[1px] hover:border-brand-blue/60 hover:shadow-[0_14px_36px_rgba(0,0,0,0.14)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg  border-brand-blue/40 bg-white/80 text-brand-blue transition-colors duration-300">
                    <img src={it.icon} alt="" className="h-6 w-6 sm:h-8 sm:w-8 object-contain" loading="lazy" />
                  </div>
                  <p className="font-sans font-semibold text-black transition-colors duration-300 text-sm sm:text-base md:text-lg">
                    {it.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vulnerability Checklist */}
      <section className="w-full bg-white pt-4 pb-8 transition-colors duration-300 sm:pt-8 sm:pb-10">
        <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-10 lg:px-14">
          <div className="mb-10 text-center">
            <h2 className="font-heading  font-bold uppercase tracking-tight text-black transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
              <span className="text-black">VULNERABILITY </span>
              <span className="text-brand-blue">CHECKLIST</span>
            </h2>
          </div>

          <div className="relative mt-20">

            {/* ===== TOP ROW (STAGGERED) ===== */}
            <div className="  relative
  grid grid-cols-1 gap-8
  place-items-center
  sm:grid-cols-2
  lg:grid-cols-4
  lg:gap-14
  lg:place-items-stretch">
              {checklistTop.map((i, idx) => (
                <div
                  key={i.t}
                  className={`
          relative w-full max-w-[220px] min-h-[180px] sm:min-h-[220px]
          rounded-[12px] border border-[#c8d7e4] bg-white
          hover:border-brand-blue
          px-5 py-6 text-center shadow-[0_10px_28px_rgba(0,0,0,0.06)]
          transition-colors duration-300

          lg:${idx % 2 === 0 ? '-translate-y-6' : 'translate-y-6'}
        `}
                >
                  <div className="mx-auto mb-4 flex h-10 w-10 sm:h-14 sm:w-14
 items-center justify-center rounded-lg border border-brand-blue/45 bg-white">
                    <img src={i.icon} alt="" className="h-10 w-10 object-contain" />
                  </div>

                  <p className="font-sans text-sm sm:text-base md:text-lg font-semibold leading-snug text-black">
                    {i.t}
                  </p>

                  {/* Connector down */}
                  <span className="pointer-events-none hidden lg:block">
                    <span className="absolute left-1/2 top-full h-20 -translate-x-1/2 border-l-2 border-dashed border-brand-blue/60" />
                  </span>
                </div>
              ))}
            </div>

            {/* ===== MIDDLE LINE ===== */}
            <div className="relative hidden lg:block">
              <div className="mx-auto mt-20 h-[6px] w-[100%] rounded-full bg-brand-blue" />
            </div>

            {/* ===== BOTTOM ROW (STAGGERED OPPOSITE) ===== */}
            <div className="relative mt-20 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14">
              {checklistBottom.map((i, idx) => (
                <div
                  key={i.t}
                  className={`
          relative w-full max-w-[220px] min-h-[180px] sm:min-h-[220px]
          rounded-[12px] border border-[#c8d7e4] bg-white
          px-5 py-6 text-center shadow-[0_10px_28px_rgba(0,0,0,0.06)]
          transition-colors duration-300

          lg:${idx % 2 === 0 ? 'translate-y-6' : '-translate-y-6'}
        `}
                >
                  {/* Connector up */}
                  <span className="pointer-events-none hidden lg:block">
                    <span className="absolute hover:border-brand-blue left-1/2 bottom-full h-20 -translate-x-1/2 border-l-2 border-dashed border-brand-blue/60" />
                  </span>

                  <div className="mx-auto mb-4 flex h-10 w-10 sm:h-14 sm:w-14
 items-center justify-center rounded-lg border border-brand-blue/45 bg-white">
                    <img src={i.icon} alt="" className="h-10 w-10 object-contain" />
                  </div>

                  <p className="font-sans text-sm sm:text-base md:text-lg font-semibold leading-snug text-black">
                    {i.t}
                  </p>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* Automated vs Manual Testing */}
      {/* <section className="w-full bg-white pt-4 pb-14 transition-colors duration-300 sm:pt-6 sm:pb-16">
        <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-10 lg:px-14">
          <div className="mb-10 text-center">
            <h2 className="font-heading font-bold uppercase tracking-tight transition-colors duration-300 text-[22px] sm:text-[34px] md:text-[44px] lg:text-[60px]">
              <span className="text-brand-blue">AUTOMATED </span>
              <span className="text-black">VS </span>
              <span className="text-brand-blue">MANUAL TESTING</span>
            </h2>
          </div>

          <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-[12px] border border-black/10 bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300">
              <h3 className="text-center font-heading text-sm sm:text-base md:text-lg
 font-bold uppercase tracking-wide text-brand-blue transition-colors duration-300">
                Automated Tools
              </h3>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {automatedTools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full hover:border-brand-blue hover:bg-gradient-to-b hover:from-white hover:to-[#cfe6fb]  border border-black/10 bg-white font-sans text-sm sm:text-base px-4 py-1.5 leading-[1.6] font-semibold text-black/80 shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-colors duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[12px] border border-black/10 bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-colors duration-300">
              <h3 className="text-center font-heading text-sm sm:text-base md:text-lg font-bold uppercase tracking-wide text-brand-blue transition-colors duration-300">
                Manual Testing
              </h3>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {manualTesting.map((t) => (
                  <span
                    key={t}
                    className="rounded-full hover:border-brand-blue hover:bg-gradient-to-b hover:from-white hover:to-[#cfe6fb]  border border-black/10 bg-white px-5 py-2 font-sans text-xl leading-[1.6] font-semibold text-black/80 shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-colors duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
    <section className="w-full bg-white py-16 transition-colors duration-300">
  <div className="mx-auto max-w-[1100px] px-4 sm:px-8">

    {/* Heading */}
    <div className="mb-14 text-center">
      <h2 className="font-heading font-bold uppercase tracking-tight
       text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
        <span className="text-brand-blue">AUTOMATED</span>
        <span className="text-black"> VS </span>
        <span className="text-brand-blue">MANUAL TESTING</span>
      </h2>
    </div>

    {/* Cards Wrapper */}
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

      {/* Automated */}
      <div className="
 flex flex-col items-center
    rounded-2xl
    border border-black/10
    bg-[#f7f7f7]
    
    px-6 py-8
    sm:px-8 sm:py-10
    md:px-10 md:py-12
    
    text-center
    shadow-sm
    transition-all duration-300
      ">
        <h3 className="
           font-heading
  text-[26px] md:text-[20px]
  font-semibold
  uppercase
  tracking-wide
  text-brand-blue
  mb-10
        ">
          Automated Tools
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {automatedTools.map((t) => (
            <span
              key={t}
              className="
                rounded-full
                border border-black/15
                bg-white
                px-5 py-2
                text-sm
                font-medium
                text-black/80
                shadow-sm
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Manual */}
      <div className="
        flex flex-col justify-center
        rounded-2xl
        border border-black/10
        bg-[#f7f7f7]
        px-10 py-12
        text-center
        shadow-sm
      ">
        <h3 className="
          font-heading
          text-[26px] md:text-[20px]
          font-semibold
          uppercase
          tracking-wide
          text-brand-blue
          mb-8
        ">
          Manual Testing
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {manualTesting.map((t) => (
            <span
              key={t}
              className="
                rounded-full
                border border-black/15
                bg-white
                px-5 py-2
                text-sm
                font-medium
                text-black/80
                shadow-sm
              "
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
      <section className="w-full bg-white pt-2 pb-16 transition-colors duration-300 sm:pt-4 sm:pb-20">
        <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-10 lg:px-14">
          <div className="mb-10 text-center">
            <h2 className="font-heading font-bold uppercase tracking-tight transition-colors duration-300 text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
              <span className="text-brand-blue">SAMPLE AUDIT REPORTS </span>
              <span className="text-black transition-colors duration-300">INCLUDE</span>
            </h2>
          </div>

          <div className="grid grid-cols-1  items-center gap-10 lg:grid-cols-[60%_40%] lg:gap-14">
            {/* Left: 2x2 cards */}
            <div className="grid grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-2 items-stretch">
              {reportItems.map((it) => (
                <div key={it.title} className="group relative h-full">
                  {/* Blue backing (tilted) */}
                  <div className="absolute -inset-4 rounded-[22px] bg-brand-blue transition-transform duration-300 translate-x-2 translate-y-2 -rotate-[3deg] group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-[4deg]" />

                  {/* Foreground card */}
                  <div className="
                      relative
                      
                      min-h-[210px]
                      rounded-[22px]
                      border border-[#c8d7e4]
                      bg-white
                      p-7
                      shadow-[0_10px_28px_rgba(0,0,0,0.10)]
                      transition-colors duration-300
                      flex flex-col
                    ">

                    <div className="flex items-start justify-between gap-4">
                      <div className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-brand-blue transition-colors duration-300">
                        {it.title}
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-blue/35 bg-white text-brand-blue transition-colors duration-300">
                         <img src={it.icon} alt="" className="h-10 w-10 object-contain" />
                      </div>
                    </div>

                    <p className="mt-4 font-sans text-sm sm:text-base md:text-lg font-medium leading-[1.6] text-black/70 transition-colors duration-300">
                      {it.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right media */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[400px]">
                <div className="overflow-hidden rounded-3xl  transition-colors duration-300 ">
                  <img src={sampleReportImg} alt="Sample audit report" className="h-auto w-full object-contain" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="w-full bg-brand-blue py-10 transition-colors duration-300 sm:py-12">
        <div className="mx-auto max-w-layout px-4 text-center sm:px-6 md:px-10">
          <h3 className="font-heading text-[34px] font-bold uppercase leading-tight text-white sm:text-[44px] md:text-[52px]">
            Request a Smart Contract Audit
          </h3>
          <button className="mt-7 rounded-lg border-2 border-white bg-transparent px-10 py-3 text-xl font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black">
            Contact Now
          </button>
        </div>
      </section> */}

      <BeforeFooter
        title="Request a Smart Contract Audit"
        buttonText="Contact Now"
        paddingClassName="py-8"
        buttonLink="/contact"
        containerClassName="mx-auto max-w-layout px-4 text-center"
        headingAs="h3"
        headingClassName="font-heading text-[28px] sm:text-[40px] md:text-[48px]
 font-bold uppercase leading-tight text-white"
      />
    </div>
    </>
  );
};

export default SmartContractAudit;

