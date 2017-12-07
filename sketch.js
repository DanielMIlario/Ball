var x = 0;
var speed = 5;

function setup () {
  createCanvas(2000, 1000)
}

function draw() {
  background(50, 100, 50)
  stroke(51)
  strokeWeight(6);
  fill(0, 0, 255);
  ellipse(x, 500, 100, 100);

  if (x > width) {
    speed = -5;
  }
  x = x + speed;
}
