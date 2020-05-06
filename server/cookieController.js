const cookieController = {};

cookieController.setSessionCookie = (req, res, next) => {
  const { token } = res.locals;
  res.cookie('token', token);
  next();
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
