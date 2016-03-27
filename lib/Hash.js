
// Hash
// Enumerable

// --- utils ---

// extend
function extend(target) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  for (var index = 1; index < arguments.length; index++) {
    var source = arguments[index];
    if (source !== undefined && source !== null) {
      for (var nextKey in source) {
        if (source.hasOwnProperty(nextKey)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
  }
  return output;
}

// --- Ruby Hash methods ---
/*
// Hash#all?
//
if (!Object.prototype.all) {
  Object.prototype.all = function () {
    //
  }
}

// Hash#any?
//
if (!Object.prototype.any) {
  Object.prototype.any = function () {
    //
  }
}

// Hash#assoc
//
if (!Object.prototype.assoc) {
  Object.prototype.assoc = function () {
    //
  }
}

// Hash#chunk
//
if (!Object.prototype.chunk) {
  Object.prototype.chunk = function () {
    //
  }
}

// Hash#chunk_while
//
if (!Object.prototype.chunkWhile) {
  Object.prototype.chunkWhile = function () {
    //
  }
}

// Hash#clear
//
if (!Object.prototype.clear) {
  Object.prototype.clear = function () {
    //
  }
}

// Hash#clone
//
if (!Object.prototype.clone) {
  Object.prototype.clone = function () {
    //
  }
}

// Hash#collect
//
if (!Object.prototype.collect) {
  Object.prototype.collect = function () {
    //
  }
}

// Hash#collect_concat
//
if (!Object.prototype.collectConcat) {
  Object.prototype.collectConcat = function () {
    //
  }
}

// Hash#compare_by_identity
//
// (cannot implement)

// Hash#compare_by_identity?
//
// (cannot implement)

// Hash#count
//
if (!Object.prototype.count) {
  Object.prototype.count = function () {
    //
  }
}

// Hash#cycle
//
if (!Object.prototype.cycle) {
  Object.prototype.cycle = function () {
    //
  }
}

// Hash#default
//
if (!Object.prototype.default) {
  Object.prototype.default = function () {
    //
  }
}

// Hash#default=
//
if (!Object.prototype.setDefault) {
  Object.prototype.setDefault = function () {
    //
  }
}

// Hash#default_proc
//
if (!Object.prototype.defaultProc) {
  Object.prototype.defaultProc = function () {
    //
  }
}

// Hash#default_proc=
//
if (!Object.prototype.setDefaultProc) {
  Object.prototype.setDefaultProc = function () {
    //
  }
}

// Hash#define_singleton_method
//
if (!Object.prototype.define_singleton_method) {
  Object.prototype.define_singleton_method = function () {
    //
  }
}

// Hash#delete
//
if (!Object.prototype.delete) {
  Object.prototype.delete = function () {
    //
  }
}

// Hash#delete_if
//
if (!Object.prototype.deleteIf) {
  Object.prototype.deleteIf = function () {
    //
  }
}

// Hash#detect
//
if (!Object.prototype.detect) {
  Object.prototype.detect = function () {
    //
  }
}

// Hash#dig
//
if (!Object.prototype.dig) {
  Object.prototype.dig = function () {
    //
  }
}

// Hash#display
//
if (!Object.prototype.display) {
  Object.prototype.display = function () {
    //
  }
}

// Hash#drop
//
if (!Object.prototype.drop) {
  Object.prototype.drop = function () {
    //
  }
}

// Hash#drop_while
//
if (!Object.prototype.dropWhile) {
  Object.prototype.dropWhile = function () {
    //
  }
}

// Hash#dup
//
if (!Object.prototype.dup) {
  Object.prototype.dup = function () {
    //
  }
}

// Hash#each
//
if (!Object.prototype.each) {
  Object.prototype.each = function () {
    //
  }
}

// Hash#each_cons
//
if (!Object.prototype.eachCons) {
  Object.prototype.eachCons = function () {
    //
  }
}

// Hash#each_entry
//
if (!Object.prototype.eachEntry) {
  Object.prototype.eachEntry = function () {
    //
  }
}

// Hash#each_key
//
if (!Object.prototype.eachKey) {
  Object.prototype.eachKey = function () {
    //
  }
}

// Hash#each_pair
//
if (!Object.prototype.eachPair) {
  Object.prototype.eachPair = function () {
    //
  }
}

// Hash#each_slice
//
if (!Object.prototype.eachSlice) {
  Object.prototype.eachSlice = function () {
    //
  }
}

// Hash#each_value
//
if (!Object.prototype.eachValue) {
  Object.prototype.eachValue = function () {
    //
  }
}

// Hash#each_with_index
//
if (!Object.prototype.eachWithIndex) {
  Object.prototype.eachWithIndex = function () {
    //
  }
}

// Hash#each_with_object
//
if (!Object.prototype.eachWithObject) {
  Object.prototype.eachWithObject = function () {
    //
  }
}

// Hash#empty?
//
if (!Object.prototype.empty) {
  Object.prototype.empty = function () {
    //
  }
}

// Hash#entries
//
if (!Object.prototype.entries) {
  Object.prototype.entries = function () {
    //
  }
}

// Hash#eql?
//
if (!Object.prototype.eql) {
  Object.prototype.eql = function () {
    //
  }
}

// Hash#equal?
//
if (!Object.prototype.equal) {
  Object.prototype.equal = function () {
    //
  }
}

// Hash#extend
//
if (!Object.prototype.extend) {
  Object.prototype.extend = function () {
    //
  }
}

// Hash#fetch
//
if (!Object.prototype.fetch) {
  Object.prototype.fetch = function () {
    //
  }
}

// Hash#fetch_values
//
if (!Object.prototype.fetchValues) {
  Object.prototype.fetchValues = function () {
    //
  }
}

// Hash#find
//
if (!Object.prototype.find) {
  Object.prototype.find = function () {
    //
  }
}

// Hash#find_all
//
if (!Object.prototype.findAll) {
  Object.prototype.findAll = function () {
    //
  }
}

// Hash#find_index
//
if (!Object.prototype.findIndex) {
  Object.prototype.findIndex = function () {
    //
  }
}

// Hash#first
//
if (!Object.prototype.first) {
  Object.prototype.first = function () {
    //
  }
}

// Hash#flat_map
//
if (!Object.prototype.flatMap) {
  Object.prototype.flatMap = function () {
    //
  }
}

// Hash#flatten
//
if (!Object.prototype.flatten) {
  Object.prototype.flatten = function () {
    //
  }
}

// // Hash#grep
// //
// if (!Object.prototype.grep) {
//   Object.prototype.grep = function () {
//     //
//   }
// }

// Hash#grep_v
//
if (!Object.prototype.grepV) {
  Object.prototype.grepV = function () {
    //
  }
}

// Hash#group_by
//
if (!Object.prototype.groupBy) {
  Object.prototype.groupBy = function () {
    //
  }
}

// Hash#has_key?
//
if (!Object.prototype.hasKey) {
  Object.prototype.hasKey = function () {
    //
  }
}

// Hash#hasValue?
//
if (!Object.prototype.hasValue) {
  Object.prototype.hasValue = function () {
    //
  }
}

// Hash#hash
//
if (!Object.prototype.hash) {
  Object.prototype.hash = function () {
    //
  }
}

// Hash#include?
//
if (!Object.prototype.include) {
  Object.prototype.include = function () {
    //
  }
}

// Hash#index
//
if (!Object.prototype.index) {
  Object.prototype.index = function () {
    //
  }
}

// Hash#inject
//
if (!Object.prototype.inject) {
  Object.prototype.inject = function () {
    //
  }
}

// Hash#inspect
//
if (!Object.prototype.inspect) {
  Object.prototype.inspect = Object.prototype.toString;
}

// Hash#invert
//
if (!Object.prototype.invert) {
  Object.prototype.invert = function () {
    //
  }
}

// Hash#keep_if
//
if (!Object.prototype.keep_if) {
  Object.prototype.keep_if = function () {
    //
  }
}

// Hash#key
//
if (!Object.prototype.key) {
  Object.prototype.key = function () {
    //
  }
}

// Hash#key?
//
if (!Object.prototype.key) {
  Object.prototype.key = function () {
    //
  }
}

// Hash#keys
//
if (!Object.prototype.keys) {
  Object.prototype.keys = function () {
    //
  }
}

// Hash#lazy
//
// (not needed)

// Hash#length
//
// (already implemented)

// Hash#map
//
if (!Object.prototype.map) {
  Object.prototype.map = function () {
    //
  }
}

// Hash#max
//
if (!Object.prototype.max) {
  Object.prototype.max = function () {
    //
  }
}

// Hash#max_by
//
if (!Object.prototype.maxBy) {
  Object.prototype.maxBy = function () {
    //
  }
}

// Hash#member?
//
if (!Object.prototype.member) {
  Object.prototype.member = function () {
    //
  }
}

// Hash#merge
//
if (!Object.prototype.merge) {
  Object.prototype.merge = function () {
    //
  }
}

// Hash#min
//
if (!Object.prototype.min) {
  Object.prototype.min = function () {
    //
  }
}

// Hash#min_by
//
if (!Object.prototype.minBy) {
  Object.prototype.minBy = function () {
    //
  }
}

// Hash#minmax
//
if (!Object.prototype.minmax) {
  Object.prototype.minmax = function () {
    //
  }
}

// Hash#minmax_by
//
if (!Object.prototype.minmaxBy) {
  Object.prototype.minmaxBy = function () {
    //
  }
}

// Hash#nil?
//
if (!Object.prototype.nil) {
  Object.prototype.nil = function () {
    //
  }
}

// Hash#none?
//
if (!Object.prototype.none) {
  Object.prototype.none = function () {
    //
  }
}

// Hash#one?
//
if (!Object.prototype.one) {
  Object.prototype.one = function () {
    //
  }
}

// Hash#partition
//
if (!Object.prototype.partition) {
  Object.prototype.partition = function () {
    //
  }
}

// Hash#rassoc
//
if (!Object.prototype.rassoc) {
  Object.prototype.rassoc = function () {
    //
  }
}

// Hash#reduce
//
if (!Object.prototype.reduce) {
  Object.prototype.reduce = function () {
    //
  }
}

// Hash#rehash
//
if (!Object.prototype.rehash) {
  Object.prototype.rehash = function () {
    //
  }
}

// Hash#reject
//
if (!Object.prototype.reject) {
  Object.prototype.reject = function () {
    //
  }
}

// Hash#replace
//
if (!Object.prototype.replace) {
  Object.prototype.replace = function () {
    //
  }
}

// Hash#reverse_each
//
if (!Object.prototype.reverseEach) {
  Object.prototype.reverseEach = function () {
    //
  }
}

// Hash#select
//
if (!Object.prototype.select) {
  Object.prototype.select = function () {
    //
  }
}

// Hash#shift
//
if (!Object.prototype.shift) {
  Object.prototype.shift = function () {
    //
  }
}

// Hash#size
//
if (!Object.prototype.size) {
  Object.prototype.size = function () {
    //
  }
}

// Hash#slice_after
//
if (!Object.prototype.sliceAfter) {
  Object.prototype.sliceAfter = function () {
    //
  }
}

// Hash#slice_before
//
if (!Object.prototype.sliceBefore) {
  Object.prototype.sliceBefore = function () {
    //
  }
}

// Hash#slice_when
//
if (!Object.prototype.sliceWhen) {
  Object.prototype.sliceWhen = function () {
    //
  }
}

// Hash#sort
//
if (!Object.prototype.sort) {
  Object.prototype.sort = function () {
    //
  }
}

// Hash#sort_by
//
if (!Object.prototype.sortBy) {
  Object.prototype.sortBy = function () {
    //
  }
}

// Hash#store
//
if (!Object.prototype.store) {
  Object.prototype.store = function () {
    //
  }
}

// Hash#take
//
if (!Object.prototype.take) {
  Object.prototype.take = function () {
    //
  }
}

// Hash#take_while
//
if (!Object.prototype.takeWhile) {
  Object.prototype.takeWhile = function () {
    //
  }
}

// Hash#tap
//
if (!Object.prototype.tap) {
  Object.prototype.tap = function () {
    //
  }
}

// Hash#to_a
//
if (!Object.prototype.toArray) {
  Object.prototype.toArray = function () {
    //
  }
}

// Hash#to_enum
//
if (!Object.prototype.to_enum) {
  Object.prototype.to_enum = function () {
    //
  }
}

// Hash#to_h
// Hash#to_hash
//
if (!Object.prototype.toHash) {
  Object.prototype.toHash = function () {
    //
  }
}


// Hash#to_proc
//
if (!Object.prototype.toProc) {
  Object.prototype.toProc = function () {
    //
  }
}

// Hash#to_s
//
// (already implemented as toString)

// Hash#trust
//
if (!Object.prototype.trust) {
  Object.prototype.trust = function () {
    //
  }
}

// Hash#untaint
//
if (!Object.prototype.untaint) {
  Object.prototype.untaint = function () {
    //
  }
}

// Hash#untrust
//
if (!Object.prototype.untrust) {
  Object.prototype.untrust = function () {
    //
  }
}

// Hash#untrusted?
//
if (!Object.prototype.untrusted) {
  Object.prototype.untrusted = function () {
    //
  }
}

// Hash#update
//
if (!Object.prototype.update) {
  Object.prototype.update = function () {
    //
  }
}

// Hash#value?
//
if (!Object.prototype.value) {
  Object.prototype.value = function () {
    //
  }
}

// Hash#values
//
if (!Object.prototype.values) {
  Object.prototype.values = function () {
    //
  }
}

// Hash#values_at
//
if (!Object.prototype.valuesAt) {
  Object.prototype.valuesAt = function () {
    //
  }
}

// Hash#zip
//
if (!Object.prototype.zip) {
  Object.prototype.zip = function () {
    //
  }
}

// ---

// Hide methods from for-in loops
for (var method in Object.prototype) {
  if (Object.prototype.hasOwnProperty(method)) {
    Object.defineProperty(Object.prototype, method.toString(), { enumerable: false });
  }
}
*/
