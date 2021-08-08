class Weapon {
    static tesoura = ['papel', 'lagarto']
    static papel = ['pedra', 'spock']
    static pedra = ['lagarto', 'tesoura']
    static lagarto = ['papel', 'spock']
    static spock = ['tesoura', 'pedra']
  
    static fight(oneWeapon, anotherWeapon) {
      if (!Weapon[oneWeapon] || !Weapon[anotherWeapon]) {
        return 'Bring valid weapons to the fight!'
      }
  
      if (oneWeapon === anotherWeapon) {
        return 'empate'
      }
  
      if (Weapon[oneWeapon].includes(anotherWeapon)) {
        return oneWeapon
      }
      return anotherWeapon
    }
  }
  
  class Player {
    constructor(name) {
      this._name = name
      this._weapons = []
    }
    get name() {
      return this._name
    }
    get weapons() {
      return this._weapons
    }
    set weapons(weapon) {
      this._weapons = [...this._weapons, weapon]
    }
  
    against(anotherPlayer) {
      const results = []
  
      for (let i = 0; i < this.weapons.length; i++) {
        const result = Weapon.fight(this.weapons[i], anotherPlayer.weapons[i])
  
        if (result === 'invalid weapons') results.push(result);
        else if (result === 'empate') results.push(result)
        else {
          results.push(
            result === this.weapons[i]
              ? this.name
              : anotherPlayer.name
          )
        }
      }
      return results
    }
  }
  
  let nCases = '';
  const Fernanda = new Player('fernanda')
  const Marcia = new Player('marcia')
  
  while (true) {
    nCases = gets()
  
    if (!nCases || nCases === '' || nCases <= 0) break;
  
    for (let i = 1; i <= nCases; i++) {
      [Fernanda.weapons, Marcia.weapons] = gets().split(' ')
    }

    Fernanda.against(Marcia).forEach(res => console.log(res))
  }
