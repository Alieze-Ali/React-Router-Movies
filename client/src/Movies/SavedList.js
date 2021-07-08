import React from 'react';
//importing useHistory - ??? figure out what this is doing ???
import { useHistory } from 'react-router';

export default function SavedList(props) {
  //created const 
  const history = useHistory();

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      {/* useHistory is checking browser history, and this onClick sends user home url */}
      <div className="home-button" onClick={ () => history.push('/')}>Home</div>
    </div>
  );
}
