const express = require('express');
const router = express.Router();
const CountryModel = require('../db/models/countryModel');

router.get('/all', (req, res) => {
	CountryModel.find({}).then((allcountries) => {
		res.json(allcountries);
	});
});
//works

router.get('/:name', (req, res) => {
	let countryName = req.params.name;
	CountryModel.findOne({ name: countryName }).then((country) => {
		res.json(country);
	});
});
//works

router.post('/', (req, res) => {
	let newCountry = req.body;
	CountryModel.create(newCountry).then((newCountry) => {
		res.json(newCountry);
		newCountry.save();
	});
});
//works

router.put('/newAttraction/:countryID', (req, res) => {
	CountryModel.update({ _id: req.params.countryID }, { $push: { attractions: req.body } }).then((updatedCountry) => {
		res.json(updatedCountry);
	});
});
//doesn't work yet
router.delete('/:id', (req, res) => {
	CountryModel.deleteOne({ _id: req.params.id }).then((deleted) => {
		res.json(deleted);
	});
});
//works
module.exports = router;
