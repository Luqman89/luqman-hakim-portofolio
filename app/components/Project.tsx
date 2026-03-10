interface Project {
  title: string;
  tech: string[];
  description: string;
  highlights: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce API Service",
    tech: ["Laravel 12", "Pest PHP", "Midtrans", "MySQL"],
    description:
      "A RESTful backend API for an e-commerce platform featuring secure checkout processing, automated inventory management, and payment gateway integration.",
    highlights: [
      "Implemented 13+ automated API tests using Pest PHP to ensure reliability.",
      "Used database transactions to maintain stock consistency during checkout.",
      "Built an automatic inventory restoration mechanism when orders are cancelled.",
    ],
    link: "https://github.com/Luqman89/api-e-commers-learn",
  },
  {
    title: "SIAKAD - Academic Information System",
    tech: [
      "Laravel 12",
      "React.js",
      "Inertia.js",
      "MySQL",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    description:
      "A university academic management system designed to handle course enrollment, grading, and scheduling workflows.",
    highlights: [
      "Implemented Role-Based Access Control (RBAC) for Admin, Lecturer, and Student roles.",
      "Designed complex relational database structures for course scheduling, student grading, and enrollment (KRS).",
      "Built a seamless SPA experience using Inertia.js within a modern Laravel monolithic architecture.",
      "Ensured data integrity across academic periods through well-structured database design.",
    ],
    link: "https://github.com/Luqman89/siaku-online",
  },
  {
    title: "Teacher Performance Assessment System",
    tech: ["Laravel 11", "MySQL", "Service Pattern", "Laravel PDF"],
    description:
      "A web-based platform for school administrators to evaluate teacher performance based on structured competency criteria.",
    highlights: [
      "Developed a multi-criteria evaluation system using weighted scoring for performance indicators.",
      "Built an administrative dashboard for principals to monitor and verify teacher evaluations.",
      "Implemented dynamic evaluation forms with validation to handle large sets of assessment data.",
      "Generated automated performance reports in PDF format using Laravel PDF.",
    ],
    link: "https://github.com/Luqman89/RapOn-V1",
  },
];

export default function Projects() {
  return (
    <section className="py-20 scroll-mt-1" id="projects">
      <h3 className="text-2xl font-bold mb-8 flex items-center">
        <span className="w-8 h-1 bg-emerald-500 mr-4 rounded"></span>
        Featured Projects
      </h3>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-slate-800/40 border border-slate-700 p-6 rounded-xl hover:bg-slate-800/60 hover:border-emerald-500/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-4">
              <h4 className="text-xl font-bold text-emerald-300 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] bg-slate-900 px-2 py-1 rounded border border-slate-700 tracking-wider uppercase font-bold text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            <ul className="space-y-2 mb-6">
              {project.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="text-xs text-slate-500 flex items-start"
                >
                  <span className="text-emerald-500 mr-2">▹</span>
                  {highlight}
                </li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors"
            >
              Source Code
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
