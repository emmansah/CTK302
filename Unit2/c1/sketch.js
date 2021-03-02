var mic;
var vol;
var c = 'red';
let x = 0 ;

function setup() {
  createCanvas(300, 300);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}




function draw() {

  background(c);

  // get the sound input
  vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .1) { // if the volume is LOUD?
    // do something
    x = x + 5;
    if (x > width) {
      x = 0;
    }
  }

push();
  translate(x, 0);
    avatar();
pop();

  // extra stuff for debugging
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 40);


}

function avatar(){
  rect(100, 100, 50, 50);
  rect(75, 150, 100, 100);
  fill('black');
  ellipse(120, 120, 5, 10);
  ellipse(130, 120, 5, 10);
}

// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
