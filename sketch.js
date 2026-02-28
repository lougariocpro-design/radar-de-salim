let iAngle = 0;
let iDistance = 0;
let direction = 1;

function setup() {
  let canvas = createCanvas(1200, 700);
  canvas.parent('radar-container'); // pour l’intégrer dans le div
  angleMode(DEGREES);
}

function draw() {
  background(0, 40);

  translate(width/2, height - height*0.074);

  // ----- SIMULATION -----
  iAngle += direction;
  if (iAngle >= 180 || iAngle <= 0) {
    direction *= -1;
  }

  // objet seulement entre 0° et 60°
  if (iAngle > 0 && iAngle < 60) {
    iDistance = 20;
  } else {
    iDistance = 100; // hors portée
  }
  // ----------------------

  drawRadar();
  drawLine();
  drawObject();
}

function drawRadar() {
  stroke(98,245,31);
  strokeWeight(2);
  noFill();

  arc(0,0,width*0.9,width*0.9,180,360);
  arc(0,0,width*0.7,width*0.7,180,360);
  arc(0,0,width*0.5,width*0.5,180,360);
  arc(0,0,width*0.3,width*0.3,180,360);

  line(-width/2,0,width/2,0);
}

function drawLine() {
  stroke(30,250,60);
  strokeWeight(4);
  line(0,0,(height*0.6)*cos(iAngle),-(height*0.6)*sin(iAngle));
}

function drawObject() {
  if (iDistance < 40) {
    stroke(255,10,10);
    strokeWeight(8);
    let pixsDistance = iDistance * 5;
    line(
      pixsDistance*cos(iAngle),
      -pixsDistance*sin(iAngle),
      (width*0.45)*cos(iAngle),
      -(width*0.45)*sin(iAngle)
    );
  }
}
