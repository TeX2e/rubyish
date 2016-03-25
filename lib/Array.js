
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
}

// Array#bsearch { |x| block } -> elem
//
// (help wanted)
if (!Array.prototype.bsearch) {
  Array.prototype.bsearch = function () {
    //
  }
}

// Array#bsearch_index { |x| block } -> int or nil
//
// (help wanted)
if (!Array.prototype.bsearchIndex) {
  Array.prototype.bsearchIndex = function () {
    //
  }
}

// Array#clear -> ary
//
if (!Array.prototype.clear) {
  Array.prototype.clear = function () {
    this.length = 0;
    return this;
  }
}

// Array#collect { |item| block } -> new_ary
//
//   See also #map
//
if (!Array.prototype.collect) {
  Array.prototype.collect = Array.prototype.map;
}

// Array#combination(n) -> ary
//
// (help wanted)
if (!Array.prototype.combination) {
  Array.prototype.combination = function () {
    //
  }
}

// Array#compact -> new_ary
//
if (!Array.prototype.compact) {
  Array.prototype.compact = function () {
    return this.filter(function (elem) { return elem; });
  };
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
}

// Array#drop(n) -> new_ary
//
//   See also #take
//
if (!Array.prototype.drop) {
  Array.prototype.drop = function (n) {
    return this.slice(this.length - n, this.length);
  };
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
}

// Array#each { |item| block } -> ary
//
//   Alias for Array.prototype.forEach
//
if (!Array.prototype.each) {
  Array.prototype.each = Array.prototype.forEach;
}

// Array#each_cons(n) { |item| block } -> nil
//
if (!Array.prototype.eachCons) {
  Array.prototype.eachCons = function () {
    //
  };
}

// Array#each_entry { |item| block } -> enum
// ??
//
if (!Array.prototype.eachEntry) {
  Array.prototype.eachEntry = function () {
    //
  };
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
}

// Array#each_slice(n) { |item| block } -> enum
//
if (!Array.prototype.eachSlice) {
  Array.prototype.eachSlice = function () {
    //
  };
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
}

// Array#fetch(index) -> obj
// Array#fetch(index, default) -> obj
// Array#fetch(index) { |index| block } -> obj
//
if (!Array.prototype.fetch) {
  Array.prototype.fetch = function (index, obj) {

    function defaultValue(index, obj) {
      if (obj === undefined) {
        throw new Error("index " + index + " outside of array bounds.");
      } else if (typeof obj == "function") {
        return obj(index);
      } else {
        return obj;
      }
    }

    // index is out of range
    if (index >= 0 && index >= this.length) return defaultValue(index, obj);
    if (index <  0 && index < -this.length) return defaultValue(index, obj);

    if (index >= 0) {
      return this[index];
    } else {
      return this.slice(index)[0];
    }
  };
}

// Array#fill(obj) -> ary
// Array#fill { |index| block } -> ary
//
//   Ruby Array method fill() is conflict with js.
//   So, named rubyFill() instead of fill().
//
if (!Array.prototype.rubyFill) {
  Array.prototype.rubyFill = function (obj, start, length) {
    start  = start || 0;
    length = length || this.length;

    function filledValue(index, obj) {
      if (typeof obj === "function") {
        return obj(index);
      } else {
        return obj;
      }
    }

    for (var i = start; i < length; i++) {
      this[i] = filledValue(i, obj);
    }
    return this;
  };
}

// Array#find_all { |obj| block } -> array
//
//   Alias for #select
//   See also #reject
//
if (!Array.prototype.findAll) {
  Array.prototype.findAll = function (predicate) {
    return this.filter(predicate);
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
    return this[0];
  };
}

// Array#flat_map { |obj| block } -> array
//
if (!Array.prototype.flatMap) {
  Array.prototype.flatMap = function () {
    //
  };
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
}

// Array#grep_v(pattern) -> array
//
if (!Array.prototype.grepV) {
  Array.prototype.grepV = function () {
    //
  };
}

// Array#group_by { |obj| block } -> hash
//
if (!Array.prototype.groupBy) {
  Array.prototype.groupBy = function () {
    //
  };
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
}

// Array#inject(initial) { |memo, obj| block } -> obj
//
if (!Array.prototype.inject) {
  Array.prototype.inject = function () {
    //
  };
}

// Array#index(obj) -> int or nil
// Array#index { |item| block } -> int or nil
//
if (!Array.prototype.index) {
  Array.prototype.index = function () {
    //
  };
}

// Array#initialize_copy(other_ary) -> ary
//
if (!Array.prototype.initializeCopy) {
  Array.prototype.initializeCopy = function () {
    //
  };
}

// Array#insert(index, obj...) -> ary
//
if (!Array.prototype.insert) {
  Array.prototype.insert = function () {
    //
  };
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
}

// Array#last -> obj or nil
// Array#last(n) -> new_ary
//
if (!Array.prototype.last) {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
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
}

// Array#repeated_combination(n) -> ary
//
if (!Array.prototype.repeated_combination) {
  Array.prototype.repeatedCombination = function () {
    //
  };
}

// Array#repeated_permutation(n) -> ary
//
if (!Array.prototype.repeated_permutation) {
  Array.prototype.repeatedPermutation = function () {
    //
  };
}

// Array#replace(other_ary) -> ary
//
if (!Array.prototype.replace) {
  Array.prototype.replace = function () {
    //
  };
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
}

// Array#rindex(obj) -> int or nil
// Array#rindex { |item| block } -> int or nil
//
if (!Array.prototype.rindex) {
  Array.prototype.rindex = function () {
    //
  };
}

// Array#rotate(count=1) -> new_ary
//
if (!Array.prototype.rotate) {
  Array.prototype.rotate = function () {
    //
  };
}

// Array#sample -> obj
// Array#sample(n) -> new_ary
//
if (!Array.prototype.sample) {
  Array.prototype.sample = function () {
    //
  };
}

// Array#select { |item| block } -> new_ary
//
//   Alias for #find_all
//
if (!Array.prototype.select) {
  Array.prototype.select = Array.prototype.findAll;
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
}

// Array#size -> int
//
if (!Array.prototype.size) {
  Array.prototype.size = function () {
    var array = this;
    return array.length;
  };
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
}

// Array#take(n) -> ary
//
if (!Array.prototype.take) {
  Array.prototype.take = function (n) {
    return this.slice(0, n);
  };
}

// Array#take_while { |obj| block } -> new_ary
//
if (!Array.prototype.takeWhile) {
  Array.prototype.takeWhile = function () {
    //
  };
}

// Array#to_a -> ary
//
if (!Array.prototype.toArray) {
  Array.prototype.toArray = function () {
    return this;
  };
}

// Array#to_h -> hash
//
if (!Array.prototype.toHash) {
  Array.prototype.toHash = function () {
    //
  };
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
}

// Array#uniq -> new_ary
// Array#uniq { |item| block } -> new_ary
//
if (!Array.prototype.uniq) {
  Array.prototype.uniq = function () {
    //
  };
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
}

// Array#zip(other_ary, ...) -> new_ary
//
if (!Array.prototype.zip) {
  Array.prototype.zip = function () {
    //
  };
}

// Hide methods from for-in loops
for (var method in Array.prototype) {
  if (Array.prototype.hasOwnProperty(method)) {
    Object.defineProperty(Array.prototype, method.toString(), { enumerable: false });
  }
}
