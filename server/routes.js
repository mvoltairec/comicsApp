var express = require('express');
var router = express.Router();


router.get('/test', function(req, res, next){
  res.status(200).send('test');
});

router.post('/comics/add', (req, res) => {
  console.log('received request from client', req.body);
  res.status(200).send(req.body);
});

module.exports = router;
