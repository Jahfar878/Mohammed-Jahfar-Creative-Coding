function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // body of the car 
  fill(0, 150, 255); // blue color
  rect(50, 200, 300, 50); // main body
  rect(100, 150, 200, 50); // front part
  
  // wheels 
  fill(50); // dark gray color
  ellipse(100, 250, 50, 50); // front wheel
  ellipse(300, 250, 50, 50); // back wheel
  
  // roof 
  fill(0, 150, 255); // blue color
  rect(100, 100, 200, 50); // roof
  
  // windows
  fill(200); // light gray color
  rect(110, 110, 80, 30); // left window
  rect(210, 110, 80, 30); // right window
  
  // headlights
  fill(255);
  ellipse(50, 200, 20, 20); // left headlight
  ellipse(350, 200, 20, 20); // right headlight
  
  // taillights
  fill(255, 0, 0); // red color
  ellipse(70, 250, 20, 20); // left taillight
  ellipse(330, 250, 20, 20); // right taillight
}
