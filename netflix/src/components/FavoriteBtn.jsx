function FavoriteBtn(movie) {
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

  return <button onClick={() => FavoriteBtn(movie)}>Save Movie</button>;
}

export default FavoriteBtn;
