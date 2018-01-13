var db = require('../config/config');
// var ObjectId = require('mongodb').ObjectId;
var Schema = db.mongoose.Schema;

var comicSchema = new Schema({
  publisher: String,
  title: String,
  volumeNumber: String,
  issueNumber: String,
  releaseDate: String,
  notes: String
})

var Comics = db.mongoose.model('Comic', comicSchema);

var insert = (req, res) => {
  let comic = {
    publisher: req.body.publisher,
    title: req.body.title,
    volumeNumber: req.body.volumeNumber,
    issueNumber: req.body.issueNumber,
    releaseDate: req.body.releaseDate,
    notes: req.body.notes}

  Comics.find(comic)
    .exec( (error, result) => {
      if (error) {throw error;}
      //if comic was not found
      if (!result.length) {
        let newComic = new Comics(comic);
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