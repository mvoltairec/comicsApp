var db = require('../config/db');

  const addComic = (req, res) => {

    let comic = {
      publisher_id: req.body.publisher_id,
      title: req.body.title,
      volumeNumber: req.body.volumeNumber,
      issueNumber: req.body.issueNumber,
      releaseDate: req.body.releaseDate,
      notes: req.body.notes
    };

    console.log('what is coming in from client on post to addComic', comic)

    // console.log('what is db.publishers when addComic is called', db.publishers);
    // let subquery = 'SELECT id FROM publishers WHERE publishers.name=' + db.sequelize.getQueryInterface().escape(req.body.publisher);
    // return db.comics.findOrCreate(comic).spread((comix, created) => {
    //   console.log('what is comix', comix);
    

  // console.log('Checking the publisher attributes', Object.keys(db.publishers.rawAttributes));
  
  // query to insert in to the comics table;
  let query = "insert into comics (title, volume_number, issue_number, release_date, notes, publisher_id) VALUES (" 
              + db.sequelize.getQueryInterface().escape(req.body.title) + ", " + db.sequelize.getQueryInterface().escape(req.body.volume_number) 
              + ", " + db.sequelize.getQueryInterface().escape(req.body.issue_number) + ", " + db.sequelize.getQueryInterface().escape(req.body.release_date) 
              + ", " + db.sequelize.getQueryInterface().escape(req.body.notes) + ", (SELECT id from publishers WHERE publishers.id=" + db.sequelize.getQueryInterface().escape(req.body.publisher_id) +"));";
  
              db.sequelize.query(query).then( ()=> res.send() )
  
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

const editComic = (req, res) => {
  let query = "UPDATE comics SET title = " + db.sequelize.getQueryInterface().escape(req.body.title)
              + ", volume_number = " + db.sequelize.getQueryInterface().escape(req.body.volumeNumber)
              + ", issue_number = " + db.sequelize.getQueryInterface().escape(req.body.issueNumber)
              + ", release_date = " + db.sequelize.getQueryInterface().escape(req.body.releaseDate)
              + ", notes = " + db.sequelize.getQueryInterface().escape(req.body.notes)
              + ", publisher_id = " + db.sequelize.getQueryInterface().escape(req.body.publisher_id)
              + " WHERE id= " + db.sequelize.getQueryInterface().escape(req.body.id)
              + ";"
  db.sequelize.query(query).then( (results) => res.status(200).send(results));
}

const getAllComics = (req, res) => {
  return db.comics.findAll({})
}

const deleteComic = (req, res) => {
  let query = "DELETE from comics where id=" + db.sequelize.getQueryInterface().escape(req.query.id) +";";
  db.sequelize.query(query).then( (results)=> res.status(200).send(results));
}

exports.addComic = addComic;
exports.getAllComics = getAllComics;
exports.deleteComic = deleteComic;
exports.editComic = editComic;