const TOTAL = 50; 
let birds = [] ; 
let savedBirds = []; 
let pipes = []; 
let counter = 0; 

function setup() {
  createCanvas(640, 480); 
  
  for(let i = 0; i < TOTAL; i++ ){
    birds[i] = new Bird();
  }
   
}

function draw() {
  background(0); 

  if(counter % 75 == 0) {
    pipes.push(new Pipe()); 
  }

  counter++; 

  for(let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show(); 
    pipes[i].update(); 
    
    for(let j = birds.length-1; j >=0; j--) {
      if(pipes[i].hits(birds[j])) {
        savedBirds.push(birds.splice(j, 1)[0]); 
      }
    }   
    if(pipes[i].offscreen()) {
      pipes.splice(i, 1) ; 
    }
  }

  for(let bird of birds) {
    bird.think(pipes); 
    bird.update(); 
    bird.show(); 
  }

  if(birds.length === 0 ) {
    counter = 0; 
    nextGeneration();
    pipes = []; 
    
  }

}

