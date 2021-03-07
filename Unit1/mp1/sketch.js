function setup() {
  createCanvas(720, 450);
  ellipseMode(CENTER);
  textAlign(CENTER);
}

function draw() {


  //avatar who casually chews gum all day, but when they need to, they can use the gum to trap things or as a transportation bubble
  if (mouseIsPressed) {
    background(121, 175, 210);
    noStroke();



    fill(67, 112, 82);
    quad(0, 250, 720, 220, 725, 400, 0, 400);
    //grass



    push();
    translate(-30, -100);
    translate(p5.Vector.fromAngle(millis() / 600, 10));
    fill(13, 20, 33);
    ellipse(704, 202, 35, 120);
    ellipse(704, 130, 65, 35);
    fill('red');
    quad(685, 127, 695, 127, 695, 137, 685, 137);
    quad(710, 127, 720, 127, 720, 137, 710, 137);

    fill(255, 207, 226, 200);
    ellipse(677, 175, 250, 250);
    pop();
    //monster1 right

    push();
    translate(5, -70);
    translate(p5.Vector.fromAngle(millis() / 1000, 30));
    fill(13, 20, 33);
    ellipse(104, 202, 35, 120);
    ellipse(104, 130, 65, 35);
    fill('red');
    quad(85, 127, 95, 127, 95, 137, 85, 137);
    quad(110, 127, 120, 127, 120, 137, 110, 137);

    fill(255, 207, 226, 200);
    ellipse(100, 177, 250, 250);
    pop();
    //monster2 left


    push();
    translate(30, 100);
    translate(p5.Vector.fromAngle(millis() / 600, 50));
    fill(13, 20, 33);
    ellipse(604, 302, 35, 120);
    ellipse(604, 230, 65, 35);
    fill('red');
    quad(585, 227, 595, 227, 595, 237, 585, 237);
    quad(610, 227, 620, 227, 620, 237, 610, 237);
    fill(13, 20, 33, 100);
    ellipse(605, 361, 35, 15);

    fill(255, 207, 226, 200);
    ellipse(624, 293, 250, 250);
    pop();
    //monster3 middle



    fill(97, 62, 35);
    quad(295, 207, 294, 223, 316, 218, 317, 204);
    //neck
    fill(86, 49, 20);
    quad(295, 215, 316, 211, 316, 200, 294, 204);
    //neck shadow ugh
    fill(97, 62, 35);
    ellipse(306, 176, 80, 65);
    //head
    fill(13, 20, 33);
    ellipse(290, 174, 5, 15);
    ellipse(320, 174, 5, 15);
    //eyes
    fill(13, 20, 33);
    ellipse(303, 195, 10, 10);
    //mouth
    fill(97, 62, 35);
    quad(270, 226, 275, 226, 271, 259, 266, 259);
    quad(336, 221, 341, 221, 347, 260, 342, 260);
    //arms
    fill(236, 31, 59);
    quad(275, 218, 336, 217, 328, 260, 290, 258);
    fill(238, 151, 162);
    ellipse(274, 219, 20, 20);
    ellipse(336, 217, 20, 20);
    //shirt
    fill(97, 62, 35);
    quad(296, 300, 296, 325, 305, 325, 305, 300);
    quad(316, 300, 316, 325, 325, 325, 325, 300);
    //legs
    fill(238, 151, 162);
    quad(290, 258, 328, 260, 342, 297, 283, 302);
    //skirt
    fill(236, 31, 59);
    ellipse(296, 327, 25, 10);
    ellipse(322, 327, 25, 10);
    //shoes
    fill(13, 20, 33);
    ellipse(255, 150, 60, 60);
    ellipse(356, 145, 60, 60);
    triangle(304, 143, 280, 143, 281, 152);
    triangle(304, 143, 328, 143, 329, 152);
    //hair

    //body


    fill(255, 207, 226, 200);
    ellipse(465, 210, 100, 100);
    ellipse(385, 173, 60, 60);
    ellipse(317, 198, 30, 30);
    //bubbles




    fill('white');
    quad(0, 400, 720, 400, 720, 450, 0, 450);


    fill('black');
    textSize(20);
    let d = 'She can use the gum to trap her attackers, and keep herself safe.';
    text(d, 20, 415, 700, 440);
  } else {
    background(121, 175, 210);
    noStroke();
    //sky

    fill('white');
    quad(0, 400, 720, 400, 720, 450, 0, 450);
    fill('black');
    textSize(18);
    let s = 'Sally lives in a dangerous world that has been taken over by monsters. To protect herself, Sally chews gum, so that when the monsters get too close...';
    text(s, 10, 408, 700, 440);
    //writing

    fill(67, 112, 82);
    quad(0, 250, 720, 220, 725, 400, 0, 400);
    //grass





    fill(97, 62, 35);
    quad(295, 207, 294, 223, 316, 218, 317, 204);
    //neck
    fill(86, 49, 20);
    quad(295, 215, 316, 211, 316, 200, 294, 204);
    //neck shadow ugh
    fill(97, 62, 35);
    ellipse(306, 176, 80, 65);
    //head
    fill(13, 20, 33);
    ellipse(290, 174, 5, 15);
    ellipse(320, 174, 5, 15);
    //eyes
    fill(13, 20, 33);
    quad(295, 194, 305, 194, 305, 196, 295, 196);
    //mouth
    fill(97, 62, 35);
    quad(270, 226, 275, 226, 271, 259, 266, 259);
    quad(336, 221, 341, 221, 347, 260, 342, 260);
    //arms
    fill(236, 31, 59);
    quad(275, 218, 336, 217, 328, 260, 290, 258);
    fill(238, 151, 162);
    ellipse(274, 219, 20, 20);
    ellipse(336, 217, 20, 20);
    //shirt
    fill(97, 62, 35);
    quad(296, 300, 296, 325, 305, 325, 305, 300);
    quad(316, 300, 316, 325, 325, 325, 325, 300);
    //legs
    fill(238, 151, 162);
    quad(290, 258, 328, 260, 342, 297, 283, 302);
    //skirt
    fill(236, 31, 59);
    ellipse(296, 327, 25, 10);
    ellipse(322, 327, 25, 10);
    //shoes

    fill(13, 20, 33);
    ellipse(255, 150, 60, 60);
    ellipse(356, 145, 60, 60);
    triangle(304, 143, 280, 143, 281, 152);
    triangle(304, 143, 328, 143, 329, 152);
    //hair

    //body



    fill(13, 20, 33);
    ellipse(704, 202, 35, 120);
    ellipse(704, 130, 65, 35);
    fill('red');
    quad(685, 127, 695, 127, 695, 137, 685, 137);
    quad(710, 127, 720, 127, 720, 137, 710, 137);
    fill(13, 20, 33, 100);
    ellipse(705, 264, 35, 15);
    //monster1 right

    fill(13, 20, 33);
    ellipse(104, 202, 35, 120);
    ellipse(104, 130, 65, 35);
    fill('red');
    quad(85, 127, 95, 127, 95, 137, 85, 137);
    quad(110, 127, 120, 127, 120, 137, 110, 137);
    fill(13, 20, 33, 100);
    ellipse(105, 264, 35, 15);
    //monster2 left

    fill(13, 20, 33);
    ellipse(604, 302, 35, 120);
    ellipse(604, 230, 65, 35);
    fill('red');
    quad(585, 227, 595, 227, 595, 237, 585, 237);
    quad(610, 227, 620, 227, 620, 237, 610, 237);
    fill(13, 20, 33, 100);
    ellipse(605, 364, 35, 15);
    //monster3 middle

    noFill();
    stroke(13, 20, 33);
    curve(324, 180, 307, 190, 307, 199, 318, 200);
    //mouth curve
  }






}
