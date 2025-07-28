import React, { useState, useEffect, useMemo, useCallback } from "react";
import { seasons } from "../data/seasons";
import SeasonCard from "../components/SeasonCard";

function CountdownSeason5() {
  const targetDate = useMemo(() => new Date("2025-11-26T00:00:00"), []);

  const getTimeLeft = useCallback(() => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [getTimeLeft]);

  if (!timeLeft) {
    return (
      <div className="text-center text-lg font-bold mb-6">
        Season 5 has started!
      </div>
    );
  }

  return (
    <div className="text-center text-lg font-semibold mb-6">
      <p>Countdown to Season 5:</p>
      <p>
        {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes,{" "}
        {timeLeft.seconds} seconds
      </p>
    </div>
  );
}

export default function Seasons() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Seasons</h1>
      <CountdownSeason5 />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {seasons.map((season) => (
          <SeasonCard key={season.id} season={season} />
        ))}
      </div>
    </div>
  );
}
