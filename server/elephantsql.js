var pg = require('pg');
var { Pool, Client } = require('pg');

const PG_URI =
  'postgres://vpztvjgv:GVtqCfzky4ysLrbhEPcxeoVVvZUr-IZk@drona.db.elephantsql.com:5432/vpztvjgv';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
