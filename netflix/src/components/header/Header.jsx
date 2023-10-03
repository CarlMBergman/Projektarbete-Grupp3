import './Header.css'
import { useState } from 'react'
import burgerMenu from '../../assets/burger.svg'
import movies from '../../movies.json'
import SearchDrop from './SearchDrop/SearchDrop'
import Nav from './Nav/Nav'

function Header() {
    const [searchInput, setSearchInput] = useState('hej')
    const [showNav, setShowNav] = useState(false)

    let searchedMovies = null
    searchedMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().startsWith(searchInput)
    })

    return (
        <header className="header">
            <div>
                <img src={ burgerMenu } alt="burgermenu" className='header__burger' onClick={() => setShowNav(current => !current)}/>
                {showNav && <Nav/>}
            </div>
            <h1 className="header__heading">Nettan</h1>
            <div className='header__search'>
                <input className="header__search--input" type="text" placeholder='search...' onChange={ e => setSearchInput(e.target.value)}/>
                {(searchedMovies.length > 0 && searchInput)  && <SearchDrop movies={ searchedMovies }/>}
            </div>
        </header>
    )
}

export default Header