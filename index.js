const express = require('express');
const app = express();
const parser = require('body-parser');
const countriesController = require('./controllers/countriesController');
const cors = require('cors');

// const storage = multer.diskStorage({
// 	destination: '/public/images/',
// 	filename: function(req, file, callBack) {
// 		callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
// 	}
// });

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static('public'));
app.use(cors());

app.use('/countries/', countriesController);

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});