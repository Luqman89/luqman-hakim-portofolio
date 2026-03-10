"use client";
import Projects from "./components/Project";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experince";
import Education from "./components/Education";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <Hero />
      <div className="space-y-32">
        <Skills />
        <Education />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}
