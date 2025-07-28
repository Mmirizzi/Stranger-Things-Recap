import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Puoi usare anche Heroicons se preferisci

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-700 text-white px-4 py-3 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-lg font-heading drop-shadow-lg">Stranger Things Recap</h1>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/characters" className="hover:underline">Characters</Link>
          <Link to="/seasons" className="hover:underline">Seasons</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:underline">Home</Link>
          <Link to="/characters" onClick={() => setIsOpen(false)} className="hover:underline">Characters</Link>
          <Link to="/seasons" onClick={() => setIsOpen(false)} className="hover:underline">Seasons</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:underline">About</Link>
        </div>
      )}
    </nav>
  );
}
