var c = 3
export function display (a) {
    var b = a * 2
    function print(c) {
        return [a, b, c]
    }
   return print(b * 3)
}

var name = 'jon'
export function sayMyName () {
    var name = 'toto'
    return name
}