import './MovieList.css'

function MovieList(props) {
    const movie = props.movie

    return (
        <article className='movie--list'>
            <img className='movie--list__img' src={ movie.thumbnail } alt={ movie.title } />
            <div>
                <h3 className='movie--list__title'>{ movie.title }</h3>
                <p className='movie--list__genre'>{ movie.genre }</p>
            </div>
        </article>
    )
}

export default MovieList