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
          centerPadding: "30px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          arrows: false,
          centerPadding: "20px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          centerMode: true,
          arrows: false,
          centerPadding: "10px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 280,
        settings: {
          centerMode: true,
          arrows: false,
          centerPadding: "5px",
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

  return (
    <div>
      <Header />
      <main>
        <div>
          <div className="trending__container">
            <h2 className="trending__title">Trending Movies</h2>
            <Slider {...settings}>
              {trendingMovies.map((movie, index) => {
                return (
                  <article
                    className="movie__card"
                    key={movie.title}
                    data-testid="movie-card"
                  >
                    <img
                      className="img"
                      onClick={() => clickFilm(movie)}
                      src={movie.thumbnail}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "./public/error.jpg";
                      }}
                    />
                    <p className="release__year">Release year: {movie.year}</p>
                    <p className="rating">Rating: {movie.rating}</p>
                    <h2
                      onClick={() => clickFilm(movie)}
                      className="movie__title"
                    >
                      {movie.title}
                    </h2>
                    <FavoriteBtn place="trending" movie={movie} index={index} />
                  </article>
                );
              })}
            </Slider>
          </div>

          <div className="recommended__container">
            <h2 className="recommended__title">Recommended for you</h2>
            <Slider {...settings}>
              {recommendedMovies.map((movie, index) => {
                return (
                  <article className="movie__card" key={index}>
                    <img
                      className="img"
                      onClick={() => clickFilm(movie)}
                      src={movie.thumbnail}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "./public/error.jpg";
                      }}
                    />
                    <p className="release__year">Release year: {movie.year}</p>
                    <p className="rating">Rating: {movie.rating}</p>
                    <h2 className="movie__title">{movie.title}</h2>
                    <FavoriteBtn
                      place="recommended"
                      movie={movie}
                      index={index}
                    />
                  </article>
                );
              })}
            </Slider>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
