import './Categories.css'
import { Category } from '../../components/category/Category'
import Header from '../../components/header/Header'

function Categories() {
    return(
        <div>
            <header>
                < Header/>  
            </header>
            <main className="categories">
                <Category />
            </main>
        </div>
    )
}

export default Categories