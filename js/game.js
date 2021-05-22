class Fighter {
  constructor(name, rapidAttackName, heavyAttackName, ultimateAttackName) {
    this.name = name;
    this.health = 500;
    this.weapons = {
      rapidAttack: {
        name: rapidAttackName,
        damage: 25
      },
      heavyAttack: {
        name: heavyAttackName,
        damage: 50
      },
      ultimateAttack: {
        name: ultimateAttackName,
        damage: 125
      },
    };
  }
  jump() {
    console.log('jumped');
  }
  moveLeft() {

  }
  moveRigth() {

  }
  rapidAttackFun(otherCharacter) {
    otherCharacter.health -= this.weapons.rapidAttack.damage
  }

  heavyAttackFun(otherCharacter) {
    otherCharacter.health -= this.weapons.heavyAttack.damage
  }

  ultimateAttackFun(otherCharacter) {
    otherCharacter.health -= this.weapons.ultimateAttack.damage
  }
}

const fighters = [];

const ninjaMan = new Fighter('Ninja Man', 'wind', 'yy', 'er')
fighters.push(ninjaMan)

const ninjaGirl = new Fighter('Ninja Girl', 'a', 'b', 'c')
fighters.push(ninjaGirl)

const freeknight = new Fighter('freek Night', 'a', 'b', 'c')
fighters.push(freeknight)

const robotBoy = new Fighter('Robot Boy', 'a', 'b', 'c')
fighters.push(robotBoy)


document.addEventListener('keydown', (e) => {
  if(e.keyCode == "87") {
    Fighter.jump()
  } else if(e.keyCode == "82") {
    Fighter.rapidAttackFun(otherCharacter)
  } else if(e.keyCode == "84") {
    Fighter.heavyAttackFun()
  } else if(e.keyCode == "89") {
    Fighter.ultimateAttackFun()
  }
})
