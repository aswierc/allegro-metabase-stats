const importOffers = require('../src/application/command/importOffers')

try {
    importOffers()
} catch (err) {
    console.log('error');
    console.error(err)
}
