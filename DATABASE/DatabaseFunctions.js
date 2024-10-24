function loadDatabase(){
    circuitsData = loadTable('DATABASE/circuits.csv','csv','header')
    constructorsData = loadTable('DATABASE/constructors.csv','csv','header')
    driversData = loadTable('DATABASE/drivers.csv','csv','header')
}

//function that creates the class of the database that need to be accessed by other classes
//this is called in setup after the tables have been loaded in preLoad
function createDatabaseClasses(){
  circuitsDB = new Circuits(circuitsData);
  constructorsDB = new Constructors(constructorsData);
  driversDB = new Drivers(driversData)
}