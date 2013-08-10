'use strict';

describe('Directive: fileDirective', function () {
  beforeEach(module('webtopApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<file-directive></file-directive>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the fileDirective directive');
  }));
});
