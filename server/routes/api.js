const express = require('express');

const router = express.Router();
const db = require('../elephantsql.js');
const userController = require('../userControllers.js');
const sessionController = require('../sessionController.js');
const cookieController = require('../cookieController');
const userRouter = require('../user');

const getstuff = `stuff 8fromstuff`;

router.get('/', (req, res, next) => {
  console.log('this thing works API');

  res.status(200).send('hi');
});
///search for
// router.get('/users', userController.getUsers, (req, res, next) => {
//   console.log(res.locals);

//   res.status(200).send('hi');
// });

// router.get(
//   '/login',
//   sessionController.isLoggedIn,
//   cookieController.setSSIDCookie,
//   (req, res, next) => {
//     console.log(res.locals);

//     res.status(200).send('hi');
//   }
// );

router.use('/user', userRouter);

////
module.exports = router;
