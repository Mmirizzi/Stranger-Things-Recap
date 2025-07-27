import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-red-700 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Stranger Things Recap</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/characters" className="hover:underline">Characters</Link>
        <Link to="/seasons" className="hover:underline">Seasons</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </div>
    </nav>
  );
}
