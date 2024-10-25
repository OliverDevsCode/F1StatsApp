let displaymode;
function preload(){
  loadDatabase()
}

function setup() {
  createCanvas(windowWidth, windowHeight*0.9);
  background('#E1E0D7');
  createDatabaseClasses()
  displaymode = 1;


  //testing classes start
  driverA = new DriverStatistics(843,resultsDB,sprintResultsDB,driversDB) //testing class ( target Charles Leclerc )
  console.log(driverA.forename+ " "+ driverA.surname)
  console.log(driverA.dob)

  driverB = new DriverStatistics(1,resultsDB,sprintResultsDB,driversDB) //testing class ( target ;ewis mclaren )
  console.log(driverB.forename+ " "+ driverB.surname)
  console.log(driverB.dob)


  hamilton = new Driver(1)
  hamilton.createProfileStats(driversDB,resultsDB,sprintResultsDB)
  console.log(hamilton.forename +" "+hamilton.surname + " "+hamilton.dob +" "+hamilton.nationality)

  mclaren = new Constructor(1)
  mclaren.createProfileStats(constructorsDB,resultsDB,sprintResultsDB)
  console.log(mclaren.name +" "+mclaren.nationality)
  //testing classes end


}

//Once drawn set display to mode 0 so it isn't called every second.
function draw() {
  if(displaymode==1){
    clear()
    background('#E1E0D7');//here instead of loop so data isn't overidden
    draw_Home_Screen()
    console.log("Home Screen Drawn")
    displaymode = -1 //maybe -1 then menu 2 = -2, so that key Pressed function still knows what page is displayed
  }
}  

function keyPressed(){
  if(keyCode == ENTER){
    if(displaymode == -1){
    //code to start search
    //call search function + display results page
    console.log(searchBar.value())//value in search bars - testing
    }
  }
}