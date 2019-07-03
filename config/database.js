const db = require('mongoose');
const Schema = db.Schema;

const database = new Schema({
    title: String,
    body: String,
    link: String,
    note: String
});

var Article = mongoose.model("Article", database);

module.exports = Article

export default Article