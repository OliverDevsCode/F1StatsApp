function preload(){
  loadDatabase()
}

function setup() {
  createCanvas(400, 400);
  createDatabaseClasses()
  console.log(driversDB.forename(842)+ " "+ driversDB.surname(842))
  driverA = new DriverStatistics(1,resultsDB,sprintResultsDB,driversDB) //testing class ( target hamilton )
  console.log(driverA.dob)
}

function draw() {
  background(220);
}