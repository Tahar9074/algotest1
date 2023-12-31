import MovieCard from "./MovieCard"

const MovieList=({movies})=>{
    console.log(movies)
    return (
        <div  style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}>
         {
             movies.map((el)=>(
                <MovieCard el={el} />
             ))
         }
        </div>
    )
    }
    export default MovieList