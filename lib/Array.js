
// Array
// Enumerable

// requires
// * JavaScript >= ES5

// --- Ruby Array methods ---

// Array#all? [{ |obj| block }] -> true or false
//
if (!Array.prototype.all) {
  Array.prototype.all = function (predicate) {
    if (!predicate) {
      predicate = function (elem) { return elem; };
    }
    return Array.prototype.every.call(this, predicate);
  }
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "all", { enumerable: false });
}

// Array#any? [{ |obj| block }] -> true or false
//
if (!Array.prototype.any) {
  Array.prototype.any = function (predicate) {
    if (!predicate) {
      predicate = function (elem) { return elem; };
    }
    return Array.prototype.some.call(this, predicate);
  }
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "any", { enumerable: false });
}

// Array#assoc(obj) -> element_ary or nil
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
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "assoc", { enumerable: false });
}

// Array#at(index) -> obj or nil
//
if (!Array.prototype.at) {
  Array.prototype.at = function (index) {
    // index is out of range
    if (index >= 0 && index >= this.length) return null;
    if (index <  0 && index < -this.length) return null;

    if (index >= 0) {
      return this[index];
    } else {
      return this.slice(index)[0];
    }
  }
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "at", { enumerable: false });
}

// Array#bsearch { |x| block } -> elem
//
// (help wanted)
if (!Array.prototype.bsearch) {
  Array.prototype.bsearch = function () {
    //
  }
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "bsearch", { enumerable: false });
}

// Array#bsearch_index { |x| block } -> int or nil
//
// (help wanted)
if (!Array.prototype.bsearchIndex) {
  Array.prototype.bsearchIndex = function () {
    //
  }
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "bsearchIndex", { enumerable: false });
}

// Array#clear -> ary
//
if (!Array.prototype.clear) {
  Array.prototype.clear = function () {
    this.length = 0;
    return this;
  }
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "clear", { enumerable: false });
}

// Array#collect { |item| block } -> new_ary
//
//   See also #map
//
if (!Array.prototype.collect) {
  Array.prototype.collect = Array.prototype.map;
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "collect", { enumerable: false });
}

// Array#combination(n) -> ary
//
// (help wanted)
if (!Array.prototype.combination) {
  Array.prototype.combination = function () {
    //
  }
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "combination", { enumerable: false });
}

// Array#compact -> new_ary
//
if (!Array.prototype.compact) {
  Array.prototype.compact = function () {
    return this.filter(function (elem) { return elem; });
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "compact", { enumerable: false });
}

// Array#concat -> ary
//
// (already implemented)

// Array#count -> int
// Array#count(obj) -> int
// Array#count { |item| block } -> int
//
if (!Array.prototype.count) {
  Array.prototype.count = function (obj) {
    if (!obj) {
      return this.length;
    }
    if (typeof obj === "function") {
      return this.filter(obj).length;
    }
    if (obj) {
      return this.filter(function (elem) {
        return elem === obj;
      }).length;
    }
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "count", { enumerable: false });
}

// Array#cycle(n=nil) { |obj| block }
//
if (!Array.prototype.cycle) {
  Array.prototype.cycle = function (times, callback) {
    for (var t = 0; t < times; t++) {
      for (var i = 0; i < this.length; i++) {
        callback(this[i]);
      }
    }
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "cycle", { enumerable: false });
}

// Array#delete(obj) -> item or nil
// Array#delete(obj) { block } -> item or result of block
//
if (!Array.prototype.delete) {
  Array.prototype.delete = function (obj, block) {
    var deleteIndexes = [];

    for (var i = 0; i < this.length; i++) {
      if (this[i] === obj) {
        deleteIndexes.push(i);
      }
    }

    deleteIndexes = deleteIndexes.reverse();
    for (var i = 0; i < deleteIndexes.length; i++) {
      this.splice(deleteIndexes[i], 1);
    }

    if (deleteIndexes.length > 0) {
      return obj;
    } else if (typeof block === "function") {
      return block();
    } else {
      return null;
    }
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "delete", { enumerable: false });
}

// Array#delete_at(index) -> obj or nil
//
if (!Array.prototype.deleteAt) {
  Array.prototype.deleteAt = function (index) {
    // index is out of range
    if (index >= 0 && index >= this.length) return null;
    if (index <  0 && index < -this.length) return null;

    if (index < 0) {
      index += this.length;
    }
    return this.splice(index, 1)[0];
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "deleteAt", { enumerable: false });
}

// Array#delete_if { |item| block } -> ary
//
if (!Array.prototype.deleteIf) {
  Array.prototype.deleteIf = function (predicate) {
    var deleteIndexes = [];

    for (var i = 0; i < this.length; i++) {
      if (predicate(this[i])) {
        deleteIndexes.push(i);
      }
    }

    deleteIndexes = deleteIndexes.reverse();
    for (var i = 0; i < deleteIndexes.length; i++) {
      this.splice(deleteIndexes[i], 1);
    }

    return this;
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "deleteIf", { enumerable: false });
}

// Array#dig(idx, ...) -> obj
//
if (!Array.prototype.dig) {
  Array.prototype.dig = function () {
    var value = this;
    for (var i = 0; i < arguments.length; i++) {
      var index = arguments[i];
      if (value.hasOwnProperty(index)) {
        value = value[index];
      } else {
        return null;
      }
    }
    return value;
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "dig", { enumerable: false });
}

// Array#drop(n) -> new_ary
//
//   See also #take
//
if (!Array.prototype.drop) {
  Array.prototype.drop = function (n) {
    return this.slice(this.length - n, this.length);
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "drop", { enumerable: false });
}

// Array#drop_while { |obj| block } -> new_ary
//
if (!Array.prototype.dropWhile) {
  Array.prototype.dropWhile = function (predicate) {
    for (var i = 0; i < this.length; i++) {
      if (!predicate(this[i])) {
        return this.slice(i);
      }
    }
    return [];
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "dropWhile", { enumerable: false });
}

// Array#each { |item| block } -> ary
//
//   Alias for Array.prototype.forEach
//
if (!Array.prototype.each) {
  Array.prototype.each = Array.prototype.forEach;
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "each", { enumerable: false });
}

// Array#each_cons(n) { |item| block } -> nil
//
if (!Array.prototype.eachCons) {
  Array.prototype.eachCons = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "eachCons", { enumerable: false });
}

// Array#each_entry { |item| block } -> enum
// ??
//
if (!Array.prototype.eachEntry) {
  Array.prototype.eachEntry = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "eachEntry", { enumerable: false });
}

// Array#each_index { |item| block } -> ary
//
if (!Array.prototype.eachIndex) {
  Array.prototype.eachIndex = function (block) {
    for (var i = 0; i < this.length; i++) {
      block(i);
    }
    return this;
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "eachIndex", { enumerable: false });
}

// Array#each_slice(n) { |item| block } -> enum
//
if (!Array.prototype.eachSlice) {
  Array.prototype.eachSlice = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "eachSlice", { enumerable: false });
}

// Array#each_with_index { |obj, i| block }
//

// Array#each_with_object { |(*args), memo| block }
//

// Array#empty? -> true or false
//
if (!Array.prototype.empty) {
  Array.prototype.empty = function () {
    return this.length == 0;
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "empty", { enumerable: false });
}

// Array#eql -> true or false
//
//   refer to http://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
//
if (!Array.prototype.eql) {
  Array.prototype.eql = function (otherArray) {
    // if the other array is a falsy value, return
    if (!otherArray) return false;

    // compare lengths - can save a lot of time
    if (this.length != otherArray.length) return false;

    for (var i = 0, l = this.length; i < l; i++) {
      // Check if we have nested arrays
      if (this[i] instanceof Array && otherArray[i] instanceof Array) {
        // recurse into the nested arrays
        if (!this[i].eql(otherArray[i])) return false;
      } else if (this[i] !== otherArray[i]) {
        // Warning - two different object instances will never be equal: {x:20} != {x:20}
        return false;
      }
    }
    return true;
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "eql", { enumerable: false });
}

// Array#fetch(index) -> obj
// Array#fetch(index, default) -> obj
// Array#fetch(index) { |index| block } -> obj
//
if (!Array.prototype.fetch) {
  Array.prototype.fetch = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "fetch", { enumerable: false });
}

// Array#fill(obj) -> ary
// Array#fill { |index| block } -> ary
//
if (!Array.prototype.fill) {
  Array.prototype.fill = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "fill", { enumerable: false });
}

// Array#find_all { |obj| block } -> array
//
//   Alias for #select
//   See also #reject

// Array#find_index(obj) -> int or nil
// Array#find_index { |item| block } -> int or nil
//
if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "findIndex", { enumerable: false });
}

// Array#first() -> obj or nil
// Array#first(n) -> new_ary
//
if (!Array.prototype.first) {
  Array.prototype.first = function () {
    return this[0];
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "first", { enumerable: false });
}

// Array#flat_map { |obj| block } -> array
//
if (!Array.prototype.flatMap) {
  Array.prototype.flatMap = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "flatMap", { enumerable: false });
}

// Array#flatten -> new_ary
//
if (!Array.prototype.flatten) {
  Array.prototype.flatten = function () {
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

    pushLoop(this);
    return flatArray;
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "flatten", { enumerable: false });
}

// Array#frozen? -> true or false
//
// (not needed)

// Array#grep(pattern) -> array
//
if (!Array.prototype.grep) {
  Array.prototype.grep = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "grep", { enumerable: false });
}

// Array#grep_v(pattern) -> array
//
if (!Array.prototype.grepV) {
  Array.prototype.grepV = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "grepV", { enumerable: false });
}

// Array#group_by { |obj| block } -> hash
//
if (!Array.prototype.groupBy) {
  Array.prototype.groupBy = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "groupBy", { enumerable: false });
}

// Array#hash
//
// (not needed)

// Array#include(obj) -> true or false
//
if (!Array.prototype.include) {
  Array.prototype.include = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "include", { enumerable: false });
}

// Array#inject(initial) { |memo, obj| block } -> obj
//
if (!Array.prototype.inject) {
  Array.prototype.inject = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "inject", { enumerable: false });
}

// Array#index(obj) -> int or nil
// Array#index { |item| block } -> int or nil
//
if (!Array.prototype.index) {
  Array.prototype.index = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "index", { enumerable: false });
}

// Array#initialize_copy(other_ary) -> ary
//
if (!Array.prototype.initializeCopy) {
  Array.prototype.initializeCopy = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "initializeCopy", { enumerable: false });
}

// Array#insert(index, obj...) -> ary
//
if (!Array.prototype.insert) {
  Array.prototype.insert = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "insert", { enumerable: false });
}

// Array#inspect -> string
//
// (not needed)

// Array#join(sepaator=",") -> string
//
// (already implemented)

// Array#keep_if { |item| block } -> ary
//
if (!Array.prototype.keepIf) {
  Array.prototype.keepIf = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "keepIf", { enumerable: false });
}

// Array#last -> obj or nil
// Array#last(n) -> new_ary
//
if (!Array.prototype.last) {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "last", { enumerable: false });
}

// Array#lazy -> lazy_enumerator
//
// (cannot implement)

// Array#length -> int
//
// (already implemented)

// Array#map { |item| block } -> ary
//
// (already implemented)

// Array#max -> obj
// Array#max { |a, b| block } -> obj
// Array#max(n) -> obj
// Array#max(n) { |a, b| block } -> obj
//

// Array#max_by { |a, b| block } -> obj
// Array#max_by(n) { |a, b| block } -> obj
//

// Array#member?(obj) -> true or false
//
//   Alias for #include?
//

// Array#min -> obj
// Array#min { |a, b| block } -> obj
// Array#min(n) -> obj
// Array#min(n) { |a, b| block } -> obj
//

// Array#min_by { |a, b| block } -> obj
// Array#min_by(n) { |a, b| block } -> obj
//

// Array#minmax -> [min, max]
// Array#minmax { |a, b| block } -> [min, max]
//

// Array#minmax_by { |a, b| block } -> [min, max]
//

// Array#pack(aTemplateString) -> aBinaryString
//
// (not needed)

// Array#none? [{ |obj| block }] -> true or false
//

// Array#one? [{ |obj| block }] -> true or false
//

// Array#partition { |obj| block } -> [true_array, false_array]
//

// Array#permutation(n) -> ary
//
if (!Array.prototype.permutation) {
  Array.prototype.permutation = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "permutation", { enumerable: false });
}

// Array#pop -> obj or nil
//
// (already implemented)

// Array#product(other_ary, ...) -> new_ary
//
if (!Array.prototype.product) {
  Array.prototype.product = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "product", { enumerable: false });
}

// Array#push(obj, ...)
//
// (already implemented)

// Array#rassoc(obj) -> element_ary or nil
//
if (!Array.prototype.rassoc) {
  Array.prototype.rassoc = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "rassoc", { enumerable: false });
}

// Array#reduce(initial) { |memo, obj| block } -> obj
//
//   Alias for #inject
//

// Array#reject { |item| block } -> new_ary
//
if (!Array.prototype.reject) {
  Array.prototype.reject = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "reject", { enumerable: false });
}

// Array#repeated_combination(n) -> ary
//
if (!Array.prototype.repeated_combination) {
  Array.prototype.repeatedCombination = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "repeatedCombination", { enumerable: false });
}

// Array#repeated_permutation(n) -> ary
//
if (!Array.prototype.repeated_permutation) {
  Array.prototype.repeatedPermutation = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "repeatedPermutation", { enumerable: false });
}

// Array#replace(other_ary) -> ary
//
if (!Array.prototype.replace) {
  Array.prototype.replace = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "replace", { enumerable: false });
}

// Array#reverse -> new_ary
//
// (already implemented)

// Array#reverse_each { |item| block } -> ary
//
if (!Array.prototype.reverseEach) {
  Array.prototype.reverseEach = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "reverseEach", { enumerable: false });
}

// Array#rindex(obj) -> int or nil
// Array#rindex { |item| block } -> int or nil
//
if (!Array.prototype.rindex) {
  Array.prototype.rindex = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "rindex", { enumerable: false });
}

// Array#rotate(count=1) -> new_ary
//
if (!Array.prototype.rotate) {
  Array.prototype.rotate = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "rotate", { enumerable: false });
}

// Array#sample -> obj
// Array#sample(n) -> new_ary
//
if (!Array.prototype.sample) {
  Array.prototype.sample = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "sample", { enumerable: false });
}

// Array#select { |item| block } -> new_ary
//
if (!Array.prototype.select) {
  Array.prototype.select = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "select", { enumerable: false });
}

// Array#shift -> obj or nil
//
// (already implemented)

// Array#shuffle -> new_ary
//
if (!Array.prototype.shuffle) {
  Array.prototype.shuffle = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "shuffle", { enumerable: false });
}

// Array#size -> int
//
if (!Array.prototype.size) {
  Array.prototype.size = function () {
    var array = this;
    return array.length;
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "size", { enumerable: false });
}

// Array#slice(index) -> obj or nil
//
//   Alias for #at
//
// Array#slice(start, length) -> new_ary or nil
//
//   JavaScript implementation is Array#slice(start, end)
//   but,  Ruby implementation is Array#slice(start, length)
//   therefore decided to not override JS implementation with Ruby one.
//

// Array#slice_after(pattern) -> array
// Array#slice_after { |elt| bool } -> array
//

// Array#slice_before(pattern) -> array
// Array#slice_before { |elt| bool } -> array
//

// Array#slice_when { |elt_before, elt_after| bool } -> array
//

// Array#sort -> new_ary
//
// (already implemented)

// Array#sort_by { |obj| block } -> ary
//
if (!Array.prototype.sortBy) {
  Array.prototype.sortBy = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "sortBy", { enumerable: false });
}

// Array#take(n) -> ary
//
if (!Array.prototype.take) {
  Array.prototype.take = function (n) {
    return this.slice(0, n);
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "take", { enumerable: false });
}

// Array#take_while { |obj| block } -> new_ary
//
if (!Array.prototype.takeWhile) {
  Array.prototype.takeWhile = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "takeWhile", { enumerable: false });
}

// Array#to_a -> ary
//
if (!Array.prototype.toArray) {
  Array.prototype.toArray = function () {
    return this;
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "toArray", { enumerable: false });
}

// Array#to_h -> hash
//
if (!Array.prototype.toHash) {
  Array.prototype.toHash = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "toHash", { enumerable: false });
}

// Array#to_s -> string
//
// (already implemented by toString)

// Array#transpose -> new_ary
//
if (!Array.prototype.transpose) {
  Array.prototype.transpose = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "transpose", { enumerable: false });
}

// Array#uniq -> new_ary
// Array#uniq { |item| block } -> new_ary
//
if (!Array.prototype.uniq) {
  Array.prototype.uniq = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "uniq", { enumerable: false });
}

// Array#unshift(obj, ...)
//
// (already implemented)

// Array#values_at(selector, ...) -> new_ary
//
if (!Array.prototype.valuesAt) {
  Array.prototype.valuesAt = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "valuesAt", { enumerable: false });
}

// Array#zip(other_ary, ...) -> new_ary
//
if (!Array.prototype.zip) {
  Array.prototype.zip = function () {
    //
  };
  // Hide method from for-in loops
  Object.defineProperty(Array.prototype, "zip", { enumerable: false });
}
