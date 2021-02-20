import React from 'react';
import Movie from './Movie.jsx';

var movies = [
  {
    title: 'Mean Girls',
    id: 1
  },
  {
    title: 'Hackers',
    id: 1
  },
  {
    title: 'Sunshine',
    id: 1
  },
  {
    title: 'Ex Machina',
    id: 1
  }
];

const App = (props) => (
  <div>
    <ul>
    {movies.map((movie, idx) => (
        <li>
          <Movie movie={movie}/>
        </li>
    ))}
    </ul>
  </div>
);

export default App;