
// Funktion för att ta bort en film efter titel
function removeMovieByTitle(title) {
  // Hämta den sparade filmlistan från sessionStorage och konvertera den från JSON till JavaScript-objekt.
    const savedMovies = JSON.parse(sessionStorage.getItem("savedMovies"));
    // Kontrollera om det finns några sparade filmer.
    if (savedMovies) {
        // Hitta indexet för den film som matchar den givna titeln i listan av sparade filmer.
      const movieIndex = savedMovies.findIndex((movie) => movie.title === title);
         // Om filmen med den givna titeln hittas tas den bort den från listan.
      if (movieIndex !== -1) {
        savedMovies.splice(movieIndex, 1);
         // Spara den uppdaterade listan av sparade filmer tillbaka i sessionStorage efter att filmen har tagits bort.
        sessionStorage.setItem("savedMovies", JSON.stringify(savedMovies));
      }
    }
  }
  
export default removeMovieByTitle