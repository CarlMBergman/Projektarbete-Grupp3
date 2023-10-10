import { useState, useEffect } from "react";
import FavouriteCard from "../../components/favourites/FavouriteCard.jsx";
import Header from "../../components/header/Header.jsx";
import "./Favourites.css"

function Favourites() {
    const [favouriteMovies, setFavouriteMovies] = useState([]);

    useEffect(() => {
        function getMovies() {
            let data = JSON.parse(sessionStorage.getItem("savedMovies"));
            if (data !== null) {
                setFavouriteMovies(data);
            }
        }
        getMovies();
    }, []);

    return (
        <div>
            <Header />
            <main className="favourites_main">
                <h2>Favourites</h2>
                <section>
                    {favouriteMovies.map((movie, index) => (
                        <FavouriteCard key={index} movieData={movie} />
                    ))}
                </section>
            </main>
        </div>
    )
}

export default Favourites;
