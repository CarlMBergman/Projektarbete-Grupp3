import './Categories.css'
import { Category } from '../../components/category/Category'
import Header from '../../components/header/Header'
import movies from '../../movies.json'

function Categories() {
    let genres = []
    const comma = ','

    movies.forEach((movie) => {
        if (movie.genre.includes(comma)) {
            const noSpaces = movie.genre.replace(/\s/g, '')
            const splitGenres = noSpaces.split(comma)
            splitGenres.forEach((genre) => {
                if (genres) {
                    const exist = genres.includes(genre)
                    if (!exist) {
                        genres = [...genres, genre]
                    }
                } else {
                    genres = genre
                }
            })
        } else {
            const exist = genres.includes(movie.genre)
            if (!exist) {
                genres = [...genres, movie.genre]
            }
        }
    })

    const category = genres.map((genre) => {
        let moviesWithSameGenre = []
        movies.forEach((movie) => {
            if (movie.genre.includes(comma)) {
                const noSpaces = movie.genre.replace(/\s/g, '')
                const splitGenres = noSpaces.split(comma)
                splitGenres.forEach((genreMovie) => {
                    if (genreMovie === genre) {
                        moviesWithSameGenre = [...moviesWithSameGenre, movie]
                        
                    }
                })
            } else {
                if (genre === movie.genre) {
                    moviesWithSameGenre = [...moviesWithSameGenre, movie]
                }
            }
        })
        
        return (
            <div key={genre}>
                <h2>{genre}</h2>
                <Category movies={moviesWithSameGenre}/>
            </div>
        )
    })

    return(
        <div>
            <header>
                < Header/>  
            </header>
            <main className="categories">
                {category}
            </main>
        </div>
    )
}

export default Categories