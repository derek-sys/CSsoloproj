const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('./elephantsql.js');
const TOKEN_SECRET = require('./secretZone');
const sessionController = require('./sessionController');
const cookieController = require('./cookieController');
const userController = require('./userControllers');

router.post(
  '/register',
  userController.createUser,
  sessionController.signToken,
  cookieController.setSessionCookie,
  (req, res, next) => {
    console.log(req);
    res.status(200).send('watup');
  }
);

module.exports = router;
