const offers = require('../../infrastructure/allegro/offers')
const offerModel = require('../../infrastructure/model/offer')
const priceStock = require('../../infrastructure/model/priceStock')

module.exports = () => {
    offers().then((resp) => {
        resp.offers.forEach((element) => {

            // save price stock
            priceStock.findOne({
                where: {
                    offerId: element.id,
                }
            }).then(ps => {
                if (null === ps) {
                    const model = priceStock.build({
                        offerId: element.id,
                        price: element.sellingMode.price.amount,
                        stock: element.stock.available
                    })
                    model.save().then(() => {
                        console.log(`inserted price stock for element: ${element.name}`)
                    })
                } else {
                    ps.price = element.sellingMode.price.amount
                    ps.stock = element.stock.available
                    ps.save()
                }
            })

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
