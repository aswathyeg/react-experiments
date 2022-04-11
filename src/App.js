import React, { useState } from 'react';
import './App.css';
import './useContextExample/index.css';
import ForwardCounting from './customHooks/ForwardCounting';
import BackwardCounting from './customHooks/BackwardCounting';
import MovieList from './components/sendingHttp/MovieList';

function App() {
  const [movies,setMovies] = useState([]);
  function fetchMoviesHandler(){
    
    fetch('https://swapi.dev/api/films/').
    then((response) => {
      return response.json();

    })
    .then ((data)=>{
      const transformedMovies = data.results.map(movieData) => {

        return{
          id:movieData.episode_id,
          title:movieData.title,
          openingText:movieData.opening_crawl,
          releaseDate:movieData.release_date,

        };
      });
      setMovies(transformedMovies);
    });
  }
  
  return (
   <React.Fragment>
     <section>
       <button onClick={fetchMoviesHandler}>
         Fetch movies
       </button>
     </section>
     <section>
       <MovieList movies={movies}/>
     </section>
     
     </React.Fragment>
  );
  

}

export default App;