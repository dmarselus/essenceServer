const express = require('express');
const router = express.Router();
const userSchema = require('../models/userSchema');

router.get('/', (req, res) => {
	res.send('we are on posts');
});

router.post('/', (req, res) => {
	const post = new userSchema({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email
	});

	post
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json({ message: err });
		});
});

module.exports = router;
