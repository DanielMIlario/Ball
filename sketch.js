var x = 0;
var y = 0;
var speed = {
  x:5,
  y:5,
}

function setup () {
  createCanvas(2000, 1000)
}

function draw() {
  background(50, 100, 50)
  stroke(51)
  strokeWeight(6);
  fill(0, 0, 255);
  ellipse(x, y, 100, 100);

  if (x > (width - 50)) {
    speed.x = -5;
  } else if (x < 0) {
    speed.x = 5;
  }
  if (y > (height - 50)) {
    speed.y = -5;
  } else if (y < 0) {
    speed.y = 5;
  }
  y = y + speed.y;
  x = x + speed.x;
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
