const mongoose = require('../../connection');

const CountryModel = new mongoose.Schema({
	name: String,
	popularCities: [ String ],
	attractions: [ String ],
	popularFoods: [ String ],
	languagesSpoken: [ String ],
	climate: [ String ],
	activities: [ String ],
	images: [ String ],
	imagesURL: [ String ]
});

module.exports = mongoose.model('Country', CountryModel);
