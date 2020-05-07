const cookieController = {};

cookieController.setSessionCookie = (req, res, next) => {
  try {
    const { token } = res.locals;
    res.cookie('token', token);
    console.log('setsessioncookie token' + token);
    next();
  } catch (err) {
    next({
      log: err,
      status: 500,
      message: 'error in sessioncookie',
    });
  }
};

/**
 SSIDCookie - store the user id
 */
cookieController.setSSIDCookie = (req, res, next) => {
  // write code here
  res.cookie('ssid', res.locals.id, { secure: true, httpOnly: true });
  return next();
};

module.exports = cookieController;
