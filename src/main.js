function preload(){
  loadDatabase()
}

function setup() {
  createCanvas(400, 400);
  createDatabaseClasses()
  console.log(driversDB.forename(842)+ " "+ driversDB.surname(842))
}

function draw() {
  background(220);
}