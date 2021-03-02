var mic;
var vol;
var c = 'pink';


function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}


function draw() {
  background(c);

//ellipse(width/2, height/2, vol*100, vol*100);

rect(20, 400-vol*100, 50, vol*100);
rect(70, 400-vol*200, 50, vol*200);
rect(120, 400-vol*300, 50, vol*300);
rect(170, 400-vol*400, 50, vol*400);
rect(220, 400-vol*500, 50, vol*500);
rect(270, 400-vol*600, 50, vol*600);
rect(320, 400-vol*700, 50, vol*700);
  // get the sound input
  vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .20) { // if the volume is LOUD?
    // do something

  //  c = color(random(255), random(255), random(255)); // here I'm setting the background to a random color
  }

  // extra stuff for debugging
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


//  x = map(vol, 0, .2, 0, width) ;
  //rect(x, 200, 50, 50);

}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
