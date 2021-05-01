const { config, options } = require('../../../config/allegro')
const { AllegroRestClient } = require('allegro-rest-client')

module.exports = () => {
    return AllegroRestClient(config, options).then((methods) => {
        return methods.get('/sale/offers').then((resp) => {
            return resp
        })
    })
}
