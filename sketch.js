var x = 0;
var y = 0;
var w = 1800;
var z = 100;
var height = 1000
var width = 2000
var speed = {
  x:5,
  y:5,
}
var speed2 = {
  w:7,
  z:7,
}
var value = 0

function setup () {
  createCanvas(2000, 1000)
}
function isInWidth(ballX) {
  if (ballX > (width - 50)) {
    speed.x = -5;
  } else if (ballX < 0) {
    speed.x = 5;
  }
}

function isInHeight(ballY) {
  if (ballY > (height - 50)) {
    speed.y = -5;
  } else if (ballY < 0) {
    speed.y = 5;
  }
}

function draw() {
  noStroke();
  background(50, 100, 50)
  fill(0, 0, 255);
  ellipse(x, y, 100, 100);
  fill(255, 0, 0);
  ellipse(w, z, 150, 150);
  fill(0, 255, 0);
  rect(200, mouseY, 20, 150);
  var isInY = (y > mouseY) && (y < (mouseY + 150))
  var isInX = (x > 170) && (x < 250)
  var isInZ = (z > mouseY) && (z < (mouseY + 150))
  var isInW = (w > 170) && (w < 250)
  // is in the frame
  isInWidth(x);
  isInHeight(y);

  if (z > (height - 50)) {
    speed2.z = -7;
  } else if (z < 0) {
    speed2.z = 7;
  }

  if (w > (width - 50)) {
    speed2.w = -7;
  } else if (w < 0) {
    speed2.w = 7;
  }

if (isInX && isInY) {
  speed.x = -speed.x;
}
if (isInZ && isInW) {
  speed2.w = -speed2.w;
}
  y = y + speed.y;
  x = x + speed.x;
  z = z + speed2.z;
  w = w + speed2.w;
  // Has collided with the paddle
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    speed.x = speed.x - 1;
  } else if (keyCode === RIGHT_ARROW) {
    speed.x = speed.x + 1;
  } if (keyCode === DOWN_ARROW) {
    speed.y = speed.y - 1;
  } else if (keyCode === UP_ARROW) {
    speed.y = speed.y + 1;
  }
}
