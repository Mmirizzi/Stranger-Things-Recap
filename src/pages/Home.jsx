import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center">
        Welcome to Upside Down!
      </h1>
      <p className="text-base sm:text-lg max-w-xl mb-10 text-center">
        Discover the characters, seasons, and the complete story of the series before
        the release of Season 5!
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <button
          onClick={() => navigate("/characters")}
          className="bg-red-600 hover:bg-red-700 transition text-white font-semibold py-2 px-5 sm:py-3 sm:px-6 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Explore Characters!
        </button>
        <button
          onClick={() => navigate("/seasons")}
          className="bg-red-600 hover:bg-red-700 transition text-white font-semibold py-2 px-5 sm:py-3 sm:px-6 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Explore Seasons!
        </button>
      </div>
    </div>
  );
}
