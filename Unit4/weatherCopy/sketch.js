// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var rtemp = 0;
var fltemp = 0;
var desc = "";
var myInput = "";
var button;
var myText;
var myCityString = '';
var myIDString = '';
var myBigString = '';
var sky = 0;
var wMax, wmin;
var hum;
var f1, f2, f3;



function setup() {
  createCanvas(windowWidth, windowHeight);
  f1 = loadFont("assets/LMreg.otf");
  f2 = loadFont("assets/NO.ttf");
  f3 = loadFont("assets/LMlight.otf");

myInput = createInput();
myInput.position(width/2-width/6, height/2 + height/3.5);

button = createButton('submit');
button.position(width/2-width/21, height/1.5 + height/4.5);



}



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


function draw() {
  textAlign(CENTER);
  textSize(20);

  switch (myState) {

    case 0:
    background('black');
    fill('white');
    textFont(f2);
    text("type the location of a US city and hit submit", width/2, height/2);
    text("example: Chicago, IL", width/2, height/2 + height/16);
    button.mousePressed(changePlace);

    break;

    case 1:
    getInfo()

      break;

    case 2:

    if (weather) {
      myState = 3;
    }

      break;

    case 3:

    if (sky > 499 && sky < 599) {
      background('gray');
    } else if (sky > 799 && sky < 801) {
      background('blue');
    }else if (sky > 800 && sky < 805) {
      background('green');
    }else if (sky > 599 && sky < 699) {
      background('red');
    }else {
      background('white');
    }


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
    text("windspeed:  " + windspeed + "mph", width/2, height/2 + height/10);
    text("humidity: " + hum +"%", width/2, height/2 + height/7.5);
    text("description: " + desc, width/2, height/2+height/6);


    myText = '';
    button.mousePressed(changePlace);
    // fill('white');
    // //noStroke();
    // ellipse(x-100, 150, 200, 100);
    // ellipse(x-200, 60, 130, 70);
    // ellipse(x-60, 20, 150, 75);
    // x = x + windspeed/4;
    // if (x-300 > width) x = 0;
    break;

  }

}

function changePlace(){
  myText = myInput.value();
  myState = 1;
}


function getInfo(){
  myCityString = 'https://api.openweathermap.org/data/2.5/weather?q='+myText+',US&units=imperial&';
  myIDString = 'appid=fa5d656d90b6f37ee574f4f7f2bfc561';
  myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData);

  myState = 2;
}
