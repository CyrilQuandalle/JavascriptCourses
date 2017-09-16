import {misteriousNumber, display, sayMyName} from './scope'

describe('scope exercises', () => {
  it('a function has access to its own local scope variables', () => {
    expect(sayMyName()).toEqual('???')
  })

  it('should diplay the right number', () => {
    expect(display(2)).toEqual('???')
  })

  it('should display the misterious nmber', () => {
    misteriousNumber()
  })
})
