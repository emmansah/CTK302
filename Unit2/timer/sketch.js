let myState = 0;
let myTimer = 0;
let one, two, three;

function setup() {
  createCanvas(400, 400);
  img1 = loadImage('assets/one.jpg');
  img2 = loadImage('assets/two.jpg');
  img3 = loadImage('assets/three.jpg');
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(22);
}

function draw() {
  switch(myState){

    case 0:
    background(100);
    image(img1, width/2, height/2, img1.width / 2.5, img1.height / 2.5);
    fill('black');
    text("state 0", width/2, 20)
    myTimer++;
    if(myTimer > 2*60){
      myTimer = 0;
      myState = 1;
    }


    break;



    case 1:
    background('yellow');
    image(img2, width/2, height/2, img1.width / 2.5, img1.height / 2.5);
    fill('black');
    text("state 1", width/2, 20);
    myTimer++;
    if(myTimer > 10*60){
      myTimer = 0;
      myState = 2;
    }
    break;



    case 2:
    background('blue');
    image(img3, width/2, height/2, img1.width / 2.5, img1.height / 3.5);
    fill('black');
    text("state 2", width/2, 20);
    myTimer++;
    if(myTimer > 5*60){
      myTimer = 0;
      myState = 0;
    }
    break;
  }

}
