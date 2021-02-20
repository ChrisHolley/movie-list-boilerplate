import React from 'react';
import Movie from './Movie.jsx';
import SearchBar from './SearchBar.jsx';

var movies = [
  {
    title: 'Mean Girls',
  },
  {
    title: 'Hackers',
  },
  {
    title: 'Sunshine',
  },
  {
    title: 'Ex Machina',
  }
];

const App = (props) => (
  <div>
    <SearchBar />
    <ul>
    {movies.map((movie, idx) => (
        <li key={idx}>
          <Movie movie={movie}/>
        </li>
    ))}
    </ul>
  </div>
);

export default App;