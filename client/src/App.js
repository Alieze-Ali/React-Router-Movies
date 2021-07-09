import React, { useState, useEffect } from 'react';
import axios from 'axios';
// importing React Router imports (Route, Link & Switch)
import { Route } from 'react-router-dom';

import Alieze from './Alieze';




// adding Components for routes
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          console.log(response.data)
          //passing in movie list from response.data
          setMovieList(response.data)
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
   
    <div>
      <SavedList list={[ /* This is stretch */]} />

      {/* <div>Replace this Div with your Routes</div> */}
     
      {/* making a path to homepage that will display all the movies */}
      <Route exact path="/"> <MovieList movies={ movieList }/> </Route>
      <Route path="/movies/:id"><Movie movie={ movieList }/></Route>
      <Route path="/me"><Alieze /></Route>
    </div>
    
  );
    
}
