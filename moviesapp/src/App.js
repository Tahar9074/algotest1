import { useState } from 'react';
import './App.css';
import { moviesData } from "./movieData";
import MovieList from './MovieList';

function App() {
  const[movies,setMovies]=useState(moviesData)
  console.log(movies)
  return (
    <>
    <header>
  <h1 style={{
    color: '#007bff',
    textAlign: 'center',
    textShadow: '2px 2px 2px black',
    backgroundColor: '#130c58',
    minHeight: "20vh",
    display : "flex",
    justifyContent: "center" ,
    paddingTop: "50px",
    fontfamily: 'Arsenal',
    fontsize: "22px" ,
  }}> Silver Screen Haven</h1>
</header>

    <div className="wrapper">
     <MovieList movies={movies} />
    </div>
    </>
  );
}

export default App;
