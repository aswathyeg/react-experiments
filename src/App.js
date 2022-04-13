import React, { useState } from 'react';
import MovieList from './components/sendingHttp/MovieList';
import './App.css';
import AddMovie from './components/sendingHttp/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState(null);

  async function fetchMoviesHandler() {
    try{
      setIsLoading(true);
      setError(null);
      const response = await fetch('https://react-http-fe6ae-default-rtdb.firebaseio.com/movies.json');
      if (!response.ok) {
        throw new Error ('Something went wrong!');

      }
      const data = await response.json();
      
  
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      setIsLoading(false);
  
    }
    catch (error) {
setError(error.message);
     
    }
    setIsLoading(false);
  }
   async function addMovieHandler(movie){
     const response= await fetch('https://react-http-fe6ae-default-rtdb.firebaseio.com/movies.json',{
        method : 'POST',
        body : JSON.stringify(movie),
        headers : {
          'Content-Type' : 'application/json'
        }
      }
      );
      const data = await response.json();
      //console.log (data);
    }

  return (
    <React.Fragment>
       <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
       {!isLoading && movies.length > 0 && <MovieList movies={movies} />} 
       {!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
       {!isLoading && error && <p>{error}</p>}
       {isLoading && <p>Loading..</p>}
      </section>
    </React.Fragment>
  );
}

export default App;