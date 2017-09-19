
import { buildFun } from './closureExercise'

describe('example tests', function () {
  it('functions must return correct number', function () {
    for (var i = 0; i < 10; i++) {
      expect(buildFun(10)[i]()).toEqual(i)
    }
  })
})
