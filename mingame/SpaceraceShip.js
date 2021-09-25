// ship class kepp track of each ship's location adn their current score.
// in the update() function ( being called from sketch class, going 60 time per second)
// updates the current ship location, check if it is going up or down (mark by "up()" or " down")
// it diplay player's score and if they go off at the up of the screen they reset

class Ship{                     // initilize a ship class
    constructoer(x){                // default contructor
                                    // give a initial value to all my variable
        this.x = x;
        this.score = 0;
        this.respawn();
        this.r = 10;

    }
    respaw(){
        this.y = height - 20;
        this.isUp = false;
        this.isDown = false;
    }
    update() {
        if (this.isUp && this.y > 0) {   // isUP is not false and y is greater than 0
          this.up();                       // move the ship up
        } 
        else if (this.isDown && this.y < height - 20) {             // isDown in  case can be both true for false
                                                                    // 
          this.down();
        }
        
        if (this.hasPlayerScoredAPoint()) {   // by calling this function it return true or false
          this.score ++;                      // score increase by one
          this.respawn();                      // call the respawn function and reset everything
        }
      }
      
    display() {
        ellipse(this.x, this.y, this.r * 2, this.r * 2);  // called the ellipse function with 4 parameter
    }
      
      
    up() {
    this.y--;  // the object moves down
    }
    
    down() {
    this.y++;   // the object move up
    }
    
    hasPlayerScoredAPoint() {
    if (this.y <= 0) {             // if the object move pass the 0 the player scores the point
        return true;
    }
    return false;
    }
}