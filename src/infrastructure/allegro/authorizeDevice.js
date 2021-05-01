const { config, options } = require('../../../config/allegro')
const { AllegroRestClient } = require('allegro-rest-client')

async function getDeviceCode() {
    const allegroClient = await AllegroRestClient(config, options)

    return await allegroClient.bindApp()
}
async function authorizeDevice(deviceCode) {
    const allegroClient = await AllegroRestClient(config, options)

    return await allegroClient.authorize(deviceCode)
}

module.exports = {
    getDeviceCode,
    authorizeDevice
}
