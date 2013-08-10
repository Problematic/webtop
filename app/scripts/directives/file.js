'use strict';

angular.module('webtopApp')
  .directive('file', function () {
    return {
      templateUrl: 'views/file.html',
      replace: true,
      scope: {
        title: '@'
      },
      restrict: 'E',
      controller: ['$scope', function ($scope) {
        $scope.toggleTitleEditable = function () {
          $scope.$apply(function () {
            $scope.draggable = !$scope.draggable;
            $scope.titleEditable = !$scope.titleEditable;
          });
        };
      }],
      link: function ($scope, $element, $attrs, controller) {
        var title = angular.element($element.children('.title'));

        $scope.draggable = true;
        $scope.titleEditable = false;

        title.on('dblclick', $scope.toggleTitleEditable);
      }
    };
  });
