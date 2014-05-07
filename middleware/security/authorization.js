var authorizer = require('../../lib/security/authorizer');

module.exports = function() {
  var roles = Array.prototype.slice.call(arguments);

  return function(req, res, next) {
    if (authorizer.authorize(roles, req.user.roles)) next();
    else res.send(403); // should log unauthorized app access as well.
  };
};
