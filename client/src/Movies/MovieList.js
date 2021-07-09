import React from 'react';
// must import Link
import { Link } from 'react-router-dom';

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
// adding id functionality 
function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;

  return (
    <div className="movie-card">
      {/* this is making the app a link  */}
      <Link to={`movies/${id}`}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      </Link>
    </div>
  );
}
