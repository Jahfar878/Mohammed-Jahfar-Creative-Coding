function setup() {
  createCanvas(500, 400);
  background(20, 20, 50); // dark blue background
}

function draw() {
  // Body
  fill(100, 200, 100); // greenish body color
  noStroke();
  ellipse(250, 200, 250, 300); // main body
  
  // Head
  fill(150, 100, 200); // purplish head color
  ellipse(250, 100, 150, 150); // head
  
  // Eyes
  fill(50, 150, 200); // bluish eye color
  ellipse(220, 100, 40, 60); // left eye
  ellipse(280, 100, 40, 60); // right eye
  
  // Pupils
  fill(0); // black pupils
  ellipse(220, 100, 20, 20); // left pupil
  ellipse(280, 100, 20, 20); // right pupil
  
  // Antennas
  strokeWeight(3);
  stroke(150, 100, 200); // purplish color for antennas
  line(250, 50, 200, 80); // left antenna
  line(250, 50, 300, 80); // right antenna
  
  noStroke();
  fill(150, 100, 200); // purplish color for antenna balls
  ellipse(200, 80, 30, 30); // left antenna ball
  ellipse(300, 80, 30, 30); // right antenna ball
  
  // Mouth
  fill(50); // dark mouth color
  ellipse(250, 150, 80, 20); // mouth
  
  // Teeth
  fill(255); // white teeth
  rect(230, 140, 10, 10); // left tooth
  rect(245, 140, 10, 10); // middle-left tooth
  rect(260, 140, 10, 10); // middle-right tooth
  rect(275, 140, 10, 10); // right tooth
  
  // Decorative patterns on body
  fill(255, 150); // semi-transparent white
  ellipse(200, 200, 50, 50); // pattern 1
  ellipse(300, 200, 50, 50); // pattern 2
  ellipse(250, 250, 50, 50); // pattern 3
}
