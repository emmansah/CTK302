let beta, gamma;
let x = 0;
let y = 0;
let z = 0;
let xPosition = 0;
let yPosition = 0;

let cars = [];
let frogPos;
let myPix = [];
let f1, f2;
let flag, oil, gold, diamond, spices, randomNum;
let bg1, bg2, bg3, bg4;




function preload() {
  oil = loadImage("assets/oil_.png");
  gold = loadImage("assets/gold_.png");
  diamond = loadImage("assets/diamond_.png");
  spices = loadImage("assets/spices_.png");
  myPix = [oil, gold, diamond, spices];

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  imageMode(CENTER);
  f1 = loadFont("assets/RubberStamp.ttf");
  f2 = loadFont("assets/1942.ttf");
  flag = loadImage("assets/flag_.png");
  bg1 = loadImage('assets/bg1.png');
  bg2 = loadImage('assets/earth_.png');
  bg3 = loadImage('assets/win_.png');
  bg4 = loadImage('assets/lose_.png');

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


function deviceShaken(){
  cars = [];
  for (let i = 0; i < 40; i++){
    cars.push(new Car());
  }
}


window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

// Read in accelerometer data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});




class Car {

    // constructor and attributes
    constructor() {
      this.pos = createVector(100, 100);
      this.vel = createVector(random(-4, 4), random(-4, 4));
      this.col = color(random(255), random(255), random(255));
      this.width = random(30, 70);
      this.image = random(myPix);
        //random image from myPix array
    }

    // methods

    display() {
        image(this.image,this.pos.x, this.pos.y);
    }



    move() {
      this.pos.add(this.vel);
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;

    }

}
