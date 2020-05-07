const db = require('./elephantsql.js');
const bcrypt = require('bcrypt');

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

userController.createUser = async (req, res, next) => {
  const { username } = req.body;
  const { password } = req.body;
  try {
    const user = `INSERT INTO users(firstname, password)
    VALUES ( $1 , $2) returning *`;

    const values = [username, password];

    const result = await db.query(user, values);
    const id = result.id;
    res.locals.id = id;
    console.log('locals in createuser' + res.locals);
    next();
  } catch (err) {
    next({
      log: `Error in createUser: ${err}`,
      status: 500,
      message: 'failedto initialize user',
    });
  }
};

module.exports = userController;
