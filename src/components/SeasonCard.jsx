import React from 'react';
import { seasonsIcons } from '../icons/icons';

export default function SeasonCard({ season }) {
  const Icon = seasonsIcons[season.id]; 

  return (
    <div className="bg-black text-white rounded-xl p-6 max-w-sm w-full flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {Icon && <Icon className="text-6xl mb-4 text-red-600" />}
      <h2 className="text-xl font-bold mb-2 text-center">{season.title} ({season.year})</h2>
      <p className="text-white text-sm text-center">{season.summary}</p>
    </div>
  );
}
