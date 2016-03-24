
var assert = require('assert');
var Array = require('../Array');

describe('Array', () => {
  describe('#all', () => {
    it('should return true if array does not have any false value.', () => {
      assert.equal([1, "foo", []].all(), true);
      assert.equal([].all(), true);
    });

    it('should return false if array has false value.', () => {
      assert.equal([1, undefined, 3].all(), false);
    });

    it('should handle by predicater.', () => {
      assert.equal(["ant", "bear", "cat"].all(word => word.length >= 3), true);
      assert.equal(["ant", "bear", "cat"].all(word => word.length >= 4), false);
    });
  });

  describe('#any', () => {
    it('should return true if array has any true value.', () => {
      assert.equal([null, "foo", false].any(), true);
    });

    it('should return false if array does not have any false value.', () => {
      assert.equal([undefined].any(), false);
      assert.equal([].any(), false);
    });

    it('should handle by predicater', () => {
      assert.equal(["ant", "bear", "cat"].any(word => word.length >= 3), true);
      assert.equal(["ant", "bear", "cat"].any(word => word.length >= 4), true);
    });
  });
});
