import './searchDrop.css'

function SearchDrop(props) {
    const movies = props.movies

    const displayMovies = movies.map((movie) => {
        return <p>{ movie.title }</p>
    })

    return (
        <section className='search--drop'>
            {displayMovies}
        </section>
    )
}

export default SearchDrop