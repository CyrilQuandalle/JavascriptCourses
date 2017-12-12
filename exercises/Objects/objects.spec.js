
import { copyReplace, detectCollision, go, Queue, recordBirds, replace } from './objectsExercises'

describe('Objects exercices', () => {
  describe('go', () => {
    it('should work', () => {
      expect(go({speed: 5})).toEqual(
        {
          speed: 5,
          hyperdrive: false,
          frobnifier: true
        }
      )
    })

    it('should work even without parameters', () => {
      expect(go()).toEqual(
        {
          speed: 5,
          hyperdrive: false,
          frobnifier: true
        }
      )
    })
  })

  describe('should detect collision', () => {
    it('even with a cleaner code', () => {
      const myObjects = [
        {x: 10, y: 20, width: 30, height: 30},
        {x: -40, y: 20, width: 30, height: 30},
        {x: 0, y: 0, width: 10, height: 5}
      ]

      expect(detectCollision(myObjects, {x: 4, y: 2})).toEqual({ x: 0, y: 0, width: 10, height: 5 })
    })
  })

  describe('copy and replace', () => {
    it('replace the right parts', () => {
      let testArray = [1, 2, 100, 100, 6]
      replace(testArray, 2, 4, [3, 4, 5])
      expect(testArray).toEqual([1, 2, 3, 4, 5, 6])
    })

    it('make a good copy and replace the wrong parts', () => {
      expect(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5])).toEqual([1, 2, 3, 4, 5, 6])
    })
  })

  describe('bird book record', () => {
    it('should display birds capture with date', () => {
      let captureDate = new Date()
      expect(recordBirds(captureDate, 'sparrow', 'robin', 'pterodactyl')).toEqual([ { time: captureDate,
        birds: [ 'sparrow', 'robin', 'pterodactyl' ] } ])
    })
  })

  describe('queue object', () => {
    let q = new Queue()
    q.put(1)
    q.put(2)
    expect(q.take()).toBe(1)
    expect(q.take()).toBe(2)
  })
})
