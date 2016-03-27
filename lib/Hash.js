
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

// Hash#all?
// Hash#any?
// Hash#assoc
// Hash#chunk
// Hash#chunk_while
// Hash#class
// Hash#clear
// Hash#clone
// Hash#collect
// Hash#collect_concat
// Hash#compare_by_identity
// Hash#compare_by_identity?
// Hash#count
// Hash#cycle
// Hash#default
// Hash#default=
// Hash#default_proc
// Hash#default_proc=
// Hash#define_singleton_method
// Hash#delete
// Hash#delete_if
// Hash#detect
// Hash#dig
// Hash#display
// Hash#drop
// Hash#drop_while
// Hash#dup
// Hash#each
// Hash#each_cons
// Hash#each_entry
// Hash#each_key
// Hash#each_pair
// Hash#each_slice
// Hash#each_value
// Hash#each_with_index
// Hash#each_with_object
// Hash#empty?
// Hash#entries
// Hash#enum_for
// Hash#eql?
// Hash#equal?
// Hash#extend
// Hash#fetch
// Hash#fetch_values
// Hash#find
// Hash#find_all
// Hash#find_index
// Hash#first
// Hash#flat_map
// Hash#flatten
// Hash#freeze
// Hash#frozen?
// Hash#grep
// Hash#grep_v
// Hash#group_by
// Hash#has_key?
// Hash#has_value?
// Hash#hash
// Hash#include?
// Hash#index
// Hash#inject
// Hash#inspect
// Hash#instance_eval
// Hash#instance_exec
// Hash#instance_of?
// Hash#instance_variable_defined?
// Hash#instance_variable_get
// Hash#instance_variable_set
// Hash#instance_variables
// Hash#invert
// Hash#is_a?
// Hash#itself
// Hash#keep_if
// Hash#key
// Hash#key?
// Hash#keys
// Hash#kind_of?
// Hash#lazy
// Hash#length
// Hash#map
// Hash#max
// Hash#max_by
// Hash#member?
// Hash#merge
// Hash#merge!
// Hash#method
// Hash#methods
// Hash#min
// Hash#min_by
// Hash#minmax
// Hash#minmax_by
// Hash#nil?
// Hash#none?
// Hash#object_id
// Hash#one?
// Hash#partition
// Hash#private_methods
// Hash#protected_methods
// Hash#public_method
// Hash#public_methods
// Hash#public_send
// Hash#rassoc
// Hash#reduce
// Hash#rehash
// Hash#reject
// Hash#reject!
// Hash#remove_instance_variable
// Hash#replace
// Hash#respond_to?
// Hash#reverse_each
// Hash#select
// Hash#select!
// Hash#send
// Hash#shift
// Hash#singleton_class
// Hash#singleton_method
// Hash#singleton_methods
// Hash#size
// Hash#slice_after
// Hash#slice_before
// Hash#slice_when
// Hash#sort
// Hash#sort_by
// Hash#store
// Hash#taint
// Hash#tainted?
// Hash#take
// Hash#take_while
// Hash#tap
// Hash#to_a
// Hash#to_enum
// Hash#to_h
// Hash#to_hash
// Hash#to_proc
// Hash#to_s
// Hash#trust
// Hash#untaint
// Hash#untrust
// Hash#untrusted?
// Hash#update
// Hash#value?
// Hash#values
// Hash#values_at
// Hash#zip
