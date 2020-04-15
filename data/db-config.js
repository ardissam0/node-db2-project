const knex = require('knex');

const config = require('../knexfile');

const db = 'development';

module.exports = knex(config[db]);