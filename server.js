const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')

const app = express()
const config = require('./config/database')

mongoose.Promise = Promise;
mongoose
  .connect(config.database)
  .then( result => {
    console.log(`Connected to database`);
  })
  .catch(err => console.log('There was an error with your connection:', err));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});

app.listen(8000, () => {
    console.log('app is listening on port 8000')
})