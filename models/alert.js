var mongoose = require('mongoose');

var schema = mongoose.Schema({
	status: String,
	message: String,
	users: {
		type: mongoose.Schema.ObjectId,
		ref: 'User'
	}
});

var Alert = mongoose.model('Alert', schema);
module.exports = Alert;