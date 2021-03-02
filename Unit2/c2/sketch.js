let state = -1;
let mic;
let vol;
let timer = 0;

function setup(){
  createCanvas(500, 500);
  textAlign(CENTER);

  //code for initializing mic in
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  //get the sound input
  vol = (mic.getLevel()).toFixed(2);
  //(mic.getLevel()) gets mic stuff
  //.toFixed(2) rounds to 2 decimal places :)

  switch(state) {

    case -1:
    background(100);
    text("click to start", width/2, height/2);
    break;


    case 0:
    background(100);
    text("SHHHHH!!!!!", width/2, height/2);
    if(vol > .3) {
      state = 1;
    }
    break;

    case 1:
    background('red');
    text("QUIET DOWN!!!!", width/2, height/2);
    timer++;
    if (timer > 3*60) {
      state = 0;
      timer = 0;
    }
    break;

  }
}

function mouseReleased(){
  if(state == -1){
    state = 0;
  }
}

function touchStarted(){
  getAudioContext().resume();
}
