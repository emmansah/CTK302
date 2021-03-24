let cars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
    // for (let i = 0; i < 20; i++){
    //   cars.push(new Car());
    // //pushes new cars into the cars array
    // }

    noStroke();

}

function draw() {
  background('grey');
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
    this.pos = createVector(100, 100);
      //SPAWN. POINT.
    this.vel = createVector(random(10), random(10));
      //how fast and which direction
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(200, 255);
    this.s = random(5, 20);
      //dont use this if changing size of text - use textSize :)

  }

  // methods
  //can be named whatever u want
  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, this.s);
      //one parameter makes an ellipse a circle
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a-5;
      //fades the color out as it moves??

  // if (this.pos.x > width) this.pos.x = 0 ;
  //  if (this.pos.x < 0) this.pos.x = width ;
  //  if (this.pos.y > height) this.pos.y = 0 ;
  //  if (this.pos.y < 0) this.pos.y = height
  }
}
