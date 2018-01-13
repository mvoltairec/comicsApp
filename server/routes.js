var express = require('express');
var router = express.Router();
// var comicController = require('../db/controllers/comic');

router.get('/test', function(req, res, next){
  res.status(200).send('test');
});

router.post('/comics/add', (req, res) => {
  console.log('received request from client', req.body);
  // comicController.addComic(req, res);
});

module.exports = router;
