import './FilmView.css'
import { useState } from 'react';
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom';


function FilmView() {


  const location = useLocation()
  const movie = location.state
  console.log(movie);


  function saveMovies(movie) {
    const savedMovies = [];
    const test = JSON.parse(sessionStorage.getItem("savedMovies"));
    console.log(test);
    if (test) {
      const updated = [...test, movie];
      console.log(updated);
      sessionStorage.setItem("savedMovies", JSON.stringify(updated));
    } else {
      sessionStorage.setItem("savedMovies", JSON.stringify([movie]));
    }
    console.log("tillagd i favoriter")
  }



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
         <button className='filmView__article-right-button' onClick={() => saveMovies(movie)}>Add to favorite</button>
       
      
       </article>
     </section>
      </>
     
        

     )
}

export default FilmView



  









