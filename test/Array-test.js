
var assert = require('assert');
var Array = require('../lib/Array');

describe('Array', () => {
  describe('#all', () => {
    it('should return true if array does not have any false value.', () => {
      assert.equal([1, "foo", []].all(), true);
      assert.equal([].all(), true);
      assert.equal([1, undefined, 3].all(), false);
    });

    it('should return true if the predicater never returns false.', () => {
      assert.equal(["ant", "bear", "cat"].all(word => word.length >= 3), true);
      assert.equal(["ant", "bear", "cat"].all(word => word.length >= 4), false);
    });
  });

  describe('#any', () => {
    it('should return true if array has any true value.', () => {
      assert.equal([null, "foo", false].any(), true);
      assert.equal([undefined].any(), false);
      assert.equal([].any(), false);
    });

    it('should return true if the predicater ever returns false.', () => {
      assert.equal(["ant", "bear", "cat"].any(word => word.length >= 3), true);
      assert.equal(["ant", "bear", "cat"].any(word => word.length >= 4), true);
    });
  });

  describe('#assoc', () => {
    it('should search through an array comparing obj with the first element of each contained array.', () => {
      var s1 = [ "colors", "red", "blue", "green" ];
      var s2 = [ "letters", "a", "b", "c" ];
      var s3 = "foo";
      assert.equal([s1, s2, s3].assoc("letters"), s2);
      assert.equal([s1, s2, s3].assoc("foo"), null);
    });
  });

  describe('#at', () => {
    it('should return the element at index.', () => {
      var a = [ "a", "b", "c", "d", "e" ];
      assert.equal(a.at(0), "a");
      assert.equal(a.at(-1), "e");
      assert.equal(a.at(-2), "d");
    });

    it('should return null if index is out of range', () => {
      var a = [ "a", "b", "c", "d", "e" ];
      assert.equal(a.at(5), null);
      assert.equal(a.at(-100), null);
    });
  });

  describe.skip('#bsearch', () => {
    it('should find a value from this array using binary search.', () => {
      var ary = [0, 4, 7, 10, 12];
      assert.equal(ary.bsearch(x => x >=   4), 4);
      assert.equal(ary.bsearch(x => x >=   6), 7);
      assert.equal(ary.bsearch(x => x >=  -1), 0);
      assert.equal(ary.bsearch(x => x >= 100), null);
    });

    it('should find a value from this array using binary search2.', () => {
      var ary = [0, 4, 7, 10, 12];
      assert.equal(ary.bsearch(x => 1 - x / 4), 4 /* or 7 */);
      assert.equal(ary.bsearch(x => 4 - x / 2), null);
    });
  });

  describe.skip('#bsearch_index', () => {
    it('should should find an index of value using binary search.', () => {
      var ary = [0, 4, 7, 10, 12];
      assert.equal(ary.bsearch(x => x >=   4), 1);
      assert.equal(ary.bsearch(x => x >=   6), 2);
      assert.equal(ary.bsearch(x => x >=  -1), 0);
      assert.equal(ary.bsearch(x => x >= 100), null);
    });
  });

  describe('#clear', () => {
    it('should remove all element from self.', () => {
      var a = [ "a", "b", "c", "d", "e" ];
      assert.deepEqual(a.clear(), []);
      assert.deepEqual(a, []);
    });
  });

  describe('#collect', () => {
    it('should create a new array containing the values returned by the block.', () => {
      var a = [ "a", "b", "c", "d" ];
      assert.deepEqual(a.collect(x => x + "!"), ["a!", "b!", "c!", "d!"]);
      assert.deepEqual(a, [ "a", "b", "c", "d" ]);
    });
  });

  describe.skip('#combination', () => {
    it('should yields all combinations of length n of elements from the array.', () => {
      var a = [1, 2, 3, 4];
      assert.deepEqual(a.combination(1), [[1], [2], [3], [4]]);
      assert.deepEqual(a.combination(2), [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]);
      assert.deepEqual(a.combination(3), [[1,2,3], [1,2,4], [1,3,4], [2,3,4]]);
      assert.deepEqual(a.combination(4), [[1,2,3,4]]);
      assert.deepEqual(a.combination(0), [[]]); // one combination of length 0
      assert.deepEqual(a.combination(5), []);
    });
  });

  describe('#compact', () => {
    it('should return a copy of self with all falsy values removed.', () => {
      // In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
      var a = [0, 1, false, 2, '', 3];
      assert.deepEqual(a.compact(), [1, 2, 3]);
    });
  });

  describe('#concat', () => {
    it('should append the elements of other array to self.', () => {
      assert.deepEqual([1, 2, 3].concat([4, 5]), [1, 2, 3, 4, 5]);
    });
  });

  describe('#count', () => {
    it('should return the number of elements.', () => {
      var a = [1, 2, 4, 2];
      assert.equal(a.count(), 4);
      assert.equal(a.count(2), 2);
      assert.equal(a.count(x => x % 2 == 0), 3);
    });
  });

  describe('#cycle', () => {
    it('should call the block for each element n times.', () => {
      var a = ["a", "b", "c"];
      var result = "";
      a.cycle(3, function (elem) {
        result += elem;
      });
      assert.equal(result, "abcabcabc");
    });
  });

  describe('#delete', () => {
    it('should delete all items from self that are equal to given obj', () => {
      var a = ["a", "b", "b", "b", "c"];
      assert.equal(a.delete("b"), "b");
      assert.deepEqual(a, ["a", "c"]);
      assert.equal(a.delete("z"), null);
      assert.equal(a.delete("z", () => "not found"), "not found");
    });
  });

  describe('#delete_at', () => {
    it('should delete the element at the specified index.', () => {
      var a = ["ant", "bat", "cat", "dog"];
      assert.equal(a.deleteAt(2), "cat");
      assert.equal(a.deleteAt(-1), "dog");
      assert.deepEqual(a, ["ant", "bat"]);
      assert.equal(a.deleteAt(99), null);
    });
  });

  describe('#delete_if', () => {
    it('should delete every elements of self for which block evaluates to true', () => {
      var scores = [97, 42, 75];
      assert.deepEqual(scores.deleteIf(x => x < 80), [97]);
    });
  });
});
