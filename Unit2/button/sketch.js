let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(80);
  textAlign(CENTER);
}

function draw() {

  switch (state) {
    case 0:
      background('yellow');
      text("case 0", 250, 250);
        break;

    case 1:
      background('grey');
      text("case 1", 250, 250);
        break;

    case 2:
      background('pink');
      text("case 2", 250, 250);
        break;
  }

  fill('purple');
  rect(width/2-50, height-100, 100, 50);
}



function mouseReleased(){

  if ((mouseX > width/2-50)&&(mouseX < width/2+50)&&(mouseY > height-100)&&(mouseY < height-50)) {
//makes it so u have to click inside the button for state to change
//obv based on the rectangle we made, so can be anywhere and any size

  state = state + 1;
  if (state > 2) {
    state = 0;
  }

}
}
