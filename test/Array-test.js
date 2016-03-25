
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

  describe('#dig', () => {
    it('should extract the nested value specified by the sequence of indexes', () => {
      var a = [[1, [2, 3]]];
      assert.equal(a.dig(0, 1, 1), 3);
      assert.equal(a.dig(1, 2, 3), null);
      assert.equal(a.dig(0, 0, 0), null);

      assert.equal([42, { foo: "bar" }].dig(1, "foo"), "bar");
    });
  });

  describe('#drop', () => {
    it('should drop first n elements from self and returns the rest of the elements.', () => {
      var a = [1, 2, 3, 4, 5, 0];
      assert.deepEqual(a.drop(3), [4, 5, 0]);
      assert.deepEqual(a, [1, 2, 3, 4, 5, 0]);
    });
  });

  describe('#drop_while', () => {
    it('should drops elements up to the first element for which the block returns false' +
        'and returns an array containing the remaining elements.', () => {
      var a = [1, 2, 3, 4, 5, 0];
      assert.deepEqual(a.dropWhile(x => x < 3), [3, 4, 5, 0]);
      assert.deepEqual(a, [1, 2, 3, 4, 5, 0]);
    });
  });

  describe('#each', () => {
    it('should call the given block once for each element in self.', () => {
      var a = ["a", "b", "c"];
      var result = "";
      a.each(function (elem) {
        result += elem;
      });
      assert.equal(result, "abc");
    });
  });

  describe('#each_index', () => {
    it('should same as #each, but passes the index of the element instead of the element itself.', () => {
      var a = ["a", "b", "c"];
      var result = "";
      a.eachIndex(function (elem) {
        result += elem;
      });
      assert.equal(result, "012");
    });
  });

  describe('#empty', () => {
    it('should return true if self contains no elements.', () => {
      assert.equal([].empty(), true);
    });
  });

  describe('#eql', () => {
    it('should return true if self and other are the same object, ' +
        'or are both arrays with the same content.', () => {
      var array = [1, 2, [3, 4]];
      var other = [1, 2, [3, 4]];
      assert.equal(array.eql(other), true);
    });
  });

  describe('#fetch', () => {
    it('should try to return the element at position index, but throws an Error ' +
        'if the referenced index lies outside of the array bounds.', () => {
      var a = [11, 22, 33, 44];
      assert.equal(a.fetch(1), 22);
      assert.equal(a.fetch(-1), 44);
      assert.throws(() => a.fetch(4));
      assert.throws(() => a.fetch(-5));
    });

    it('should prevent an IndexError by supplying a second argument, which will act as a default value.', () => {
      var a = [11, 22, 33, 44];
      assert.equal(a.fetch(-5, "cat"), "cat");
      assert.equal(a.fetch(4, (i) => `${i} is out of bounds`), "4 is out of bounds");
    });
  });

  describe('#fill', () => {
    it('should set the selected elements of self to obj passed', () => {
      var a = ["a", "b", "c", "d"];
      assert.deepEqual(a.rubyFill("x"), ["x", "x", "x", "x"]);
      assert.deepEqual(a, ["x", "x", "x", "x"]);
      assert.deepEqual(a.rubyFill("z", 2), ["x", "x", "z", "z"]);
      assert.deepEqual(a.rubyFill("y", 0, 2), ["y", "y", "z", "z"]);
      assert.deepEqual(a.rubyFill((i) => i * i), [0, 1, 4, 9]);
    });
  });

  describe('#find_index', () => {
    it('should return the index of the first object in self.', () => {
      var a = ["a", "b", "c"];
      assert.equal(a.findIndex("b"), 1);
      assert.equal(a.findIndex("z"), null);
      assert.equal(a.findIndex((x) => x === "b"), 1);
    });
  });

  describe('#first', () => {
    it('should return the first element.', () => {
      var a = ["q", "r", "s", "t"];
      assert.equal(a.first(), "q");
      assert.equal([].first(), null);
    });

    it('should return the first n elements.', () => {
      var a = ["q", "r", "s", "t"];
      assert.deepEqual(a.first(2), ["q", "r"]);
    });
  });

  describe('#flatten', () => {
    it('should return a new array that is one-dimensional flattening of self.', () => {
      var a = [1, 2, [3, [4, 5]]];
      assert.deepEqual(a.flatten(), [1, 2, 3, 4, 5]);
    });
  });

  describe('#include', () => {
    it('should return true if the given object is present in self.', () => {
      var a = ["a", "b", "c"];
      assert.equal(a.include("b"), true);
      assert.equal(a.include("z"), false);
    });
  });

  describe('#index', () => {
    it('should return the index of the first object in self.', () => {
      var a = ["a", "b", "c"];
      assert.equal(a.index("b"), 1);
      assert.equal(a.index("z"), null);
      assert.equal(a.index((x) => x === "b"), 1);
    });
  });

  describe('#initialize_copy', () => {
    it('should repalce the contens of self with the contens of other_ary.', () => {
      var a = ["a", "b", "c"];
      assert.deepEqual(a.initialize_copy(["x", "y", "z"]), ["x", "y", "z"]);
      assert.deepEqual(a, ["x", "y", "z"]);
    });
  });

  describe('#insert', () => {
    it('should insert the given values before the element with the given index.', () => {
      var a = ["a", "b", "c", "d"];
      assert.deepEqual(a.insert(2, 99), ["a", "b", 99, "c", "d"]);
      assert.deepEqual(a.insert(-1, 100), ["a", "b", 99, "c", "d", 100]);
    });
  });

  describe('#join', () => {
    it('should return a string created by converting each element to a string, ' +
        'separated by the given separator.', () => {
      var a = ["a", "b", "c"];
      assert.equal(a.join(""), "abc");
      assert.equal(a.join("/"), "a/b/c");
    });
  });

  describe('#keep_if', () => {
    it('should delete every elements of self for which the given block eveluates to false.', () => {
      var a = ["a", "b", "c", "d", "e", "f"];
      assert.deepEqual(a.keepIf(x => x.match(/[aeiou]/)), ["a", "e"]);
    });
  });

  describe('#last', () => {
    it('should return the last element(s) of self.', () => {
      var a = ["w", "x", "y", "z"];
      assert.equal(a.last(), "z");
      assert.deepEqual(a.last(2), ["y", "z"]);
    });
  });

  describe('#map', () => {
    it('should invoke the given block once for each elements of self.', () => {
      var a = ["a", "b", "c", "d"];
      assert.deepEqual(a.map(x => x + "!"), ["a!", "b!", "c!", "d!"]);
      assert.deepEqual(a, ["a", "b", "c", "d"]);
    });
  });

  describe.skip('#pack', () => {
    //
  });

  describe.skip('#permutation', () => {
    it('should yield all permutations of length n of the elements of the array.', () => {
      var a = [1, 2, 3];
      assert.deepEqual(a.permutation(1), [[1],[2],[3]]);
      assert.deepEqual(a.permutation(2), [[1,2],[1,3],[2,1],[2,3],[3,1],[3,2]]);
      assert.deepEqual(a.permutation(3), [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
      assert.deepEqual(a.permutation(0), [[]]); // one permutation of lenght 0
      assert.deepEqual(a.permutation(4), []); // no permutations of lenght 4
    });
  });

  describe('#pop', () => {
    it('should remove the last element from self and returns it.', () => {
      var a = ["a", "b", "c", "d"];
      assert.equal(a.pop(), "d");
      assert.deepEqual(a.pop(2), ["b", "c"]);
      assert.deepEqual(a, ["a"]);
    });
  });

  describe('#product', () => {
    it('should return an array of all combinations of elements from all arrays.', () => {
      assert.deepEqual([1,2].product([1,2]), [[1,1],[1,2],[2,1],[2,2]]);
      assert.deepEqual([1,2].product([3,4],[5,6]), [[1,3,5],[1,3,6],[1,4,5],[1,4,6],[2,3,5],[2,3,6],[2,4,5],[2,4,6]]);
      assert.deepEqual([1,2].product(), [[1],[2]]);
      assert.deepEqual([1,2].product([]), []);
    });
  });

  describe('#push', () => {
    it('should append the given object(s) on to the end of this array.', () => {
      var a = ["a", "b", "c"];
      assert.deepEqual(a.push("d","e","f"), ["a","b","c","d","e","f"]);
      assert.deepEqual([1,2,3].push(4).push(5), [1,2,3,4,5]);
    });
  });

  describe('#rassoc', () => {
    it('should search through the array comparing obj with the second element of each contained array.', () => {
      var a = [[1, "one"], [2, "two"], [3, "three"], ["ii", "two"]];
      assert.deepEqual(a.rassoc("two"), [2, "two"]);
      assert.deepEqual(a.rassoc("four"), null);
    });
  });

  describe('#reject', () => {
    it('should return a new array containing the items in self for which the given block is not true.', () => {
      var scores = [97, 42, 75];
      assert.deepEqual(a.reject((score) => score < 80), [97]);
    });
  });

  describe.skip('#repeated_combination', () => {
    //
  });

  describe.skip('#repeated_permutation', () => {
    //
  });

  describe('#replace', () => {
    it('should replace the contents of self with the contents of other_ary.', () => {
      var a = ["a", "b", "c", "d", "e"];
      assert.deepEqual(a.replace(["x", "y", "z"]), ["x", "y", "z"]);
      assert.deepEqual(a, ["x", "y", "z"]);
    });
  });

  describe('#reverse', () => {
    it('should returns a new array containing self elements in reverse order.', () => {
      assert.deepEqual(["a", "b", "c"].reverse(), ["c", "b", "a"]);
    });
  });

  describe('#reverse_each', () => {
    it('should same as #each, but traverses self in reverse order.', () => {
      var a = ["a", "b", "c"];
      var result = "";
      a.reverseEach(function (x) {
        result += x;
      });
      assert.equal(result, "cba");
    });
  });

  describe('#rindex', () => {
    it('should return the index of the last object in self equals to given obj', () => {
      var a = ["a", "b", "b", "b", "c"];
      assert.equal(a.rindex("b"), 3);
      assert.equal(a.rindex("z"), null);
      assert.equal(a.rindex((x) => x === "b"), 3);
    });
  });

  describe('#rotate', () => {
    it('should return a new array by rotating self.', () => {
      var a = ["a", "b", "c"];
      assert.equal(a.rotate(), ["b", "c", "a"]);
      assert.equal(a, ["a", "b", "c"]);
      assert.equal(a.rotate(2), ["c", "a", "b"]);
      assert.equal(a.rotate(-1), ["c", "a", "b"]);
    });
  });

  describe('#sample', () => {
    it('should choose a random element or n random elements.', (done) => {
      done();
    });
  });

  describe('#shift', () => {
    it('should remove the first element of self and return it.', () => {
      var a = ["-m", "-q", "-o", "filename"];
      assert.equal(a.shift(), "-m");
      assert.deepEqual(a, ["-q", "-o", "filename"]);
      assert.deepEqual(a.shift(2), ["-q", "-o"]);
      assert.deepEqual(a, ["filename"]);
    });
  });

  describe('#shuffle', () => {
    it('should return a new array with elements of self shuffled.', (done) => {
      done();
    });
  });

  describe('#size', () => {
    it('should alias for length.', () => {
      assert.equal([1,2,3,4,5].size(), 5);
    });
  });

  describe.skip('#slice', () => {
    //
  });

  describe('#sort', () => {
    it('should return a new array created by sorting self.', () => {
      var a = [3,4,1,5,2];
      assert.deepEqual(a.sort(), [1,2,3,4,5]);
      assert.deepEqual(a.sort((x, y) => y - x), [5,4,3,2,1]);
    });
  });

  describe('#sort_by', () => {
    it('should sorts using a set of keys generated by mapping the values.', () => {
      var words = ["apple", "pear", "fig"];
      assert.deepEqual(a.sortBy((word) => word.length), ["fig", "pear", "apple"]);
    });
  });

  describe('#take', () => {
    it('should retuns first n elements from the array.', () => {
      var a = [1,2,3,4,5];
      assert.deepEqual(a.take(3), [1,2,3]);
    });
  });

  describe('#take_while', () => {
    it('should passes elements to the block until retuns false, ' +
        'then stop iterating and return an array of all prior elements.', () => {
      var a = [1,2,3,4,5,0];
      assert.deepEqual(a.takeWhile((x) => x < 3), [1, 2]);
    });
  });

  describe('#to_a', () => {
    //
  });

  describe('#to_h', () => {
    //
  });

  describe('#uniq', () => {
    //
  });

  describe('#unshift', () => {
    //
  });

  describe('#values_at', () => {
    //
  });

  describe('#zip', () => {
    //
  });
});
