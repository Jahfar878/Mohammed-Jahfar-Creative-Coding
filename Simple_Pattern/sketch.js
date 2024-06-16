var colors = ['pink', 'yellow', 'purple', 'blue', 'green', 'orange'];
var shapes = ['rect', 'ellipse', 'triangle'];

function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(1);
  noStroke();
}

function draw() {
  background(220); // Clear the background each frame
  for (var x = 0; x < 400; x += 100) {
    for (var y = 0; y < 400; y += 100) {
      var randColor = int(random(colors.length));
      var randShape = int(random(shapes.length));
      fill(colors[randColor]);
      
      var size = random(50, 100);
      var offsetX = random(-10, 10);
      var offsetY = random(-10, 10);

      if (shapes[randShape] === 'rect') {
        rect(x + offsetX, y + offsetY, size, size);
      } else if (shapes[randShape] === 'ellipse') {
        ellipse(x + 50 + offsetX, y + 50 + offsetY, size, size);
      } else if (shapes[randShape] === 'triangle') {
        triangle(
          x + 50 + offsetX, y + offsetY,
          x + offsetX, y + 100 + offsetY,
          x + 100 + offsetX, y + 100 + offsetY
        );
      }
    }
  }
}
