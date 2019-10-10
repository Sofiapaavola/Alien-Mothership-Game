class General {
  hitpoints = 80;
  damageTaken = 7;
  isDead = false;

  whenHit() {
    if (this.hitpoints > 0) {
      this.hitpoints -= this.damageTaken;
    }
    this.dies();
  }

  dies() {
    if (this.hitpoints == 0) {
      this.isDead = true;
    } else if (this.hitpoints < 0) {
      this.hitpoints = 0;
      this.isDead = true;
    }
  }
}

class Ariel extends General {
  hitpoints = 80;
  damageTaken = 7;
}

class Flounder extends Ariel {
  hitpoints = 68;
  damageTaken = 10;
}

class Fish extends Flounder {
  hitpoints = 60;
  damageTaken = 12;
}

const compileSeaLife = () => {
  const NumAriel = 1;
  const NumFlounder = 5;
  const NumFish = 8;

  let ariel = [];
  let flounders = [];
  let fishes = [];

  for (let i = 0; i < NumAriel; i++) {
    const rupaul = new Ariel();
    ariel.push(rupaul);
    const element = `<div class="box ariel"> 80 </div>`;
    document.getElementById("units").innerHTML += element;
  }

  for (let i = 0; i < NumFlounder; i++) {
    let flounder = new Flounder();
    flounders.push(flounder);
    const element = `<div class="box flounder"> 68 </div>`;
    document.getElementById("units").innerHTML += element;
  }

  for (let i = 0; i < NumFish; i++) {
    let fish = new Fish();
    fishes.push(fish);
    const element = `<div class="box fish"> 60 </div>`;
    document.getElementById("units").innerHTML += element;
  }

  const seaList = [ariel, flounders, fishes].flat();
  return seaList;
};

const start = () => {
  document.getElementById("button").addEventListener("click", hitSeaLife);
};

const hitSeaLife = () => {

  
  let aliveArray = seaLife.filter(singleSeaLife => { 
    return !singleSeaLife.isDead; 
  });
  
  let myIndex = Math.floor(Math.random() * aliveArray.length);
  // because the aliveArray length is smaller - because the html isnt updating dynamically it effects the rest of the script 
  
  // if isDead = true then focus only on alive array ... 
  
  // if 4 dies then 5 becomes the new four (switch statement??)

  // hard code that there is always the length -- when 0 

  // 

  let aliveIndices = []
  aliveArray.forEach(instance => {
    console.log(seaLife.indexOf(instance));
    aliveIndices.push(seaLife.indexOf(instance))
  });
  console.log(myIndex, "hey");
  console.log('ALIVE ARRAY',aliveArray);
  console.log(aliveIndices, "yo solve it");
  //seaLife = aliveArray;
  instanceToHit = seaLife[aliveIndices[myIndex]];
  //seaLife[myIndex].whenHit();
  instanceToHit.whenHit();

  document.querySelectorAll("div")[myIndex].innerHTML =
    seaLife[myIndex].hitpoints;

  console.log(seaLife);
  if (seaLife[myIndex].isDead) {
    document.querySelectorAll("div")[myIndex].classList.add("splash");
  };

  if (seaLife[myIndex].isDead && myIndex === 0) {
    gameOver();
  }
};


const gameOver = () => {
  alert("Thank you for your efforts, you have been a huge help");
  document.querySelector("#restartButton").style.display = "block";
  restart();
};

const restart = () => {
  document.getElementById("restartButton").addEventListener("click", event => {
    return window.location.reload();
  });
};

let seaLife = compileSeaLife();

start();
