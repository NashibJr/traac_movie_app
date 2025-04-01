import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ content }) => {
  console.log(content);
  return (
    <ul className="movie-list">
      {content.map((movie, index) => (
        <li key={index}>
          <MovieCard
            image={movie.formats["image/jpeg"]}
            title={movie.title}
            author={movie.authors[0].name}
          />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
