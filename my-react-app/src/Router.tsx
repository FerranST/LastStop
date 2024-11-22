import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home"
import Ruta from "./pages/route"
import Agency from "./pages/agency"
import Map from "./pages/map"


export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/rutas" element={<Ruta />} />
      <Route path="/agencias" element={<Agency />} />
      <Route path="/" element={<Home />} />
      <Route path="/mapa" element={<Map />} />
    </Routes>
  );
};