import { character, instructor, owner } from './thisExercise'

describe('character', () => {
  it('should display its name', () => {
    expect(character.person.sayHi()).toEqual('My name is Harry Potter')
  })
})

describe('owner', () => {
  it('should say it has an owl', () => {
    expect(owner.displayInfo()).toEqual('Owl owner ? true')
  })
})

describe('instructor', () => {
  it('should display its location', () => {
    expect(instructor.info.data.logLocation()).toEqual('Oakland')
  })
})
