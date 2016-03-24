

// support array.filter(fun)
// refer to https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//
if (!Array.prototype.filter) {
  Array.prototype.filter = function(fun /*, thisp */) {
    "use strict";

    if (this == null) throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;

    if (typeof fun != "function") throw new TypeError();

    var res = [];
    var thisp = arguments[1];

    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i]; // fun が this を変化させた場合に備えて
        if (fun.call(thisp, val, i, t)) res.push(val);
      }
    }

    return res;
  };
}

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


// Array.prototype.at
// Array.prototype.bsearch
// Array.prototype.bsearch_index
// Array.prototype.clear
// Array.prototype.collect
// Array.prototype.combination
// Array.prototype.compact
// Array.prototype.concat
// Array.prototype.count
// Array.prototype.cycle
// Array.prototype.delete
// Array.prototype.delete_at
// Array.prototype.delete_if
// Array.prototype.dig
// Array.prototype.drop
// Array.prototype.drop_while
// Array.prototype.each
// Array.prototype.each_index
// Array.prototype.empty?
// Array.prototype.eql?
// Array.prototype.fetch
// Array.prototype.fill
// Array.prototype.find_index
// Array.prototype.first
// Array.prototype.flatten
// Array.prototype.frozen?
// Array.prototype.hash
// Array.prototype.include?
// Array.prototype.index
// Array.prototype.initialize_copy
// Array.prototype.insert
// Array.prototype.inspect
// Array.prototype.join
// Array.prototype.keep_if
// Array.prototype.last
// Array.prototype.length
// Array.prototype.map
// Array.prototype.pack
// Array.prototype.permutation
// Array.prototype.pop
// Array.prototype.product
// Array.prototype.push
// Array.prototype.rassoc
// Array.prototype.reject
// Array.prototype.repeated_combination
// Array.prototype.repeated_permutation
// Array.prototype.replace
// Array.prototype.reverse
// Array.prototype.reverse_each
// Array.prototype.rindex
// Array.prototype.rotate
// Array.prototype.sample
// Array.prototype.select
// Array.prototype.shift
// Array.prototype.shuffle
// Array.prototype.size
// Array.prototype.slice
// Array.prototype.sort
// Array.prototype.sort_by
// Array.prototype.take
// Array.prototype.take_while
// Array.prototype.to_a
// Array.prototype.to_ary
// Array.prototype.to_h
// Array.prototype.to_s
// Array.prototype.transpose
// Array.prototype.uniq
// Array.prototype.uniq!
// Array.prototype.unshift
// Array.prototype.values_at
// Array.prototype.zip
