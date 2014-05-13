var allAvailableRoles = ['AUTh_Demo', 'Auth_Admin', 'AUTH_AuthRole', 'AuTH_PlayHouse'];

exports.generate = function (user) {
  var authBundle = {};

  allAvailableRoles.forEach(function(role) {
    var strippedRole = role.replace(/^Auth|_/gi, '');
    var roleKey = 'has' + strippedRole;

    authBundle[roleKey] = user.hasRole(role);
  });

  return authBundle;
};
