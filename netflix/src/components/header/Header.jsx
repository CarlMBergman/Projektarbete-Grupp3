import './Header.css'
import { useState } from 'react'
import burgerMenu from '../../assets/burger.svg'
import movies from '../../movies.json'
import SearchDrop from './SearchDrop/SearchDrop'

function Header() {
    const [searchInput, setSearchInput] = useState('hej')

    let searchedMovies = null
    searchedMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().startsWith(searchInput)
    })

    console.log(searchedMovies);

    return (
        <nav className="header">
            <img src={ burgerMenu } alt="" className='header__burger'/>
            <h1 className="header__heading">Nettan</h1>
            <input className="header__search" type="text" placeholder='search...' onChange={ e => setSearchInput(e.target.value)}/>
            {searchedMovies.length > 0  && <SearchDrop movies={ searchedMovies }/>}
        </nav>
    )
}

export default Header