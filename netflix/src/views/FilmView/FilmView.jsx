import './FilmView.css'
import { useState } from 'react';
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom';


function FilmView() {

  const location = useLocation()
  const movie = location.state
  console.log(movie);

  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorite = () => {
    setIsFavorite(true);
    console.log("tillagd i favoriter");
    
  };

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
         <button className='filmView__article-right-button' onClick={handleAddToFavorite}>Add to favorite</button>
         {isFavorite && <p>Added to favorite</p>}
       </article>
     </section>
      </>
     
        

     )
}

export default FilmView



  









