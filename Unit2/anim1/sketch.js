let x = 0;
let v = 5;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(243, 169, 193);
  textSize(100);
  text("Hello World :)", x, height/2);
  textSize(50);
  text("Have a great day!!", x+550, height/2 + 100);
  x = x - v;
//x++ means x = x + 1
//x += 7 means x = x + 7
  if (x+550 < -width) {
//use > instead of == bc velocity might never = the width
  //ex) x+7 will never equal 500
    x = 650;
  }
}
