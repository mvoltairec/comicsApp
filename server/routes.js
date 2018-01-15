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


router.get('/comics', (req, res) => {
  comicController.getAllComics(req,res)
  .then(results => {
    console.log('results from querying for comics', results)
    res.send(results);
  });
})

router.delete('/comics/:id', (req, res) => {
  console.log('req query sent to the server', req.query);
  comicController.deleteComic(req,res);
})

router.put('/comics/edit/:id', (req, res) => {
  console.log('req received from client on request to update', req.body);
  comicController.editComic(req, res);
})

module.exports = router;
