import './Nav.css'
import { useNavigate } from "react-router-dom"

function Nav() {
    const navigate = useNavigate()

    return (
        <nav className='nav'>
            <button className='nav__btn' onClick={() => navigate('/')}>HOME</button>
            <button className='nav__btn' onClick={() => navigate('/categories')}>CATEGORIES</button>
            <button className='nav__btn' onClick={() => navigate('/favourites')}>FAVOURITES</button>
        </nav>
    )
}

export default Nav