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


  fill('green');
  ellipse(0, 0, 80, 80);
  pop();

  frogPos.x = xPosition;
  frogPos.y = yPosition;


  for(let i = 0; i < cars.length; i++){
    cars[i].display();
    cars[i].drive();
    if(cars[i].pos.dist(frogPos) < 50){
      cars.splice(i, 1);
    }
  }


  fill('white');
  textSize(40);
  textAlign(CENTER);
  text("your words/image here", width/2, 600, windowWidth - 200, windowHeight - 200);


  textAlign(LEFT);
  textSize(20);
  fill('black');
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha, 25, 50);
  text("beta: " + beta, 25, 70);
  text("gamma: " + gamma, 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);
  text("x = " + x, 25, 150); // .toFixed means just show (x) decimal places
  text("y = " + y, 25, 170);
  text("z = " + z), 25, 190);
}


function
