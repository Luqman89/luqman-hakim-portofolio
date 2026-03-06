import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Nama Branding kamu */}
        <div className="text-xl font-bold bg-linear-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent tracking-tighter">
          Manz.
        </div>

        {/* Menu Navigasi - Menggunakan <a> untuk Smooth Scroll yang lebih stabil */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-emerald-400 transition-colors">
            About Me
          </a>
          <a
            href="#skills"
            className="hover:text-emerald-400 transition-colors"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="hover:text-emerald-400 transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-emerald-400 transition-colors"
          >
            Projects
          </a>
        </div>

        {/* Tombol Call to Action */}
        <a
          href="mailto:luqmnhakim01@gmail.com"
          className="text-sm bg-emerald-600/10 border border-emerald-600/50 hover:bg-emerald-600 text-emerald-400 hover:text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
