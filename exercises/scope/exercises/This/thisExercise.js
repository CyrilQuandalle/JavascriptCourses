export const character = {
  fullName: 'Harry Potter',
  person: {
    sayHi: function () {
      return 'My name is ' + this.fullName
    }
  }
}

export const owner = {
  firstName: 'Harry',
  info: {
    owlOwner: true,
    boatOwner: true
  },
  displayInfo: function () {
    return 'Owl owner ? ' + this.owlOwner
  }
}
