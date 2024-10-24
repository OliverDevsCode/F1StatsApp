let circuits_Data,circuitDB,constructorsData,constructorsDB;
function preload(){
  loadDatabase()
}

function setup() {
  createCanvas(400, 400);
  circuitDB = new Circuits(circuitsData);
  constructorsDB = new Constructors(constructorsData);
  console.log(circuitDB.length)
}

function draw() {
  background(220);
}
