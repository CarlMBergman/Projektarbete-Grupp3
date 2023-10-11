import './Categories.css'
import { useNavigate } from 'react-router-dom'
import { Category } from '../../components/category/Category'
import Header from '../../components/header/Header'
import movies from '../../movies.json'
import Footer from '../../components/footer/Footer'

function Categories() {
    const comma = ', '
    // Set() makes it so no dupllicates will be added but it
    // is an object so will have to convert it further down
    const genres = new Set()
    const navigate = useNavigate()
    

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
            <div key={genre} className={'div--genre'}>
                <header>
                    <h2 className='div--genre__header'>{genre}</h2>
                </header>
                <main>
                    <Category movies={moviesWithSameGenre} onClick={clickFilm}/>
                    <hr className='div--genre__hr'/>
                </main>
            </div>
        )
    })
    function clickFilm(movie) {
        navigate("/Projektarbete-Grupp3/FilmView", { state: movie });
      }

    return(
        <div>
            <header>
                < Header/>  
            </header>
            <main className="categories">
                {category}
            </main>
            <footer>
                < Footer/>
            </footer>
        </div>
    )
}

export default Categories