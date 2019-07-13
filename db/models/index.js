const mongoose = require('mongoose');
// mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/travel_db', {
	keepAlive: true,
	useMongoClient: true
});
// module.exports.User = require('./userModel');
