const skillCategories = [
  {
    name: "Backend & Core",
    items: ["Laravel", "PHP 8.3", "REST API", "Service Pattern"],
  },
  {
    name: "Database & Tools",
    items: ["MySQL", "MongoDB", "Git/GitHub", "Postman", "Midtrans"],
  },
  {
    name: "Frontend (Additional)",
    items: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

const certificates = [
  {
    title: "University Academic Information System",
    issuer: "BuildWithAngga",
    year: "2025",
    status: "Verified",
    link: "/certificate/BWA_Luqman_Hakim.pdf",
  },
  {
    title: "Software Development (Program Analyst)",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2025",
    status: "Verified",
    link: "/certificate/Serkom_Analyst_Program_Luqman_Hakim.pdf",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <h3 className="text-xl font-bold mb-6 flex items-center">
        <span className="w-8 h-1 bg-emerald-500 mr-3 rounded"></span>
        Technical Expertise
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-slate-900/50 border border-slate-800"
          >
            <h4 className="text-emerald-400 text-sm font-bold mb-3 uppercase tracking-wider">
              {cat.name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-slate-800 rounded-md text-xs text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Professional Certification Section */}
      <div className="mt-10 space-y-4">
        {" "}
        {/* Tambah wrapper dengan spacing antar card */}
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300"
          >
            {/* Efek Glow */}
            <div className="absolute inset-0 bg-emerald-500/5 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-[10px] text-emerald-400 uppercase tracking-[0.2em] font-black mb-2">
                  Professional Certification
                </p>
                <h4 className="text-lg font-bold text-slate-100">
                  {cert.title}
                </h4>
                <p className="text-sm text-slate-500 mt-1 flex items-center">
                  {cert.issuer} <span className="mx-2">•</span> {cert.year}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-[10px] font-bold text-emerald-400 uppercase">
                  {cert.status}
                </span>

                {/* Contoh jika ingin menambah link eksternal */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-500 hover:text-emerald-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
