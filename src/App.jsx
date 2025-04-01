import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
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

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
