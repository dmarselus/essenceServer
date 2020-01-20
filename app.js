const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
	res.send('we are home');
});

app.get('/posts', (req, res) => {
	res.send('we are on posts');
});

//connect to db
mongoose.connect(
	'mongodb+srv://admin:admin@cluster0-8d3rr.mongodb.net/test?retryWrites=true&w=majority',
	// process.env.DB_CONNECTION,
	{ useNewUrlParser: true },
	() => {
		console.log('connected on mongoose');
	}
);

//start listening
app.listen(process.env.PORT || 3000);

app.use((req, res, next) => {
	res.status(200).json({
		message: 'it works'
	});
});

module.exports = app;
