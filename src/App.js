import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Seasons from "./pages/Seasons";  // <-- nuovo import per la pagina Stagioni
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Characters" element={<Characters />} />
          <Route path="/Seasons" element={<Seasons />} />  {/* qui il componente Seasons */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
