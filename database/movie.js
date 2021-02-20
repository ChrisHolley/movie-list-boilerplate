const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies01', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('movies01 database connected')
});

const movieSchema = new mongoose.Schema({
  title: String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

