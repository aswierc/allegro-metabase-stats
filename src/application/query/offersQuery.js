const { QueryTypes } = require('sequelize');
const sequelize = require('../../infrastructure/database/sequelize')

async function getAll() {
    const query = 'with offers_ordered as (' +
        'select  ' +
        'row_number() over(partition by "offerId" order by "createdAt" desc) as rowNo,' +
        '"offerId", ' +
        'name, ' +
        'image, ' +
        '"watchersCount",' +
        '"visitsCount",' +
        '"soldCount",' +
        '"publicationDate", ' +
        '"createdAt"' +
        'from offers' +
        ')' +
        '' +
        'select ' +
        'o."offerId",' +
        'o.name,' +
        'ps.price, ' +
        'ps.stock,' +
        'o.image,' +
        'o."watchersCount",' +
        'o."visitsCount",' +
        'o."soldCount",' +
        'o."publicationDate" ' +
        'from price_stocks ps ' +
        'join  offers_ordered o on o."offerId" = ps."offerId" ' +
        'and rowNo = 1' +
        'group by ' +
        'o."offerId",' +
        'o.name,' +
        'ps.price,' +
        'ps.stock,' +
        'o.image,' +
        'o."watchersCount",' +
        'o."visitsCount",' +
        'o."soldCount",' +
        'o."publicationDate"' +
        'order by o."soldCount" desc'

    return await sequelize.query(query, { type: QueryTypes.SELECT })
}

module.exports = {
    getAll
}
