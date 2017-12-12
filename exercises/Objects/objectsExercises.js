
// DESTRUCTURING
export function go (options) {
  let {speed = 4, enable: {hyperdrive = false, frobnifier = true}} = options
  return {
    speed: speed,
    hyperdrive: hyperdrive,
    frobnifier: frobnifier
  }
}

export function detectCollision (objects, point) {
  for (let i = 0; i < objects.length; i++) {
    let object = objects[i]
    if (point.x >= object.x && point.x <= object.x + object.width &&
      point.y >= object.y && point.y <= object.y + object.height) {
      return object
    }
  }
}

// SPREAD

export function replace (array, from, to, elements) {
  array.splice.apply(array, [from, to - from].concat(elements))
}

export function copyReplace (array, from, to, elements) {
  return array.slice(0, from).concat(elements).concat(array.slice(to))
}

// //////////////

export function recordBirds (time) {
  let birdsSeen = []
  birdsSeen.push({time, birds: Array.prototype.slice.call(arguments, 1)})
  return birdsSeen
}

// SYMBOLS
export class Queue {
  constructor () {
    this._content = []
  }
  put (elt) {
    return this._content.push(elt)
  }
  take () {
    return this._content.shift()
  }
}
