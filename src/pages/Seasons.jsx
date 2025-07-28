import React, { useState, useEffect, useMemo } from "react";
import { seasons } from "../data/seasons";
import SeasonCard from "../components/SeasonCard";
import { motion } from "framer-motion";
import Modal from "../components/Modal";

function CountdownSeason5() {
  const targetDate = useMemo(() => new Date("2025-11-26T00:00:00"), []);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  function getTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <div className="text-center text-lg font-bold mb-6">
        Season 5 is here!
      </div>
    );
  }

  return (
    <div className="text-center text-lg font-semibold mb-6">
      <p>Season 5 Countdown:</p>
      <p>
        {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes, {timeLeft.seconds} seconds
      </p>
    </div>
  );
}

export default function Seasons() {
  const [selectedSeason, setSelectedSeason] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white p-8 overflow-visible"
    >
      <h1 className="text-4xl font-bold mb-6 text-center font-heading text-red-600">
        Seasons
      </h1>

      <CountdownSeason5 />

      <div 
        className="flex flex-wrap justify-center gap-10 overflow-visible" // gap aumentato e overflow visibile
      >
        {seasons.map((season) => (
          <div key={season.id} className="relative overflow-visible">
            <SeasonCard
              season={season}
              onClick={() => setSelectedSeason(season)}
            />
          </div>
        ))}
      </div>

      {selectedSeason && (
        <Modal
          isOpen={!!selectedSeason}
          onClose={() => setSelectedSeason(null)}
          character={selectedSeason} // riutilizziamo Modal anche per season
        />
      )}
    </motion.div>
  );
}
