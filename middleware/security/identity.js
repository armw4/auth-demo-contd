module.exports = function() {
  return function(req, res, next) {
    // make remote call based on user id
    // statically setting this guy for demonstration
    // purposes
    req.user = {
      id        : '9999-9999-9999-9999',
      roles     : ['AUTH_Admin', 'AUTH_Personal', 'AUTH_Anonymous'],
      firstName : 'Chris',
      lastName  : 'Preston-Warner'
    };

    next();
  };
};
