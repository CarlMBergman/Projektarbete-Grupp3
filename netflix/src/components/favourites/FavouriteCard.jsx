import { useState, useEffect } from "react";
import "./FavouriteCard.css"

function FavouriteCard() {

    const [movieData, setMovieData] = useState([])

    useEffect(() => {
        function getMovie() {
            let data = JSON.parse(sessionStorage.getItem("savedMovies"));
            console.log(data);
            setMovieData(data);
        }
        getMovie();
    }, []);

    return (
        <div>
            <article className="favourite_article">
                <img src={movieData.thumbnail} alt="thumbnail"/>
                <h3>{movieData.title}</h3>
                <p>{movieData.synopsis}</p>
            </article>
        </div>
    )
}

export default FavouriteCard