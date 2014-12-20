var mod = angular.module( 'app.about', [
  'ui.router'
]);

mod.config(function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/about',
    views: {
      "main": {
        controller: 'aboutCtrl',
        templateUrl: 'about/about.tpl.html'
      }
    }
  });
});

mod.controller('aboutCtrl', ['$scope', aboutCtrl]);

function aboutCtrl($scope) {

}