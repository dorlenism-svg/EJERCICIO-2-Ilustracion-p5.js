let posx=100;
let posy=100;

function setup() {
  createCanvas(900,900);
}

function draw() {
  background(500);
  if(keyIsDown(LEFT_ARROW)==true) posx -=15;
  if(keyIsDown(RIGHT_ARROW)==true) posx +=15;
  if(keyIsDown(UP_ARROW)==true) posy -=15;
  if(keyIsDown(DOWN_ARROW)==true) posy +=15;
  
stroke('#bfff00')
  fill('#bfff00')
ellipse(posx,posy,30,30);
}  