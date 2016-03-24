

// implement array.filter(fun)
// refer to https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//
if (!Array.prototype.filter) {
  Array.prototype.filter = function(fun /*, thisp */) {
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

// implement array.map(fun)
// refer to https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//
// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.com/#x15.4.4.19
if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {
    var T, A, k;

    if (this == null) {
      throw new TypeError(" this is null or not defined");
    }

    // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if ({}.toString.call(callback) != "[object Function]") {
      throw new TypeError(callback + " is not a function");
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (thisArg) {
      T = thisArg;
    }

    // 6. Let A be a new array created as if by the expression new Array(len) where Array is
    // the standard built-in constructor with that name and len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k < len
    while(k < len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
        kValue = O[ k ];

        // ii. Let mappedValue be the result of calling the Call internal method of callback
        // with T as the this value and argument list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor {Value: mappedValue, Writable: true, Enumerable: true, Configurable: true},
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, Pk, { value: mappedValue, writable: true, enumerable: true, configurable: true });

        // For best browser support, use the following:
        A[ k ] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
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

// Array#at(index) -> obj or nil
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

// Array#bsearchIndex
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
// requires
// * Array.prototype.map()
//
if (!Array.prototype.collect) {
  Array.prototype.collect = Array.prototype.map;
}

// Array#combination(n)
//
if (!Array.prototype.combination) {
  Array.prototype.combination = function () {
    //
  }
}

// Array#compact
//
if (!Array.prototype.compact) {
  Array.prototype.compact = function () {
    //
  };
}

// Array#concat
//
if (!Array.prototype.concat) {
  Array.prototype.concat = function () {
    //
  };
}

// Array#count
//
if (!Array.prototype.count) {
  Array.prototype.count = function () {
    //
  };
}

// Array#cycle
//
if (!Array.prototype.cycle) {
  Array.prototype.cycle = function () {
    //
  };
}

// Array#delete
//
if (!Array.prototype.delete) {
  Array.prototype.delete = function () {
    //
  };
}

// Array#delete_at
//
if (!Array.prototype.delete_at) {
  Array.prototype.delete_at = function () {
    //
  };
}

// Array#delete_if
//
if (!Array.prototype.delete_if) {
  Array.prototype.delete_if = function () {
    //
  };
}

// Array#dig
//
if (!Array.prototype.dig) {
  Array.prototype.dig = function () {
    //
  };
}

// Array#drop
//
if (!Array.prototype.drop) {
  Array.prototype.drop = function () {
    //
  };
}

// Array#drop_while
//
if (!Array.prototype.drop_while) {
  Array.prototype.drop_while = function () {
    //
  };
}

// Array#each
//
if (!Array.prototype.each) {
  Array.prototype.each = function () {
    //
  };
}

// Array#each_index
//
if (!Array.prototype.each_index) {
  Array.prototype.each_index = function () {
    //
  };
}

// Array#empty?
//
if (!Array.prototype.empty?) {
  Array.prototype.empty? = function () {
    //
  };
}

// Array#eql?
//
if (!Array.prototype.eql?) {
  Array.prototype.eql? = function () {
    //
  };
}

// Array#fetch
//
if (!Array.prototype.fetch) {
  Array.prototype.fetch = function () {
    //
  };
}

// Array#fill
//
if (!Array.prototype.fill) {
  Array.prototype.fill = function () {
    //
  };
}

// Array#find_index
//
if (!Array.prototype.find_index) {
  Array.prototype.find_index = function () {
    //
  };
}

// Array#first
//
if (!Array.prototype.first) {
  Array.prototype.first = function () {
    //
  };
}

// Array#flatten
//
if (!Array.prototype.flatten) {
  Array.prototype.flatten = function () {
    //
  };
}

// Array#frozen?
//
if (!Array.prototype.frozen?) {
  Array.prototype.frozen? = function () {
    //
  };
}

// Array#hash
//
if (!Array.prototype.hash) {
  Array.prototype.hash = function () {
    //
  };
}

// Array#include?
//
if (!Array.prototype.include?) {
  Array.prototype.include? = function () {
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
if (!Array.prototype.initialize_copy) {
  Array.prototype.initialize_copy = function () {
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

// Array#join
//
if (!Array.prototype.join) {
  Array.prototype.join = function () {
    //
  };
}

// Array#keep_if
//
if (!Array.prototype.keep_if) {
  Array.prototype.keep_if = function () {
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

// Array#length
//
if (!Array.prototype.length) {
  Array.prototype.length = function () {
    //
  };
}

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

// Array#pop
//
if (!Array.prototype.pop) {
  Array.prototype.pop = function () {
    //
  };
}

// Array#product
//
if (!Array.prototype.product) {
  Array.prototype.product = function () {
    //
  };
}

// Array#push
//
if (!Array.prototype.push) {
  Array.prototype.push = function () {
    //
  };
}

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
if (!Array.prototype.reverse_each) {
  Array.prototype.reverse_each = function () {
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
if (!Array.prototype.sort_by) {
  Array.prototype.sort_by = function () {
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
if (!Array.prototype.take_while) {
  Array.prototype.take_while = function () {
    //
  };
}

// Array#to_a
//
if (!Array.prototype.to_a) {
  Array.prototype.to_a = function () {
    //
  };
}

// Array#to_ary
//
if (!Array.prototype.to_ary) {
  Array.prototype.to_ary = function () {
    //
  };
}

// Array#to_h
//
if (!Array.prototype.to_h) {
  Array.prototype.to_h = function () {
    //
  };
}

// Array#to_s
//
if (!Array.prototype.to_s) {
  Array.prototype.to_s = function () {
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
if (!Array.prototype.values_at) {
  Array.prototype.values_at = function () {
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
