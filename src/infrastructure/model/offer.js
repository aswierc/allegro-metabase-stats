const sequelize = require('../database/sequelize')
const Sequelize = require('sequelize')

const Offer = sequelize.define('offer', {
    offerId: { type: Sequelize.BIGINT, allowNull: false},
    name: { type: Sequelize.STRING, allowNull: false },
    image: { type: Sequelize.STRING, allowNull: false },
    watchersCount: { type: Sequelize.INTEGER, allowNull: false},
    visitsCount: { type: Sequelize.INTEGER, allowNull: false},
    soldCount: { type: Sequelize.INTEGER, allowNull: false},
    publicationDate: Sequelize.DATE,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
})

module.exports = Offer
