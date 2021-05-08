const express = require('express');
const PORT = process.env.PORT || 5000;
const offerQuery = require('./src/application/query/offersQuery')
const cors = require('cors')

const dotenv = require('dotenv');
dotenv.config()

let app = express();

const corsOptions = {
    origin: process.env.CLIENT_URL,
}

app.get('/', (req, res) => {
    res.send('Pong')
})

app.get('/offers', cors(corsOptions), (req, res) => {
    offerQuery.getAll().then(entries => {
        res.json(entries)
    })
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
