import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{

  /* We can check what type we are receiving from parent
   * isRequired: we can check if it is required or not
   */
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }

  render(){
    return(
      <div>
        <MoviePoster poster={this.props.poster} />
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}


class MoviePoster extends Component {

  static propTypes = {
    poster: PropTypes.string.isRequired
  }

  render(){
    return(
      <img src={this.props.poster} />
    )
  }
}

export default Movie
