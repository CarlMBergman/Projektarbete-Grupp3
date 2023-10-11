import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";
import movies from "/src/movies.json";
import Header from "../../components/header/Header";
import FavoriteBtn from "../../components/FavoriteBtn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "../../components/footer/Footer";

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  const navigate = useNavigate();

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

    //Skapar en array som kommer hålla 10 slumpmässiga filmer
    const randomMovies = [];
    for (let i = 0; i < 10; i++) {
      //For loopen körs 10 gånger och plockar fram 10 slumpmässiga siffor (filmer) från recommendedMovies array
      const randomMovieIndex = Math.floor(Math.random() * recommended.length);
      //Här används siffrorna (filmer) som vi plockade fram för att hämta en film från recommendedMovies array
      const recommendedMovies = recommended[randomMovieIndex];

      //Vi uppdaterar vår recommended array efter varje loop, för att inte rendera samma film flera gånger
      recommended.splice(randomMovieIndex, 1);

      //Pushar alla våra recommended filmer till randomMovies array
      randomMovies.push(recommendedMovies);
    }
    //Uppdaterar recommendedMovies state
    setRecommendedMovies(randomMovies);
  }

  //Slick carousel inställningar
  const settings = {
    centerMode: true,
    dots: true,
    arrows: false,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          centerMode: true,
          arrows: false,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          centerMode: true,
          arrows: false,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          arrows: false,
          centerPadding: "15px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          centerMode: true,
          arrows: false,
          centerPadding: "15px",
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          arrows: false,
          centerPadding: "15px",

          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    filterTrendingMovies();
    filterRecommendedMovies();
  }, []);

  function clickFilm(movie) {
    navigate("/Projektarbete-Grupp3/FilmView", { state: movie });
  }
  console.log(trendingMovies);

  return (
    <div>
      <Header />
      <main>
        <div>
          <h2>Trending Movies</h2>
          <Slider {...settings}>
            {trendingMovies.map((movie) => {
              return (
                <article key={movie.title}>
                  <img
                    onClick={() => clickFilm(movie)}
                    src={movie.thumbnail}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = "./public/error.jpg";
                    }}
                  />
                  <p>Relaste date: {movie.year}</p>
                  <p>Rating: {movie.rating}</p>
                  <h2  onClick={() => clickFilm(movie)}>{movie.title}</h2>
                  <button onClick={() => FavoriteBtn(movie)}>Save Movie</button>
                </article>
              );
            })}
          </Slider>
          <h2>Recommended for you</h2>
          <Slider {...settings}>
            {recommendedMovies.map((movie, index) => {
              return (
                <article key={index}>
                  <img
                    onClick={() => clickFilm(movie)}
                    src={movie.thumbnail}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = "./public/error.jpg";
                    }}
                  />
                  <p>Relaste date: {movie.year}</p>
                  <p>Rating: {movie.rating}</p>
                  <h2>{movie.title}</h2>
                  <button onClick={() => FavoriteBtn(movie)}>Save Movie</button>
                </article>
              );
            })}
          </Slider>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
