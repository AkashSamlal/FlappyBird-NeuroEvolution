function pickOne() {
    var index = 0; 
    var r = random(1); 

    while(r > 0) {
        r = r - savedBirds[index].fitness; 
        index++; 
    }
    index--; 

    let bird = savedBirds[index];
    let child = new Bird(bird.brain);
    child.mutate(); 
    return child;
}

function calculateFitness() {
    let sum = 0; 
    // for(let bird of savedBirds) {
    //     bird.getAverage(); 
    // }
     for(let bird of savedBirds) {
         sum += bird.score; 
     }
         for(let bird of savedBirds) {
         bird.fitness += bird.score / sum; 
     }
}

function nextGeneration() {
    calculateFitness();
    
    for(let i = 0; i < TOTAL; i++) {
        birds[i] = pickOne(); 
    }
    savedBirds = []; 
}



//create network - population, use neat to evolve, sort them - 
//try new combinations, mutate each generation