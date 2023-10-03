import { useState, useEffect } from "react";

import "./homePage.css";

import movies from "/src/movies.json";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  function filterTrendingMovies() {
    const trending = movies.filter((movie) => movie.isTrending);
    setTrendingMovies(trending);
  }

  useEffect(() => {
    filterTrendingMovies();
    console.log(trendingMovies);
  }, []);

  //test

  return (
    <div>
      <h2>Trending Movies</h2>
      {trendingMovies.map((movie) => {
        return (
          <article key={movie.title}>
            <img src={movie.thumbnail} />
            <p>Relaste date: {movie.year}</p>
            <p>rating: {movie.rating}</p>
            <h2>{movie.title}</h2>
          </article>
        );
      })}
    </div>
  );
}
