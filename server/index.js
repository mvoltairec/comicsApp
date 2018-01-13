const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/models/comic');
const comimcsApi = require('../react/src/config/config');

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
  res.status(404).redirect('https://http.cat/404')
})

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
