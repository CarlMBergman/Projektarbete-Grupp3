import './Category.css';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import movies from '/src/movies.json';

function Category(props) {
    // const [movieGenre, setMovieGenre] = useState([])
    const navigate = useNavigate();

    function filterCategories() {
        const category = movies.filter((movie) => movie.thumbnail);
        category.sort((a, b) => a.genre.localeCompare(b.genre));
        // setMovieGenre(category)
    }

    useEffect(() => {
        filterCategories()
        // console.log(movieGenre);
    }, [])    
    
    function clickFilm(movie) {
        navigate("/Projektarbete-Grupp3/FilmView", { state: movie });
      }

    const movie = props.movies.map((movie) => {
        return (
            <div key={movie.title} className="category" onClick={clickFilm}>
                <article className='category__article'>
                    <img 
                    src={movie.thumbnail} 
                    onError={(e) => e.target.alt = 'Image does not exist'} 
                    className='category__article__img'
                    />
                </article>
                <h5>{movie.title}</h5>
            </div>
        )
    })


    return (
        <div className='category__div'>
            {movie}
        </div>
    )
}

export { Category }
