let waffles;
let blankets;
let mandela;


function setup() {
  createCanvas(800, 800);
  waffles = loadImage("assets/waffles.jpg");
  blankets = loadImage("assets/blankets.jpg");
  mandela = loadImage("assets/mandela.jpg");

  imageMode(CENTER);
  rectMode(CENTER);
}

  function draw() {
    background('white');
    image(waffles, width/2, height/2, 200, 200);
    image(blankets, width/2, height/2 - 200, 200, 200);
    image(mandela, width/2, height/2 + 200, 200, 200);
}
