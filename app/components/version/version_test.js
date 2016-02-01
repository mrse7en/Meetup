'use strict';

describe('meetmeApp.version module', function() {
  beforeEach(module('meetmeApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
