const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});