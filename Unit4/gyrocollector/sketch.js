let beta, gamma;
let x = 0;
let y = 0;
let z = 0;
let xPosition = 0;
let yPosition = 0;

let cars = [];
let frogPos;


function setup() {
  createCanvas(windowWidth, windowHeight);

  alpha = 0;
  beta = 0;
  gamma = 0;

  for(let i = 0; i < 40; i++){
    cars.push(new Car());
  }


  fromPos = createVector(width/2, height/80);

  imadeMode(CENTER);
  rectMode(CENTER);
  noStroke();
}

function draw() {

  background('#c6f5ff');

  xPosition = map(gamma, -18, 18, 0, width);
  yPosition = map(beta, 25, 45, 0, height);

  push();
  translate(xPosition, yPosition);

}
