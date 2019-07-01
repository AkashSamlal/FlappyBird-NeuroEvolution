let { Network, architect } = carrot;  
class Bird {
    constructor(brain) {
    this.y = height/2; 
    this.x = 64;
    this.gravity = 0.7; 
    this.lift = -12; 
    this.velocity = 0;

    this.score = 0; 
    this.fitness = 0;
    
    if(brain) {
        this.brain = brain.clone();
    } else {
        this.brain = new Network(4, 4, 2);
    }
    
      

    }
    show()  {
        stroke(255);
        fill(255, 50); 
        ellipse(this.x, this.y, 32, 32);
    }

    up() {
        this.velocity += this.lift; 
     }

     mutate() {
         this.brain.mutate(0.1); 
     }
     think(pipes)  {

        let closest = null;
        let closestD = Infinity; 
        for(let i = 0; i < pipes.length; i++) {
            let d = pipes[i].x - this.x; 
            if(d < closestD && d > 0) {
                closest = pipes[i]; 
                closestD = d; 
            }
        }

        let inputs = []; 
        inputs[0] = this.y / height; 
        inputs[1] = closest.top/height; 
        inputs[2] = closest.bottom / height; 
        inputs[3] = closest.x / width; 
        
        //Toy -----------------------------------
        // let out = this.brain.predict(inputs);
        // console.log(out); 
        // if(out > 0.5) 
        // this.up(); 
        // ----------------------------------------
        console.log("Inputs: " + inputs[0]);          

        let output = this.brain.activate(inputs); 
        
        console.log("Predicts: " + output[0]); 
        
           if(output[0] > output[1]) {
                this.up(); 
           }
         
    }

    update() {
        this.score++; 
        this.velocity += this.gravity; 
        this.velocity *= 0.9; 
        this.y += this.velocity;

        if(this.y > height) {
            this.y = height; 
            this.velocity = 0; 
        }

        if(this.y < 0) {
            this.y = 0; 
           this.velocity = 0; 
        }
    }
}
