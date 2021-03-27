let cars = [];
let img;


function preload() {
  img = loadImage("assets/th.jpg");

}


function setup() {
  createCanvas(windowWidth, windowHeight);
    // for (let i = 0; i < 20; i++){
    //   cars.push(new Car());
    // //pushes new cars into the cars array
    // }

    noStroke();

}

function draw() {
  background(img);
  cars.push(new Car());
  //putting it in the draw function makes it repeat a lot


  for (let i = 0; i < cars.length; i++){
  cars[i].display();
  cars[i].move();
  if (cars[i].a <= 0) {
    cars.splice(i, 1);
    }
  }

}



// Car class
class Car {

  // constructor
  constructor() {
    //attributes
    this.pos = createVector(width/2+width/20, height/2);
      //SPAWN. POINT.
    this.vel = createVector(random(-15, 0), random(0, 15));
      //how fast and which direction
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(200, 255);
    this.s = random(5, 50);


  }

  // methods
  //can be named whatever u want
  display() {
    fill(this.r, this.g, this.b, this.a);
    textSize(this.s);
    text("BEYONCE?", this.pos.x, this.pos.y);
      //one parameter makes an ellipse a circle
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a-5;
      //fades the color out

  // if (this.pos.x > width) this.pos.x = 0 ;
  //  if (this.pos.x < 0) this.pos.x = width ;
  //  if (this.pos.y > height) this.pos.y = 0 ;
  //  if (this.pos.y < 0) this.pos.y = height
  }
}
