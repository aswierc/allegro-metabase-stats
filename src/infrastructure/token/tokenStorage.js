const fs = require('fs');
const tokenFile = './storage/token.serialized'

function writeTokens(tokens) {
    const json = JSON.stringify(tokens)
    fs.writeFile(tokenFile, json, () => {});
}

function readTokens() {
    if (fs.existsSync(tokenFile)) {
        const data = fs.readFileSync(tokenFile, 'utf8')
        return JSON.parse(data)
    }
    return null
}

module.exports = {
    writeTokens,
    readTokens
}
