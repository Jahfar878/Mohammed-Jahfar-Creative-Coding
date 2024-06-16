function setup() {
  createCanvas(500, 500);
  background(100);
}

function draw() {
  // Fade the background slightly each frame to create trails
  fill(100, 10); // Semi-transparent fill for fading effect
  rect(0, 0, width, height);
}

function mouseDragged() {
  var count = int(random(5, 15));
  var r = random(50, 150);
  
  for (var i = 0; i < count; i++) {
    fill(random(255), random(200, 255), random(100, 200), 150); // Adding alpha for transparency
    
    // Calculate random offset for each circle
    var offsetX = random(-10, 10);
    var offsetY = random(-10, 10);
    
    // Calculate rotation angle
    var angle = random(TWO_PI);
    
    // Save the current transformation matrix
    push();
    
    // Translate to the mouse position plus the offset
    translate(mouseX + offsetX, mouseY + offsetY);
    
    // Rotate the drawing context
    rotate(angle);
    
    // Draw the circle
    circle(0, 0, r);
    
    // Restore the transformation matrix
    pop();
    
    // Reduce the size of the circle for the trail effect
    r *= 0.8;
  }
}
