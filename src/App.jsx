import React, { useState } from "react";
import Input from "./components/Input";
import "./App.css";
import { IoSearch } from "react-icons/io5";
import Library from "./components/LIbrary";

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
  // const [filteredMovies, setFilteredMovies] = React.useState([]);
  // const [search, setSearch] = React.useState("");
  // const onChangeSearch = (event) => setSearch(event.target.value);

  // React.useEffect(() => {
  //   setFilteredMovies(movies);
  // }, [movies]);

  // React.useEffect(() => {
  //   if (search === "") {
  //     setFilteredMovies(movies);
  //   } else {
  //     setFilteredMovies(
  //       movies.filter((movie) =>
  //         movie.title.toLowerCase().includes(search.toLowerCase())
  //       )
  //     );
  //   }
  // }, [search, movies]);
  // console.log(filteredMovies, ">>>>>>>");

  return (
    <>
      <div className="container">
        <div className="searchArea">
          <Input
            name="Search"
            // value={search}
            placeholder="Search book by Title"
            // onChange={onChangeSearch}
          />
          <IoSearch className="icon" />
        </div>
        <div className="main">
          {movies.map((movie, index) => (
            <Library
              key={index}
              image={movie.formats["image/jpeg"]}
              title={movie.title}
              authors={movie.authors}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
