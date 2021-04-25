const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

let app = express();

app.use(express.static(path.join(__dirname, 'src/public')))
    .set('views', path.join(__dirname, 'src/views'))
    .set('view engine', 'ejs');

app.get('/', (req, res) => res.render('pages/index'));
app.get('/test', function (req, res) {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
