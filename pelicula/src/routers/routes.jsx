import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa Router
import LandingPage from "../pages/LandingPage"; // Importa LandingPage
import { MovieDetails } from "../pages/MovieDetails";

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/movies/:movieId" element={<MovieDetails />} />
        
      </Routes>
    </Router>
  );
}

export default MyRoutes;
