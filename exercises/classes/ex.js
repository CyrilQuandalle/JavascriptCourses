class Warrior {
  constructor (weapon) {
    this.weapon = weapon
  }

  wield () {
    return `Wielding ${this.weapon}`
  }

  static duel (warrior1, warrior2) {
    return `${warrior1.wield()} ${warrior2.wield()}`
  }
}
