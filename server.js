const http = require('http');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const hostname = '127.0.0.1';
const port = 3000;
const url = 'mongodb+srv://admin:admin@cluster0-8d3rr.mongodb.net/test?retryWrites=true&w=majority';

// Database Name
const dbName = 'essence';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
	assert.equal(null, err);
	console.log('Connected successfully to server');
	let arr = [];
	const db = client.db(dbName);
	const test = db.collection('users').find();
	test.forEach(function(item, err) {
		console.log(item);
	});
	// console.log(arr);

	// db.collectionNames('users', function(err, items) {
	// 	console.log(items);
	// });

	client.close();
});

// const server = http.createServer((req, res) => {
// 	res.statusCode = 200;
// 	res.setHeader('Content-Type', 'text/plain');
// 	res.end('Hello World');
// });

// server.listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port}/`);
// });
