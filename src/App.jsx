import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [contentAvailable, setContentAvailable] = useState(true);
  const [movies, setMovies] = React.useState([]); // don't temper
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Don't temper
  const fetchMovies = async () => {
    try {
      const response = await fetch("https://gutendex.com/books/");
      const data = await response.json();

      setMovies(data.results);
      setFilteredMovies(data.results);
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

  const handleOnChangeSearch = (e) => setSearchValue(e.target.value);
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Working!!!");
  };

  React.useEffect(() => {
    if (searchValue === "") {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(
        movies?.filter((movie) =>
          movie.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  }, [searchValue]);
  React.useEffect(() => {
    if (filteredMovies.length === 0) {
      setContentAvailable(false);
    } else {
      setContentAvailable(true);
    }
  }, [filteredMovies]);
  return (
    <div id="frame">
      <Header />
      <SearchBar
        onSubmit={handleSearch}
        value={searchValue}
        onChange={handleOnChangeSearch}
      />
      {contentAvailable ? (
        <MovieList content={filteredMovies} />
      ) : (
        <div className="unavailable">
          <h1>
            Nothing to see here
            <br /> &gt; - &lt;
          </h1>
        </div>
      )}
    </div>
  );
}

export default App;
