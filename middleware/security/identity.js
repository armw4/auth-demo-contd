var _ = require('lodash');

module.exports = function() {
  return function(req, res, next) {
    // make remote call based on user id
    // statically setting this guy for demonstration
    // purposes
    req.user = {
      id : '9999-9999-9999-9999',

      roles : function() {
        var roles = ['AUTH_Admin', 'AUTH_Personal', 'AUTH_Anonymous'];

        return roles.map(function(role) {
          return role.toLowerCase();
        });
      }(),

      firstName : 'Chris',

      lastName : 'Preston-Warner',

      hasRole : function(role) {
        return _.contains(this.roles, role.toLowerCase());
      }
    };

    next();
  };
};
