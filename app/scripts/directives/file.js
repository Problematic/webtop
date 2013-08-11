'use strict';

angular.module('webtopApp')
  .directive('file', function () {
    return {
      templateUrl: 'views/file.html',
      replace: true,
      scope: {},
      restrict: 'E',
      require: ['file', '^desktop'],
      controller: ['$scope', function ($scope) {
        this.toggleTitleEditable = function () {
          $scope.draggable = !$scope.draggable;
          $scope.titleEditable = !$scope.titleEditable;
        };

        this.toggleInFlight = function () {
          $scope.$apply(function () {
            $scope.inFlight = !$scope.inFlight;
          });
        };

        $scope.titleDisplay = function () {
          return $scope.titleEditable ? $scope.title : 'haha';
        };
      }],
      link: function ($scope, $element, $attrs, ctrl) {
        var fileCtrl = ctrl[0],
          desktopCtrl = ctrl[1];

        $scope.model = {};
        $scope.draggable = true;
        $scope.titleEditable = false;
        $scope.inFlight = false;
        $scope.model.title = $attrs.title;
        $scope.model.x = 0;
        $scope.model.y = 0;

        $scope.disableTitleEdit = function ($event) {
          if ($event.keyCode === 13 || $event.keyCode === 27) {
            $event.preventDefault();
            fileCtrl.toggleTitleEditable();
            angular.element($event.target).attr('readonly', 'readonly');
            $event.target.blur();
          }
        };

        $scope.enableTitleEdit = function ($event) {
          var $el;
          if (!$scope.titleEditable) {
            $el = angular.element($event.target);
            fileCtrl.toggleTitleEditable();
            $el.removeAttr('readonly');
            $el[0].setSelectionRange(0, $el.val().lastIndexOf('.'));
            $el.focus();
          }
        };

        $element.on('dragstart', fileCtrl.toggleInFlight);
      }
    };
  });
