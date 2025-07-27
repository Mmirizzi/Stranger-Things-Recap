import React from 'react';
import SeasonCard from './SeasonCard';
import CountdownSeason5 from './CountdownSeason5';
import { seasons } from '../data/seasons'; // o dove tieni i dati delle stagioni

export default function SeasonsPage() {
  return (
    <div className="container mx-auto p-6">
      <CountdownSeason5 />

      <div className="mt-8 flex flex-wrap justify-center">
        {seasons.map((season) => (
          <SeasonCard key={season.id} season={season} />
        ))}
      </div>
    </div>
  );
}
