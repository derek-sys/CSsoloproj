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
  userController.checkDuplicates,
  userController.createUser,
  sessionController.signToken,
  cookieController.setSessionCookie,
  (req, res, next) => {
    res.status(200).json('good job');
    return next();
  }
);

router.post(
  '/login',
  userController.createUser,
  sessionController.signToken,
  cookieController.setSessionCookie,
  (req, res, next) => {
    res.status(200).json('good job');
    return next();
  }
);

module.exports = router;
