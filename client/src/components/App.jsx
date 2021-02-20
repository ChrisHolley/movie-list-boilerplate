import React from 'react';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const App = (props) => (
  <div>
    <ul>
    {movies[0].title}
    {movies.map((movie, idx) => (
      <li>
        {movie.title}
      </li>
    ))}
    </ul>
  </div>
);

export default App;