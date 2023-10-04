import FavouriteCard from "../../components/favourites/FavouriteCard.jsx"
import Header from "../../components/header/Header.jsx"
import "./Favourites.css"

function Favourites() {
    return(
        <div>
            <Header/>
            <main>
                <h4>Favourites</h4>
                <section>
                    <FavouriteCard/>
                </section>
            </main>
        </div>
    )
}

export default Favourites