let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(22);
}

function draw() {

  switch (state) {

    case 0:
    background('grey');
    text("I saw a nice stereo on Craigslist for $1. \nSeller says the volume is stuck on \‘high.\’", width/2, height/2);
      break;

    case 1:
    background('yellow');
    text("I couldn\’t turn it down.", width/2, height/2);
      break;
  }

}


function mouseReleased(){
  state++;
  if(state > 1){
    state = 0;
  }
}
