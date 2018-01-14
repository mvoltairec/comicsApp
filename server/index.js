const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/config/db.js');
const env = require('../db/config/env');

const app = express();
const PORT = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react/dist'));

app.use('/', require('./routes'));



// const getIssuesAscending = comimcsApi.URL + '/issues/?api_key=' + comimcsApi.API_KEY + '&sort=store_date:asc&format=json';

// app.get(getIssuesAscending, (req, res) => {
// 	res.send();
// })

app.use(function (req, res, next) {
  res.status(404).send('404 not found')
})

db.sequelize.sync({force: true}).then(() => {
  app.listen(PORT, () => {
	  console.log(`listening on port ${PORT}`);
  });
});