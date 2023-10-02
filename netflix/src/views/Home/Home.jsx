import { useNavigate } from "react-router-dom"

function Home() {

    const navigate = useNavigate();

    function clickCat() {
        navigate('/Categories')
      }
      function clickFav() {
        navigate('/Favourites')
      }
      function clickFilm() {
        navigate('/FilmView')
      }

    return(
        <div>   
            <header>
                <h1>Title</h1>
            </header>
            <main>
                <aside>
                    <button onClick={ clickCat }>Categories</button>
                    <button onClick={ clickFav }>Favourites</button>
                    <button onClick={ clickFilm }>FilmView</button>
                </aside>
            </main>
        </div>
    )
}

export default Home