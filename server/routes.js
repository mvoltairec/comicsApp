var express = require('express');
var router = express.Router();
var pubController = require('../db/controllers/publishers');
var comicController = require('../db/controllers/comics');
var db = require('../db/config/db');
router.get('/test', function(req, res, next){
  res.status(200).send('test');
});

router.post('/comics/add', (req, res) => {
  // console.log('received request from client', req.body);
  comicController.addComic(req, res);

});

router.post('/test/addPub', (req,res) => {
  pubController.addPublisher(req,res)
  .then(() => {
    console.log('imma teapot');
  })
});

router.get('/publishers', (req,res) => {
  pubController.getAllPublishers(req, res)
  .then(results => {
    console.log('results from querying for publishers', results)
    res.send(results);
  })
})

module.exports = router;
