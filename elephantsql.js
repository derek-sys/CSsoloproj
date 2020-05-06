import { Client } from 'pg';
// or native libpq bindings
// var pg = require('pg').native

const conString =
  'postgres://vpztvjgv:GVtqCfzky4ysLrbhEPcxeoVVvZUr-IZk@drona.db.elephantsql.com:5432/vpztvjgv';
const client = new Client(conString);
client.connect(function (err) {
  if (err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function (error, result) {
    if (err) {
      return console.error('error running query', error);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});
