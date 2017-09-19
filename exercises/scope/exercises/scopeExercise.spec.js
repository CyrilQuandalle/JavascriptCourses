import { createFunctions } from './scopeExercise'

describe('example tests', function () {
  it('functions must return correct number', function () {
    var callbacks = createFunctions(5)

    for (var i = 0; i < callbacks.length; i++) {
      expect(callbacks[i]()).toEqual(i)
    }
  })
})
