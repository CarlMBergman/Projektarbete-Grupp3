import './FilmView.css'




function FilmView() {
    return(
        <section className="filmView">

        <article className='filmView__article-left'>
           <h1>The Shawshank Redemption</h1>
         <img src='' alt="Bild" />
        </article>

        <article className='filmView__article-right'>
          <h3>Genre:Drama</h3>
         <h3>Actors: </h3> 
          <h3>Rating: R</h3>
         <h3>Year: 1994</h3>
         <h3>Synopsis</h3>
         <div className='ptag'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iusto rerum sapiente modi ea amet delectus laudantium fugit repellendus, saepe accusamus adipisci inventore pariatur dignissimos deserunt voluptates placeat voluptate blanditiis.</p></div>
         </article>


     </section>
        

    )
}

export default FilmView