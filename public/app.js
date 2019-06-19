const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const express_handlebars = require('express-handlebars')

const app = express()

app.get('/scrape', (req, res) => {
    axios.get('https://dev.to/')
  .then(({ data }) => {
    const $ = cheerio.load(data)
    $('.single-article').each((i, elem) => {
        const title = $(this).find('h3').text()
        console.log(title)
    })
  })
  .catch(e => console.log(e))
})