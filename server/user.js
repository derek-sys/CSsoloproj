const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('./elephantsql.js');
const TOKEN_SECRET = require('./secretZone');
const sessionController = require('./sessionController');
const CookieController = require('./cookieController');
const UserController = require('./userControllers');

router.post(
  '/register',
  userController.createUser,
  sessionController.signToken,
  cookieController.setSessionCookie,
  (req, res, next) => {}
);

module.exports = router;
