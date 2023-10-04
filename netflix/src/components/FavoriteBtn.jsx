function FavoriteBtn(movie) {
  sessionStorage.setItem("savedMovies", JSON.stringify(movie));
  console.log(sessionStorage);

  return <button onClick={() => FavoriteBtn(movie)}>Save Movie</button>;
}

export default FavoriteBtn;
