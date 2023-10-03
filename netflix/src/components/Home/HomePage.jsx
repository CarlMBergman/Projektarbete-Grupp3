import { useState, useEffect } from "react";

import "./homePage.css";

import movies from "/src/movies.json";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  //Trending funktionen
  function filterTrendingMovies() {
    //Uppdaterar trendingMovies state med alla filmer som har isTrending prop
    const trending = movies.filter((movie) => movie.isTrending);
    setTrendingMovies(trending);
  }
  //Recommended Funktionen
  function filterRecommendedMovies() {
    //Uppdaterar recommendedMovies state med alla filmer som inte har isTrending prop
    const recommended = movies.filter((movie) => !movie.isTrending);
    setRecommendedMovies(recommended);

    //Skapar en variabel som kommer hålla 10 slumpmässiga filmer
    const randomMovies = [];
    for (let i = 0; i < 10; i++) {
      //For loopen körs 10 gånger och plockar fram 10 slumpmässiga siffor (filmer) från recommendedMovies array
      const randomMovieIndex = Math.floor(Math.random() * recommended.length);
      //Här används siffrorna (filmer) som vi plockade fram för att hämta en film från recommendedMovies array
      const recommendedMovies = recommended[randomMovieIndex];
      //Pushar alla våra recommended filmer till randomMovies array
      randomMovies.push(recommendedMovies);
      //console.log(randomMovies);
    }
    //Uppdaterar recommendedMovies state
    setRecommendedMovies(randomMovies);
  }

  function saveMovies(movie) {
    sessionStorage.setItem("savedMovies", movie);
    console.log(sessionStorage);
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
            <p>Rating: {movie.rating}</p>
            <h2>{movie.title}</h2>
            <button onClick={() => saveMovies(movie)}>Save movie</button>
          </article>
        );
      })}
      <h2>Recommended for you</h2>
      {recommendedMovies.map((movie, index) => {
        return (
          <article key={index}>
            <img src={movie.thumbnail} />
            <p>Relaste date: {movie.year}</p>
            <p>Rating: {movie.rating}</p>
            <h2>{movie.title}</h2>
            <button onClick={() => saveMovies(movie)}>Save movie</button>
          </article>
        );
      })}
    </div>
  );
}
