let ra=50;
let ra2=50;
function setup() {
  createCanvas(400, 400,WEBGL);
}

function draw() {
  background(0,49,83);
  orbitControl();
  stroke('rgb(156,88,134)');
  fill('rgb(246,248,214)');
  sphere(ra);
  stroke('rgb(45,85,134)');
  fill('rgb(139,143,79)');
torus(ra2);
  ra+=0.5
  if(ra>250) ra=50;
  
  ra2+=1
  if(ra2>500) ra2=50;
} 
  