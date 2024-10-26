let displaymode;
let cnv;
let cnvOffset
function preload(){
  loadDatabase()
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight*0.9);
  cnvOffset = cnv.elt.getBoundingClientRect()
  background('#E1E0D7');
  createDatabaseClasses()
  displaymode = 1;


  //testing classes start
  // driverA = new DriverStatistics(844,resultsDB,sprintResultsDB,driversDB) //testing class ( target Charles Leclerc )
  // console.log(driverA.forename+ " "+ driverA.surname)
  // console.log(driverA.dob)

  // driverB = new DriverStatistics(1,resultsDB,sprintResultsDB,driversDB) //testing class ( target ;ewis mclaren )
  // console.log(driverB.forename+ " "+ driverB.surname)
  // console.log(driverB.dob)


  // hamilton = new Driver(1)
  // hamilton.createProfileStats(driversDB,resultsDB,sprintResultsDB)
  // console.log(hamilton.forename +" "+hamilton.surname + " "+hamilton.dob +" "+hamilton.nationality)

  // mclaren = new Constructor(1)
  // mclaren.createProfileStats(constructorsDB,resultsDB,sprintResultsDB)
  // console.log(mclaren.name +" "+mclaren.nationality)
  //testing classes end


}



//Once drawn set display to mode 0 so it isn't called every second.
function draw() {

  //home screen
  if(displaymode==1){
    clearP5Elements()
    clear()
    background('#E1E0D7');//here instead of loop so data isn't overidden
    draw_Home_Screen()
    console.log("Home Screen Drawn")
    displaymode = -1 //maybe -1 then menu 2 = -2, so that key Pressed function still knows what page is displayed
  }


  //search screen
  if(displaymode==4){
    //prep canvas
    clearP5Elements()
    clear()
    background('#E1E0D7');

    //get data and draw
    console.log("Search Screen Drawn")
    draw_Search_Screen(searchBar.value())
    displaymode = -4
    
    //draw driver profile
    driverSelect.mousePressed(change_mode_to_driver_profile)//create drawProfil.js file

  }

  if(displaymode == 5){
    //prep canvas
    clearP5Elements()
    clear()
    background('#E1E0D7')
    draw_Driver_Profile()

    console.log("Driver Profile Drawn")
    displaymode = -5
  }

}  

function keyPressed(){
  if(keyCode == ENTER){
    if(displaymode == -1 || displaymode == -4){
    displaymode = 4
    }
  }
}