const db = require('mongoose');
const Schema = db.Schema;

const noteSchema = new Schema({
    title: String,
    body: String,
    link: String,
    note: String
});

var Article = mongoose.model("Article", noteSchema);

module.exports = Article

export default Article