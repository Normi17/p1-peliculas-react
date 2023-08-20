import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "../pages/MovieDetails.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    get(`/movie/${movieId}`)
      .then(data => {
        setMovie(data);
        setGenres(data.genres);
      })
      .catch(error => {
        console.error("Error fetching movie details:", error);
      });
  }, [movieId]);

  const imgUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className="detailsContainer">
      <img src={imgUrl} alt={movie.title} className="col movieImage" />
      <div className="movieDetails">
        <p className="title">
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {genres.map(genre => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}



