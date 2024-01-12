import React from "react";
import Curriculum from "./Container/Curriculum";
import Certificaciones from "./Container/Certification"; // Cambiado el nombre aquí
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Curriculum />} />
        <Route path="/certificaciones" element={<Certificaciones />} />
      </Routes>
    </Router>
  );
}
