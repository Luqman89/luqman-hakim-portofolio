const experiences = [
  {
    company: "SMK Binakarya Mandiri",
    role: "Web Developer Intern",
    period: "Sept – Dec 2024",
    points: [
      "Developed a Teacher Performance Assessment application using Laravel & MySQL, automating manual administrative processes into an integrated digital system.",
      "Designed relational database schemas and implemented efficient CRUD features, ensuring data integrity for annual performance reporting.",
      "Identified and resolved technical issues in school's operational systems, increasing uptime for learning support devices to 95%.",
      "Prepared comprehensive technical documentation and system maintenance reports.",
    ],
  },
  {
    company: "PT Fajar Langgeng Sejahtera",
    role: "Web Content & Systems Intern",
    period: "July – Sept 2022",
    points: [
      "Managed the company's CMS, ensuring 100% accuracy of stock data and product specifications for daily e-commerce operations.",
      "Supported digital marketing activities through dynamic website content updates in line with business strategy requirements.",
      "Coordinated with the warehouse team to synchronize real-time product stock, effectively preventing overselling incidents.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 scroll-mt-1">
      <h3 className="text-xl font-bold mb-10 flex items-center">
        <span className="w-8 h-1 bg-emerald-500 mr-3 rounded"></span>
        Experience
      </h3>

      <div className="space-y-12 border-l-2 border-slate-800 ml-4 pl-8">
        {experiences.map((exp, i) => (
          <div key={i} className="relative">
            {/* Dot Indicator */}
            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h4 className="text-xl font-bold text-slate-100">{exp.role}</h4>
                <p className="text-emerald-400 font-medium">{exp.company}</p>
              </div>
              <p className="text-sm text-slate-500 font-mono mt-1 md:mt-0">
                {exp.period}
              </p>
            </div>

            <ul className="space-y-3">
              {exp.points.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed text-justify"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500/50 shrink-0"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
