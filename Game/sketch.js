let X = 300;
let Y = 600;
let vel = 0;
let X2 = 20;
let Y2 = 300;
let vel2 = 4;
let score = 0;

function setup() {
  createCanvas(600, 700);
}

function draw() {
  background(255, 204, 153); // Light orange background
  
  fill(53, 26, 0); // Dark brown ground
  rect(0, 600, 600, 100);

  fill(102, 51, 0); // Dark brown target base
  rect(450, 490, 80, 60);
  rect(485, 550, 10, 90);
  
  fill(255); // White text
  textSize(14);
  text("SCORE", 468, 510);
  textSize(25);
  text(score, 483, 535);

  fill(255, 0, 0); // Red circles
  ellipse(X, Y, 20, 20);
  noStroke();

  fill(0, 102, 204); // Blue circles for the target
  ellipse(X2, Y2, 70, 70);
  fill(0, 204, 255);
  ellipse(X2, Y2, 60, 60);
  fill(0, 102, 204);
  ellipse(X2, Y2, 40, 40);
  fill(0, 204, 255);
  ellipse(X2, Y2, 30, 30);
  fill(0, 102, 204);
  ellipse(X2, Y2, 10, 10);

  X2 += vel2; // Move target to the right

  Y += vel; // Move shot upwards

  if (Y < 250) { // Reset shot if it misses
    vel = 0;
    Y = 600;
  }

  if (X2 > width) X2 = 20; // Reset target position

  if (dist(X, Y, X2, Y2) < 45) { // Check collision between shot and target
    X2 = 20; // Reset target position
    Y = 600; // Reset shot position
    vel = 0;
    score++; // Increase score
  }
}

function keyPressed() {
  vel = -5; // Move shot upwards when key is pressed
}
