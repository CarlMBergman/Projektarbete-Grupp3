import "./FavouriteCard.css"
import FavoriteBtn from "../FavoriteBtn";

function FavouriteCard({ movieData, index }) {
    return (
        <article className="favourite_article" id={`art${index}`}>
            <img src={movieData.thumbnail} alt="thumbnail" className="favImg"/>
            <h3>{movieData.title}</h3>
            <p>{movieData.synopsis}</p>
            <FavoriteBtn place='favourite' movie={movieData} index={index}/>
        </article>
    )
}

export default FavouriteCard;
