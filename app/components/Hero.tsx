"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 py-20 px-6"
    >
      {/* KIRI: TEKS */}
      <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
        <h2 className="text-emerald-500 font-mono tracking-widest uppercase text-sm">
          Backend Developer Enthusiast
        </h2>
        <Reveal>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Hi, I&apos;m <span className="text-emerald-400">Luqman Hakim</span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed text-justify">
            I am a{" "}
            <span className="text-white font-bold">Backend Engineer</span>{" "}
            specialized in building{" "}
            <span className="text-white font-bold text-shadow-glow">
              reliable and scalable systems
            </span>{" "}
            with <span className="text-emerald-400 font-bold">Laravel</span>. I
            am deeply passionate about{" "}
            <span className="bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-bold">
              Clean Code, and Service Patterns
            </span>{" "}
            to ensure high-quality software delivery.
          </p>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-slate-950 px-8 py-3 rounded-lg font-bold hover:bg-emerald-400 transition-all"
            >
              View Projects
            </button>
            <a
              href="/CV_Luqman_Hakim_BackendEngineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="border border-slate-700 px-8 py-3 rounded-lg font-bold hover:bg-slate-800 hover:border-slate-500 transition-all text-center"
            >
              Download CV
            </a>
          </div>
          <div className="flex gap-5 mt-6 justify-center md:justify-start">
            <a
              href="https://github.com/Luqman89"
              className="text-slate-500 hover:text-emerald-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/luqman-hakim-093398334/"
              className="text-slate-500 hover:text-emerald-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:luqmnhakim01@gmail.com"
              className="text-slate-500 hover:text-emerald-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </Reveal>
      </div>

      {/* KANAN: VISUAL CODE SNIPPET (Pengganti Foto) */}
      <div className="hidden md:flex flex-1 relative w-full max-w-[500px] aspect-square group items-center justify-center">
        {/* Dekorasi Cahaya di Belakang */}
        <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-[100px] group-hover:bg-emerald-500/20 transition-all duration-700"></div>

        {/* Jendela Kode (Mac Style) */}
        <div className="relative w-full p-1 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl rotate-2 group-hover:rotate-0 transition-all duration-500 transform-gpu">
          {/* Header Window */}
          <div className="flex gap-1.5 p-3 border-b border-slate-800">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
            <span className="ml-2 text-[10px] text-slate-500 font-mono tracking-wider">
              AcademicSystem.php
            </span>
          </div>

          {/* Isi Kode (Laravel Style) */}
          <div className="p-5 font-mono text-xs md:text-sm leading-relaxed overflow-hidden">
            <p className="text-pink-400">
              public function{" "}
              <span className="text-blue-400">checkGraduationEligibility</span>
              ()
            </p>
            <p className="text-slate-300 ml-4">{"{"}</p>

            {/* Comments wrapped in braces */}
            <p className="text-slate-500 ml-8 italic">{`// Validating high-achiever status`}</p>

            <p className="text-slate-300 ml-8">
              <span className="text-pink-400">if</span> ($this-&gt;
              <span className="text-emerald-400">gpa</span> &gt;={" "}
              <span className="text-amber-400">3.80</span>) {"{"}
            </p>

            <p className="text-slate-300 ml-12">
              <span className="text-blue-400">$status</span> ={" "}
              <span className="text-amber-400">
                &apos;Summa Cum Laude&apos;
              </span>
              ;
            </p>

            <p className="text-slate-300 ml-8">{"}"}</p>

            <p className="text-pink-400 ml-8 mt-2">
              return{" "}
              <span className="text-slate-300">response()-&gt;json([</span>
            </p>
            <p className="text-slate-300 ml-12">
              <span className="text-amber-400">&apos;eligible&apos;</span> =&gt;{" "}
              <span className="text-blue-400">true</span>,
            </p>
            <p className="text-slate-300 ml-12">
              <span className="text-amber-400">&apos;message&apos;</span> =&gt;{" "}
              <span className="text-amber-400">
                &apos;Ready for Backend Role&apos;
              </span>
            </p>
            <p className="text-slate-300 ml-8">]);</p>

            <p className="text-slate-300 ml-4">{"}"}</p>
          </div>

          {/* Floating Badge GPA (Cumulative) */}
          <div className="absolute -bottom-6 -left-6 bg-slate-800/90 backdrop-blur-md border border-slate-700 p-4 rounded-2xl shadow-2xl rotate-[-4deg] group-hover:rotate-0 transition-transform duration-500">
            <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">
              Cumulative GPA
            </p>
            <p className="text-2xl font-bold text-emerald-400">
              3.83<span className="text-slate-500 text-sm"> / 4.00</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
