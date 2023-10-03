import './FilmView.css'
import { useState } from 'react';
// import img from '../../assets/react.svg'

// import movies from '../../movies.json'

function FilmView() {

  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorite = () => {
    setIsFavorite(true);
    console.log("tillagd i favoriter");
    
  };

     return(
       <section className='filmView'>
      <article className='filmView__article-left'>
        <h1 className='filmView__article-left-heading'>The Shawshank Redemption</h1>
         <img src="https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg" alt="Bild" />
       </article>

      <article className='filmView__article-right'>
         <h3>Genre: Drama</h3>
          <h3 className='actors'>Actors: Tim Robbins, Morgan Freeman, Bob Gunton </h3>
         <h3>Rating: R</h3>
         <h3>Year: 1994</h3>
        <h3>Synopsis</h3>
         <div className='synopsis'>
           <p>Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.</p>
         </div>
         <button className='filmView__article-right-button' onClick={handleAddToFavorite}>Add to favorite</button>
         {isFavorite && <p>This film is in your favorites</p>}
       </article>
     </section>
        

     )
}

export default FilmView



  // const movieList = movies.map((movie) => {
  //   return (
  //     <section className="filmView" key={movie.id}>
  //       <article className="filmView__article-left">
  //         <h1 className='filmView__article-left-heading'>{movie.title}</h1>
  //         <img className='film-image' src={movie.thumbnail} alt={movie.title} />
  //       </article>

  //       <article className="filmView__article-right">
  //         <h3>Genre: {movie.genre}</h3>
  //         <h3 className='actors' >Actors: {movie.actors.join(",")}</h3>
  //         <h3>Rating: {movie.rating}</h3>
  //         <h3>Year: {movie.year}</h3>
  //         <h3>Synopsis</h3>
  //         <div className="synopsis">
  //           <p>{movie.synopsis}</p>
  //         </div>
  //         <button>Add to favorite</button>
  //       </article>
  //     </section>
  //   );
  // });

  // return <div>{movieList}</div>;









/* 
return(
  <section className='filmView'>
 <article className='filmView__article-left'>
   <h1>{movie.title}</h1>
    <img src={movie.thumbnail} alt={film.title} />
  </article>

 <article className='filmView__article-right'>
    <h3>Genre: {movie.genre}</h3>
 <h3>Actors: {movie.actors.join(', ')}</h3>
    <h3>Rating: {movie.rating}</h3>
    <h3>Year: {movie.year}</h3>
   <h3>Synopsis</h3>
    <div className='ptag'>
      <p>{movie.synopsis}</p>
    </div>
  <button>Add to favorite</button>
  </article>
</section> 
   

)

*/















