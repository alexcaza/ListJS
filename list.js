/**
 * the list function takes n arguments and assigns data from an array to said variables
 *
 * @param {String} n - n variables to assign data to.
 * @param {Object} [object=global || window] - Object to bind the variables to
 *
 **/
function list(n) {
  // Grab the arguments and put it into something more typable
  var args = arguments;
  // Get the keys from the arguments object
  var keys = Object.keys(arguments);
  // initialize the context to check whether it's node or not
  var context;

  if (typeof window !== 'undefined') {
    context = window;
  } else {
    context = global;
  }

  // Return a function that takes the array
  // looping over each item and assigning it
  // to the variable(s) you passed to the first
  // set of params
  return function(array) {
    var scope = typeof args[args.length - 1] !== 'string' ?
                args[args.length - 1] : context;
    array.map(function(item, pos) {
      // assign the string to the variable you passed in
      return scope[args[pos]] = item;
    });
  }
}

// Node require compatibility
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = list;
} else {
  window.list = list;
}
