/* For mobile phones - accesses accelerometer and gyroscope.
Make sure you turn on orientation lock on your iPhone or Android device. */

let alpha = 0, beta = 0 , gamma = 0; // gyroscope variablers
let bunnyImage;
let xPosition = 0;
let yPosition = 0;
let x = 0, y = 0, z = 0 ; // accelerometer data
let cherry, pacman, pink, red, yellow, blue;


function setup() {

  createCanvas(windowWidth, windowHeight);



  bunnyImage = loadImage("assets/bunny.png");
  cherry = loadImage("assets/ch.png");
  pacman = loadImage("assets/pm.png");
  pink = loadImage("assets/pink.png");
  red = loadImage("assets/red.png");
  yellow = loadImage("assets/yellow.png");
  blue = loadImage("assets/blue.png");
  imageMode(CENTER);
  rectMode(CENTER);

}

function draw() {

 background('black'); // light blue

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(alpha)); // rotate the bunny depending on the alpha intake


  image(pacman, 0, -300, 500, 500);
  image(pink, -330, -550, 500, 500);
  image(red, -240, -820, 500, 500);
  image(yellow, 200, 350, 500, 500);
  image(blue, 340, -220, 500, 500);
  image(cherry, 150, -400, 200, 200);
  image(cherry, -80, 300, 200, 200);
  image(cherry, -300, -650, 200, 200);


  pop();


  // Text commands that display debugging data
  // textAlign(LEFT);
  // textSize(20);
  // fill('black');
  // text("orientation data:", 25, 25);
  // textSize(15);
  // text("alpha: " + alpha, 25, 50);
  // text("beta: " + beta, 25, 70);
  // text("gamma: " + gamma, 25, 90);
  // textSize(20);
  // text("acceleration data:", 25, 125);
  // textSize(15);
  // text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
  // text("y = " + y.toFixed(2), 25, 170);
  // text("z = " + z.toFixed(4), 25, 190);
  //


}



// Read in gyroscope data
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
