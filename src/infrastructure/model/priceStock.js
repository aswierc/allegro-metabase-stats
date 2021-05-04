const sequelize = require('../database/sequelize')
const Sequelize = require('sequelize')

const PriceStock = sequelize.define('price_stock', {
    offerId: { type: Sequelize.BIGINT, allowNull: false},
    price: { type: Sequelize.DECIMAL(10, 2), },
    stock: { type: Sequelize.INTEGER, allowNull: false},
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
})

module.exports = PriceStock

