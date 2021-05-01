const offers = require('../../infrastructure/allegro/offers')

module.exports = () => {
    offers().then((resp) => {
        resp.offers.forEach((element) => {
            console.log(element)
            // todo
        })
    })
}
