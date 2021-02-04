import React from 'react';
import Movie from './Movie.jsx';
import movies from '../fakeData/movieData.js'

// const MovieList = () => (
//   <div>
//     {movies.map((movie) => (
//        <div key={movie.title}>
//         <Movie movie={movie} />
//         </div>
//     ))}
//   </div>
// );

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movies: movies}

  }

  render() {
    return (
      <div>
          {this.state.movies.map((movie) => (
            <div key={movie}>
              <Movie movie={movie}/>
            </div>
          ))}
      </div>
    )
  }
}

export default MovieList;