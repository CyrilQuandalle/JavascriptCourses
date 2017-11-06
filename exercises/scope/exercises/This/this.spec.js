import { character } from './thisExercise'

describe('character', () => {
  it('should display its name', () => {
    expect(character.person.sayHi()).toEqual("This character's name is Harry Potter")
  })
})
