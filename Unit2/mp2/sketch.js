let state = -1;
let mic;
let vol;
let timer1 = 0;
let timer2 = 0;
let img1, img2, img3;
let song1, song2;


function preload() {
  song1 = loadSound("assets/mozart.mp3");
  song2 = loadSound("assets/clap.mp3");

  song1.loop();
  song1.pause();
  song2.pause();
}








function setup(){
  createCanvas(800, 600);
  img1 = loadImage('assets/happyperformance.png');
  img2 = loadImage('assets/angryperformance.png');
  img3 = loadImage('assets/performanceover.png');
  textAlign(CENTER);
  imageMode(CENTER);
  textSize(22);

  //code for initializing mic in
  mic = new p5.AudioIn();
  mic.start();
}







function draw() {
  //get the sound input
  //(mic.getLevel()) gets mic stuff
  //.toFixed(2) rounds to 2 decimal places :)

  switch(state) {

    case -1:
    background(100);
    text("click to start :)", width/2, height/2);
    break;


    case 0:
      text("1", 300, 300);
      //can't jsut have a play command here bc it loops
      //state = 1 moves to the next state so it won't loop :)
      song1.play();
      state = 1;
      break;

    case 1:
    background(150);
    image(img1, width/2, height/2 + 60, img1.width / 3, img1.height / 3);
    text("An orchestra is performing Mozart\'s Violin Concerto No. 5. \nTry making noise and see what happens!", width/2, 50);
    vol = (mic.getLevel()).toFixed(2);
    if(vol > .5) {
      state = 2;
    }
    break;

    case 2:
    background('red');
    image(img2, width/2, height/2 + 60, img2.width / 3, img2.height / 3);
    text("Oh no! The musicians are upset! They\'re distracted by the sound!", width/2, 60);
    timer1++;
    if (timer1 > 3*60) {
      state = 1;
      timer1 = 0;
    }
    break;

  //  case 3:
    //text("buffer??", 300, 300);
  //  state = 4
  //  break;

    case 3:
    text("2", 300, 300);
    song1.pause();
    song2.play();
    state = 4;
    break;

    case 4:
    background('yellow');
    image(img3, width/2, height/2 +60, img3.width / 3, img3.height / 3);
    text("Yay! They were able to finish the performance!", width/2, 70);
    break;

  }


  timer2++;
  if (timer2 == 18*60){
    state = 3;
    timer2 = 19*60;
    //if (state > 4) {
      //state = 0;
    //}
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
