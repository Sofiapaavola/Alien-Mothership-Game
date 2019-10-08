class General  { 
    hitpoints = 80; 
    damageTaken = 7; 
    isDead = false; 

    whenHit(){ 
       if (this.hitpoints > 0) { 
           this.hitpoints -= this.damageTaken;
        };
        this.dies(); 
    }

    dies() { 
        if (this.hitpoints == 0){ 
           this.isDead = true; 
        } else if (this.hitpoints < 0) { 
            this.isDead = true;
            this.hitpoints = 0;
        }
    }
}

class Ariel extends General { 
    hitpoints = 80; 
    damageTaken = 7; 

    // allDead() { 
    //     if 
    // }
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
    const NumFlounder = 0; 
    const NumFish = 0; 

    let ariel = []; 
    let flounders = []; 
    let fishes = []; 
    
    const rupaul = new Ariel(); 
    ariel.push(rupaul);

    for(let i = 0; i < NumFlounder; i++) {
        let flounder = new Flounder(); 
        flounders.push(flounder);
    }

    for(let i = 0; i < NumFish; i++) {
        let fish = new Fish(); 
        fishes.push(fish);
    }
    
    const seaList = [ariel,flounders,fishes].flat(); 
    console.log(seaList);
    return seaList;
}

const hitSeaLife = () => { 

    document.getElementById("button").addEventListener("click", event => { 
        let myIndex = Math.floor(Math.random()*seaLife.length);
        seaLife[myIndex].whenHit();

        if myIndex

        if (seaLife[myIndex].isDead) { 
            console.log("I am dead.");
        }
        
        console.log(seaLife);
        console.log(seaLife[myIndex]);
    });    
}



let seaLife = compileSeaLife();

hitSeaLife();



// main functions include: 

    // check if the game is over(?)
        // - this will include the hitpoint decreasing - innerHTML change 

    // game over 

    // hit random 

    // game restart 