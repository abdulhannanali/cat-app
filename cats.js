const fs = require('fs');
const catsGifs = readCats();

function readCats() {
    const catsFile = fs.readFileSync('./catgifs.txt', 'utf-8');
    return catsFile.split('\n').filter(line => {
        return line.trim().length && line.indexOf('#') === -1
    })
}

module.exports = catsGifs;