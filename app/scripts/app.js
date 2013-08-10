'use strict';

angular.module('webtopApp', [])
  .config(function ($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/desktop', {
        templateUrl: 'views/desktop.html',
        controller: 'DesktopCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
