var mod = angular.module( 'app', [
  'templates-app',
  'templates-common',
  'common.search-service',
  'app.search',
  'app.result',
  'app.about',
  'ui.router',
  'ui.bootstrap'
]);

mod.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/' );
});

mod.controller( 'AppCtrl', ['$scope', '$location', appCtrl]);

function appCtrl() {

}