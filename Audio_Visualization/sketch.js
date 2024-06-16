let mic;
let shapes = ['circle', 'square', 'triangle'];
let colors = [
  "#FFC857", // Yellow
  "#D7263D", // Red
  "#1B998B", // Blue-green
  "#6610F2", // Purple
  "#FF9B71"  // Salmon
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  mic = new p5.AudioIn();
  mic.start();
  noStroke();
}

function draw() {
  let micLevel = mic.getLevel() * height * 3; // Adjust sensitivity
  let shapeType = random(shapes); // Randomly choose a shape from the array
  let colorIndex = int(random(colors.length)); // Randomly choose a color from the array
  fill(colors[colorIndex]);
  
  // Ensure the shape size is within a reasonable range
  let shapeSize = constrain(micLevel, 10, 300);
  
  if (shapeType === 'circle') {
    circle(mouseX, mouseY, shapeSize); // Draw circle at mouse position
  } else if (shapeType === 'square') {
    rectMode(CENTER);
    rect(mouseX, mouseY, shapeSize, shapeSize); // Draw square at mouse position
  } else if (shapeType === 'triangle') {
    triangle(mouseX - shapeSize / 2, mouseY + shapeSize / 2, 
             mouseX + shapeSize / 2, mouseY + shapeSize / 2, 
             mouseX, mouseY - shapeSize / 2); // Draw triangle at mouse position
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(100); // Reset the background on window resize
}
