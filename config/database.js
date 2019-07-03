const db = require('mongoose');
const Schema = db.Schema;

const database = new Schema({
    title: String,
    body: String,
    link: String,
    note: String
});

var Article = db.model("Article", database);

module.exports = Article