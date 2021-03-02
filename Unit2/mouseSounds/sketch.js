let sNotPressed, sPressed;

function preload(){
  sNotPressed = loadSound("assets/Exotica.mp3");
  sPressed = loadSound("assets/Indigo.mp3");

}

function setup() {
  createCanvas(500, 500);
  sNotPressed.loop();
}

function draw() {
  background(100);

  if(!(mouseIsPressed)&&(sPressed.isPlaying())) {
    sPressed.pause();
    sNotPressed.loop();
    print("triggering Non-Pressed song");


  } else if ((mouseIsPressed)&&(sNotPressed.isPlaying())) {
    sNotPressed.pause();
    sPressed.loop();
    print("triggering Pressed song");
  }



}
