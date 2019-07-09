class Pipe {
    constructor() {
      this.spacing = 105;
      this.top = random(height / 6, 3 / 4 * height);
      this.bottom = height - (this.top + this.spacing / 2);
      this.x = width;
      this.w = 80;
      this.speed = 6;
      this.hightlight = false; 
    }
  
    // Did this pipe hit a bird?
    hits(bird) {
       if(bird.y < this.top || bird.y > height - this.bottom) {
          if(bird.x > this.x && bird.x < this.x + this.w) {
            this.hightlight = true; 
            return true; 
        }
       }
    this.hightlight = false; 
    return false;
    }
  
    // Draw the pipe
    show() {
        fill(255); 
        if(this.hightlight) {
            fill(255, 0, 0); 
        }
        rect(this.x, 0, this.w, this.top); 
        rect(this.x, height-this.bottom, this.w, this.bottom);
    }
  
    // Update the pipe
    update() {
      this.x -= this.speed;
    }
  
    // Has it moved offscreen?
    offscreen() {
      if (this.x < -this.w) {
        return true;
      } else {
        return false;
      }
    }
  }