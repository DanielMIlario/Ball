var x = 0;
var y = 0;
var x2 = 0.25;
var y2 = 0.25;
var speed = {
  x:5,
  y:5,
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

function isInWidth2(ballX2) {
  if (ballX2 > (width - 50)) {
    speed.x = -5;
  } else if (ballX2 < 0) {
    speed.x = 5;
  }
}

function isInHeight2(ballY2) {
  if (ballY2 > (height - 50)) {
    speed.y = -5;
  } else if (ballY2 < 0) {
    speed.y = 5;
  }
}

function draw() {
  noStroke();
  background(50, 100, 50)
  fill(0, 0, 255);
  ellipse(x, y, 50, 50);
  fill(0, 0, 255);
  noStroke();
  ellipse(x2, y2, 150, 150);
  rect(200, mouseY, 20, 150);
  var isInY = (y > mouseY) && (y < (mouseY + 150))
  var isInX = (x > 170) && (x < 250)
  // is in the frame
  isInWidth(x);
  isInHeight(y);
  isInWidth2(x2);
  isInHeight2(y2);


if (isInX && isInY) {
  speed.x = -speed.x;
}
  y = y + speed.y;
  x = x + speed.x;

  y2 = y2 + speed.y + 1;
  x2 = x2 + speed.x + 1;

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
