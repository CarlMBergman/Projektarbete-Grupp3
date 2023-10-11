function FavoriteBtn(movie) {
  const FavoriteMovies = JSON.parse(sessionStorage.getItem("savedMovies"));
  if (FavoriteMovies) {
    const updated = [...FavoriteMovies, movie];
    sessionStorage.setItem("savedMovies", JSON.stringify(updated));
  } else {
    sessionStorage.setItem("savedMovies", JSON.stringify([movie]));
  }

  return <button onClick={() => FavoriteBtn(movie)}>Save Movie</button>;
}

export default FavoriteBtn;
