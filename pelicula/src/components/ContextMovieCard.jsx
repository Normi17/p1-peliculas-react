import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import MovieCard from "../components/MovieCard";
import "../components/contextMovieCard.css"
function ContextMovieCard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then(data => {
      setMovies(data.results);
    });
  }, []);

  return (
    <ul className="container">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          posterPath={movie.poster_path} // Asegúrate de que estás pasando el campo correcto
        />
      ))}
    </ul>
  );
}

export default ContextMovieCard;
