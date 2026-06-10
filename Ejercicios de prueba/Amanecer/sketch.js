let rojo=verde=azul=0;
let horizonte=300;
let sol=150;
let posx=200;

function setup(){
  createCanvas(400,300);
  mouseY=100;
}

function draw() {
  background(rojo,verde,azul);
  fill('rgb(247,213,74)');
  circle(200,mouseY,sol);
  fill('rgb(78,128,0)')
  rect(0,200,400,100)
  if(mouseY<horizonte) {rojo=173-173*mouseY/400;
                        verde=216-216*mouseY/400;
                        azul=230-230*mouseY/400;}
  else {rojo=verde=azul=0}
}