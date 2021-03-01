let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(22);
}

function draw() {

  switch (state) {

    case 0:
    background('red');
    text("What\’s the best thing about Switzerland?", width/2, height/2);
      break;

    case 1:
    background('green');
    text("Well the flag\’s a big plus.", width/2, height/2);
      break;
  }


timer++;
if (timer > 3*60){
  state++;
  timer = 0;
  if (state > 1) {
    state = 0;
  }
}


}
