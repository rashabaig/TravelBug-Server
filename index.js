// require('dotenv').config();
const express = require('express');
const app = express();
const parser = require('body-parser');
const countriesController = require('./controllers/countriesController');
const cors = require('cors');
// const errorHandler = require('./db/handlers/error');

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static('public'));
app.use(cors());

// app.use(errorHandler);
app.use('/countries/', countriesController);

// app.use(function(req, res, next) {
// 	let err = new Error('Not Found');
// 	err.status = 404;
// 	next(err);
// });

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
