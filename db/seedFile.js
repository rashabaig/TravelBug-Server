const CountryModel = require('./models/countryModel');

const countryData = require('../db/countries.json');

CountryModel.remove({}).then(() => {
	countryData.map((country) => {
		CountryModel.create(country).then((newCountry) => {
			console.log(newCountry);
		});
	});
});
