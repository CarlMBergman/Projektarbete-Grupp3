//import Header from "./header/Header.jsx"
import FavouriteCard from "../../components/favourites/FavouriteCard.jsx"

function Favourites() {
    return(
        <div>
            <header></header>
            <main>
                <h4>Favourites</h4>
                <FavouriteCard/>
                <FavouriteCard/>
                <FavouriteCard/>
            </main>
        </div>
    )
}

export default Favourites