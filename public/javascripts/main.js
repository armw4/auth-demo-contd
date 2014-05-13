angular
.module('main', [])
.run(function($rootScope) {
  $rootScope.roles = authBundle;
});
