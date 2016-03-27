
var Ruby = Ruby || {};

// Array constructor
Ruby.Array = function (ary) {
  if (!Array.isArray(ary)) {
    throw new TypeError("cannot convert to RubyArray with argument.");
  }
  this.value = ary;
  this.type  = "Array";
  return this;
}

// Hash constructor
Ruby.Hash = function (obj) {
  if (typeof obj !== "object" || obj === undefined || obj === null) {
    throw new TypeError("cannot convert to RubyHash with argument.");
  }
  this.value = obj;
  this.type  = "Hash";
  return this;
}

// String constructor
Ruby.String = function (str) {
  if (typeof str !== "string" && !(str instanceof String)) {
    throw new TypeError("cannot convert to RubyString with argument.");
  }
  this.value = str;
  this.type  = "String";
  return this;
}

// Define method ruby() to Build-in classes

var classes = [Array, Object, String];

function getFuncName(func) {
  return (''+func).replace(/^\s*function\s*([^\(]*)[\S\s]+$/im, '$1');
}

for (var klass in classes) {
  if (!classes.hasOwnProperty(klass)) continue;

  var constructor = classes[klass];
  var funcName = getFuncName(constructor);
  var rubyConstructor = Ruby[funcName];

  if (typeof rubyConstructor === "function") {
    Object.defineProperty(constructor.prototype, "ruby", {
      value: function() { return rubyConstructor(this) },
      enumerable: false
    });
  }
}

console.log("hoge".ruby().type);
