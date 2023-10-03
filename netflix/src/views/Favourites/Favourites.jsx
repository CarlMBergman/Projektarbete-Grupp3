//import Header from "./header/Header.jsx"
import FavouriteCard from "../../components/favourites/FavouriteCard.jsx"
import "./Favourites.css"

function Favourites() {
    return(
        <div>
            <header></header>
            <main>
                <h4>Favourites</h4>
                <section>
                    <FavouriteCard/>
                    <FavouriteCard/>
                </section>
            </main>
        </div>
    )
}

export default Favourites