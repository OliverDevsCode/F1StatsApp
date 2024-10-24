let circuitsDB,constructorsDB,driversDB,driverStandingsDB,racesDB;

function loadDatabase(){
    circuitsData = loadTable('DATABASE/circuits.csv','csv','header')
    constructorsData = loadTable('DATABASE/constructors.csv','csv','header')
    driversData = loadTable('DATABASE/drivers.csv','csv','header')
    driverStandingsData = loadTable('DATABASE/driver_standings.csv','csv','header')
    racesData = loadTable('DATABASE/races.csv','csv','header')
    resultsData = loadTable('DATABASE/results.csv','csv','header')
}

//function that creates the class of the database that need to be accessed by other classes
//this is called in setup after the tables have been loaded in preLoad
function createDatabaseClasses(){
  circuitsDB = new Circuits(circuitsData);
  constructorsDB = new Constructors(constructorsData);
  driversDB = new Drivers(driversData)
  driverStandingsDB = new DriverStandings(driverStandingsData)
  racesDB = new Races(racesData)
  resultsData = new Results(resultsData)
}