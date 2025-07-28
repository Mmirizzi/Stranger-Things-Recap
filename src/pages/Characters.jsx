import { characters } from "../data/characters";
import CharacterCard from "../components/CharacterCard";
import { motion } from 'framer-motion';

export default function Characters() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white p-8"
    >
      <h1 className="text-5xl font-heading text-red-600 mb-6 text-center animate-fade-in drop-shadow-lg">
      Characters
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((char) => (
          <CharacterCard key={char.name} character={char} />
        ))}
      </div>
    </motion.div>
  );
}

