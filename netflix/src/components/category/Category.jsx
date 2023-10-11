import './Category.css';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import movies from '/src/movies.json';

function Category(props) {
    const navigate = useNavigate();

    function filterCategories() {
        const category = movies.filter((movie) => movie.thumbnail);
        category.sort((a, b) => a.genre.localeCompare(b.genre));
    }

    useEffect(() => {
        filterCategories()
    }, [])    
    
    function clickFilm(movie) {
        navigate("/Projektarbete-Grupp3/FilmView", { state: movie });
      }

    const movie = props.movies.map((movie) => {
        return (
            <div key={movie.title} className="category" onClick={() => clickFilm(movie)}>
                <article className='category__article'>
                    <img 
                    src={movie.thumbnail} 
                    onError={(e) => e.target.alt = 'error.jpg'} 
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
