import { useState, useEffect } from "react";
import checkIfLiked from "../functions/checkIfLiked";

function FavoriteBtn(props) {
  const [likedText, setLikedText] = useState('Save Movie')
  const movie = props.movie
  const index = props.index
  const likedOrNot = checkIfLiked(movie)
  console.log(likedOrNot);
  useEffect(() => {
    if (likedOrNot) {
      setLikedText('Remove Movie')
    }
  }, [])
  

  function onClick() {
    if (likedText === 'Save Movie') {
      const test = JSON.parse(sessionStorage.getItem("savedMovies"));
      if (test) {
        const updated = [...test, movie];
        console.log(updated);
        sessionStorage.setItem("savedMovies", JSON.stringify(updated));
      } else {
        sessionStorage.setItem("savedMovies", JSON.stringify([movie]));
      }
      setLikedText('Remove Movie')
    } else if (likedText === 'Remove Movie') {
      const savedMovies = JSON.parse(sessionStorage.getItem("savedMovies"));
    // Kontrollera om det finns några sparade filmer.
      if (savedMovies) {
        // Hitta indexet för den film som matchar den givna titeln i listan av sparade filmer.
        const movieIndex = savedMovies.findIndex((movieI) => movieI.title === movie.title);
         // Om filmen med den givna titeln hittas tas den bort den från listan.
      if (movieIndex !== -1) {
        savedMovies.splice(movieIndex, 1);
         // Spara den uppdaterade listan av sparade filmer tillbaka i sessionStorage efter att filmen har tagits bort.
        sessionStorage.setItem("savedMovies", JSON.stringify(savedMovies));
      }
    }
    setLikedText('Save Movie')
    }
  }
  

  return <button className="btn" onClick={ onClick } data-testid={`trending-save-btn-${index}`}>{ likedText }</button>
}

export default FavoriteBtn;
