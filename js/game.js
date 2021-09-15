const btnP1VsCpu = document.getElementById('p1vscpu');
const btnP1VsP2 = document.getElementById('p1vsp2');
const btnPreviusArena = document.getElementById('previusArena');
const btnNextArena = document.getElementById('nextArena');
const btnRedyToFight = document.getElementById('readyToFight');
const btnRedyToFight2 = document.querySelector('.charactersSelectionP1VsCPU #readyToFight');

const container1 = document.getElementById('container1');

const container2 = document.getElementById('container2');

const arenasDiv = document.querySelector('.arenas');

const container3 = document.getElementById('container3');

const container4 = document.getElementById('container4');
const timer = document.querySelector('#timer')

const characters = document.querySelectorAll('#container2 > .characterContainer > .character');
console.log(characters);
const player1Name = document.querySelector('#container4 > .health > #player1Name')
const player2Name = document.querySelector('#container4 > .health > #player2Name')

const character0 = document.getElementById('character0');
const character0Imgs = document.getElementById('Albert-Einstein');

const character1 = document.getElementById('character1');
const character1Imgs = document.getElementById('Charles-Darwin');

const character2 = document.getElementById('character2');
const character2Imgs = document.getElementById('Stephen-Hawking');

const character3 = document.getElementById('character3');
const character3Imgs = document.getElementById('Marie-Curie');

const character4 = document.getElementById('character4');
const character4Imgs = document.getElementById('Isaac-Newton');

const character5 = document.getElementById('character5');
const character5Imgs = document.getElementById('Pythagoras');

const character6 = document.getElementById('character6');
const character6Imgs = document.getElementById('Nikola-Tesla');

class Fighter {
  constructor(name, rapidAttackName, heavyAttackName, ultimateAttackName, baseImage,
     rapidAttackImg, heavyAttackImg, ultimateAttackImg, domNode, domImgs) {
    this.name = name;
    this.images = {
      baseImage: baseImage,
      rapidAttackImg: rapidAttackImg,
      heavyAttackImg: heavyAttackImg,
      ultimateAttackImg: ultimateAttackImg,
    };
    this.image = this.images.baseImage;
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
    this.domNode = domNode;
    this.domImgs = domImgs;
  }
  jump() {
    console.log('jumped');
  }
  moveLeft() {
    console.log('moved left')
  }
  moveRight() {
    console.log('moved right')
  }
  attack(otherCharacter) {
    let characterAttack = this.weapons[Object.keys(this.weapons)[Math.floor(Math.random()*Object.keys(this.weapons).length)]];
      if(this.health <= 0 || otherCharacter.health <=0){
        alert(`Game over`)
        restart()
      }
    if (characterAttack === this.weapons.rapidAttack) {
      this.domImgs.src = this.images.rapidAttackImg
      otherCharacter.health -= this.weapons.rapidAttack.damage;
      setTimeout( () => {
        this.domImgs.src = this.images.baseImage;
      }, 1500);
      alert(`${this.name} hit ${otherCharacter.name}! with ${Object.keys(this.weapons)[0]} now ${otherCharacter.name} health is ${otherCharacter.health}`);
    } else if (characterAttack === this.weapons.heavyAttack) {
      this.domImgs.src = this.images.heavyAttackImg
      otherCharacter.health -= this.weapons.heavyAttack.damage;
      alert(`${this.name} hit ${otherCharacter.name}! with ${Object.keys(this.weapons)[1]} now ${otherCharacter.name} health is ${otherCharacter.health}`);
      setTimeout( () => {
        this.domImgs.src = this.images.baseImage;
      }, 1100);
    } else if(characterAttack === this.weapons.ultimateAttack){
      this.domImgs.src = this.images.ultimateAttackImg
      otherCharacter.health -= this.weapons.ultimateAttack.damage;
      alert(`${this.name} hit ${otherCharacter.name}! with ${Object.keys(this.weapons)[2]} now ${otherCharacter.name} health is ${otherCharacter.health}`);
      setTimeout( () => {
        this.domImgs.src = this.images.baseImage;
      }, 1000);
    } else {
      alert(`Fighter didn't attack`)
    }
    console.log(`${otherCharacter.name} has ${otherCharacter.health} health.`);
  }

  // rapidAttackFun(otherCharacter) {
  //   this.domImgs.src = this.images.rapidAttackImg
  //   otherCharacter.health -= this.weapons.rapidAttack.damage
  //   console.log('hit' + otherCharacter.health);
  //   setTimeout( () => {
  //     this.domImgs.src = this.images.baseImage;
  //   }, 500);
  // }
  //
  // heavyAttackFun(otherCharacter) {
  //   this.domImgs.src = this.images.heavyAttackImg
  //   otherCharacter.health -= this.weapons.heavyAttack.damage
  //   console.log('hvhit' + otherCharacter.health);
  //   setTimeout( () => {
  //     this.domImgs.src = this.images.baseImage;
  //   }, 1100);
  // }
  //
  // ultimateAttackFun(otherCharacter) {
  //   this.domImgs.src = this.images.ultimateAttackImg
  //   otherCharacter.health -= this.weapons.ultimateAttack.damage
  //   console.log('ulthit' + otherCharacter.health);
  //   setTimeout( () => {
  //     this.domImgs.src = this.images.baseImage;
  //   }, 1000);
  // }
  currentHealth(otherCharacter) {
    console.log(otherCharacter.health)
  }
}

const restart = () => {
restart = location.reload();
}



const game = {
  fighters: [],
  fightersSelected: [],

  fight: function() {
    const player1 = this.fighters[0];
    console.log(player1)
    const player2 = this.fighters[1];

    if (player1.health !==0 || player2.health !==0) {
      document.addEventListener('keydown', (e) => {
        if(e.keyCode == "32") {
          player1.attack(player2)
        } else if(e.keyCode == "13") {
          player2.attack(player1)
        } else {
          alert('invalid imput');
        }
      })
      console.log('Were are figthig');
    } else if (player1.health <= 0 || player2.health <=0) {
      alert('The winer is ')
      restart()
    }
}
}

  //     if(e.keyCode == "87") {
  //       player1.jump()
  //     } else if(e.keyCode == "65") {
  //       player1.moveLeft()
  //     } else if(e.keyCode == "68") {
  //       player1.moveRight()
  //     } else if(e.keyCode == "82") {
  //       player1.rapidAttackFun(player2)
  //     } else if(e.keyCode == "84") {
  //       player1.heavyAttackFun(player2)
  //     } else if(e.keyCode == "89") {
  //       player1.ultimateAttackFun(player2)
  //     } else if(e.keyCode == "38") {
  //       player2.jump()
  //     } else if(e.keyCode == "37") {
  //       player2.moveLeft()
  //     } else if(e.keyCode == "39") {
  //       player2.moveRight()
  //     } else if(e.keyCode == "222") {
  //       player2.rapidAttackFun(player1)
  //     } else if(e.keyCode == "186") {
  //       player2.heavyAttackFun(player1)
  //     } else if(e.keyCode == "76") {
  //       player2.ultimateAttackFun(player1)
  //     }
  //   })
  //   console.log('we are figthig', this.fighters)
  // }
  // }
// }

const albertEinstein = new Fighter('Albert Einstein', 'normal hit', 'E=mc2', 'Relativity', 'images/AE0.gif',
'./images/AERA.gif', './images/AE2.gif',
'./images/AE1.gif', character0, character0Imgs)
game.fighters.push(albertEinstein)

const charlesDarwin = new Fighter('Charles Darwin', 'normal hit', 'Natural Selection', 'Evolution', 'Images/CD0.gif',
'Images/CDRA.gif', 'Images/CD3.gif', 'Images/CD1.gif', character1, character1Imgs)
game.fighters.push(charlesDarwin)

const stephenHawking = new Fighter('Stephen Hawking', 'normal hit', 'Wormhole', 'Black Hole', 'Images/SH0.gif',
'Images/SHRA.gif', 'Images/SH3.gif', 'Images/SH2.gif', character2, character2Imgs)
game.fighters.push(stephenHawking)

const marieCurie = new Fighter('Marie Curie', 'normal hit', 'Polonium', 'Radium', 'Images/MC0.gif',
'Images/MCRA.gif', 'Images/MC1.gif', 'Images/3.gif', character3, character3Imgs)
game.fighters.push(marieCurie)

const isaacNewton = new Fighter('Isaac Newton', 'normal hit', 'Optiks', 'Gravity', 'Images/IN0.gif',
'Images/INRA.gif', 'Images/IN3.gif', 'Images/IN1.gif', character4, character4Imgs)
game.fighters.push(isaacNewton)

const pythagoras = new Fighter('Pythagoras', 'normal hit', 'Tetractys', 'pythagorean theorem', 'Images/P0.gif',
'Images/PRA.gif', 'Images/P1.gif', 'Images/P2.gif', character5, character5Imgs)
game.fighters.push(pythagoras)

const nikolaTesla = new Fighter('Nikola Tesla', 'normal hit', 'Tesla Coil', 'Teleforce "death ray"', 'Images/NT0.gif',
'Images/NTRA.gif', 'Images/NT4.gif', 'Images/NT1.gif', character6, character6Imgs)
game.fighters.push(nikolaTesla)


const arenaBackgrounds = [
  "https://www.fgbg.art/static/kizunaEncounter_deadend_day-2f108f3eb94376bcf3eb8578678057e0.gif",
  "https://www.fgbg.art/static/fistNorthStar_Atomiswave-50657c92a1179a33aa48e11d4996fe67.gif",
  "https://www.fgbg.art/static/svc_chaos_tunnelThing-020baacdb42485dd0e545cf5c3ea4936.gif",
  "https://www.fgbg.art/static/svc_templeAtNight-272d85c122d05e76f9b71c10cfafbb23.gif",
  "https://www.fgbg.art/static/kizunaEncounter_deadend_night-202398c75b64de82478cf71b2121a88e.gif"
];
let currentArena = 0;

const changeArena = (e) => {
    if (e === "btnNextArena") {
        if (currentArena < arenaBackgrounds.length - 1) {
            currentArena++
        } else {
            currentArena = 0;
        }
    }
    else if (e === "btnPreviusArena") {
        if (currentArena > 0) {
            currentArena--
        } else {
            currentArena = arenaBackgrounds.length - 1;
        }
    }
    arenasDiv.style.backgroundImage = `url('${arenaBackgrounds[currentArena]}')`
}



const openContainer1= () => {
container1.classList.add('close');
container2.classList.toggle('open');
}

const openContainer3 = () => {
  container1.classList.add('close');
  container3.classList.toggle('open');
}

const openContainer4 = () => {
  container1.classList.add('close');
  container2.classList.remove('open');
  container2.classList.add('close');
  container3.classList.remove('open');
  container3.classList.add('close');
  container4.classList.toggle('open');
  container4.style.backgroundImage = `url('${arenaBackgrounds[currentArena]}')`
}

player1Name.innerText = game.fighters[0].name
player2Name.innerText = game.fighters[1].name

for (let i = 0; i < characters.length; i++){
  characters[i].addEventListener('click', (e) => {
    if(game.fightersSelected.length < 2 ){
      game.fightersSelected.push(characters[i])
      console.log(game.fightersSelected)
    } else {
      console.log('can\'t add more characters')
    }
  })
}

// while (btnRedyToFight == 'click' || btnRedyToFight2 == 'click') {
let timeSeconds = 90;
const countDown = setInterval(()=> {
  timeSeconds--;
  displayTime(timeSeconds);
  if (timeSeconds <=0 || timeSeconds < 1) {
    clearInterval(countDown)
    restart()
  }
},1000)
const displayTime = (second) => {
  const minutes = Math.floor(second / 60);
  const seconds = Math.floor(second % 60);
  timer.innerHTML = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
displayTime(timeSeconds)

// }



btnP1VsP2.addEventListener('click', openContainer1);
btnP1VsCpu.addEventListener('click', openContainer3);
btnNextArena.addEventListener('click', () => changeArena("btnNextArena"));
btnPreviusArena.addEventListener('click', () => changeArena("btnPreviusArena"));
btnRedyToFight.addEventListener('click', openContainer4);
btnRedyToFight2.addEventListener('click', openContainer4);
// characters.addEventListener('click', selectCharacter);



game.fight()
