
let f1;
let f2;
let f3;
//defines the variable/letter?? as f1

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  f1 = loadFont("assets/secretWinter.ttf");
  f2 = loadFont("assets/aurelieSmith.ttf");
  f3 = loadFont("assets/browniesCake.ttf");
  //load command
    //used for images, sounds, videos
    //all load commands go in the setup
}

function draw() {
  background(100);
  textSize(48);
  textFont(f1);
  text("hello", width/2, height/2);

  textFont(f2);
  text("hello", width/2, height/2+40);

  textFont(f3);
  text("hello", width/2, height/2+80);


}
