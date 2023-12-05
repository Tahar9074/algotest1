
const MovieCard=({el})=>{
    return(
        <div className="screen-2">
      <div className="top-image">
        <img src={el.image} alt="poster" />
      </div>

      <div className="main-heading">
        <h1 className="title">{el.name}</h1>
        <div className="row">
          

          <span>{el.date}</span>
          <span className="r">Free</span>
          <span>{el.seasons}</span>
          <span className="hd">HD</span>
        </div>
      </div>

      <div className="categories">
        <a href="#" className="active">
          Description
        </a>
        <a href="#">Episodes</a>
        <a href="#">Reviews</a>
      </div>

      <p className="description">{el.description}</p>
      <div className="btn-play">
        <span>
          {" "}
          <ion-icon className="icon" name="play"></ion-icon>{" "}
        </span>
        Play
      </div>
    </div>
    )
}
export default MovieCard