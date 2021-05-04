const sequelize = require('../src/infrastructure/database/sequelize')

const Offer = require('../src/infrastructure/model/offer')
const PriceStock = require('../src/infrastructure/model/priceStock')

sequelize.sync()
