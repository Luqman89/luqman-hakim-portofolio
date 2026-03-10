import { GraduationCap, Calendar } from "lucide-react";

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  description?: string;
}

const educationData: EducationItem[] = [
  {
    school: "Bina Sarana Informatika University",
    degree: "S1 Information Technology",
    period: "2021 - 2025",
    description:
      "Deeply involved in software engineering, system architecture, and database management. Actively involved in developing web and mobile applications using modern frameworks such as Laravel and Flutter.",
  },
  {
    school: "SMK Bina Karya Mandiri",
    degree: "Light Vehicle Engineering",
    period: "2018 - 2021",
    description:
      "Learn the fundamentals of mechanical engineering, automotive electrical systems, and vehicle maintenance. Develop discipline, precision, and strong technical problem-solving skills.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background Glow Effect - Menyesuaikan tema portofolio Anda */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-medium mb-4">
            <GraduationCap size={16} />
            <span>Academic Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Education
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop & Mobile) */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent md:-ml-px" />

              <div
                className={`relative flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Connector Dot */}
                <div className="absolute left-[-4px] md:left-1/2 md:-ml-2 top-2 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] z-20" />

                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm shadow-xl">
                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono mb-3">
                      <Calendar size={14} />
                      {edu.period}
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {edu.school}
                    </h3>

                    <p className="text-lg text-slate-300 font-medium mt-1 mb-4">
                      {edu.degree}
                    </p>

                    {edu.description && (
                      <p className="text-slate-400 leading-relaxed border-t border-slate-800 pt-4 mt-4 text-sm">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Spacer for Desktop */}
                <div className="hidden md:block md:w-[10%]" />
                <div className="hidden md:block md:w-[45%]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
