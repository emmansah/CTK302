let state = 0;
let song1, song2, song3 ;

function preload(){
  song1 = loadSound("assets/Exotica.mp3");
  song2 = loadSound("assets/Gold.mp3");
  song3 = loadSound("assets/Indigo.mp3");

  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();

}

function setup() {
  createCanvas(500, 500);

}

function draw() {

  background(100);
  switch(state){

    case 0:
      text("1", 100, 100);
      //can't jsut have a play command here bc it loops
      //state = 1 moves to the next state so it won't loop :)
      song1.play();
      state = 1;
      break;

    case 1:
    //just hanging out yay
      text("listen to song 1", 100, 100);
      break;

    case 2:

      song2.play();
      state = 3;
      break;

      case 3:
        text("listen to song 2", 100, 100);
        break;

      case 4:

        song3.play();
        state = 5;
        break;

      case 5:
        text("listen to song 3", 100, 100);
        break;


  }
}

function mouseReleased() {
  state++;
  if (state > 5) state = 0;

  song1.pause();
  song2.pause();
  song3.pause();
}
