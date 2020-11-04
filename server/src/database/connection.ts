import Knex from 'knex';
import dbInfo from '../private/dbInfo';

const db: Knex = require('knex')({
  client: 'mysql2',
  connection: {
    host : dbInfo.host,
    user : dbInfo.user,
    password : dbInfo.password,
    database : dbInfo.db
  }
});

export default db;