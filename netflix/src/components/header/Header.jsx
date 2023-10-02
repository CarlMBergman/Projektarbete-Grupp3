import './Header.css'
import burgerMenu from '../../assets/burger.svg'

function Header() {

    return (
        <nav className="header">
            <img src={ burgerMenu } alt="" className='header__burger'/>
            <h1 className="header__heading">Nettan</h1>
            <input className="header__search" type="text" placeholder='search...'/>
        </nav>
    )
}

export default Header