import React from "react";
import "./FavouriteCard.css"

function FavouriteCard({ movieData }) {
    return (
        <div>
            <article className="favourite_article">
                <img src={movieData.thumbnail} alt="thumbnail" />
                <h3>{movieData.title}</h3>
                <p>{movieData.synopsis}</p>
            </article>
        </div>
    )
}

export default FavouriteCard;
