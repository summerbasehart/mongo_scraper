const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const db = require('mongoose')
const express_handlebars = require('express-handlebars')

const app = express()
app.get('/scrape', (req, res) => {
    axios.get('https://dev.to/')
  .then(({ data }) => {
    const $ = cheerio.load(data)
    // console.log($)
    // const stackArr = []
    $('.single-article').each((i, elem) => {
        const title = $(this).find('h3').text()
        console.log(title)
    //   stackArr.push({
    //     title: $(elem).children('h3').children('a.question-hyperlink').text(),
    //     link: `https://stackoverflow.com${$(elem).children('h3').children('a.question-hyperlink').attr('href')}`
    //   })
    })
    // db.stacks.insert(stackArr, _ => console.log('stacks added!'))
  })
  .catch(e => console.log(e))
})

app.listen(8000, () => {
    console.log('app is listening on port 8000')
})