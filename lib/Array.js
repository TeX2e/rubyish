
// Array
// Enumerable

// requires
// * JavaScript >= ES5

// --- compareTo method ---

Number.prototype.compareTo =
String.prototype.compareTo = function (other) {
  if (this < other) return -1;
  if (this > other) return 1;
  return 0;
};

// --- Ruby Array methods ---

// Naming
//
// Following rules apply:
//   * each_with_index -> eachWithIndex
//   * include? --> include
//   * select! -X->
//   * reduce (conflict with js) -> rubyReduce
//

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
    for (var i = 0; i < this.length; i++) {
      if (this[i][0] === obj) return this[i];
    }
    return null;
  }
}

// Array#at(index) -> obj or nil
//
if (!Array.prototype.at) {
  Array.prototype.at = function (index) {
    // index is out of range
    if (index >= this.length) return null;
    if (index < -this.length) return null;

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

// Array#chunk { |elt| bool } -> ary
//
if (!Array.prototype.chunk) {
  Array.prototype.chunk = function () {
    //
  }
}

// Array#chunk_while { |elt_before, elt_after| bool } -> ary
//
if (!Array.prototype.chunkWhile) {
  Array.prototype.chunkWhile = function () {
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

// Array#clone -> ary
//
if (!Array.prototype.clone) {
  Array.prototype.clone = function () {
    var copyedArray = this.slice();
    for (var prop in this) {
      if (this.hasOwnProperty(prop)) {
        Object.defineProperty(copyedArray, prop, { value: this[prop] });
      }
    }
    return copyedArray;
  }
}

// Array#collect { |item| block } -> ary
//
//   See also #map
//
if (!Array.prototype.collect) {
  Array.prototype.collect = Array.prototype.map;
}

// Array#collect_concat { |obj| block } -> ary
//
//   Alias for #flat_map
//
if (!Array.prototype.collectConcat) {
  Array.prototype.collectConcat = function (block) {
    var memo = [];
    // reduce
    for (var i = 0; i < this.length; i++) {
      memo.push(block.call(null, this[i]));
    }
    // flatten(level=1)
    memo = Array.prototype.concat.apply([], memo);
    return memo;
  };
}

// Array#combination(n) -> ary
//
// (help wanted)
if (!Array.prototype.combination) {
  Array.prototype.combination = function () {
    //
  }
}

// Array#compact -> ary
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
      return this.filter(function (elem) { return elem === obj; }).length;
    }
  };
}

// Array#cycle(n) { |obj| block } -> nil
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
      return block.call(null);
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
    if (index >= this.length) return null;
    if (index < -this.length) return null;

    if (index < 0) index += this.length;
    return this.splice(index, 1)[0];
  };
}

// Array#delete_if { |item| block } -> ary
//
if (!Array.prototype.deleteIf) {
  Array.prototype.deleteIf = function (predicate) {
    var deleteIndexes = [];

    for (var i = 0; i < this.length; i++) {
      if (predicate.call(null, this[i])) {
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

// Array#detect(ifnone=nil) { |obj| block } -> obj or nil
//
if (!Array.prototype.detect) {
  Array.prototype.detect = function (obj, block) {
    var ifnone;
    var predicate;

    if (typeof obj === "function") {
      ifnone = null;
      predicate = obj;
    } else if (typeof obj === "object" && typeof block === "function") {
      ifnone = obj;
      predicate = block;
    } else {
      throw new TypeError('predicate must be a function');
    }

    for (var i = 0; i < this.length; i++) {
      if (predicate.call(null, this[i])) return this[i];
    }
    return ifnone;
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

// Array#drop(n) -> ary
//
//   See also #take
//
if (!Array.prototype.drop) {
  Array.prototype.drop = function (n) {
    return this.slice(this.length - n, this.length);
  };
}

// Array#drop_while { |obj| block } -> ary
//
if (!Array.prototype.dropWhile) {
  Array.prototype.dropWhile = function (predicate) {
    for (var i = 0; i < this.length; i++) {
      if (!predicate.call(null, this[i])) {
        return this.slice(i);
      }
    }
    return [];
  };
}

// Array#dup -> ary
//
if (!Array.prototype.dup) {
  Array.prototype.dup = function () {
    return this.slice();
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
  Array.prototype.eachCons = function (n, block) {
    if (n < 1) return;

    for (var i = 0; i <= this.length - n; i++) {
      block.call(null, this.slice(i, i + n));
    }
    return null;
  };
}

// Array#each_entry { |item| block } -> enum
//
// (not needed)

// Array#each_index { |item| block } -> ary
//
if (!Array.prototype.eachIndex) {
  Array.prototype.eachIndex = function (block) {
    for (var i = 0; i < this.length; i++) {
      block.call(null, i);
    }
    return this;
  };
}

// Array#each_slice(n) { |item| block } -> enum
//
if (!Array.prototype.eachSlice) {
  Array.prototype.eachSlice = function (n, block) {
    if (n < 1) return;

    for (var i = 0; i < this.length; i += n) {
      block.call(null, this.slice(i, i + n));
    }
    return null;
  };
}

// Array#each_with_index { |obj, i| block }
//
if (!Array.prototype.eachWithIndex) {
  Array.prototype.eachWithIndex = Array.prototype.forEach;
}

// Array#each_with_object(obj) { |(*args), memo| block }
//
if (!Array.prototype.eachWithObject) {
  Array.prototype.eachWithObject = function (obj, block) {
    var memo = obj;
    for (var i = 0; i < this.length; i++) {
      block.call(null, this[i], memo);
    }
    return memo;
  };
}

// Array#empty? -> true or false
//
if (!Array.prototype.empty) {
  Array.prototype.empty = function () {
    return this.length == 0;
  };
}

// Array#eql? -> true or false
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

// Array#equal? -> true or false
//
if (!Array.prototype.equal) {
  Array.prototype.equal = function (otherArray) {
    return this === otherArray;
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
// Array#ruby_fill(obj) -> ary
// Array#ruby_fill { |index| block } -> ary
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

// Array#find(ifnone=nil) { |obj| block } -> array
//
//   Alias for #detect
//
//   Ruby Array method find() is conflict with js.
//   So, named rubyFind() instead of find().
//
// Array#ruby_find(ifnone=nil) { |obj| block } -> array
//
if (!Array.prototype.rubyFind) {
  Array.prototype.rubyFind = Array.prototype.detect;
}

// Array#find_all { |obj| block } -> array
//
//   Alias for #select
//
if (!Array.prototype.findAll) {
  Array.prototype.findAll = function (predicate) {
    return this.filter(predicate);
  };
}

// Array#find_index(obj) -> int or nil
// Array#find_index { |item| block } -> int or nil
//
//   Ruby Array method findIndex() is conflict with js.
//   So, named rubyFindIndex() instead of findIndex().
//
// Array#ruby_find_index(obj) -> int or nil
// Array#ruby_find_index { |item| block } -> int or nil
//
if (!Array.prototype.rubyFindIndex) {
  Array.prototype.rubyFindIndex = function (obj) {
    if (typeof obj === "function") {
      var predicate = obj;
      for (var i = 0; i < this.length; i++) {
        if (predicate.call(null, this[i])) return i;
      }
    } else {
      var result = this.indexOf(obj);
      return (result !== -1) ? result : null;
    }
  };
}

// Array#first() -> obj or nil
// Array#first(n) -> ary
//
if (!Array.prototype.first) {
  Array.prototype.first = function (n) {
    if (!n) {
      if (this.length == 0) return null;
      return this[0];
    } else if (n > 0) {
      return this.slice(0, n);
    } else {
      throw new Error("n must be positive number");
    }
  };
}

// Array#flat_map { |obj| block } -> array
//
//   Alias for #collect_concat
//
if (!Array.prototype.flatMap) {
  Array.prototype.flatMap = Array.prototype.collectConcat;
}

// Array#flatten -> ary
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
// Array#grep(pattern) { |obj| block } -> array
//
if (!Array.prototype.grep) {
  Array.prototype.grep = function (pattern, block) {
    var predicate = function (elem) {
      return elem.match(pattern);
    };
    var result = this.filter(predicate);

    if (!block) {
      return result;
    } else if (typeof block === "function") {
      return result.map(block);
    } else {
      throw new TypeError();
    }
  };
}

// Array#grep_v(pattern) -> array
//
if (!Array.prototype.grepV) {
  Array.prototype.grepV = function (pattern, block) {
    var predicate = function (elem) {
      return !elem.match(pattern);
    };
    var result = this.filter(predicate);

    if (!block) {
      return result;
    } else if (typeof block === "function") {
      return result.map(block);
    } else {
      throw new TypeError();
    }
  };
}

// Array#group_by { |obj| block } -> hash
//
if (!Array.prototype.groupBy) {
  Array.prototype.groupBy = function (block) {
    var result = {};

    for (var i = 0; i < this.length; i++) {
      var key = block.call(null, this[i]);
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(this[i]);
    }
    return result;
  };
}

// Array#hash
//
// (not needed)

// Array#include?(obj) -> true or false
//
if (!Array.prototype.include) {
  Array.prototype.include = function (obj) {
    return this.indexOf(obj) >= 0;
  };
}

// Array#inject() { |memo, obj| block } -> obj
// Array#inject(initial) { |memo, obj| block } -> obj
//
if (!Array.prototype.inject) {
  Array.prototype.inject = function () {
    var init, block;
    if (arguments.length >= 2) {
      init  = arguments[0];
      block = arguments[1];
    } else if (arguments.length == 1) {
      init  = null;
      block = arguments[0];
    } else {
      throw new TypeError();
    }
    return this.reduce(block, init);
  };
}

// Array#index(obj) -> int or nil
// Array#index { |item| block } -> int or nil
//
if (!Array.prototype.index) {
  Array.prototype.index = Array.prototype.rubyFindIndex;
}

// Array#insert(index, obj...) -> ary
//
if (!Array.prototype.insert) {
  Array.prototype.insert = function (/* index, objs */) {
    var args  = 1 <= arguments.length ? Array.prototype.slice.call(arguments, 0) : [];
    var index = args.shift();
    var objs  = args;

    if (index < 0) {
      index += this.length + 1;
    }

    Array.prototype.splice.apply(this, [index, 0].concat(objs));
    return this;
  };
}

// Array#inspect -> string
//
if (!Array.prototype.inspect) {
  Array.prototype.inspect = Array.prototype.toString;
}

// Array#join(sepaator=",") -> string
//
// (already implemented)

// Array#keep_if { |item| block } -> ary
//
//   See also #select, #find_all
//
if (!Array.prototype.keepIf) {
  Array.prototype.keepIf = function (block) {
    var array = this.filter(block);
    Array.prototype.splice.apply(this, [0, this.length].concat(array));
    return this;
  };
}

// Array#last -> obj or nil
// Array#last(n) -> ary
//
if (!Array.prototype.last) {
  Array.prototype.last = function (n) {
    if (!n) {
      if (this.length == 0) return null;
      return this[this.length - 1];
    } else if (n > 0) {
      return this.slice(this.length - n, this.length);
    }
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
//   Using: Any#compareTo
//
if (!Array.prototype.max) {
  Array.prototype.max = function () {
    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));

    // Array#max(n) [{ |a, b| block }]
    if (Number.isInteger(args[0])) {
      var n = args[0];
      var comparator = args[1] || function (a, b) { return a.compareTo(b) };
      return this.sort(comparator).slice(this.length - n, this.length).reverse();
    }

    // Array#max() [{ |a, b| block }]
    var comparator = args[0] || function (a, b) { return a.compareTo(b) };
    var maxValue = this[0];
    for (var i = 1; i < this.length; i++) {
      if (comparator.call(null, this[i], maxValue) > 0) {
        maxValue = this[i];
      }
    }
    return maxValue;
  };
}

// Array#max_by { |a, b| block } -> obj
// Array#max_by(n) { |a, b| block } -> obj
//
//   Using: Any#compareTo
//
if (!Array.prototype.maxBy) {
  Array.prototype.maxBy = function () {
    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));

    // Array#max_by(n) { |a, b| block }
    if (Number.isInteger(args[0])) {
      var n = args[0];
      var block = args[1];
      var comparator = function (a, b) {
        return block.call(null, a).compareTo(block.call(null, b));
      };
      return this.sort(comparator).slice(this.length - n, this.length).reverse();
    }

    // Array#max_by { |a, b| block }
    var block = args[0];
    var comparator = function (a, b) {
      return block.call(null, a).compareTo(block.call(null, b));
    };
    var maxValue = this[0];
    for (var i = 1; i < this.length; i++) {
      if (comparator.call(null, this[i], maxValue) > 0) {
        maxValue = this[i];
      }
    }
    return maxValue;
  };
}

// Array#member?(obj) -> true or false
//
//   Alias for #include?
//
if (!Array.prototype.menber) {
  Array.prototype.menber = Array.prototype.include;
}

// Array#min -> obj
// Array#min { |a, b| block } -> obj
// Array#min(n) -> obj
// Array#min(n) { |a, b| block } -> obj
//
//   Using: Any#compareTo
//
if (!Array.prototype.min) {
  Array.prototype.min = function () {
    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));

    // Array#min(n) [{ |a, b| block }]
    if (Number.isInteger(args[0])) {
      var n = args[0];
      var comparator = args[1] || function (a, b) { return a.compareTo(b) };
      return this.sort(comparator).slice(0, n);
    }

    // Array#min() [{ |a, b| block }]
    var comparator = args[0] || function (a, b) { return a.compareTo(b) };
    var minValue = this[0];
    for (var i = 1; i < this.length; i++) {
      if (comparator.call(null, this[i], minValue) < 0) {
        minValue = this[i];
      }
    }
    return minValue;
  };
}

// Array#min_by { |a, b| block } -> obj
// Array#min_by(n) { |a, b| block } -> obj
//
//   Using: Any#compareTo
//
if (!Array.prototype.minBy) {
  Array.prototype.minBy = function () {
    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));

    // Array#min_by(n) { |a, b| block }
    if (Number.isInteger(args[0])) {
      var n = args[0];
      var block = args[1];
      var comparator = function (a, b) {
        return block.call(null, a).compareTo(block.call(null, b));
      };
      return this.sort(comparator).slice(0, n);
    }

    // Array#min_by { |a, b| block }
    var block = args[0];
    var comparator = function (a, b) {
      return block.call(null, a).compareTo(block.call(null, b));
    };
    var minValue = this[0];
    for (var i = 1; i < this.length; i++) {
      if (comparator.call(null, this[i], minValue) < 0) {
        minValue = this[i];
      }
    }
    return minValue;
  };
}

// Array#minmax -> [min, max]
// Array#minmax { |a, b| block } -> [min, max]
//
//   Using: Any#compareTo
//
if (!Array.prototype.minmax) {
  Array.prototype.minmax = function () {
    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
    var comparator = args[0] || function (a, b) { return a.compareTo(b) };
    var minValue, maxValue;

    minValue = maxValue = this[0];
    for (var i = 1; i < this.length; i++) {
      if (comparator.call(null, this[i], minValue) < 0) minValue = this[i];
      if (comparator.call(null, this[i], maxValue) > 0) maxValue = this[i];
    }
    return [minValue, maxValue];
  };
}

// Array#minmax_by { |a, b| block } -> [min, max]
//
//   Using: Any#compareTo
//
if (!Array.prototype.minmaxBy) {
  Array.prototype.minmaxBy = function () {
    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
    var block = args[0];
    var comparator = function (a, b) {
      return block.call(null, a).compareTo(block.call(null, b));
    };
    var minValue, maxValue;

    minValue = maxValue = this[0];
    for (var i = 1; i < this.length; i++) {
      if (comparator.call(null, this[i], minValue) < 0) minValue = this[i];
      if (comparator.call(null, this[i], maxValue) > 0) maxValue = this[i];
    }
    return [minValue, maxValue];
  };
}

// Array#pack(aTemplateString) -> aBinaryString
//
// (not needed)

// Array#none? [{ |obj| block }] -> true or false
//
if (!Array.prototype.none) {
  Array.prototype.none = function (block) {
    if (!block) {
      block = function (elem) { return elem; };
    }
    var invertBlock = function () {
      return !block.apply(null, arguments);
    }
    return Array.prototype.every.call(this, invertBlock);
  };
}

// Array#one? [{ |obj| block }] -> true or false
//
if (!Array.prototype.one) {
  Array.prototype.one = function (predicate) {
    if (!predicate) {
      predicate = function (elem) { return elem; };
    }
    return Array.prototype.filter.call(this, predicate).length === 1;
  };
}

// Array#partition { |obj| block } -> [true_array, false_array]
//
if (!Array.prototype.partition) {
  Array.prototype.partition = function (predicate) {
    var trueArray = [];
    var falseArray = [];
    for (var i = 0; i < this.length; i++) {
      if (predicate.call(null, this[i])) {
        trueArray.push(this[i]);
      } else {
        falseArray.push(this[i]);
      }
    }
    return [trueArray, falseArray];
  };
}

// Array#permutation(n) -> ary
//
if (!Array.prototype.permutation) {
  Array.prototype.permutation = function () {
    //
  };
}

// Array#pop -> obj or nil
// Array#pop(n) -> ary
//
(function () {
  var originalPop = Array.prototype.pop;
  Array.prototype.pop = function (n) {
    if (!n) {
      return originalPop.call(this);
    } else if (n > 0) {
      return this.splice(this.length - n);
    }
  };
})();

// Array#product(other_ary, ...) -> ary
//
if (!Array.prototype.product) {
  Array.prototype.product = function () {

    function getProduct() {
      if (arguments.length === 0) return [[]];

      var args = [];
      for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      var array = getProduct.apply(null, args);

      var retVal = [];
      for (var i = 0; i < arguments[0].length; i++) {
        for (var j = 0; j < array.length; j++) {
          retVal.push([arguments[0][i]].concat(array[j]));
        }
      }
      return retVal;
    }

    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
    return getProduct.apply(null, [this].concat(args));
  };
}

// Array#push(obj, ...) -> ary
//
(function (){
  var originalPush = Array.prototype.push;
  Array.prototype.push = function () {
    originalPush.apply(this, arguments);
    return this;
  };
}());

// Array#rassoc(obj) -> element_ary or nil
//
if (!Array.prototype.rassoc) {
  Array.prototype.rassoc = function (obj) {
    if (this == null) throw new TypeError();
    for (var i = 0; i < this.length; i++) {
      if (this[i][1] === obj) return this[i];
    }
    return null;
  };
}

// Array#reduce(initial) { |memo, obj| block } -> obj
//
//   Alias for #inject
//
//   Ruby Array method reduce() is conflict with js.
//   So, named rubyReduce() instead of reduce().
//
// Array#ruby_reduce(initial) { |memo, obj| block } -> obj
//
if (!Array.prototype.rubyReduce) {
  Array.prototype.rubyReduce = Array.prototype.inject;
}

// Array#reject { |item| block } -> ary
//
if (!Array.prototype.reject) {
  Array.prototype.reject = function (block) {
    var invertBlock = function () {
      return !block.apply(null, arguments);
    };
    return this.filter(invertBlock);
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
  Array.prototype.replace = function (otherAry) {
    Array.prototype.splice.apply(this, [0, this.length].concat(otherAry));
    return this;
  };
}

// Array#reverse -> ary
//
// (already implemented)

// Array#reverse_each { |item| block } -> ary
//
if (!Array.prototype.reverseEach) {
  Array.prototype.reverseEach = function (block) {
    for (var i = this.length - 1; i >= 0; i--) {
      block.call(null, this[i]);
    }
  };
}

// Array#rindex(obj) -> int or nil
// Array#rindex { |item| block } -> int or nil
//
if (!Array.prototype.rindex) {
  Array.prototype.rindex = function (obj) {
    if (typeof obj === "function") {
      var predicate = obj;
      for (var i = this.length - 1; i >= 0; i--) {
        if (predicate.call(null, this[i])) return i;
      }
    } else {
      var result = this.lastIndexOf(obj);
      return (result !== -1) ? result : null;
    }
  };
}

// Array#rotate(count=1) -> ary
//
if (!Array.prototype.rotate) {
  Array.prototype.rotate = function (n) {
    n = n || 1;
    var array = this.slice();
    return Array.prototype.unshift.apply(array, array.splice(n, array.length));
  };
}

// Array#sample -> obj
// Array#sample(n) -> ary
//
if (!Array.prototype.sample) {
  Array.prototype.sample = function () {
    //
  };
}

// Array#select { |item| block } -> ary
//
//   Alias for #find_all
//
if (!Array.prototype.select) {
  Array.prototype.select = Array.prototype.findAll;
}

// Array#shift -> obj or nil
// Array#shift(n) -> ary
//
(function () {
  var originalShift = Array.prototype.shift;
  Array.prototype.shift = function (n) {
    if (!n) {
      return originalShift.apply(this, arguments);
    } else if (n >= 1) {
      return this.splice(0, n);
    }
  };
}());

// Array#shuffle -> ary
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
    return this.length;
  };
}

// Array#slice(index) -> obj or nil
//
//   Alias for #at
//
// Array#slice(start, length) -> ary or nil
//
//   Ruby Array method slice() is conflict with js.
//   So, named rubySlice() instead of slice()
//
// Array#ruby_slice(index) -> obj or nil
// Array#ruby_slice(start, length) -> ary or nil
//
if (!Array.prototype.rubySlice) {
  Array.prototype.rubySlice = function () {
    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
    if (args.length === 1) {
      var index = args[0];
      return this.at(index);
    }
    if (args.length === 2) {
      var start  = args[0];
      var length = args[1];
      // if start is out of range
      if (start >= this.length) return null;
      if (start < -this.length) return null;

      if (start < 0) start += this.length;
      return this.slice(start, start + length);
    }
  };
}

// Array#slice_after(pattern) -> array
// Array#slice_after { |elt| bool } -> array
//
if (!Array.prototype.sliceAfter) {
  Array.prototype.sliceAfter = function (obj) {
    var objClassName = toString.call(obj);
    var result = [];
    var predicate;

    if (objClassName === '[object RegExp]') {
      predicate = function (elem) { return elem.match(obj); }
    } else if (objClassName === '[object Function]') {
      predicate = obj;
    }

    var tmp = [];
    for (var i = 0; i < this.length; i++) {
      tmp.push(this[i]);
      if (predicate.call(null, this[i])) {
        // slice after
        result.push(tmp.slice());
        tmp.length = 0; // clear tmp
      }
    }
    if (tmp.length !== 0) result.push(tmp);
    return result;
  };
}

// Array#slice_before(pattern) -> array
// Array#slice_before { |elt| bool } -> array
//
if (!Array.prototype.sliceBefore) {
  Array.prototype.sliceBefore = function (obj) {
    var objClassName = toString.call(obj);
    var result = [];
    var predicate;

    if (objClassName === '[object RegExp]') {
      predicate = function (elem) { return elem.match(obj); }
    } else if (objClassName === '[object Function]') {
      predicate = obj;
    }

    var tmp = [];
    for (var i = 0; i < this.length; i++) {
      if (predicate.call(null, this[i]) && tmp.length > 0) {
        // slice before
        result.push(tmp.slice());
        tmp.length = 0; // clear tmp
      }
      tmp.push(this[i]);
    }
    if (tmp.length !== 0) result.push(tmp);
    return result;
  };
}

// Array#slice_when { |elt_before, elt_after| bool } -> array
//
if (!Array.prototype.sliceWhen) {
  Array.prototype.sliceWhen = function (predicate) {
    var result = [];

    var tmp = [];
    for (var i = 0; i < this.length; i++) {
      tmp.push(this[i]);
      if (i === this.length - 1) break;
      if (predicate.call(null, this[i], this[i+1]) && tmp.length > 0) {
        // slice before
        result.push(tmp.slice());
        tmp.length = 0; // clear tmp
      }
    }
    if (tmp.length !== 0) result.push(tmp);
    return result;
  };
}

// Array#sort -> ary
//
// (already implemented)

// Array#sort_by { |obj| block } -> ary
//
//   Using: Any#compareTo
//
if (!Array.prototype.sortBy) {
  Array.prototype.sortBy = function (block) {
    return this.sort(function (a, b) {
      return block.call(null, a).compareTo(block.call(null, b));
    });
  };
}

// Array#take(n) -> ary
//
if (!Array.prototype.take) {
  Array.prototype.take = function (n) {
    return this.slice(0, n);
  };
}

// Array#take_while { |obj| block } -> ary
//
if (!Array.prototype.takeWhile) {
  Array.prototype.takeWhile = function (predicate) {
    for (var i = 0; i < this.length; i++) {
      if (!predicate.call(null, this[i])) {
        return this.slice(0, i);
      }
    }
    return [];
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
    var obj = {};
    for (var i = 0; i < this.length; i++) {
      var key = this[i][0];
      var val = this[i][1];
      obj[key] = val;
    }
    return obj;
  };
}

// Array#to_s -> string
//
// (already implemented as toString)

// Array#transpose -> ary
//
if (!Array.prototype.transpose) {
  Array.prototype.transpose = function () {
    var array = this;

    return array[0].map(function (col, i) {
      return array.map(function (row) {
        return row[i];
      });
    });
  };
}

// Array#uniq -> ary
// Array#uniq { |item| block } -> ary
//
if (!Array.prototype.uniq) {
  Array.prototype.uniq = function (block) {
    if (!block) {
      return this.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
    } else if (typeof block === "function") {
      var originalArray = this.slice();
      var mappedArray = this.map(block);
      var deleteIndexes = [];

      mappedArray.forEach(function (value, index, self) {
        // if not unique element
        if (self.indexOf(value) !== index) {
          deleteIndexes.push(index);
        }
      });

      deleteIndexes = deleteIndexes.reverse();
      for (var i = 0; i < deleteIndexes.length; i++) {
        originalArray.splice(deleteIndexes[i], 1);
      }
      return originalArray;
    }
  };
}

// Array#unshift(obj, ...) -> ary
//
(function () {
  var originalUnshift = Array.prototype.unshift;
  Array.prototype.unshift = function () {
    originalUnshift.apply(this, arguments);
    return this;
  };
}());

// Array#values_at(selector, ...) -> ary
//
//   Using: Array#at
//
if (!Array.prototype.valuesAt) {
  Array.prototype.valuesAt = function (/* indexes */) {
    var values = [];
    for (var i = 0; i < arguments.length; i++) {
      values.push(this.at(arguments[i]));
    }
    return values;
  };
}

// Array#zip(other_ary, ...) -> ary
//
if (!Array.prototype.zip) {
  Array.prototype.zip = function () {
    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));

    return this.map(function (e, i) {
      return this.map(function (a) {
        return a[i];
      });
    }, [this].concat(args));
  };
}

// ---

// Hide methods from for-in loops
for (var method in Array.prototype) {
  if (Array.prototype.hasOwnProperty(method)) {
    Object.defineProperty(Array.prototype, method.toString(), { enumerable: false });
  }
}
