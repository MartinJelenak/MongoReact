const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/moviesdb', { useNewUrlParser: true })
	.then(() => console.log('Connected to MongoDB!'))
	.catch(error => console.error('Could not connect to MongoDB... ', error));


const ArticleSchema = new mongoose.Schema({
	title: String,
	prolog: String,
	article: String,
	approved: Boolean,
	dateAdded: {
		type: Date,
		default: Date.now
	}
});


const Article = mongoose.model('Article', ArticleSchema);