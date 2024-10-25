function preload(){
  loadDatabase()
}

function setup() {
  createCanvas(400, 400);
  createDatabaseClasses()
  driverA = new DriverStatistics(843,resultsDB,sprintResultsDB,driversDB) //testing class ( target Charles Leclerc )
  console.log(driverA.forename+ " "+ driverA.surname)
  console.log(driverA.dob)

  driverB = new DriverStatistics(1,resultsDB,sprintResultsDB,driversDB) //testing class ( target ;ewis Hamilton )
  console.log(driverB.forename+ " "+ driverB.surname)
  console.log(driverB.dob)


  hamilton = new Driver(1)
  hamilton.createProfileStats(driversDB,resultsDB,sprintResultsDB)
  console.log(hamilton.forename)


}

function draw() {
  background(220);
}