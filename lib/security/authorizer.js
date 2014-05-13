var _ = require('lodash');

function lowerCase(sequence) {
  return _.map(sequence, function(element) {
    return element.toLowerCase();
  });
}

module.exports = {
  authorize: function(requiredRoles, userRoles) {
    var loweredRequiredRoles = lowerCase(requiredRoles);
    var loweredUserRoles     = lowerCase(userRoles);

    return _.intersection(loweredRequiredRoles, loweredUserRoles).length;
  }
};
