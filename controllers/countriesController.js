const express = require('express');
const router = express.Router();
const CountryModel = require('../db/models/countryModel');
const multer = require('multer');
const path = require('path');

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

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, __dirname + '/../public/images/');
	},
	filename: function(req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('images'), function(req, res, next) {
	console.log(req.body);

	let country = {
		name: req.body.name,
		popularCities: req.body.popularCities,
		attractions: req.body.attractions,
		popularFoods: req.body.popularFoods,
		languagesSpoken: req.body.languagesSpoken,
		climate: req.body.climate,
		activities: req.body.activities,
		images: `/images/${req.file.filename}`
	};

	CountryModel.create(country).then((country) => {
		res.redirect('back');
		country.save();
	});
});

router.put('/newAttraction/:countryID', (req, res) => {
	console.log(req.body);
	CountryModel.updateOne(
		{ _id: req.params.countryID },
		{ $push: { attractions: req.body.attractions } }
	).then((updatedCountry) => {
		res.json(updatedCountry);
	});
});

router.put('/newCity/:countryID', (req, res) => {
	console.log(req.body);
	CountryModel.updateOne(
		{ _id: req.params.countryID },
		{ $push: { popularCities: req.body.popularCities } }
	).then((updatedCountry) => {
		res.json(updatedCountry);
	});
});

router.put('/newFood/:countryID', (req, res) => {
	console.log(req.body);
	CountryModel.updateOne(
		{ _id: req.params.countryID },
		{ $push: { popularFoods: req.body.popularFoods } }
	).then((updatedCountry) => {
		res.json(updatedCountry);
	});
});
router.put('/newLanguage/:countryID', (req, res) => {
	console.log(req.body);
	CountryModel.updateOne(
		{ _id: req.params.countryID },
		{ $push: { languagesSpoken: req.body.languagesSpoken } }
	).then((updatedCountry) => {
		res.json(updatedCountry);
	});
});
router.put('/changeClimate/:countryID', (req, res) => {
	console.log(req.body);
	CountryModel.updateOne({ _id: req.params.countryID }, { climate: req.body.climate }).then((updatedCountry) => {
		res.json(updatedCountry);
	});
});

router.put('/newActivity/:countryID', (req, res) => {
	console.log(req.body);
	CountryModel.updateOne(
		{ _id: req.params.countryID },
		{ $push: { activities: req.body.activities } }
	).then((updatedCountry) => {
		res.json(updatedCountry);
	});
});
//works
router.delete('/:id', (req, res) => {
	CountryModel.deleteOne({ _id: req.params.id }).then((deleted) => {
		res.json(deleted);
	});
});
//works
module.exports = router;
