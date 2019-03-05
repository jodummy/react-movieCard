import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

const movies = [
  {
    title: "심슨",
    poster: "이미지 미정"
  }, {
    title: "마지",
    poster: "이미지 미정"
  }, {
    title: "바트",
    poster: "이미지 미정"
  }, {
    title: "리사",
    poster: "이미지 미정"
  }, {
    title: "메기",
    poster: "이미지 미정"
  }
]

class App extends Component {
  render() {
    return (
      <div id="app">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />
        })}

      </div>
    );
  }
}

export default App;
