/**
 * Cat App Index File
 * 
 * Serves a an application that loads a random cat gif everyime it's loaded.
 * Cos everyone loves cats, right? NO!
 * But anyways here's a simple server.
 * 
 * Credits for all the Gifs go to this repository
 * https://github.com/ibarlow/chilloutandwatchsomecatgifs/
 * which gave me a file catgifs.txt with a lot of cat gifs inside
 */

const express = require('express');
const fs = require('fs');
const cats = require('./cats');

const indexTemplate = fs.readFileSync('./templates/index.html', 'utf-8');

const app = express();

const PORT = process.env.PORT || 3000;

function randomCat() {
    return cats[Math.floor(Math.random() * cats.length)];
}

function renderTemplate(catUrl) {
    return indexTemplate.replace(/(\$1)/g, catUrl);
}

app.get('/', function (req, res, next) {
    const cat = randomCat();
    res.send(renderTemplate(cat));
});

app.listen(PORT, function (error) {
    console.log('Server is listening on PORT:' + PORT);
})