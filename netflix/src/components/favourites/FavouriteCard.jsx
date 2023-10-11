import "./FavouriteCard.css"

function FavouriteCard({ movieData }) {
    return (
        <article className="favourite_article">
            <img src={movieData.thumbnail} alt="thumbnail" className="favImg"/>
            <h3>{movieData.title}</h3>
            <p>{movieData.synopsis}</p>
        </article>
    )
}

export default FavouriteCard;
