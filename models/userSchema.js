const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	profile: String,
	movies: [
		{
			id: Number,
			comment: String,
			rating: mongoose.Types.Decimal128
		}
	]
});

module.exports = mongoose.model('users', userSchema);
