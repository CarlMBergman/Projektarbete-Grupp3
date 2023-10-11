const checkIfLiked = (movie) => {
    let movieExist = false
    const likedMovies = JSON.parse(sessionStorage.getItem('savedMovies'))
    
    if (Array.isArray(likedMovies)) {
        likedMovies.forEach(likedMovie => {
            if (likedMovie.title === movie.title) {
                movieExist = true
            }
        });
    } else if (likedMovies === movie) {
        movieExist = true
    }
    return movieExist
}

export default checkIfLiked