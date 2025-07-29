import React from "react";
import { seasonsIcons } from "../icons/icons";
import { FaRegClock } from "react-icons/fa";

export default function SeasonCard({ season, onClick }) {
  const Icon = seasonsIcons[season.id];

  return (
    <div
      onClick={onClick}
      className="glitch-hover relative bg-black text-white rounded-xl p-4 m-4 mt-6 max-w-xs flex flex-col items-center
             transition-transform duration-300 transform hover:scale-105 hover:shadow-red-500/40
             shadow-md cursor-pointer hover:animate-pulse hover:z-20"
      style={{ overflow: "visible" }}
    >
      {Icon && <Icon className="text-6xl mb-4 text-red-600" />}

      <h2 className="text-xl font-bold text-center">
        {season.title} ({season.year})
      </h2>

      <div className="flex flex-col items-center mt-2">
        <FaRegClock className="text-red-400" aria-hidden="true" focusable={false} />
        <span className="text-xs text-gray-300 mt-1 select-none">
          Ambientato nel {season.inSeriesYear}
        </span>
      </div>

      <p className="text-sm text-center mt-4">{season.summary}</p>
    </div>
  );
}
