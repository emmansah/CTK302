/* For mobile phones - accesses accelerometer and gyroscope.
Make sure you turn on orientation lock on your iPhone or Android device. */

let alpha = 0, beta = 0 , gamma = 0; // gyroscope variablers
let xPosition = 0;
let yPosition = 0;
let zPosition = 0;
let x = 0, y = 0, z = 0 ; // accelerometer data

//new!!
let weather;
let weatherID = 0; // returned in the JSON weather element
let myState = 0;
let windspeed = 0 ;
let k = 0;
let temp = 0;
let desc = "";
//!!
///extra new$$$
let myInput = "";
let button;
let myText;
let myCityString = '';
let myIDString = '';
let myBigString = '';
///$$$


function setup() {

  createCanvas(windowWidth, windowHeight);
  myInput = createInput();


rectMode(CENTER);

}


//function gotData is new!!
function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  desc = weather.weather[0].description;

}
//!!




function draw() {

  textAlign(CENTER);
  textSize(20);

  switch (myState) {
    case 0:
    background('red');

    button = createButton('submit');
    button.position(width/2, 300);

    button.mousePressed(changePlace);

    myText = '';
    break;

    case 1:
      if (weather) {
        myState = 2;
      }
      break;

    case 2:
      noStroke();
      background(163, 194, 207);
      fill(169, 207, 163);
      rect(0, 250, width, height);
      fill('black');
      text("What is the weather in " + weather.name + "?", width/2, 280);
      text("windspeed is " + windspeed, width/2, 325);
      text("temperature is " + temp, width/2, 350);
      text("description: " + desc, width/2, 375);


      xPosition = map(gamma, -10, 30, 0, width);
      yPosition = map(beta, 60, 90, 0, height);
      zPosition = map(alpha, -80, 130, 0, width);

      push();

      translate(xPosition, yPosition, zPosition);

          fill('black');
          noStroke();
          textSize(200);
          textAlign(CENTER);
        //  text("BOO!", width / 2, height / 2);
          textSize(50);
          text("right?", width, height/2);
          text("left?", 0, height/2);
          text("up?", width/2, 0);
          text("down?", width/2, height);

          fill('white');
          //noStroke();
          ellipse(x-100, 150, 200, 100);
          ellipse(x-200, 60, 130, 70);
          ellipse(x-60, 20, 150, 75);


          // move the cloud's x position
          k = k + windspeed/4;
          if (k-300 > width) k = 0;

      pop();

      fill('black');
      textAlign(LEFT);
      textSize(22);
      fill('black');
      text("orientation data:", 25, 25);
      textSize(20);
      text("alpha: " + alpha, 25, 50);
      text("beta: " + beta, 25, 70);
      text("gamma: " + gamma, 25, 90);
      textSize(22);
      text("acceleration data:", 25, 125);
      textSize(20);
      text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
      text("y = " + y.toFixed(2), 25, 170);
      text("z = " + z.toFixed(4), 25, 190);
      text("What is the weather in " + weather.name, 25, 210);
      text("windspeed is " + windspeed, 25, 230);
      text("temperature is " + temp, 25, 260);
      text("description: " + desc, 25, 290);

      break;
  }
}

function changePlace(){
  myText = myInput.value();
  getInfo();
}


function getInfo(){

  myCityString = 'https://api.openweathermap.org/data/2.5/weather?q='+myText+',US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  myIDString = 'appid=fa5d656d90b6f37ee574f4f7f2bfc561'; // USE YOUR ID HERE, take out the x's!!!

  myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

  myState = 1;
}


// Read in gyroscope data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

// Read in accelerometer data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});
