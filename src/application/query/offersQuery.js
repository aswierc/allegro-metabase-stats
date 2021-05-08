const { QueryTypes } = require('sequelize');
const sequelize = require('../../infrastructure/database/sequelize')

async function getAll() {

    const query = 'select ' +
        'ps."offerId", o.name, ps.price, ps.stock, (ps.price*ps.stock) as sum_stock from price_stocks ps\n' +
        '    join offers o on o."offerId" = ps."offerId" ' +
        '    where ps.stock > 0 ' +
        '    group by ps."offerId", ps.price, ps.stock, o.name ' +
        '    order by ps."offerId"'

    return await sequelize.query(query, {type: QueryTypes.SELECT})
}

module.exports = {
    getAll
}
