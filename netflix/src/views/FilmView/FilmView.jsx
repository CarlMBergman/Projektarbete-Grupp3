import './FilmView.css'
import { useEffect } from 'react';
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom';
import removeMovieByTitle from '../../components/RemoveFavoriteBtn';
import FavoriteBtn from '../../components/FavoriteBtn';
import Footer from '../../components/footer/Footer';


function FilmView() {

   // const [favouriteMovies, setFavouriteMovies] = useState([]);
  const location = useLocation()
  const movie = location.state
  console.log(movie);

  useEffect(() => {
    function getMovies() {
        // Hämta den sparade filmlistan från sessionStorage och konvertera den från JSON till JavaScript-objekt.
      let data = JSON.parse(sessionStorage.getItem("savedMovies"));
       // Kontrollera om det finns sparade filmer och om listan inte är tom.
      if (data !== null && data.length > 0) {
         // Om det finns sparade filmer, uppdatera tillståndet (favouriteMovies) i komponenten med den sparade filmlistan.
        // setFavouriteMovies(data);
      }
    }
      // Anropa den inre funktionen getMovies för att hämta och uppdatera sparade filmer när komponenten renderas.
    getMovies();
  },[]);


     return(
      <>
      <Header/>
      <section className='filmView'>
      <article className='filmView__article-left'>
         <h1 className='filmView__article-left-heading'>{movie.title}</h1>
         <img className='thumbnail' src={movie.thumbnail} alt="Image didnt exist" />
       </article>

      <article className='filmView__article-right'>
         <h3 className='genre'>Genre: {movie.genre}</h3>
         <h3 className='actors' >Actors: {movie.actors.join(",")}</h3>
         <h3 className='rating'>Rating: {movie.rating}</h3>
         <h3 className='year'>Year: {movie.year}</h3>
        <h3>Synopsis</h3>
         <div className='synopsis'>
           <p className='synopsisP'>{movie.synopsis}</p>
         </div>
         <div className='filmView__article-right-buttons'>
         <FavoriteBtn place='movieView' movie={movie} index={0}/>
         </div>
       </article>
     </section>
     <Footer/>

      </>
     
        

     )
}

export default FilmView



  









