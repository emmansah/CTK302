// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var rtemp = 0;
var fltemp = 0;
var desk = "";
var myInput = "";
var button;
var myText;
var myCityString = '';
var myIDString = '';
var myBigString = '';
var sky = 0;
var myColor;


function setup() {
  createCanvas(windowWidth, windowHeight);

myInput = createInput();
myInput.position(width/2-width/6, height/2);

button = createButton('submit');
button.position(width/2-width/21, height/1.5);
  // HERE is the call to get the weather.

}



function gotData(data) {
  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  rtemp = round(weather.main.temp);
  fltemp = round(weather.main.feels_like);
  desc = weather.weather[0].description;
  sky = weather.weather[0].id;


}


function draw() {
  textAlign(CENTER);
  textSize(20);

  switch (myState) {

    case 0:
    background('red');
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

    fill('black');
    textSize(20);
    text("What is the weather in " + weather.name + "?", width/2, 100);

    textSize(48);
      text(rtemp + "°F", width/2, 350);

        textSize(10);
    text("feels like" + fltemp, width/2, height/2 + height/5)
    text("windspeed is " + windspeed, width/2, height/2 + height/7);
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




// function bg(){
//   if (sky == 804 || 803 || 802 || 801) {
//     background('blue');
//   }else if (sky == 800) {
//     background('green');
//   }
// }
