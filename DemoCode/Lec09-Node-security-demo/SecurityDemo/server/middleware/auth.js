exports.auth_session = (req, res, next) => {
  console.log(`auth_session middleware before hitting route: ${req.originalUrl}`);
  // may want to do additional auth checks based on role
  if (!req.session.uid)
    res.status(401).redirect('/');
  else next();
};