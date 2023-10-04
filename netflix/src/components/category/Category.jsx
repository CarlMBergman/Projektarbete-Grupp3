import './Category.css';
import { useState, useEffect } from 'react';
import movies from '/src/movies.json';

function Category() {
    const [movieGenre, setMovieGenre] = useState([])

    function filterCategories() {
        const category = movies.filter((movie) => movie.thumbnail);
        category.sort((a, b) => a.genre.localeCompare(b.genre));
        setMovieGenre(category)
    }

    useEffect(() => {
        filterCategories()
        console.log(movieGenre);
    }, [])

    return (
        <div>
            <h1>Categories</h1>
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
            })}
        </div>
    )
}

export { Category }
