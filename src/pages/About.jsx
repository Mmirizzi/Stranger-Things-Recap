import React from "react";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-6 text-center"
      >
        👋 About This Project
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-center max-w-2xl mb-8 px-2"
      >
        Questo progetto è una fan app dedicata alla serie <strong>Stranger Things</strong>. L'ho
        sviluppato per migliorare le mie competenze con React e Tailwind CSS e come esempio pratico da includere nel mio portfolio.
      </motion.p>

      {/* 🚀 Tecnologie */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mb-12 w-full max-w-xl"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">🚀 Tecnologie Utilizzate</h2>
        <div className="flex flex-wrap justify-center gap-3 px-2">
          <TechBadge Icon={FaReact} label="React" color="text-cyan-400" />
          <TechBadge Icon={SiTailwindcss} label="Tailwind CSS" color="text-blue-400" />
          <TechBadge Icon={SiVite} label="Vite" color="text-purple-400" />
          <TechBadge Icon={SiJavascript} label="JavaScript" color="text-yellow-300" />
        </div>
      </motion.div>

      {/* 👤 Autore */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold mb-2">👨‍💻 Creato da</h2>
        <p className="mb-4">Michi Mirizzi – Junior Frontend Developer</p>
        <a
          href="https://github.com/Mmirizzi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2 rounded-md transition shadow-lg"
        >
          <FaGithub /> GitHub
        </a>
      </motion.div>
    </div>
  );
}

function TechBadge({ Icon, label, color }) {
  return (
    <span className="bg-gray-800 px-4 py-2 rounded-full flex items-center gap-2 text-sm shadow-md">
      <Icon className={`${color} text-lg`} />
      {label}
    </span>
  );
}
