import './Categories.css'
import { Category } from '../../components/category/Category'
import Header from '../../components/header/Header'
import movies from '../../movies.json'

function Categories() {
    const comma = ', '
    // Set() makes it so no dupllicates will be added but it
    // is an object so will have to convert it further down
    const genres = new Set()
    

    movies.map((movie) => {
        if (movie.genre.includes(comma)) {
            const splitGenres = movie.genre.split(comma)
            splitGenres.forEach((genre) => {
                genres.add(genre)
            })
        } else  {
            genres.add(movie.genre)
        }
    })
    // here we convert the object in to an array so we can map it
    const genresArray = [...genres]
    
    const category = genresArray.map((genre) => {
        let moviesWithSameGenre = []
        movies.forEach((movie) => {
            if (movie.genre.includes(genre)) {
                moviesWithSameGenre = [...moviesWithSameGenre, movie]
            } 
        })
        
        return (
            <div key={genre} className='div--genre'>
                <h2 className='div--genre__header'>{genre}</h2>
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