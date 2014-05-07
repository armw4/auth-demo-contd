var _ = require('lodash');

module.exports = {
  authorize: function(requiredRoles, userRoles) {
    return _.intersection(requiredRoles, userRoles).length;
  }
};
