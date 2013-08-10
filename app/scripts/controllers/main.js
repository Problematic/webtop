'use strict';

angular.module('webtopApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.fruityThings = [
      'apples',
      'bananas',
      'cherries',
      'pears'
    ];
  });
