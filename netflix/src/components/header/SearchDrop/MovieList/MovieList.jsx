import './MovieList.css'
import { useNavigate } from 'react-router-dom'

function MovieList(props) {
    const movie = props.movie
    const navigate = useNavigate()

    function goToMovie() {
        navigate('/FilmView', {state: movie})
    }

    return (
        <article className='movie--list' onClick={ goToMovie }>
            <img className='movie--list__img' src={ movie.thumbnail } alt={ movie.title } />
            <div>
                <h3 className='movie--list__title'>{ movie.title }</h3>
                <p className='movie--list__genre'>{ movie.genre }</p>
            </div>
        </article>
    )
}

export default MovieList