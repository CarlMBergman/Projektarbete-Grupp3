import React, { useState, useEffect } from "react";
import FavouriteCard from "../../components/favourites/FavouriteCard.jsx";
import Header from "../../components/header/Header.jsx";
import "./Favourites.css"

function Favourites() {
    const [favouriteMovies, setFavouriteMovies] = useState([]);

    useEffect(() => {
        function getMovies() {
            let data = JSON.parse(sessionStorage.getItem("savedMovies"));
            setFavouriteMovies(data)
        }
        getMovies();
    }, []);

    console.log(favouriteMovies);

    return (
        <div>
            <Header />
            <main>
                <h4>Favourites</h4>
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
