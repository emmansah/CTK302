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
let temp = 0;
let desc = "";
//!!

function setup() {

  createCanvas(windowWidth, windowHeight);

//new!!
  let myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Hinsdale,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  let myIDString = 'appid=fa5d656d90b6f37ee574f4f7f2bfc561'; // USE YOUR ID HERE, take out the x's!!!

  let myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.
//!!


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
  //new!!


  //!!

  background('pink'); // grey

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -10, 30, 0, width);
  yPosition = map(beta, 60, 90, 0, height);
  zPosition = map(alpha, -80, 130, 0, width);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition, zPosition); // move everything over by x, y

       //rotate(radians(alpha)); // rotate the bunny depending on the alpha intake

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
    //  textSize(20);
    //  text("What is the weather in " + weather.name, width / 2, height / 2);
    //  text("windspeed is " + windspeed, width / 2, height / 2 + 30);
    //  text("temperature is " + temp, width / 2, height / 2 + 60);
    //  text("description: " + desc, width / 2, height / 2 + 90);
  // rect(0, 0, 100, 100) ;
  pop();


  // Text commands that display debugging data
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
  // Text that makes CTK type in the background
    // fill('black');
    // noStroke();
    // textSize(200);
    // textAlign(CENTER);
    // text("BOO!", width / 2, height / 2 - height/3);




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