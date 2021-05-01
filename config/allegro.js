const { writeTokens, readTokens } = require('../src/infrastructure/token/tokenStorage')
const dotenv = require('dotenv');
dotenv.config()

const config = {
    app_name: process.env.APP_NAME,
    type: 'device',
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
}

const options = {
    account: 'allegro-account',
    isLogging: true,
    sandbox: false,
    logger: false,
    storage: {
        async set(account, tokens) {
            writeTokens(tokens)
        },
        async get(account) {
            return readTokens()
        },
    },
}

module.exports = {
    config, options
}
