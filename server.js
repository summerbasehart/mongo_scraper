const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const cheerio = require('cheerio')
const axios = require('axios')

const app = express()
const config = require('./config/database')


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/scrape', (req, res) => {
    axios.get('https://dev.to/')
  .then(({ data }) => {
    const $ = cheerio.load(data)
    let newArr = []
    $('.single-article').each((i, elem) => {
       console.log($(this))
        newArr.push({
          title: $(this).children('.index-article-link').children('.content').children('h3').text()
        })
        // const title = $(this).find('h3').text()
        // console.log(title)
    })
    console.log(newArr)
    res.status(200)
  })
  .catch(e => console.log(e))
})

mongoose.Promise = Promise;
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/devarticles")
  .then( result => {
    app.listen(8000, () => {
      console.log('app is listening on port 8000')
    })
    console.log(`Connected to database`);
  })
  .catch(err => console.log('There was an error with your connection:', err));
