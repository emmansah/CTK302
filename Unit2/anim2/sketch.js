
let x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

  push();
  translate(x, 0);
  rect(0, 0, 100, 100);
//if using translate, ppl will usually build things at the origin
  pop();


  x = x + 10;
  if(x > width){
    x = 0;
  }
}
