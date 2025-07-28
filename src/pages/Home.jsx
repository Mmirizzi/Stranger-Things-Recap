import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <h1 className="text-5xl font-heading text-red-600 mb-6 text-center animate-fade-in drop-shadow-lg">
        Welcome to{" "}
        <span className="inline-block transform rotate-180">Upside</span> Down
      </h1>
      <p className="text-lg max-w-xl mb-10 text-center">
        Discover the characters, seasons, and the complete story of the series before
        the release of Season 5!
      </p>
      <div className="flex gap-6" role="group" aria-label="Explore navigation buttons">
        <button
          onClick={() => navigate("/characters")}
          className="bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 px-6 rounded-md shadow-lg focus:outline-none focus:ring-4 focus:ring-red-500"
          aria-label="Explore Characters"
        >
          Explore Characters!
        </button>
        <button
          onClick={() => navigate("/seasons")}
          className="bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 px-6 rounded-md shadow-lg focus:outline-none focus:ring-4 focus:ring-red-500"
          aria-label="Explore Seasons"
        >
          Explore Seasons!
        </button>
      </div>
    </main>
  );
}
