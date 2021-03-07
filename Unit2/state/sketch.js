let state = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  textSize(32);
}

function draw() {
  switch(state){

    case 0:
    background(100);
    pattern0();
    fill('black');
    text("state 0", width/2, height/2);
    break;



    case 1:
    background('red');
    pattern1();
    fill('black');
    text("state 1", width/2, height/2);
    break;



    case 2:
    background('silver');
    pattern2();
    fill('black');
    text("state 2", width/2, height/2);
    break;



    case 3:
    background('pink');
    pattern3();
    fill('black');
    text("state 3", width/2, height/2);
    break;



    case 4:
    background('yellow');
    pattern4();
    fill('black');
    text("state 4", width/2, height/2);
    break;

  }

}

function mouseReleased(){
  state = state + 1;
  if (state>4){
    state = 0;
  }
}

function pattern0(){
  for (let j = 0; j <= height; j++) {
   for (let i = 0; i <= width; i++) {
     fill('red');
     ellipse(i * 40, j * 40, 10, 10);
   }
 }
}

function pattern1(){
  for (let j = 0; j <= height; j++) {
   for (let i = 0; i <= width; i++) {
     fill('silver');
     rect(i * 40, j * 40, 50, 10);
   }
 }
}

function pattern2(){
  for (let j = 0; j <= height; j++) {
   for (let i = 0; i <= width; i++) {
     fill('pink');
     ellipse(i * 40, j * 40, 10, 10);
     ellipse(i * 40 + 20, j * 40, 13, 13);
   }
 }
}

function pattern3(){
  for (let j = 0; j <= height; j++) {
   for (let i = 0; i <= width; i++) {
     fill('yellow');
     rect(i * 40, j * 40, 50, 10);
     fill('white');
     rect(i * 40, j * 40+20, 50, 10);
   }
 }
}

function pattern4(){
  for (let j = 0; j <= height; j++) {
   for (let i = 0; i <= width; i++) {
     fill('white');
     ellipse(i * 40, j * 40, 10, 10);
     fill(100);
    rect(i * 40, j * 40+15, 50, 10);
   }
 }
}
