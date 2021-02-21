import React from 'react';
import Movie from './Movie.jsx';
import SearchBar from './SearchBar.jsx';
const axios = require('axios');

var movies = [
  // {
  //   title: 'Mean Girls',
  // },
  // {
  //   title: 'Hackers',
  // },
  // {
  //   title: 'Sunshine',
  // },
  // {
  //   title: 'Ex Machina',
  // },
  // {
  //   title: 'Machete'
  // }
];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
    this.searchUpdater = this.searchUpdater.bind(this);
  }

  componentDidMount() {

    this.setState({ movies })
    axios.get('/api/movies')
      .then((res) => {
        console.log('get req from api movies', res.data[0])
        movies = res.data;
        this.setState( {movies} )
      })
  }

  searchUpdater(searchBarValue) {
    // console.log('searchUpdater:',searchBarValue, 'length', searchBarValue.length)

    if (searchBarValue.length === 0) {
      // console.log('null search if is running')
      this.setState( {movies} )
    } else  {
      this.setState(
        {
          movies: movies.filter((movie) => {
            // console.log(movies);
            // console.log(movie.title.slice(0, searchBarValue.length), 'vs', searchBarValue)
            if (movie.title.slice(0, searchBarValue.length).toLowerCase() === searchBarValue) {
              return movie.title;
            }
          })
        }
      );
    }
  }

  filterFunc(filterValue) {
    //set state to equal output of the filter

  }

  render() {
    return (
      <div>
        <SearchBar searchUpdater={this.searchUpdater}/>
        <ul>
          {/* {console.log('this state:', this.state.movies)} */}
          {this.state.movies.map((movie, idx) => (
            <li key={idx}>
              <Movie movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;