const sequelize = require('../src/infrastructure/database/sequelize')

const Offer = require('../src/infrastructure/model/offer')

sequelize.sync({
    // force: true
})
