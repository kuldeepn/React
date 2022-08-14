import React from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLaoding, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://react-http-92746-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong !");
      }

      const data = await response.json();

      const LoadedMovies = [];

      for (const key in data) {
        LoadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate:data[key].releaseDate
        });
      }

      setMovies(LoadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const addMovieHandler = async (movie) => {
    const response = await fetch(
      "https://react-http-92746-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
      }
    );
    const data = response.json();
    console.log(data);
  };

  let content;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (movies.length === 0) {
    content = <p>Found no movies..</p>;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLaoding) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}></AddMovie>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
