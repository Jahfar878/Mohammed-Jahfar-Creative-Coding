var font;

function preload() {
  font = loadFont("BlackOpsOne-Regular.ttf");
}

var points;
var colors;

function setup() {
  createCanvas(800, 600);
  background(255);
  fill(0, 100);
  noStroke();

  // Generate points from the text
  points = font.textToPoints('BATH SPA', 100, 300, 100, {
    sampleFactor: 0.3,
  });

  // Generate a random color for each point
  colors = points.map(() => color(random(255), random(255), random(255), 150));
}

function draw() {
  background(255);

  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    var c = colors[i];
    
    fill(c);
    ellipse(p.x, p.y, random(2, 15), random(2, 15));
  }
}
