fs = require('fs');

const config = {
    app_name: 'Sheepie - statistics',
    type: 'device',
    client_id: '9db4cb4878e14687a5f596656977b5e2',
    client_secret: 'Pq7ka6IEK5AFweOXlUfn2ZLAOwLeYTiHPdjQI4B68zUoL14711T51XJQ8D9rOMTZ',
}

const tokenFile = './storage/token.serialized'

const options = {
    account: 'allegro-account', // default
    isLogging: true,
    sandbox: false,
    logger: false,
    storage: {
        async set(account, tokens) {
            const json = JSON.stringify(tokens)
            fs.writeFile(tokenFile, json, () => {});
        },
        async get(account) {
            if (fs.existsSync(tokenFile)) {
                const data = fs.readFileSync(tokenFile, 'utf8')
                return JSON.parse(data)
            }

            return null
        },
    },
}

module.exports = {
    config, options
}
