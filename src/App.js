import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Pages/Home";
import Aprops from "./Pages/Aprops"
import Logement from "./Pages/Logement";
import Erreur from "./Pages/Erreur_404";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="apropos"  element={<Aprops />} />
          <Route path="logement/:logementId" exact element={<Logement />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
