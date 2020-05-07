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

const SALT_ROUNDS = 10;

userController.scramblePass = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    res.locals.hashedPassword = hashedPassword;
    next();
  } catch (err) {
    next({
      log: `Error hashing user password: ${err}`,
      status: 500,
      message: `Failed to hash user password!`,
    });
  }
};

userController.createUser = async (req, res, next) => {
  const { username } = req.body;
  const { password } = req.body;
  try {
    const user = `INSERT INTO users(firstname, password)
    VALUES ( $1 , $2) returning *`;

    const values = [username, password];

    const result = await db.query(user, values);
    console.log(result.rows[0]);
    const { id } = result.rows[0];
    res.locals.id = id;
    next();
  } catch (err) {
    next({
      log: `Error in createUser: ${err}`,
      status: 500,
      message: 'failedto initialize user',
    });
  }
};

userController.checkDuplicates = async (req, res, next) => {
  const query = {
    text: `SELECT * FROM users WHERE firstname=$1`,
    values: [req.body.username],
  };
  try {
    const result = await db.query(query);
    if (result.rows[0]) {
      console.log('User Already Exists');
      return res.redirect('/');
    } else {
      next();
    }
  } catch (err) {
    next({
      log: `Error checking duplicate users: ${err}`,
      status: 500,
      message: `Couldn't see if there were duplicate users`,
    });
  }
};

module.exports = userController;
