const offers = require('../../infrastructure/allegro/offers')
const offerModel = require('../../infrastructure/model/offer')

module.exports = () => {
    offers().then((resp) => {
        resp.offers.forEach((element) => {
            let visitsCount = 0
            let watchersCount = 0
            if (typeof(element.stats.visitsCount) != 'undefined' && null !== element.stats.visitsCount) {
                visitsCount = element.stats.visitsCount
            }
            if (typeof(element.stats.watchersCount) != 'undefined' && null !== element.stats.watchersCount) {
                watchersCount = element.stats.watchersCount
            }
            const model = offerModel.build({
                offerId: element.id,
                name: element.name,
                image: element.primaryImage.url,
                watchersCount: watchersCount,
                visitsCount: visitsCount,
                soldCount: element.stock.sold,
                publicationDate: element.publication.startedAt
            });
            model.save().then(() => {
                console.log(`inserted: ${element.name}`)
            })
        })
    }).catch(() => {
        console.log('Unable to fetch offers')
    })
}
