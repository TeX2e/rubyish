
// Polyfill

// implement array.filter(fun)
// refer to https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//
if (!Array.prototype.filter) {
  Array.prototype.filter = function(fun/*, thisArg*/) {
    'use strict';

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var res = [];
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i];

        // NOTE: Technically this should Object.defineProperty at
        //       the next index, as push can be affected by
        //       properties on Object.prototype and Array.prototype.
        //       But that method's new, and collisions should be
        //       rare, so use the more-compatible alternative.
        if (fun.call(thisArg, val, i, t)) {
          res.push(val);
        }
      }
    }

    return res;
  };
}

// implement array.map(fun)
// refer to https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//
// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

  Array.prototype.map = function(callback, thisArg) {

    var T, A, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this|
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let A be a new array created as if by the expression new Array(len)
    //    where Array is the standard built-in constructor with that name and
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k < len
    while (k < len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal
        //     method of callback with T as the this value and argument
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
}

// --- Ruby Array methods ---

// Array#all? [{ |obj| block }] -> true or false
//
if (!Array.prototype.all) {
  Array.prototype.all = function (predicate) {
    if (this == null) throw new TypeError();
    var array = this;
    if (!predicate) {
      predicate = function (elem) { return elem; }
    }
    for (var i = 0; i < array.length; i++) {
      if (!predicate(array[i])) return false;
    }
    return true;
  }
}

// Array#any? [{ |obj| block }] -> true or false
//
if (!Array.prototype.any) {
  Array.prototype.any = function (predicate) {
    if (this == null) throw new TypeError();
    var array = this;
    if (!predicate) {
      predicate = function (elem) { return elem; }
    }
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i])) return true;
    }
    return false;
  }
}

// Array#assoc(obj) -> element_ary or null
//
if (!Array.prototype.assoc) {
  Array.prototype.assoc = function (obj) {
    if (this == null) throw new TypeError();
    var array = this;
    for (var i = 0; i < array.length; i++) {
      if (array[i][0] === obj) return array[i];
    }
    return null;
  }
}

// Array#at(index) -> obj or nil
//
// TODO: negative index count backwords from the end of the array
//
if (!Array.prototype.at) {
  Array.prototype.at = function (index) {
    if (this == null) throw new TypeError();
    var array = this;
    return array[index];
  }
}

// Array#bsearch { |x| block } -> elem
//
if (!Array.prototype.bsearch) {
  Array.prototype.bsearch = function () {
    //
  }
}

// Array#bsearch_index
//
if (!Array.prototype.bsearchIndex) {
  Array.prototype.bsearchIndex = function () {
    //
  }
}

// Array#clear -> ary
//
if (!Array.prototype.clear) {
  Array.prototype.clear = function () {
    if (this == null) throw new TypeError();
    var array = this;
    this.length = 0;
    return this;
  }
}

// Array#collect { |item| block } -> new_ary
//
// See also #map
//
// requires
// * Array.prototype.map()
//
if (!Array.prototype.collect) {
  Array.prototype.collect = Array.prototype.map;
}

// Array#combination(n) -> ary
//
if (!Array.prototype.combination) {
  Array.prototype.combination = function () {
    //
  }
}

// Array#compact -> new_ary
//
if (!Array.prototype.compact) {
  Array.prototype.compact = function () {
    //
  };
}

// Array#concat -> ary
//
if (!Array.prototype.concat) {
  Array.prototype.concat = function () {
    //
  };
}

// Array#count -> int
// Array#count(obj) -> int
// Array#count { |item| block } -> int
//
if (!Array.prototype.count) {
  Array.prototype.count = function () {
    //
  };
}

// Array#cycle(n=nil) { |obj| block }
//
if (!Array.prototype.cycle) {
  Array.prototype.cycle = function () {
    //
  };
}

// Array#delete(obj) -> item or nil
// Array#delete(obj) { block } -> item or result of block
//
if (!Array.prototype.delete) {
  Array.prototype.delete = function () {
    //
  };
}

// Array#delete_at(index) -> obj or nil
//
if (!Array.prototype.deleteAt) {
  Array.prototype.deleteAt = function () {
    //
  };
}

// Array#delete_if { |item| block } -> ary
//
if (!Array.prototype.deleteIf) {
  Array.prototype.deleteIf = function () {
    //
  };
}

// Array#dig(idx, ...) -> obj
//
if (!Array.prototype.dig) {
  Array.prototype.dig = function () {
    //
  };
}

// Array#drop(n) -> new_ary
//
// See also #take
//
if (!Array.prototype.drop) {
  Array.prototype.drop = function () {
    //
  };
}

// Array#drop_while(n) -> new_ary
//
if (!Array.prototype.dropWhile) {
  Array.prototype.dropWhile = function () {
    //
  };
}

// Array#each { |item| block } -> ary
//
if (!Array.prototype.each) {
  Array.prototype.each = function () {
    //
  };
}

// Array#each_index { |item| block } -> ary
//
if (!Array.prototype.eachIndex) {
  Array.prototype.eachIndex = function () {
    //
  };
}

// Array#empty? -> true or false
//
if (!Array.prototype.empty) {
  Array.prototype.empty = function () {
    //
  };
}

// Array#eql -> true or false
//
if (!Array.prototype.eql) {
  Array.prototype.eql = function () {
    //
  };
}

// Array#fetch(index) -> obj
// Array#fetch(index, default) -> obj
// Array#fetch(index) { |index| block } -> obj
//
if (!Array.prototype.fetch) {
  Array.prototype.fetch = function () {
    //
  };
}

// Array#fill(obj) -> ary
// Array#fill { |index| block } -> ary
//
if (!Array.prototype.fill) {
  Array.prototype.fill = function () {
    //
  };
}

// Array#find_index(obj) -> int or nil
// Array#find_index { |item| block } -> int or nil
//
if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function () {
    //
  };
}

// Array#first() -> obj or nil
// Array#first(n) -> new_ary
//
if (!Array.prototype.first) {
  Array.prototype.first = function () {
    if (this == null) throw new TypeError();
    var array = this;
    return array[0];
  };
}

// Array#flatten -> new_ary
//
if (!Array.prototype.flatten) {
  Array.prototype.flatten = function () {
    if (this == null) throw new TypeError();
    var array = this;
    var flatArray = [];

    function pushLoop(ary) {
      var i=0;
      for (i; i < ary.length; i++) {
        if (ary[i] && ary[i].constructor == Array) {
          pushLoop(ary[i]);
        } else {
          flatArray.push(ary[i]);
        }
      }
    }

    pushLoop(array);
    return flatArray;
  };
}

// // Array#frozen?
// //
// if (!Array.prototype.frozen) {
//   Array.prototype.frozen = function () {
//     //
//   };
// }

// // Array#hash
// //
// if (!Array.prototype.hash) {
//   Array.prototype.hash = function () {
//     //
//   };
// }

// Array#include(obj) -> true or false
//
if (!Array.prototype.include) {
  Array.prototype.include = function () {
    //
  };
}

// Array#index
//
if (!Array.prototype.index) {
  Array.prototype.index = function () {
    //
  };
}

// Array#initialize_copy
//
if (!Array.prototype.initializeCopy) {
  Array.prototype.initializeCopy = function () {
    //
  };
}

// Array#insert
//
if (!Array.prototype.insert) {
  Array.prototype.insert = function () {
    //
  };
}

// Array#inspect
//
if (!Array.prototype.inspect) {
  Array.prototype.inspect = function () {
    //
  };
}

// // Array#join
// //
// if (!Array.prototype.join) {
//   Array.prototype.join = function () {
//     //
//   };
// }

// Array#keep_if
//
if (!Array.prototype.keepIf) {
  Array.prototype.keepIf = function () {
    //
  };
}

// Array#last
//
if (!Array.prototype.last) {
  Array.prototype.last = function () {
    //
  };
}

// // Array#length
// //
// if (!Array.prototype.length) {
//   Array.prototype.length = function () {
//     //
//   };
// }

// Array#map
//
if (!Array.prototype.map) {
  Array.prototype.map = function () {
    //
  };
}

// Array#pack
//
if (!Array.prototype.pack) {
  Array.prototype.pack = function () {
    //
  };
}

// Array#permutation
//
if (!Array.prototype.permutation) {
  Array.prototype.permutation = function () {
    //
  };
}

// // Array#pop
// //
// if (!Array.prototype.pop) {
//   Array.prototype.pop = function () {
//     //
//   };
// }

// Array#product
//
if (!Array.prototype.product) {
  Array.prototype.product = function () {
    //
  };
}

// // Array#push
// //
// if (!Array.prototype.push) {
//   Array.prototype.push = function () {
//     //
//   };
// }

// Array#rassoc
//
if (!Array.prototype.rassoc) {
  Array.prototype.rassoc = function () {
    //
  };
}

// Array#reject
//
if (!Array.prototype.reject) {
  Array.prototype.reject = function () {
    //
  };
}

// Array#repeated_combination
//
if (!Array.prototype.repeated_combination) {
  Array.prototype.repeated_combination = function () {
    //
  };
}

// Array#repeated_permutation
//
if (!Array.prototype.repeated_permutation) {
  Array.prototype.repeated_permutation = function () {
    //
  };
}

// Array#replace
//
if (!Array.prototype.replace) {
  Array.prototype.replace = function () {
    //
  };
}

// Array#reverse
//
if (!Array.prototype.reverse) {
  Array.prototype.reverse = function () {
    //
  };
}

// Array#reverse_each
//
if (!Array.prototype.reverseEach) {
  Array.prototype.reverseEach = function () {
    //
  };
}

// Array#rindex
//
if (!Array.prototype.rindex) {
  Array.prototype.rindex = function () {
    //
  };
}

// Array#rotate
//
if (!Array.prototype.rotate) {
  Array.prototype.rotate = function () {
    //
  };
}

// Array#sample
//
if (!Array.prototype.sample) {
  Array.prototype.sample = function () {
    //
  };
}

// Array#select
//
if (!Array.prototype.select) {
  Array.prototype.select = function () {
    //
  };
}

// Array#shift
//
if (!Array.prototype.shift) {
  Array.prototype.shift = function () {
    //
  };
}

// Array#shuffle
//
if (!Array.prototype.shuffle) {
  Array.prototype.shuffle = function () {
    //
  };
}

// Array#size
//
if (!Array.prototype.size) {
  Array.prototype.size = function () {
    //
  };
}

// Array#slice
//
if (!Array.prototype.slice) {
  Array.prototype.slice = function () {
    //
  };
}

// Array#sort
//
if (!Array.prototype.sort) {
  Array.prototype.sort = function () {
    //
  };
}

// Array#sort_by
//
if (!Array.prototype.sortBy) {
  Array.prototype.sortBy = function () {
    //
  };
}

// Array#take
//
if (!Array.prototype.take) {
  Array.prototype.take = function () {
    //
  };
}

// Array#take_while
//
if (!Array.prototype.takeWhile) {
  Array.prototype.takeWhile = function () {
    //
  };
}

// Array#to_a
//
if (!Array.prototype.toArray) {
  Array.prototype.toArray = function () {
    //
  };
}

// Array#to_h
//
if (!Array.prototype.toHash) {
  Array.prototype.toHash = function () {
    //
  };
}

// Array#to_s
//
if (!Array.prototype.toString) {
  Array.prototype.toString = function () {
    //
  };
}

// Array#transpose
//
if (!Array.prototype.transpose) {
  Array.prototype.transpose = function () {
    //
  };
}

// Array#uniq
//
if (!Array.prototype.uniq) {
  Array.prototype.uniq = function () {
    //
  };
}

// Array#unshift
//
if (!Array.prototype.unshift) {
  Array.prototype.unshift = function () {
    //
  };
}

// Array#values_at
//
if (!Array.prototype.valuesAt) {
  Array.prototype.valuesAt = function () {
    //
  };
}

// Array#zip
//
if (!Array.prototype.zip) {
  Array.prototype.zip = function () {
    //
  };
}
