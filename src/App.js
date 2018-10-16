import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js'


/* an array for title objects and image link objects */

const movies = [
  {
    title: "Matrix",
    poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
  },
  {
    title: "Beauty Inside",
    poster: "https://pds.joins.com/news/component/htmlphoto_mmdata/201508/04/htm_20150804173259c010c021.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/4/48/Old_Boy.jpg/250px-Old_Boy.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
  }
]


class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}

        /*
         * React needs to know which element on the array
         * so we have to give it a unique key
         */

      </div>
    );
  }
}

export default App;
