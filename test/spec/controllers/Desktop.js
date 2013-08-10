'use strict';

describe('Controller: DesktopCtrl', function () {

  // load the controller's module
  beforeEach(module('webtopApp'));

  var DesktopCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DesktopCtrl = $controller('DesktopCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
