function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
 fill(random(255), random(255), random(255));
  
let x = random(width);
 let y = random(height); 
 let rWidth = random(100);
 let rHeight = random(100);
 let sorteo=random(10);
 if (sorteo<5) rect(x, y, rWidth, rHeight);
 else triangle(x,y,x,y+rHeight,x+rWidth,y+rHeight);

}