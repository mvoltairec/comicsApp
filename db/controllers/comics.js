var model = require('../models/comics');

// var addComic = (req, res) => {
//   let comic = {
//     publisher: req.body.publisher,
//     title: req.body.title,
//     volumeNumber: req.body.volumeNumber,
//     issueNumber: req.body.issueNumber,
//     releaseDate: req.body.releaseDate,
//     notes: req.body.notes}

//   model.Comics.find(comic)
//     .exec( (error, result) => {
//       if (error) {throw error;}
//       //if comic was not found
//       if (!result.length) {
//         let newComic = new model.Comics(comic);
//         newComic.save( (err, savedComic) => {
//           if (err) { 
//             console.log('error trying to save the comic', err);
//             res.status(500).send(err); 
//           } else {
//           console.log('succesfully saved to the db', savedComic);
//           res.status(200).send(savedComic);
//           }
//         });
//       } else {
//         res.send('this comic was already found in the database');
//       }
//     })
//   };

// exports.addComic = addComic;