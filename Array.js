
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
// TODO: negative index count backwords from the end of the array
//
if (!Array.prototype.at) {
  Array.prototype.at = function (index) {
    return this[index];
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
// (already implemented)

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
//   See also #take
//
if (!Array.prototype.drop) {
  Array.prototype.drop = function (n) {
    return this.slice(this.length - n, this.length);
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
//   Alias for Array.prototype.forEach
//
if (!Array.prototype.each) {
  Array.prototype.each = Array.prototype.forEach;
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
    return this[0];
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

// Array#frozen?
//
// (not needed)

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

// Array#length -> int
//
// (already implemented)

// Array#map { |item| block } -> ary
//
// (already implemented)

// Array#pack(aTemplateString) -> aBinaryString
//
// (not needed)

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
  Array.prototype.repeated_combination = function () {
    //
  };
}

// Array#repeated_permutation(n) -> ary
//
if (!Array.prototype.repeated_permutation) {
  Array.prototype.repeated_permutation = function () {
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
if (!Array.prototype.select) {
  Array.prototype.select = function () {
    //
  };
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
