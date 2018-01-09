const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');

const app = express();
const PORT = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react/dist'));

// sample route
app.get('/api/sample', (req, res) => {
	db.getAll((error, results) => {
		if (error) throw error; 
		res.send(results)
	})
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
