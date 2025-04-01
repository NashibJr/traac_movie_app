import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = React.useState([]); // don't temper

  // Don't temper
  const fetchMovies = async () => {
    try {
      const response = await fetch("https://gutendex.com/books/");
      const data = await response.json();

      setMovies(data.results);
    } catch (error) {
      alert(error?.message);

      console.log(error, ">>>>");
    }
  };

  // Don't temper
  React.useEffect(() => {
    fetchMovies();

    return () => {};
  }, []);
  console.log(movies);
  return (
    <div id="frame">
      <Header />
      <SearchBar onSubmit={(e) => e.preventDefault()} />
      <MovieList content={movies} />
    </div>
  );
}

export default App;
