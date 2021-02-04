import React from 'react';
import MovieList from './MovieList.jsx';
import MovieSearch from './MovieSearch.jsx';

const App = (props) => (
  <div>
    <p>MovieList</p>
    <div>
      <MovieSearch />
    </div>
    <div>
      <MovieList />
    </div>
  </div>
);

export default App;