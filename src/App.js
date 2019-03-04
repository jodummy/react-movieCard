import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

const moviesTitle =[
  "심슨",
  "마지",
  "바트",
  "리사",
  "메기"
]

const movieImg= [
"http://m.photoviewer.naver.com/blog?listUrl=https%3A%2F%2Fm.blog.naver.com%2FPostView.nhn%3FblogId%3Dffung347%26logNo%3D50041886878&imgId=17&host=https%3A%2F%2Fm.blog.naver.com%2Fphotoviewer&historyBack=true&blogId=ffung347&logNo=50041886878#main/17",
"http://m.photoviewer.naver.com/blog?listUrl=https%3A%2F%2Fm.blog.naver.com%2FPostView.nhn%3FblogId%3Dffung347%26logNo%3D50041886878&imgId=59&host=https%3A%2F%2Fm.blog.naver.com%2Fphotoviewer&historyBack=true&blogId=ffung347&logNo=50041886878#main/59",
"http://m.photoviewer.naver.com/blog?listUrl=https%3A%2F%2Fm.blog.naver.com%2FPostView.nhn%3FblogId%3Dffung347%26logNo%3D50041886878&imgId=1&host=https%3A%2F%2Fm.blog.naver.com%2Fphotoviewer&historyBack=true&blogId=ffung347&logNo=50041886878#main/1",
"http://m.photoviewer.naver.com/blog?listUrl=https%3A%2F%2Fm.blog.naver.com%2FPostView.nhn%3FblogId%3Dffung347%26logNo%3D50041886878&imgId=53&host=https%3A%2F%2Fm.blog.naver.com%2Fphotoviewer&historyBack=true&blogId=ffung347&logNo=50041886878#main/53",
"http://m.photoviewer.naver.com/blog?listUrl=https%3A%2F%2Fm.blog.naver.com%2FPostView.nhn%3FblogId%3Dffung347%26logNo%3D50041886878&imgId=57&host=https%3A%2F%2Fm.blog.naver.com%2Fphotoviewer&historyBack=true&blogId=ffung347&logNo=50041886878#main/57"





]

class App extends Component {
  render() {
    return (
      <div id="app">
        <Movie title={moviesTitle[0]} poster={movieImg[0]}/>
        <Movie title={moviesTitle[1]} poster={movieImg[1]}/>
        <Movie title={moviesTitle[2]} poster={movieImg[2]}/>
        <Movie title={moviesTitle[3]} poster={movieImg[3]}/>
        <Movie title={moviesTitle[4]} poster={movieImg[4]}/>
      </div>
    );
  }
}

export default App;
