var db = require('../config/db');

  var addComic = (req, res) => {

    let comic = {
      publisher: req.body.publisher,
      title: req.body.title,
      volumeNumber: req.body.volumeNumber,
      issueNumber: req.body.issueNumber,
      releaseDate: req.body.releaseDate,
      notes: req.body.notes
    };

    console.log('what is db.publishers when addComic is called', db.publishers);
    // return db.comics.findAll({
    //   include: [{ model: db.publishers, 
    //       where: { name: comic.publisher }
    //       }]
    //     }).then(result => {
    //       console.log('result from calling findAll of comics in db', result);
    //       res.send(result);
    //     })

  //     model: db.publishers,
  //    as: 'publisher'}
    return db.comics.findOrCreate({ where: {
      publisher_id:   db.publishers.id, title: req.body.title},
      include: [ db.publishers ]
      }).spread((comix, created) => {
      console.log('what is comix', comix);
    res.send(created);
  });
  console.log('Checking the publisher attributes', Object.keys(db.publishers.rawAttributes));
  // db.comics.create({
  //     title: req.body.title,
  //     volumeNumber: req.body.volumeNumber,
  //     issueNumber: req.body.issueNumber,
  //     releaseDate: req.body.releaseDate,
  //     notes: req.body.notes,
  //     publisher: {
  //       name: 'Marvel'
  //     }
  // }, {
  //   include: [ {
  //     model: db.publishers,
  //    as: 'publisher'}]
  // }).then(results => {
  //   console.log('Checking results', results);
  //   res.send(results);
  // })
};

exports.addComic = addComic;