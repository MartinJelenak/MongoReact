const API_PORT = 5000;
const mongoose = require("mongoose");
const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
app.listen(API_PORT, () => console.log('Listening on port ' + API_PORT + '...'));

// DB connection ----------------------------------------------------------
mongoose
	.connect("mongodb://localhost:27017/titledb", { useNewUrlParser: true })
	.then(() => console.log("Connected to MongoDB!"))
	.catch(error => console.error("Could not connect to MongoDB... ", error));
// -----------------------------------------------------------------------------


// Mongoose schemas ------------------------------------------------------
const titleSchema = new mongoose.Schema({
	nameTopic: String,
	prologTopic: String,
	bodyTopic: String
});
const Title = mongoose.model("Title", titleSchema);
// -----------------------------------------------------------------------------

app.get('/api/title', (req, res) => {
	Title.find({}, function (err, titles) {
		if (err) {
			res.send('somethink wrong!!!')
			next();
		}
		res.json(titles)
	})
})


// POST requests -------------------------------------------------------------
app.post('/api/title', (req, res) => {
	Title.create(req.body)
		.then(result => { res.json(result) })
		.catch(err => { res.send("Nepodařilo se uložit film!") });
});