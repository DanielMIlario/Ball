var x = 1800;
var y = 0;
var w = 1500;
var z = 450;
var B1x = 300;
var B1y = 300;
var B2x = 300;
var B2y = 300;
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
    textSize(125);
    fill(0, 0, 255);
    text("You Lose!", 80, 400);
  //   window.setTimeout(function() {
  //     window.location.href = window.location.href;
  //   }, 1000*3);
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
  background(50, 100, 50);
  //Blue ball
  fill(0, 0, 255);
  ellipse(x, y, B1x, B1y);
  //Red ball
  fill(255, 0, 0);
  ellipse(w, z, B2x, B2y);
  //Paddle
  fill(0, 255, 0);
  rect(200, mouseY, 20, 150);
  var isInX = (x + B1x > 130) && (x < B1x + 100);
  var isInY = (y > mouseY) && (y < (mouseY + 150));
  var isInZ = (z > mouseY) && (z < (mouseY + 150));
  var isInW = (w > 130) && (w < B2x + 100);
  var B1g = (B1x <= 0) && (B1y <= 0);
  var B2g = (B2x <= 0) && (B2y <= 0);
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
    textSize(125);
    fill(255, 0, 0);
    text("You Lose!", 80, 400);
    // window.setTimeout(function() {
    //   window.location.href = window.location.href;
    // }, 1000*3);
  }


if (isInX && isInY) {
  speed.x = -speed.x;
  speed.y = -speed.y;
  B1x = B1x * 0.7;
  B1y = B1y * 0.7;
}
if (isInZ && isInW) {
  speed2.w = -speed2.w;
  speed2.z = -speed2.z;
  B2x = B2x * 0.7;
  B2y = B2y * 0.7;
}
if (B1g && B2g) {
  textSize(125);
  fill(0, 0, 255);
  text("Level Completed!", 80, 400);
  speed.x = 0;
  speed.y = 0;
  speed2.w = 0;
  speed2.z = 0;
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
