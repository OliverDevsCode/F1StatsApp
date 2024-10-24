let circuitsDB,constructorsDB,driversDB,driverStandingsDB,racesDB,resultsDB,sprintResultsDB;

/**
   * Load the CSV into variables.
   * @function
   * @returns {string} All the CSV tables in the database as variables.
   */
function loadDatabase(){
    circuitsData = loadTable('DATABASE/circuits.csv','csv','header')
    constructorsData = loadTable('DATABASE/constructors.csv','csv','header')
    driversData = loadTable('DATABASE/drivers.csv','csv','header')
    driverStandingsData = loadTable('DATABASE/driver_standings.csv','csv','header')
    racesData = loadTable('DATABASE/races.csv','csv','header')
    resultsData = loadTable('DATABASE/results.csv','csv','header')
    sprintResultsData = loadTable('DATABASE/sprint_results.csv','csv','header')
}



/**
   * Creates instances of all the database classes for future access.
   * @function
   * @returns {string} instances of all the database classes.
   */
function createDatabaseClasses(){
  circuitsDB = new Circuits(circuitsData);
  constructorsDB = new Constructors(constructorsData);
  driversDB = new Drivers(driversData)
  driverStandingsDB = new DriverStandings(driverStandingsData)
  racesDB = new Races(racesData)
  resultsDB = new Results(resultsData)
  sprintResultsDB =  new SprintResults(sprintResultsData)
}