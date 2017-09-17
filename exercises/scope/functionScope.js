//// scope & function scope
//////////////////////////////////////
var c = 3
export function display (a) {
  var b = a * 2
  function print (c) {
    return [a, b, c]
  }
  return print(b * 3)
}

display(2)

///////////////////////////////////////
//shadowing
var name = 'jon'
export function sayMyName () {
  var name = 'toto'
  return name
}

///////////////////////////////////////


/////////////////////////////////////////

var a = 1
export function whatsMyA () {
  a = 10

  function a () {}
}
whatsMyA()
console.log(a)

///////////////////////////////////////

function add (a) {
  console.log(a + b)
}
var b = 2

add(2)

//////////////////////////////////////
