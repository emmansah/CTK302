var beta, gamma;
var x = 0;
var y = 0;
var z = 0;
var xPosition = 0;
var yPosition = 0;

var cars = [];
var frogPos;



function preload() {
  oil = loadImage("assets/oil_.png");
  gold = loadImage("assets/gold_.png");
  diamond = loadImage("assets/diamond_.png");
  spices = loadImage("assets/spices_.png");
  myPix = [oil, gold, diamond, spices];

}


function setup() {
  createCanvas(windowWidth, windowHeight);

  alpha = 0;
  beta = 0;
  gamma = 0;

  for(var i = 0; i < 40; i++){
    cars.push(new Car());
  }


  fromPos = createVector(width/2, height - 80);

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


  for(var i = 0; i < cars.length; i++){
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
  for (var i = 0; i < 40; i++){
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




function Car() {

    // constructor and attributes
      this.pos = createVector(100, 100);
      this.vel = createVector(random(-4, 4), random(-4, 4));
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
      this.a = random(255);
        //random image from myPix array


    // methods

    this.display = function() {
        fill(this.r, this.g, this.b, this.a);
        ellipse(this.pos.x, this.pos.y, 50, 50); //??
        ellipse(this.pos.x + 35, this.pos.y, 50, 50);
        rect(this.pos.x + 17, this.pos.y - 30, 80, 60);
    }



    this.drive = function() {
      this.pos.add(this.vel);

      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;

    }

}
