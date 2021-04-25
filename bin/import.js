const { program } = require('commander');
const importOffers = require('../src/Application/Command/ImportOffers.js');

new importOffers().execute();

program.version('0.0.1');

console.log('Run import activities');

program.parse();
