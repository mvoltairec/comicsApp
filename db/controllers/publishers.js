var db = require('../config/db');

var addPublisher = (req, res) => {
  // add something here to check if already in the databse?
  console.log('what is the req.body', req.body);
  return db.publishers.create({name: req.body.name})
  .then(publisher => {
    console.log('created publisher, check out me metadata', publisher.dataValues)
    res.send(publisher)
  }, error => console.log('an error when trying to save publisher to db', error));
}

var getAllPublishers = (req, res) => {
  return db.publishers.findAll({})
}

exports.addPublisher = addPublisher;
exports.getAllPublishers = getAllPublishers;
