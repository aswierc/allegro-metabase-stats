const express = require('express');
const PORT = process.env.PORT || 5000;
const offerQuery = require('./src/application/query/offersQuery')

let app = express();

app.get('/', function (req, res) {
    res.send('Pong')
})

app.get('/offers', function (req, res) {
    offerQuery.getAll().then(entries => {
        res.json(entries)
    })
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
