import { useState } from "react";
import { Linkedin, Mail, Link as LinkIcon, FileText, Award, Briefcase, ChevronRight, Terminal, GraduationCap } from "lucide-react";

// ——— PROFILE ———
const PROFILE = {
  name: "Murat Kesgin, PhD",
  title: "Salesforce Developer • Data & Analytics",
  summary:
    "Salesforce Developer with 3+ years of experience in building scalable applications using Apex (Triggers, Classes, Async Jobs) and Lightning Web Components (LWC). Skilled in SOQL, Data Cloud, Experience Cloud, Field Service Lightning, Tableau, Power BI, and ETL processes. Strong background in integrating external systems via REST APIs, optimizing system performance, and delivering enterprise-grade CRM solutions.",
  location: "San Antonio, TX, USA",
  email: "kesgin.mrt@gmail.com",
  resumeUrl: "#",
  avatar: null,
  links: {
    linkedin: "https://www.linkedin.com/in/murat-k-a029b022b",
    trailhead: "https://trailblazer.me/id/mgkesgin",
    scholar: "",
    orcid: "",
    website: "#",
  },
};

// ——— EXPERIENCES ———
const EXPERIENCES = [
  {
    role: "CRM Data Analyst II & Software Developer",
    company: "Holt Group",
    period: "Apr 2024 — Present",
    bullets: [
      "Created and optimized interactive Tableau dashboards to deliver real-time insights on KPIs, customer satisfaction, and sales trends.",
      "Led data cleansing and transformation initiatives to ensure reporting accuracy and consistency across analytics platforms.",
      "Collaborated with business teams to gather BI requirements, contribute to BI development, implement metric logic, and align reports with strategic objectives.",
      "Designed and maintained end-to-end data pipelines using Salesforce Flows, Apex, and SQL to extract, transform, and load data into Tableau dashboards, enhancing sales and service performance tracking.",
      "Integrated Salesforce data with external systems via REST APIs, enabling unified reporting and cross-system analytics.",
      "Managed ETL operations using Data Loader and custom Apex scripts for historical data imports, trend analysis, and governance reporting.",
      "Conducted analysis on Work Order, Asset, and Technician data to improve workforce efficiency and enhance coordination across service operations.",
      "Sent Salesforce data to Informatica for transformation and manipulation through automated ETL workflows.",
      "Supported production analytics by identifying and resolving data quality issues, ensuring high confidence in reported results.",
      "Collaborated with cross-functional teams to define KPI strategy, assess process gaps, and align data pipeline improvements with department-level analytics roadmap.",
      "Deployed enhancements through CI/CD tools (Copado, Git, VSCode), maintaining data integrity across sandbox and production environments.",
      "Used Jira to track tasks, manage sprints, and collaborate with cross-functional teams in Agile projects.",
    ],
    tech: ["Apex", "LWC", "Flows", "SQL", "Tableau", "Copado", "Git", "REST API"],
  },
  {
    role: "CRM Data Analyst II & Software Developer",
    company: "Conga (Apttus)",
    period: "Aug 2022 — Mar 2024",
    bullets: [
      "Analyzed CRM usage patterns, license activity, and engagement KPIs to drive data-informed decisions for resource planning and user optimization.",
      "Designed and executed ETL processes to integrate CPQ and CLM data into Salesforce objects, enabling detailed usage tracking and dashboard reporting.",
      "Developed custom reports and dashboards using Salesforce reporting tools and Excel (VLOOKUP, Pivot Tables) to visualize user behavior, adoption rates, and platform ROI.",
      "Leveraged Excel and SQL for advanced data analysis, including trend modeling and metric benchmarking.",
      "Built dashboards and usage metrics dynamically within Salesforce for internal stakeholders.",
      "Collaborated with Customer Success team to ensure secure handling of customer usage data and reporting integrity.",
    ],
    tech: ["Salesforce", "CPQ", "CLM", "Excel", "SQL", "Reports", "Dashboards"],
  },
  {
    role: "Software Developer",
    company: "Infosys",
    period: "Jan 2022 — Aug 2022",
    bullets: [
      "Gathered requirements and designed Salesforce solutions.",
      "Developed Apex Classes, Triggers, and Unit Tests.",
      "Created LWCs using JavaScript, HTML, and CSS.",
      "Migrated legacy Workflow Rules and Process Builders into Flows.",
      "Customized and optimized standard objects and developed Reports and Dashboards.",
      "Implemented security controls via Sharing Rules and FLS.",
      "Participated in Agile/Scrum ceremonies.",
    ],
    tech: ["Apex", "LWC", "Flows", "Sales Cloud"],
  },
  {
    role: "Intern - Software Development",
    company: "Ansys Inc.",
    period: "Aug 2021 — Dec 2021",
    bullets: [
      "Developed and optimized simulation tools for low-frequency electromagnetics applications.",
      "Resolved QA and product support issues.",
      "Created and maintained test plans and cases.",
      "Validated software calculations through experimental comparisons.",
      "Prepared detailed reports and communicated findings to teams.",
    ],
    tech: ["ANSYS Maxwell", "QA Testing"],
  },
  {
    role: "Research Assistant",
    company: "University of Kentucky, Electrical Engineering",
    period: "Aug 2018 — Aug 2021",
    bullets: [
      "Analyzed renewable energy systems data using MATLAB and Simulink.",
      "Developed simulations for EV charging systems.",
      "Performed electromagnetic simulations with ANSYS Maxwell.",
      "Prepared reports and presented research findings.",
      "Authored academic papers on energy systems and machine design.",
    ],
    tech: ["MATLAB", "Simulink", "ANSYS Maxwell"],
  },
];

// ——— CERTIFICATES ———
const CERTIFICATES = [
  { name: "Salesforce Certified Developer I", org: "Salesforce", year: "", link: "#" },
  { name: "Salesforce Certified Administrator", org: "Salesforce", year: "", link: "#" },
  { name: "Salesforce Certified Data Cloud Consultant", org: "Salesforce", year: "", link: "#" },
  { name: "Salesforce Certified AI Associate", org: "Salesforce", year: "", link: "#" },
  { name: "Microsoft Certified: Power BI Data Analyst Associate", org: "Microsoft", year: "", link: "#" },
  { name: "Conga CPQ Product Administration, Level 1", org: "Conga", year: "", link: "#" },
  { name: "Copado Fundamentals I Metadata Pipeline", org: "Copado", year: "", link: "#" },
];

// ——— EDUCATION ———
const EDUCATION = [
  { degree: "PhD in Electrical Engineering", institution: "University of Kentucky, US" },
  { degree: "MSc in Electrical Engineering", institution: "University of Kentucky, US" },
  { degree: "BSc in Electrical and Electronic Engineering", institution: "Pamukkale University, Turkey" },
];

// ——— PATENTS ———
const PATENTS = [
  {
    title: "Systems, Components, and Method for Permanent Magnet-free Motor and its Control",
    number: "US20230318408A1",
    link: "https://patents.google.com/patent/US20230318408A1/en",
  },
];

// ——— CONTACTS ———
const CONTACTS = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: Mail },
  { label: "LinkedIn", value: "LinkedIn", href: PROFILE.links.linkedin, icon: Linkedin },
  { label: "Trailhead", value: "Trailhead", href: PROFILE.links.trailhead, icon: LinkIcon },
];

const PUBLICATIONS = [
  {
    title:
      "Analysis and Design of an Electric Machine Employing a Special Stator with Phase Winding Modules and PMs and a Reluctance Rotor",
    venue: "IEEE Access, Vol.12, pp. 9621-9631 (2024)",
    link: "https://doi.org/10.1109/ACCESS.2024.3353041",
  },
  {
    title:
      "Design Optimization of a Very High Power Density Motor with a Reluctance Rotor and a Modular Stator Having PMs and Toroidal Windings",
    venue: "IEEE ECCE 2021, Vancouver, Canada, pp. 4424-4430 (Oct 2021)",
    link: "https://doi.org/10.1109/ECCE47101.2021.9595129",
  },
  {
    title: "Analysis of Torque Production in Axial‑flux Vernier PM Machines of the MAGNUS Type",
    venue: "IEEE IEMDC 2021",
    link: "https://ieeexplore.ieee.org/document/9449569",
  },
  {
    title:
      "On the Modeling of Bearing Voltage and Current in PWM Converter‑fed Electric Machines Using Electromagnetic Finite Element Analysis",
    venue: "IEEE ECCE 2021",
    link: "https://ieeexplore.ieee.org/document/9595174",
  },
  {
    title: "Modeling of Bearing Voltage in Electric Machines Based on Electromagnetic FEA and Measured Bearing Capacitance",
    venue: "IEEE Transactions on Industry Applications, Vol. 57, No. 5 (Oct 2021)",
    link: "https://ieeexplore.ieee.org/document/9483621",
  },
  {
    title: "Design Optimization of Coreless Axial‑flux PM Machines with Litz Wire and PCB Stator Windings",
    venue: "IEEE ECCE 2020",
    link: "https://ieeexplore.ieee.org/document/9226097",
  },
  {
    title: "Optimal Study of a High Specific Torque Vernier‑type Axial‑flux PM Machine with Two Different Stators and a Single Winding",
    venue: "IEEE ECCE 2020",
    link: "https://ieeexplore.ieee.org/document/9225956",
  },
  {
    title: "Axial-field Vernier-type Flux Modulation Machines for Low-speed Direct-drive Applications",
    venue: "IEEE ECCE 2019",
    link: "https://ieeexplore.ieee.org/document/8912659",
  },
  {
    title:
      "Overview of Flywheel Systems for Renewable Energy Storage with a Design Study for High-speed Axial-flux Permanent-magnet Machines",
    venue: "IEEE ICRERA 2019",
    link: "https://ieeexplore.ieee.org/document/8996877",
  },
];

// ——— UI HELPERS ———
function Section({ title, kicker, icon: Icon, children }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs uppercase tracking-wider opacity-60">{kicker}</p>
          <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        </div>
      </div>
      {children}
    </section>
  );
}

function Card({ children }) {
  return (
    <div className="p-5 rounded-2xl bg-white/70 dark:bg-white/5 border dark:border-white/10 border-black/5 hover:shadow-sm transition-shadow">
      {children}
    </div>
  );
}

// ——— PAGE ———
export default function PersonalSite() {
  const [dark, setDark] = useState(true);
  return (
    <div className={dark ? "dark" : ""}>
      <main className="min-h-screen bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-gray-100 transition-colors">
        {/* Header */}
        <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500">
                <Terminal className="h-5 w-5 text-white" />
              </span>
              <div>
                <p className="text-sm opacity-70">{PROFILE.title}</p>
                <h1 className="text-lg font-semibold">{PROFILE.name}</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {PROFILE.resumeUrl !== "#" && (
                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  className="hidden sm:inline-flex px-3 py-2 rounded-xl border dark:border-white/10 border-black/10 hover:shadow-sm"
                >
                  <FileText className="h-4 w-4 mr-2" /> CV / Resume
                </a>
              )}
              <button
                onClick={() => setDark((d) => !d)}
                className="px-3 py-2 rounded-xl border dark:border-white/10 border-black/10 hover:shadow-sm"
              >
                {dark ? "☀️ Light" : "🌙 Dark"}
              </button>
            </div>
          </div>
        </header>

        {/* Hero / Intro */}
        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="p-6 rounded-3xl bg-white/70 dark:bg-white/5 border dark:border-white/10 border-black/5">
            <h2 className="text-2xl font-bold mb-1">{PROFILE.title}</h2>
            <p className="opacity-80 mb-2">{PROFILE.location}</p>
            <p className="max-w-3xl opacity-90 leading-7">{PROFILE.summary}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {CONTACTS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border dark:border-white/10 border-black/10 hover:shadow-sm"
                >
                  <c.icon className="h-4 w-4" /> {c.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <Section title="Experience" kicker="Experience" icon={Briefcase}>
          <div className="grid md:grid-cols-2 gap-4">
            {EXPERIENCES.map((exp, i) => (
              <Card key={i}>
                <h4 className="text-lg font-semibold">{exp.role}</h4>
                <p className="opacity-80">
                  {exp.company} • {exp.period}
                </p>
                <ul className="mt-3 space-y-1 text-sm">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2">
                      <ChevronRight className="h-4 w-4 mt-0.5 flex-none" />
                      {b}
                    </li>
                  ))}
                </ul>
                {exp.tech && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2 py-1 rounded-lg border border-black/10 dark:border-white/10 text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education" kicker="Education" icon={GraduationCap}>
          <div className="grid md:grid-cols-2 gap-4">
            {EDUCATION.map((edu, i) => (
              <Card key={i}>
                <h4 className="font-semibold">{edu.degree}</h4>
                <p className="text-sm opacity-80">{edu.institution}</p>
              </Card>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
