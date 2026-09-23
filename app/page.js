"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-white selection:text-black">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-white/10">
        <h1 className="font-bold tracking-widest text-sm">RITIK VISHWAKARMA</h1>
        <a href="mailto:ritik@example.com" className="text-xs border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
          LET'S TALK
        </a>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 mt-20 md:mt-32">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter"
        >
          SYSTEMS <br/> THINKER.<br/> 
          <span className="text-zinc-500">BUILDER.</span>
        </motion.h2>
        <p className="mt-8 max-w-xl text-zinc-400 text-sm md:text-base leading-relaxed">
          BCA Final Year Student from Pukhrayan, Kanpur. I build fast, modern web apps and I love solving real-world problems with code.
        </p>
        <div className="flex gap-4 mt-8">
          <a href="#" className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold">View Projects</a>
          <a href="#" className="border border-white/20 px-6 py-3 rounded-full text-sm">GitHub</a>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-12 mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
        {['Next.js', 'React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'MySQL', 'Java', 'Git'].map((skill) => (
          <div key={skill} className="border border-white/10 p-4 rounded-xl text-xs tracking-widest text-zinc-400 hover:bg-white/5">
            {skill}
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="px-6 md:px-12 mt-24">
        <h3 className="text-zinc-500 text-xs tracking-[0.3em] mb-8">SELECTED PROJECTS (2024-25)</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#111111] border border-white/10 p-8 rounded-2xl">
            <h4 className="text-xl font-bold">Student Management System</h4>
            <p className="text-zinc-500 text-sm mt-2">Built with PHP & MySQL. For college administration.</p>
          </div>
          <div className="bg-[#111111] border border-white/10 p-8 rounded-2xl">
            <h4 className="text-xl font-bold">E-Commerce UI</h4>
            <p className="text-zinc-500 text-sm mt-2">Modern UI made with Next.js & Tailwind CSS.</p>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-12 mt-20 border-t border-white/10 text-center text-zinc-600 text-xs">
        © 2025 RITIK VISHWAKARMA - PUKHRAYAN, KANPUR
      </footer>
    </main>
  );
}    
