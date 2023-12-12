let id = Math.floor(Math.random() * 1000000);

function setup() {
  createCanvas(350, 700);


  strokeWeight(0.1);
  noFill(0);
  
   
  
}

  
function draw() {


for (let i = 0; i < height; i += 1) {// manipulate topography

beginShape();

for (let j = 0; j < width; j += 1.8) {// manipulate topography
let noiseVal = noise(j/200, i/40); // 100, 100 > for smoothness 

vertex(j, i - noiseVal * 200); // 200 < for smoothness

}
    endShape();
  }


}
