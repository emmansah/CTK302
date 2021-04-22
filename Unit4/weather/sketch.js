// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var temp = 0;
var desk = "";

function setup() {
  createCanvas(400, 400);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Hinsdale,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=fa5d656d90b6f37ee574f4f7f2bfc561'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  desc = weather.weather[0].description;

}


function draw() {
  textAlign(CENTER);
  textSize(20);
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      noStroke();
      background(163, 194, 207);
      fill(169, 207, 163);
      rect(0, 250, width, height);
      fill('black');
      text("What is the weather in " + weather.name + "?", width/2, 280);
      text("windspeed is " + windspeed, width/2, 325);
      text("temperature is " + temp, width/2, 350);
      text("descripton " + desc, width/2, 375);



      // cloud
      fill('white');
      //noStroke();
      ellipse(x-100, 150, 200, 100);
      ellipse(x-200, 60, 130, 70);
      ellipse(x-60, 20, 150, 75);


      //thermometer
      fill('red');

      var t = map(temp, -10, 100, 10, height-10);
      rect(width-50, height-10, 30, -t);

      stroke('black');
      fill('white');
      rect(width-30, 10, 20, 380)

      // move the cloud's x position
      x = x + windspeed/4;
      if (x-300 > width) x = 0;


      break;

  }
}