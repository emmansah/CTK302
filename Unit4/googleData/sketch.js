var bubbles = [];
var myState = 0;
var seasonsbg, timebg;
var viv, zim;

function preload() {
  seasonsbg = loadImage("assets/SS.png");
  timebg = loadImage("assets/ND.png");
  viv = loadSound("assets/vivaldi.mp3");
  zim = loadSound("assets/zimmer.mp3");

  viv.loop();
  viv.pause();
  zim.loop();
  zim.pause();


}

function setup() {

  let url = '1dtEw4w9wUnaCObK7mXqRLIsDxCrTfj3PYRU-jFjPdtQ';

  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff

  // Regular setup code we usually have
  createCanvas(800, 800);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {


  console.log(data); // Prints the data in the console


  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].season, data[i].time)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {

switch(myState){
  case 0:
  background('gray');
  textSize(40);
  fill('white');
  text("click to switch between groups", width/2, height/2);
  break;



  case 1:
  zim.pause();
  viv.play();
  myState = 2;
  break;



  case 2:
  background(seasonsbg);
  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
  bubbles[i].displaySeason();
  bubbles[i].move();
    }
  break;




  case 3:
  viv.pause();
  zim.play();
  myState = 4;
  break;



  case 4:
  background(timebg);
    // // iterate through the bubbles and display the objects!
    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].displayTime();
      bubbles[i].move();
    }
  break;

}


}


// my Bubble class
class Bubble {

  constructor(mySeason, myTime) {
    this.season = mySeason;
    this.time = myTime;
    this.pos = createVector(random(width), random(height));
    // this.vel = createVector(random(5), 0);
    this.vel = createVector(0,random(5));
    this.o = random(220, 255);
    this.spring = (random(40,185));
    this.summer = (random(270,390));
    this.fall = (random(470,595));
    this.winter = (random(675,760));
    this.day = (random(40,260));
    this.either = (random(290,510));
    this.night = (random(540,760));


  }


  displaySeason() {
    // if (this.shape == "Square") {
    //   rect(this.pos.x, this.pos.y, 50, 50);
    // } else {
    //   ellipse(this.pos.x, this.pos.y, 50, 50);
    // }

    textSize(18);
    noStroke();

    if(this.season == "Spring"){
      fill(235, 204, 52, this.o);
      ellipse(this.spring, this.pos.y, 75, 75);
      fill('black');
      text(this.season, this.spring, this.pos.y-3);
      text(this.time, this.spring, this.pos.y+15);
    } else if(this.season == "Summer"){
      fill(74, 156, 59, this.o);
      ellipse(this.summer, this.pos.y, 75, 75);
      fill('white');
      text(this.season, this.summer, this.pos.y-3);
      text(this.time, this.summer, this.pos.y+15);
    } else if(this.season == "Fall"){
      fill(161, 34, 46, this.o);
      ellipse(this.fall, this.pos.y, 75, 75);
      fill('white');
      text(this.season, this.fall, this.pos.y-3);
      text(this.time, this.fall, this.pos.y+15);
    } else if(this.season == "Winter"){
      fill(192, 212, 235, this.o);
      ellipse(this.winter, this.pos.y, 75, 75);
      fill('black');
      text(this.season, this.winter, this.pos.y-3);
      text(this.time, this.winter, this.pos.y+15);
    }


  }



  displayTime(){

    textSize(18);
    noStroke();

    if(this.time == "Night"){
      fill(25, 22, 120, this.o);
      ellipse(this.night, this.pos.y, 75, 75);
      fill('white');
      text(this.season, this.night, this.pos.y+15);
      text(this.time, this.night, this.pos.y-3);
    } else if(this.time == "Either"){
      fill(136, 128, 76, this.o);
      ellipse(this.either, this.pos.y, 75, 75);
      fill('white');
      text(this.season, this.either, this.pos.y+15);
      text(this.time, this.either, this.pos.y-3);
    } else if(this.time == "Day"){
      fill(247, 233, 32, this.o);
      ellipse(this.day, this.pos.y, 75, 75);
      fill('black');
      text(this.season, this.day, this.pos.y+15);
      text(this.time, this.day, this.pos.y-3);
    }


  }


// move() {
//   this.pos.add(this.vel);
//   if(this.pos.x > width) this.pos.x = 0;
//   }


move() {
  this.pos.add(this.vel);
  if(this.pos.y > height) this.pos.y = 0;
  }

}


function mouseReleased() {
  switch(myState){
    case 0:
      myState = 1;
    break;

    case 2:
      myState = 3;
    break;

    case 4:
      myState = 1;
    break;
  }

}
