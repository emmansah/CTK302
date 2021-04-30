// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var temp = 0;
var desk = "";
var feelsLike = 0;
var hum = 0;

function setup() {
  createCanvas(400, 400);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Chicago,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=fa5d656d90b6f37ee574f4f7f2bfc561'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = round(weather.main.temp);
  feelsLike = round(weather.main.feels_like);
  desc = weather.weather[0].description;
  hum = weather.main.humidity;
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
      rect(0, 250, width-20, height);

      // cloud
      fill('white');
      //noStroke();
      ellipse(x-100, 150, 200, 100);
      ellipse(x-200, 60, 130, 70);
      ellipse(x-60, 20, 150, 75);


      // move the cloud's x position
      x = x + windspeed/4;
      if (x-300 > width) x = 0;



      fill('black');
      textSize(30);
      text(weather.name, width/2-20, 50);
      textSize(90);
      text(temp + "°F", width/2-20, 180);
      textSize(24);
      text("feels like " + feelsLike + "°F", width/2-22, 220);
      text(desc, width/2-20, 295);
      textSize(18);
      text("windspeed is " + windspeed + "mph", width/2-20, 330);
      text("humidity is " + hum+ "%", width/2-20, 360);




      //thermometer


      stroke('black');
      fill('white');
      rect(width-24, 10, 16, 380);

      fill('red');

      var t = map(temp, -10, 100, 10, height-10);
      rect(width-24, height-8, 16, -t);

      fill('black');
      textSize(14);
    //  text(temp +"F", width-52, -t);
      text("-10°F -", width-52, height-5);
      text("0°F -", width-47, height-41);
      text("10°F -", width-50, height-76);
      text("20°F -", width-50, height-113);
      text("30°F -", width-50, height-148);
      text("40°F -", width-50, height-185);
      text("50°F -", width-50, height-220);
      text("60°F -", width-50, height-254);
      text("70°F -", width-50, height-287);
      text("80°F -", width-50, height-322);
      text("90°F -", width-50, height-356);
      text("100°F -", width-53, height-385);



      break;

  }
}
