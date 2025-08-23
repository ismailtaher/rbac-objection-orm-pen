const knex = require('knex');
const knexConfig = require('../knexfile');
require('dotenv').config();
const { Model } = require('objection');

const environment = process.env.NODE_ENV || 'development';

const db = knex(knexConfig[environment]);

Model.knex(db);

module.exports = db;
