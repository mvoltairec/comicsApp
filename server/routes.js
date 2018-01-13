var express = require('express');
var router = express.Router();
var db = require('../db/models/comic');

router.get('/test', function(req, res, next){
  res.status(200).send('test');
});

router.post('/comics/add', (req, res) => {
  console.log('received request from client', req.body);
  db.insert(req, res);
});

module.exports = router;
