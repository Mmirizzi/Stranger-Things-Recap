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
      <h1 className="text-3xl font-bold mb-6 text-center">Characters</h1>
      <div className="flex flex-wrap justify-center">
        {characters.map((char, index) => (
          <CharacterCard key={index} character={char} />
        ))}
      </div>
    </motion.div>
  );
}

