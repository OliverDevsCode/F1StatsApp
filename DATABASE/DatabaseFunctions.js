function loadDatabase(){
    circuitsData = loadTable('DATABASE/circuits.csv','csv','header')
    constructorsData = loadTable('DATABASE/constructors.csv','csv','header')
}

//function that creates the class of the database that need to be accessed by other class
//this is called in setup after the tables have been loaded in preLoad
function createDatabaseClasses(){
    
}