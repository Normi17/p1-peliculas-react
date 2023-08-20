import React from "react";
import "../components/MovieCard.css";
import { Link } from "react-router-dom";

function MovieCard({ title, posterPath, movieId }) {
  const imageUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "URL_DE_IMAGEN_POR_DEFECTO";

  return (
    <li className="movie-card">
      <Link to={"/movies/" + movieId} className="link-no-underline">
        <img src={imageUrl} alt={`${title} Poster`} className="movie-img" />
        <h2 className="movie-title">{title}</h2>
      </Link>
    </li>
  );
}

export default MovieCard;
