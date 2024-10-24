function preload(){
  loadDatabase()
}

function setup() {
  createCanvas(400, 400);
  createDatabaseClasses()
  console.log(circuitsDB.countryCode(1));
}

function draw() {
  background(220);
}
