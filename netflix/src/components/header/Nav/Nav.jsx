import './Nav.css'
import { useNavigate } from "react-router-dom"

function Nav() {
    const navigate = useNavigate()

    return (
        <nav className='nav'>
            <button className='nav__btn' onClick={() => navigate('/Projektarbete-Grupp3/')}>HOME</button>
            <button className='nav__btn' onClick={() => navigate('/Projektarbete-Grupp3/categories')}>CATEGORIES</button>
            <button className='nav__btn' onClick={() => navigate('/Projektarbete-Grupp3/favourites')}>FAVOURITES</button>
        </nav>
    )
}

export default Nav