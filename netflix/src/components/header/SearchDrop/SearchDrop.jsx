import './searchDrop.css'
import MovieList from './MovieList/MovieList'

function SearchDrop(props) {
    const movies = props.movies

    const displayMovies = movies.map((movie) => {
        return <MovieList movie={ movie } key={ movie.title }/>
    })

    return (
        <section className='search--drop'>

            {displayMovies}
        </section>
    )
}

export default SearchDrop