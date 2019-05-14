const express = require('express');
const app = express();
const parser = require('body-parser');
const countriesController = require('./controllers/countriesController');

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static('public'));

app.use('/countries/', countriesController);

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
