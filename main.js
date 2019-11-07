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
  document.getElementById("button").addEventListener("click", hitSeaLife)
};

const hitSeaLife = () => {
  let aliveArray = seaLife.filter(singleSeaLife => { 
    return !singleSeaLife.isDead; 
  });
  
  let myIndex = Math.floor(Math.random() * aliveArray.length);
  
  aliveArray[myIndex].whenHit();

  let allFishDivs = [...document.getElementsByTagName("div")];
  
  allFishDivs.forEach(fishDiv => {
    let fishInstance = seaLife[allFishDivs.indexOf(fishDiv)];
    fishDiv.innerHTML = fishInstance.hitpoints;
    if (!fishDiv.classList.contains("splash") && fishInstance.isDead) {     fishDiv.classList.add("splash");
    }
  })
 
  if (seaLife[myIndex].isDead && myIndex === 0) {
    killAll();
    gameOver();
  }
};

const killAll = () => { 
  let allFishDivs = [...document.getElementsByTagName("div")];
  for (let i = 0; i < seaLife.length; i++) {
      allFishDivs[i].innerHTML = 0;
      allFishDivs[i].classList.add("splash");
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
