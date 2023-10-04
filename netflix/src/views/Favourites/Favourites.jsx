import { useState } from "react";
import FavouriteCard from "../../components/favourites/FavouriteCard.jsx"
import Header from "../../components/header/Header.jsx"
import "./Favourites.css"


function Favourites() {

    const [favouriteCards, setFavouriteCards] = useState([]);

    const handleAddToFavorites = () => {
        const newCard = <FavouriteCard key={favouriteCards.length} />;
        setFavouriteCards([...favouriteCards, newCard]);
    }

    return(
        <div>
            <Header/>
            <main>
                <h4>Favourites</h4>
                <section>
                    {favouriteCards}
                    <FavouriteCard/>
                </section>
            </main>
        </div>
    )
}

export default Favourites