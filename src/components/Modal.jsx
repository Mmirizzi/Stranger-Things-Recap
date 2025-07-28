import React from "react";

export default function Modal({ isOpen, onClose, character }) {
  if (!isOpen || !character) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-black bg-opacity-90 rounded-lg p-6 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">{character.name}</h2>

        

        {character?.funFacts && (
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2 text-red-500">Fun Facts</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {character.funFacts.map((fact, idx) => (
                <li key={idx}>{fact}</li>
              ))}
            </ul>
          </div>
        )}

        {character?.easterEgg && (
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2 text-red-500">Easter Egg</h3>
            <p className="text-sm italic text-center">{character.easterEgg}</p>
          </div>
        )}
      </div>
    </div>
  );
}
