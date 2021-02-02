function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}

function draw() {
  background('green');
  noStroke();
  //stroke(255, 0, 0);
  //strokeWeight(10);

  fill('blue');
  triangle(18, 18, 18, 360, 81, 360);
  //ellipse(24, 24, 80, 80)

  fill(102);
  rect(81, 81, 63, 63);

  fill(204);
  quad(189, 18, 216, 18, 216, 360, 144, 360);

  fill(255);
  ellipse(252, 144, 72, 72);

  fill('red');
  triangle(288, 18, 351, 360, 288, 360);

  fill('yellow');
  arc(479, 300, 280, 280, PI, TWO_PI);

  fill('white');
  //text(mouseX + ", " + mouseY, 20, 20);
  text("Lorem ipsum \"dolor sit amet, consectetur adipiscing elit, sed do eiusmod\" tempor incididunt ut labore et dolore magna aliqua. \nFaucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Donec enim diam vulputate ut pharetra. \nMassa id neque aliquam vestibulum morbi blandit cursus. Urna nec tincidunt praesent semper. Lectus arcu bibendum at varius vel pharetra. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Sagittis vitae et leo duis ut. Duis ultricies lacus sed turpis.", 40, 40, 680, 400);

}




function mouseReleased(){
   print(mouseX + ", " + mouseY);
}
