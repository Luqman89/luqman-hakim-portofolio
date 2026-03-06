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
      "A robust backend API with checkout functionality, automated inventory management, and payment gateway integration.",
    highlights: [
      "13+ automated tests implemented using Pest PHP.",
      "Database transactions to maintain stock consistency.",
      "Automatic inventory restoration when orders are cancelled.",
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
      "Tailwind",
      "Shadcn UI",
    ],
    description:
      "A comprehensive university-level academic system designed to manage complex educational workflows.",
    highlights: [
      "Implemented Role-Based Access Control (RBAC) for Admin, Lecturer, and Students.",
      "Built complex data relations for Course Scheduling, Student Grading, and Enrollment (KRS).",
      "Developed a seamless SPA experience using Inertia.js for modern monolithic architecture.",
      "Managed sophisticated database schemas to ensure data integrity across multiple academic periods.",
    ],
    link: "https://github.com/Luqman89/siaku-online",
  },
  {
    title: "Teacher Performance Assessment System (PKG)",
    tech: ["Laravel 11", "MySQL", "Service Pattern", "Tailwind CSS"],
    description:
      "A professional evaluation platform designed for school administrations to assess teacher competencies based on national educational standards.",
    highlights: [
      "Developed a multi-criteria evaluation system using weighted scoring for various performance indicators.",
      "Implemented an administrative dashboard for Principals to monitor and verify teacher assessments.",
      "Engineered a dynamic assessment form with auto-save and validation for large sets of evaluation data.",
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
