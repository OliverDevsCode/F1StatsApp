let driverA_list = [];
let driverB_list = [];
let driverA_text;
let driverB_text;
let driverA_dropdown;
let driverB_dropdown;

let constructorA_list = [];
let constructorB_list = [];
let constructorA_text;
let constructorB_text;
let constructorA_dropdown;
let constructorB_dropdown;

let compareButton;

function draw_Compare_Screen(){
  backButton.show()
  createCompareUI()
  displayDriverAInDropDown()
  displayDriverBInDropDown()
  driverA_text.input(displayDriverAInDropDown)
  driverB_text.input(displayDriverBInDropDown)
  compareButton.mousePressed(draw_Comparison_data)
}


function draw_Comparison_data(){
  clear()
  let compareA;
  let compareA_races;
  let compareB_races;
  let compareB;
  let leftside;
  let rightside;
  if((driverA_list.length>=1 || constructorA_list.length >=1) && (driverB_list.length>=1 || constructorB_list.length >=1)){
    let compareA_Id = getDropdownId(driverA_dropdown.value(),driverA_list,constructorA_list)
    let compareB_Id = getDropdownId(driverB_dropdown.value(),driverB_list,constructorB_list)

    if(compareA_Id[1]=="D"){
      compareA_Id = driversDB.driverId(compareA_Id[0]-1)
      compareA = new Driver(compareA_Id)
      compareA.createProfileStats(driversDB,resultsDB,sprintResultsDB)
      leftside = "driver"
      compareA_races = compareA.num_of_races
    }
    if(compareB_Id[1]=="D"){
      compareB_Id = driversDB.driverId(compareB_Id[0]-1)
      compareB = new Driver(compareB_Id)
      compareB.createProfileStats(driversDB,resultsDB,sprintResultsDB)
      rightside = "driver"
      compareB_races = compareB.num_of_races

    }
    if(compareA_Id[1]=="C"){
      compareA_Id = constructorsDB.constructorId(compareA_Id[0]-1)
      compareA = new Constructor(compareA_Id)
      compareA.createProfileStats(constructorsDB,resultsDB,sprintResultsDB)
      leftside = "constructor"
      compareA_races = compareA.car_entries
    }
    if(compareB_Id[1]=="C"){
      compareB_Id = constructorsDB.constructorId(compareB_Id[0]-1)
      compareB = new Constructor(compareB_Id)
      compareB.createProfileStats(constructorsDB,resultsDB,sprintResultsDB)
      rightside = "constructor"
      compareB_races = compareB.car_entries
    }
    resizeCanvas(windowWidth,(windowHeight*1.05))
    drawCompareStats(compareA,compareB,leftside,rightside,width/2.07-cnvOffset.x,height/7,width/2,height/2,compareA_races,compareB_races)
    createCompareFinishGraph(compareA.list_of_finishes,compareB.list_of_finishes,width/2.07-cnvOffset.x,windowHeight*0.5,windowWidth/2.5,windowHeight/2)
    }

}


function createCompareUI(){

  compareButton = createNewButton('Compare',windowWidth/2-cnvOffset.x-((windowWidth)*0.065)+20,cnvOffset.y+20)
  

  driverA_text = createInputBox('type name',windowWidth*0.005+cnvOffset.x,cnvOffset.y+10,windowWidth*0.2,windowHeight*0.05)
  p5_elements.push(driverA_text)

  driverA_dropdown = createDropDown(driverA_list,windowWidth*0.005+cnvOffset.x+windowWidth*0.2+20,cnvOffset.y+10,windowWidth*0.2,windowHeight*0.060)
  p5_elements.push(driverA_dropdown)

  driverB_text = createInputBox('type name',windowWidth*0.52+cnvOffset.x,cnvOffset.y+10,windowWidth*0.2,windowHeight*0.05)
  p5_elements.push(driverB_text)

  driverB_dropdown = createDropDown(driverB_list,windowWidth*0.52+cnvOffset.x+windowWidth*0.2+20,cnvOffset.y+10,windowWidth*0.2,windowHeight*0.060)
  p5_elements.push(driverB_dropdown)

}

function displayDriverAInDropDown(){  
    //check driver A box
    constructorA_list = []
    driverA_list = []
    findResults(constructorA_list,driverA_list,driverA_text.value())
    driverA_list = addNames(driverA_list,constructorA_list);
    driverA_dropdown = createDropDown(driverA_list,windowWidth*0.005+cnvOffset.x+windowWidth*0.2+20,cnvOffset.y+10,windowWidth*0.2,windowHeight*0.060)
    p5_elements.push(driverA_dropdown)

}


function displayDriverBInDropDown(){
    //check driver B box
    constructorB_list = []
    driverB_list = []
    findResults(constructorB_list,driverB_list,driverB_text.value())
    driverB_list = addNames(driverB_list,constructorB_list);
    driverB_dropdown = createDropDown(driverB_list,windowWidth*0.52+cnvOffset.x+windowWidth*0.2+20,cnvOffset.y+10,windowWidth*0.2,windowHeight*0.060)
    p5_elements.push(driverB_dropdown)

}

/**
   * get driverId from the drop-down menu value.
   * @function
   * @param {array} menu_name the value in the dropdown
   * @param {array} driver_list actually needs the driver_list
   * @returns driverId.
   */
function getDropdownId(menu_name,results_list,constructor_list){
  let position = -1;
  let isDriver = false
  for(let p=0; p<menu_name.length;p++){
    if(menu_name.at(-2)=="D"){
      isDriver = true
      if(Number.isInteger(parseInt(menu_name[p])) == true){
        position += parseInt(menu_name[p])
      }
    }
    if(menu_name.at(-2)=="C"){
      if(Number.isInteger(parseInt(menu_name[p])) == true){
        position += parseInt(menu_name[p])

      }
    }
}
return [results_list[position][1],menu_name.at(-2)]
}

/**
   * Add names to driver_list array from index positions
   * @function
   * @param {array} driver_list 
   * @returns formatted driver_list including names
   */

function addNames(driver_list,constructor_list){
  let formatted_list = [];
  for(let index = 0; index< driver_list.length;index++){
    formatted_list.push([driversDB.forename(driver_list[index]) + " "+ driversDB.surname(driver_list[index]) +"(D)",(driver_list[index]+1)])
  }
  for(let index = 0; index< constructor_list.length;index++){
    formatted_list.push([constructorsDB.name(constructor_list[index]) +"(C)",(constructor_list[index]+1)])
  }
  return formatted_list
}

function compareNames(a,b){
  if(a[0]>b[0]){
    return 1;
    
  }
  if(a[0]<b[0]){
    return -1;
    
  }
  
}