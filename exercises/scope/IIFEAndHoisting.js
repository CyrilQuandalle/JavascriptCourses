//// IIFE
(function () {
  var a = b = 5
})()

console.log(b)

// hoisting
export function misteriousNumber () {
  console.log(a)
  console.log(foo())

  var a = 1
  function foo () {
    return 2
  }
}
