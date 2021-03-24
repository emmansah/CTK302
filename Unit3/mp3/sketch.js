let cars = [];
//cars array - all the flying things :)
let frogPos;
let state = 0;
let timer = 0;
let maxCars = 30;
let maxTimer = 30;
let song1;
let f1, f2;
let flag, oil, gold, diamond, spices, randomNum;
let bg1, bg2, bg3, bg4;
let myPix = [];
//creates empty array


function preload() {
  song1 = loadSound("assets/ramin_.mp3");
  oil = loadImage("assets/oil_.png");
  gold = loadImage("assets/gold_.png");
  diamond = loadImage("assets/diamond_.png");
  spices = loadImage("assets/spices_.png");
  myPix = [oil, gold, diamond, spices];

}



//all load commands go in the setup (then use atom-live-server!!)
function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER);
    imageMode(CENTER);
    f1 = loadFont("assets/RubberStamp.ttf");
    f2 = loadFont("assets/1942.ttf");
    flag = loadImage("assets/flag_.png");
    bg1 = loadImage('assets/bg1.png');
    bg2 = loadImage('assets/earth_.png');
    bg3 = loadImage('assets/win_.png');
    bg4 = loadImage('assets/lose_.png');


    // Spawn an object
    //loop to put things in the array
    for (let i = 0; i < maxCars; i++) {
      cars.push(new Car());
    }

    //frog starting position
    frogPos = createVector(width/2, height-100);

}









function draw() {
  switch (state){


    case 0:
    bg1.resize(windowWidth, windowHeight);
     background('yellow');
     image(bg1, width/2, height/2);
     textFont(f1);
     textSize(100);
      text("WELCOME", width/2, height/2);
      textFont(f2);
      textSize(38);
      text("How to build a Western nation: \nA one-step plan. \nStep 1 - Collect resources \nfrom other lands! :)", width/2, height/2+80);
      textSize(28);
      text("click to start", width/2, height-40);
      break;


      case 1:
      game();
      timer++;
      if (timer > maxTimer*60){
        timer = 0;
        state = 3;
      }
      break;

      case 2://win
      bg3.resize(windowWidth, windowHeight);
      background('green');
      image(bg3, width/2, height/2);
      fill('black');
      textFont(f1);
      textSize(98);
      text("WIN", width/2, height/2);
      textFont(f2);
      textSize(48);
      text("Click to play again", width/2, height/2+300);
      break;

      case 3://lose
      bg4.resize(windowWidth, windowHeight);
      background('red');
      image(bg4, width/2, height/2);
      fill('black');
      textFont(f1);
      textSize(98);
      text("LOSE", width/2, height/2);
      textFont(f2);
      textSize(48);
      text("Click to play again", width/2, height/2+300);
      break;

  }

}



function mousePressed() {
  if (song1.isPlaying()) {
    // .isPlaying() returns a boolean
    song1.stop();
  } else {
    song1.play();
  }
}


function mouseReleased() {
  switch(state){
    case 0:
    state = 1;
    break;

    case 2:
    resetTheGame();
    state = 0;
    break;

    case 3:
    resetTheGame();
    state = 0;
    break;
  }
}






function game(){
  bg2.resize(windowWidth, windowHeight);
  background(100);
  image(bg2, width/2, height/2);


  //cars.length is the length of the array
    //use this so u can test for when it =0 and change state
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if(cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }


  if (cars.length == 0){
    state = 2;
  }

  checkForKeys();

  //draws the frog
  image(flag, frogPos.x, frogPos.y, 75,75);

}



function resetTheGame(){
  timer = 0;
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

}




function checkForKeys(){
    if (keyIsDown(keyCode = 65)) frogPos.x -= 7;
    if (keyIsDown(keyCode = 68)) frogPos.x += 7;
    if (keyIsDown(keyCode = 87)) frogPos.y -= 7;
    if (keyIsDown(keyCode = 83)) frogPos.y += 7;

    //not letting frog go off the screen
    if (frogPos.x > width) frogPos.x = width;
    if (frogPos.x < 0) frogPos.x = 0;
    if (frogPos.y > height) frogPos.y = height;
    if (frogPos.y < 0) frogPos.y = 0;
}





// Car class
class Car {

    // constructor and attributes
    constructor() {
      this.pos = createVector(width/2, 100);
      this.vel = createVector(random(-4, 4), random(-4, 4));
      this.col = color(random(255), random(255), random(255));
      this.width = random(30, 70);
      this.image = random(myPix);
        //random image from myPix array
    }

    // methods

    display() {
        image(this.image,this.pos.x, this.pos.y);
    }



    move() {
      this.pos.add(this.vel);
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;

    }

}
