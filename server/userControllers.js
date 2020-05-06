const db = require('./elephantsql.js');

const userController = {};

userController.getUsers = (req, res, next) => {
  const users = `SELECT *
                        FROM users`;
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

userController.createUser = (req, res, next) => {
  // write code here
  if (
    typeof req.body['username'] === 'string' &&
    typeof req.body['password'] === 'string'
  ) {
    const users = {
      text: `INSERT INTO users (firstname,password)
    VALUES ( $1 , $2);`,
      values: [req.body['username'], req.body['password']],
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
  }
};

module.exports = userController;
