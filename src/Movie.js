import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <div>
               {/* <img src={this.props.poster} /> */}
               <a>{this.props.poster}</a>
            </div>
        );
    }
}

export default Movie