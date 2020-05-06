const jwt = require('jsonwebtoken');
const db = require('./elephantsql.js');

const sessionController = {};

/**
 * isLoggedIn - find the appropriate session for this request in the database, then
 * verify whether or not the session is still valid.
 */
sessionController.isLoggedIn = (req, res, next) => {
  const id = req.cookies.ssid;
  const users = `SELECT *
  FROM users WHERE user_id = ${id}`;
  db.query(users, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      const data = response.rows;
      res.locals.id = data;
      next();
    }
  });
};

sessionController.like = (req, res, next) => {
  const id = req.cookies.ssid;
  const src = res.locals.source;
  const users = {
    text: `INSERT INTO likes (article, user_id)
  VALUES ($1 , $2)`,
    values: [src, id],
  };
  db.query(users, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      const data = response.rows;
      res.locals = data;
      next();
    }
  });
};

sessionController.unLike = (req, res, next) => {
  const id = req.cookies.ssid;
  const src = res.locals.source;
  const users = {
    text: `DELETE FROM likes WHERE article = $1 AND user_id = $2`,
    values: [src, id],
  };
  db.query(users, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      const data = response.rows;
      res.locals = data;
      next();
    }
  });
};

sessionController.signToken = (req, res, next) => {
  const { username } = res.query;
  res.locals.token = jwt.sign(username, TOKEN_SECRET, { expiresIn: '1800s' });
  next();
};

module.exports = sessionController;
