'use strict';

describe('Directive: desktop', function () {
  beforeEach(module('webtopApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<desktop></desktop>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the desktop directive');
  }));
});
