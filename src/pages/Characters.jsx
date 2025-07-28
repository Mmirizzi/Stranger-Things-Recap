import { characters } from "../data/characters";
import CharacterCard from "../components/CharacterCard";
import Modal from "../components/Modal";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Characters() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white p-8"
    >
      <h1 className="text-4xl font-bold mb-6 text-center font-heading text-red-600">
        Characters
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {characters.map((char, index) => (
          <div key={index} onClick={() => setSelectedCharacter(char)} className="cursor-pointer">
            <CharacterCard character={char} />
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
        character={selectedCharacter}
      />
    </motion.div>
  );
}
