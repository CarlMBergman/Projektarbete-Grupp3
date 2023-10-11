import './Footer.css'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'

function Footer() {
const navigate = useNavigate()
const [btnText, setBtnText] = useState('Sign up!')

    return (
        <footer className='footer'>
            <article className='footer__left'>
                <h3 className='footer__header'>LINKS</h3>
                <p className='footer__link' onClick={() => navigate('/Projektarbete-Grupp3/')}>HOME</p>
                <p className='footer__link' onClick={() => navigate('/Projektarbete-Grupp3/categories')}>CATEGORIES</p>
                <p className='footer__link' onClick={() => navigate('/Projektarbete-Grupp3/favourites')}>FAVOURITES</p>
            </article>
            <article className='footer__right'>
                <h3 className='footer__header'>Sign up to our newsletter!</h3>
                <input type="text" placeholder='email'/>
                <button onClick={() => setBtnText('Thank you!')} className='footer__button'>{ btnText }</button>
            </article>
        </footer>
    )
}

export default Footer