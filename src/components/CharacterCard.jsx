import React from "react";
import { characterIcons } from "../icons/icons";

export default function CharacterCard({ character }) {
  const IconComponent = characterIcons[character.name] || null;

  return (
    <div className="bg-black text-white rounded-xl p-4 m-4 max-w-xs flex flex-col items-center">
      {IconComponent && <IconComponent size={100} className="mb-4 text-red-600" />}
      <h3 className="text-xl font-bold text-center">{character.name}</h3>
      <p className="text-sm text-center">{character.description}</p>
      <p className="text-xs text-gray-500 text-center">
        Seasons: {character.seasons.join(", ")}
      </p>
    </div>
  );
}
