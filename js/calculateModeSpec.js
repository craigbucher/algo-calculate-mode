// Write your own unit tests here!
var cm = require("./calculateMode");
var shallowEqualArrays = require('shallow-equal/arrays')

console.log(cm.calculateMode([1,2,3,3]) == "[ '3' ]")
console.log(cm.calculateMode([4.5, 0, 0]) === [ '0' ])
console.log(cm.calculateMode([1.5, -1, 1, 1.5]) === [ '1.5' ])
console.log(cm.calculateMode([1,1,2,2]) === [ '1', '2' ])
console.log(cm.calculateMode([1,2,3]) === [ '1', '2', '3' ])
console.log(cm.calculateMode(["who", "what", "where", "who"]) ===[ 'who' ])

// can't compare arrays using === or == , it's actually comparing memory locations, so
// unless they're exactly the same array, it won't be equal