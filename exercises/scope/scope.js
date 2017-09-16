var c = 3
export function display (a) {
  var b = a * 2
  function print (c) {
    return [a, b, c]
  }
  return print(b * 3)
}

var name = 'jon'
export function sayMyName () {
  var name = 'toto'
  return name
}

export function misteriousNumber () { //hoisting
  console.log(a)
  console.log(foo())

  var a = 1
  function foo () {
    return 2
  }
}

var a = 1
export function whatsMyA () {
  a = 10

  function a () {}
}
whatsMyA()
console.log(a)
