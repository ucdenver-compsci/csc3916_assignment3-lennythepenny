var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(process.env.DB);

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    releaseDate: Date,
    genre: {
      type: String,
      enum: [
        'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller', 'Western', 'Science Fiction'
      ],
    },
    actors: [{
      actorName: String,
      characterName: String,
    }],
  });
  

// return the model
const MovieModel = mongoose.model('Movie', MovieSchema);
module.exports = mongoose.model('Movie', MovieSchema);