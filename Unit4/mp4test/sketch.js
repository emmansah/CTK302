/* For mobile phones - accesses accelerometer and gyroscope.
Make sure you turn on orientation lock on your iPhone or Android device. */

let alpha = 0, beta = 0 , gamma = 0; // gyroscope variablers
let xPosition = 0;
let yPosition = 0;
let zPosition = 0;
let x = 0, y = 0, z = 0 ; // accelerometer data
let weather;
let weatherID = 0; // returned in the JSON weather element
let myState = 0;
let windspeed = 0 ;
let temp = 0;
let desc = '';
let myInput = '';
let button;
let myText;
let myCityString = '';
let myIDString = '';
let myBigString = '';
let sky = 0;
let wMax, wmin;
let hum;
let f1, f2, f3;
let sun, cloud, rain, storm, snow, atmosphere;
let newLocation = ['Birmingham, AL', 'Anchorage, AK', 'Phoenix, AZ', 'Little Rock, AR', 'Los Angeles, CA', 'Denver, CO', 'Bridgeport, CT', 'Wilmington, DE', 'Washington, DC', 'Jacksonville, FL', 'Atlanta, GA', 'Honolulu, HI', 'Boise, ID', 'Chicago, IL', 'Indianapolis, IN', 'Des Moines, IA', 'Wichita, KS', 'Louisville, KY', 'New Orleans, LA', 'Portland, ME', 'Baltimore, MD', 'Boston, MA', 'Detroit, MI', 'Minneapolis, MN', 'Jackson, MS', 'Kansas City, MO', 'Billings, MT', 'Omaha, NE', 'Las Vegas, NV', 'Manchester, NH', 'Newark, NJ', 'Albuquerque, NM', 'New York City, NY', 'Charlotte, NC', 'Fargo, ND', 'Columbus, OH', 'Oklahoma City, OK', 'Portland, OR', 'Philadelphia, PA', 'Providence, RI', 'Charleston, SC', 'Sioux Falls, SD', 'Nashville, TN', 'Houston, TX', 'Salt Lake City, UT', 'Burlington, VT', 'Virginia Beach, VA', 'Seattle, WA', 'Charleston, WV', 'Milwaukee, WI', 'Cheyenne, WY'];


function preload(){
  sun = loadImage("assets/sunnny.jpg");
  cloud = loadImage("assets/cloud.jpg");
  rain = loadImage("assets/rainnn.jpg");
  storm = loadImage("assets/storm.jpg");
  snow = loadImage("assets/snow.jpg");
  atmosphere = loadImage("assets/atmosphere.jpg");

}




function setup() {
  createCanvas(windowWidth, windowHeight);
  f1 = loadFont("assets/LMreg.otf");
  f2 = loadFont("assets/NO.ttf");
  f3 = loadFont("assets/LMlight.otf");

  myInput = createInput();
  myInput.position(width/2-width/6, height/2 + height/3.5);

  button = createButton('submit');
  button.position(width/2-width/24, height/1.5 + height/4.5);

rectMode(CENTER);

}


//function gotData is new!!
function gotData(data) {
  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  rtemp = round(weather.main.temp);
  fltemp = round(weather.main.feels_like);
  desc = weather.weather[0].description;
  sky = weather.weather[0].id;
  wMax = weather.main.temp_max;
  wMin = weather.main.temp_min;
  hum = weather.main.humidity;

}
//!!




function draw() {
  textAlign(CENTER);
  textSize(20);

  switch (myState) {
    case 0:
    background('black');
    fill('white');
    textFont(f2);
    text("Enter the location of a US city and press submit", width/2, height/2, windowWidth-100, windowHeight-100);
    text("example: Chicago, IL", width/2, height/2 + height/14, windowWidth-100, windowHeight-100);
    text("Or shake your device and be shown a random city!", width/2, height/2 + height/10, windowWidth-100, windowHeight-100);
    button.mousePressed(changePlace);
    break;


    case 1:
      getInfo()
      break;


    case 2:
      if (weather) {
        myState = 3; }
      break;


    case 3:
      noStroke();

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

          if (sky > 299 && sky < 599) { //rain
            background(rain);
          } else if (sky > 799 && sky < 801) { //sun
            background(sun);
        }else if (sky > 800 && sky < 805) { //clouds
            background(cloud);
          }else if (sky > 599 && sky < 699) { //snow
            background(snow);
          }else if (sky >199 && sky <299){ //storm
            background(storm);
          }else if (sky > 699 && sky < 799){
            background(atmosphere);
          }else {
            background('black');
          }

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


      textAlign(CENTER);
      fill('white');
      textFont(f2);
      textSize(30);
      text(weather.name, width/2, height/9);

      textFont(f1);
      textSize(108);
      text(rtemp + "°F", width/2, height/3);

      textFont(f2);
      textSize(16);
      text("max " + wMax + "°F | min " + wMin + "°F", width/2, height/3 + height/18);

      textFont(f3);
      textSize(28);
      text("feels like " + fltemp + "°F", width/2, height/3 + height/7.5)

      textFont(f2);
      textSize(20);
      text("windspeed:  " + windspeed + "mph", width/2, height/2 + height/11);
      text("humidity: " + hum +"%", width/2, height/2 + height/7.5);
      text("description: " + desc, width/2, height/2+height/5.5);


      //myText = '';
      //myInput.value('');
      button.mousePressed(changePlace);
      break;
  }
}


function changePlace(){
  myText = myInput.value();
  myInput.value('');
  myState = 1;
}


function getInfo(){
  myCityString = 'https://api.openweathermap.org/data/2.5/weather?q='+myText+',US&units=imperial&';
  myIDString = 'appid=fa5d656d90b6f37ee574f4f7f2bfc561';
  myBigString = myCityString + myIDString ;
  loadJSON(myBigString, gotData);
  myState = 2;
}


function deviceShaken(){
  myText = random(newLocation);
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
