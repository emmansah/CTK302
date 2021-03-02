let state = -1;
let mic;
let vol;
let timer = 0;
let img1;

function setup(){
  createCanvas(700, 700);
  img1 = loadImage('assets/happyperformance.png');
  textAlign(CENTER);
  imageMode(CENTER);
  textSize(18);

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
    text("click to start :)", width/2, height/2);
    break;


    case 0:
    background(150);
      image(img1, width/2, height/2, img1.width / 4, img1.height / 4);
    text("Hillary Hahn, a violinist, is performing Vaughan William's \"The Lark Ascending.\" \nTry making a loud sound and see what happens!", width/2, 40);
    if(vol > .3) {
      state = 1;
    }
    break;

    case 1:
    background('red');
    text("Oh no! She's distracted by the disruption! Quiet down!", width/2, 40);
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
