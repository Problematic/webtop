'use strict';

angular.module('webtopApp')
  .directive('desktop', function () {
    return {
      // templateUrl: 'views/desktop.html',
      template: '<div class="desktop" ng-transclude></div>',
      restrict: 'E',
      replace: true,
      scope: {},
      transclude: true,
      controller: ['$scope', '$element', function ($scope, $element) {
        $scope.inFlight = null;

        this.flyScope = function () {
          return $scope.inFlight.scope();
        };
      }],
      link: function ($scope, $element, $attrs, desktopCtrl) {

        $element.on('dragover', function ($event) {
          $event.preventDefault();
        });
        $element.on('drop', function ($event) {
          var e = $event.originalEvent,
            data = JSON.parse(e.dataTransfer.getData('text/plain')),
            x = e.pageX - data.offsetX,
            y = e.pageY - data.offsetY;

          desktopCtrl.flyScope().$apply(function () {
            desktopCtrl.flyScope().model.x = x;
            desktopCtrl.flyScope().model.y = y;
            // $scope.inFlight[0].classList.toggle('in-flight');
          });
        });
        $element.on('dragstart', function ($event) {
          var e = $event.originalEvent,
            $el = angular.element($event.target),
            el = $el[0],
            clickX = e.pageX,
            clickY = e.pageY,
            offsetX = clickX - $el.scope().model.x - el.scrollLeft,
            offsetY = clickY - $el.scope().model.y - el.scrollTop,
            data = {
              offsetX: offsetX,
              offsetY: offsetY
            };

          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('text/plain', JSON.stringify(data));

          $scope.$apply(function () {
            $scope.inFlight = $el;
          });
        });
      }
    };
  });
