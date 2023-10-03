import { useNavigate } from "react-router-dom"
import Header from "../../components/header/Header";

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
            <Header/>
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