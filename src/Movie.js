import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


// Stateless Component == Dumb Component
// So, it doesn't have function 'render', any of the lifecycle(such as componentDidMount, componentWillUpdate, etc)

function Movie({title, poster}){
  return (
    <div>
      <MoviePoster poster={poster} />
      <h1>{title}</h1>
    </div>
  )
}

function MoviePoster({poster}){
  return (
    <img src={poster} alt="Movie Poster" />
  )
}


/* We can check what type we are receiving from parent
 * isRequired: we can check if it is required or not
 */

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}

export default Movie
