'use strict'

function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

function cacheFunction(cb) {
  let cache = {};
  return function(arg) {
    if (cache.hasOwnProperty(arg)) {
      return cache[arg];
    } else {
      let result = cb(arg);
      cache[arg] = result;
      return result;
    }
  };
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
};
