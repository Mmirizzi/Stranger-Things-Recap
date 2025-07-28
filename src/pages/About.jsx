import React from "react";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center"
    >
      <h1 className="text-4xl font-bold mb-6 text-center font-heading text-red-600">
        About This Project
      </h1>

      <p className="text-lg max-w-2xl text-center mb-8 text-gray-300 leading-relaxed">
        This fan-made recap was built to celebrate <span className="text-red-500 font-semibold">Stranger Things</span> and help viewers revisit its most iconic moments. From Season 1 to the upcoming Season 5, the journey of Hawkins comes alive through detailed summaries and visual components.
      </p>

      <div className="bg-black bg-opacity-50 p-6 rounded-xl mb-8 max-w-xl w-full shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-red-500">Technologies Used</h2>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <FaReact className="text-cyan-400" /> React.js
          </li>
          <li className="flex items-center gap-2">
            <SiTailwindcss className="text-sky-400" /> Tailwind CSS
          </li>
          <li className="flex items-center gap-2">
            <SiFramer className="text-pink-400" /> Framer Motion
          </li>
        </ul>
      </div>

      <div className="text-center">
        <p className="text-gray-400 mb-2"> © 2025 Michi Mirizzi </p>
        <a
          href="https://github.com/Mmirizzi" // <-- aggiorna con il tuo link GitHub o portfolio
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-red-500 hover:underline"
        >
          <FaGithub className="text-xl" /> View on GitHub
        </a>
      </div>
    </motion.div>
  );
}
