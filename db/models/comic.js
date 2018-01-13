var mongoose = require('mongoose');
// var ObjectId = require('mongodb').ObjectId;
var Schema = mongoose.Schema;
mongoose.connect('mongodb://test:test@ds249707.mlab.com:49707/comicscoll');
mongoose.Promise = require('bluebird');

var comicSchema = new Schema({
  publisher: String,
  title: String,
  volumeNumber: String,
  issueNumber: String,
  releaseDate: String,
  notes: String
})

var Comics = mongoose.model('Comic', comicSchema);

var insert = (req, res) => {
  // let query = Comic.find({});
  // query.where('publisher', )
  Comics.find({
    publisher: req.body.publisher,
    title: req.body.title,
    volumeNumber: req.body.volumeNumber,
    issueNumber: req.body.issueNumber,
    releaseDate: req.body.releaseDate,
    notes: req.body.notes})
    .exec( (error, result) => {
      if (error) {throw error;}
      //if comic was not found
      if (!result.length) {
        let newComic = new Comics({
          publisher: req.body.publisher,
          title: req.body.title,
          volumeNumber: req.body.volumeNumber,
          issueNumber: req.body.issueNumber,
          releaseDate: req.body.releaseDate,
          notes: req.body.notes});
        newComic.save( (err, savedComic) => {
          if (err) { 
            console.log('error trying to save the comic', err);
            res.status(500).send(err); 
          } else {
          console.log('succesfully saved to the db', savedComic);
          res.status(200).send(savedComic);
          }
        });
      } else {
        res.send('this comic was already found in the database');
      }
    })
  };

exports.insert = insert;