import { character } from './thisExercise'

describe('character', () => {
  it('should display its name', () => {
    expect(character.person.sayHi()).toEqual('My name is Harry Potter')
  })
})
