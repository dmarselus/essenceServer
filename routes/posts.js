const express = require('express');
const router = express.Router();
const userSchema = require('../models/userSchema');

router.get('/', async (req, res) => {
	try {
		const users = await Post.find();
		res.json(users);
	} catch (err) {
		res.json({ message: err });
	}
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
