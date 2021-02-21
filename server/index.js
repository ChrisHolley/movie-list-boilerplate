const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const morgan = require('morgan');
const Movie = require('../database/movie.js');

app.use(express.json());
app.use(express.static('public'));
app.use(morgan('tiny'));

app.get('/api/movies', (req, res) => {
  Movie.find()
    .then((data) => {
      res.send(data);
      res.sendStatus(200);
    })
})


app.get('/asdf', (req, res) => {
  res.send('hi there asdf')
})

app.listen(PORT, () => {
  console.log(`Express Server listening on port: ${PORT}`);
})