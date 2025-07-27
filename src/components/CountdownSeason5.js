import React, { useState, useEffect, useMemo } from "react";
import { FaHourglassHalf } from "react-icons/fa";

export default function CountdownSeason5() {
  const targetDate = useMemo(() => new Date("2025-11-26T00:00:00"), []);

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

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return (
      <div className="text-red-500 font-bold text-lg animate-pulse">
        La stagione 5 è iniziata!
      </div>
    );
  }

  return (
    <div className="bg-white text-black rounded-xl shadow-lg p-4 w-full md:w-72 text-center animate-fade-in border border-red-600">
      <div className="flex justify-center mb-2">
        <FaHourglassHalf className="text-red-600 text-3xl animate-pulse" />
      </div>
      <p className="text-lg font-bold text-red-700 mb-1">Countdown Stagione 5</p>
      <p className="text-sm">
        {timeLeft.days}g {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </p>
    </div>
  );
}
