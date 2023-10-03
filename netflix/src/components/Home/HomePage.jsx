import { useState, useEffect } from "react";

import "./homePage.css";

import movies from "/src/movies.json";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  function filterTrendingMovies() {
    const trending = movies.filter((movie) => movie.isTrending);
    setTrendingMovies(trending);
  }

  function filterRecommendedMovies() {
    const recommended = movies.filter((movie) => !movie.isTrending);
    setRecommendedMovies(recommended);

    const randomMovies = [];
    for (let i = 0; i < 10; i++) {
      const randomMovie = Math.floor(Math.random() * recommended.length);
      const recommendedMovies = recommended[randomMovie];
      randomMovies.push(recommendedMovies);
      console.log(randomMovies);
    }
    setRecommendedMovies(randomMovies);
  }

  useEffect(() => {
    filterTrendingMovies();
    filterRecommendedMovies();
    //console.log(trendingMovies);
    //console.log(recommendedMovies);
  }, []);

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
      <h2>Recommended for you</h2>
      {recommendedMovies.map((movie) => {
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
