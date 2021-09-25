let leftShip;               // "let" let you declare veriable
let rightShip;              // but haven't assign what calss this is veriable: is it a
                            // string or int
function setup(){           // initilize a function
                            // i guess java does have to initilize a function
     createCanvas(400, 400);            // "createCanvas" is creating a element and 
                                        // assigning a dimension to it
     leftShip = new Ship(width * 0.33);     // creates a blank 
                                            // inheriting
     rightShip = new Ship(width *0.66);                       
}

function draw() {
    background(0);                // setting background to black
    
    leftShip.update();              // move the ship
    rightShip.update();
    
    leftShip.display();
    rightShip.display();
  }

function keyPressed(){             // user interface
                                    // miving the right ship only
    if( KeyCode == UP_ARROW){           // if function for key entered
        rightShip.isUp = true;          
        rightShip.isDown = false;
    }
    else if (keyCode = DOWN_ARROW){
        rightShip.isDown = true;
        rightShip.isUp = false;
    }

    if (keyCode == 87){             // look up Javascript Char Codes (Key Codes)
        leftShip.isUp = true;       // control with "w" and "s" key
        leftShip.isDown = false;
    }
    else if (keyCode = DOWN_ARROW){
        leftShip.isDown = true;
        leftShip.isUp = false;
    }
}

function keyReleased() {                // whats the purpose of ket release?
                                        // you would onlt need this is you called this
                                        // a swtich to turn it to it's off state
    if (keyCode == UP_ARROW) {
      rightShip.isUp = false;
    } 
    else if (keyCode == DOWN_ARROW) {
      rightShip.isDown = false;
    }
    
    if (keyCode == 87) {
      leftShip.isUp = false;
    } 
    else if (keyCode == 83) {
      leftShip.isDown = false;
    }
  }