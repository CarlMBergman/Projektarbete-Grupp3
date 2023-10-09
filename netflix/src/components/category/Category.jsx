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

    const movie = props.movies.map((movie) => {
        return (
            <div key={movie.title} className="category">
                <article className='category__article'>
                    <img 
                    src={movie.thumbnail} 
                    onError={(e) => e.target.alt = 'Image does not exist'} 
                    className='category__article__img'
                    onClick={clickFilm}/>
                </article>
                <h3>{movie.title}</h3>
            </div>
        )
    })
    function clickFilm(movie) {
        navigate("/Projektarbete-Grupp3/FilmView", { state: movie });
      }

    return (
        <div className='category__div'>
            {movie}
            {/* <h1>Categories</h1>
            {movieGenre.map((movie) => {
                return(
            
            <section key={movie.title} className="category">
                <h4>{movie.genre}</h4>
                <article className='category__article'>
                    <img 
                    src={movie.thumbnail} 
                    onError={(e) => e.target.alt = 'Image does not exist'} 
                    className='category__article__img'/>
                </article>
            </section>
            )
            })} */}
        </div>
    )
}

export { Category }
