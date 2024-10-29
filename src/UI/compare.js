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


function draw_Compare_Screen(){
  let compare_button;
  createCompareUI()
  displayDriverAInDropDown()
  displayDriverBInDropDown()


}


function createCompareUI(){

  compare_button = createNewButton('Compare',windowWidth/2-cnvOffset.x-((windowWidth)*0.065)+20,cnvOffset.y+20)
  

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
    driverA_list = addNames(driverA_list);
    driverA_dropdown = createDropDown(driverA_list,windowWidth*0.005+cnvOffset.x+windowWidth*0.2+20,cnvOffset.y+10,windowWidth*0.2,windowHeight*0.060)
    p5_elements.push(driverA_dropdown)

}


function displayDriverBInDropDown(){
    //check driver B box
    constructorB_list = []
    driverB_list = []
    findResults(constructorB_list,driverB_list,driverB_text.value())
    driverB_list = addNames(driverB_list);
    driverB_dropdown = createDropDown(driverB_list,windowWidth*0.52+cnvOffset.x+windowWidth*0.2+20,cnvOffset.y+10,windowWidth*0.2,windowHeight*0.060)
    // populateDropdown(driverA_list,driverB_dropdown)
    p5_elements.push(driverB_dropdown)
}

/**
   * get driverId from the drop-down menu value.
   * @function
   * @param {array} menu_name 
   * @param {array} driver_list 
   * @returns driverId.
   */
function getOriginalDetails(menu_name,driver_list){
  let position = -1;
  for(let p=0; p<menu_name.length;p++){
    if(Number.isInteger(parseInt(menu_name[p])) == true){
      position += parseInt(menu_name[p])
    }
}
  return driver_list[position][1]
  
}

/**
   * Add names to driver_list array from index positions
   * @function
   * @param {array} driver_list 
   * @returns formatted driver_list including names
   */

function addNames(driver_list){
  let formatted_list = [];
  for(let index = 0; index< driver_list.length;index++){
    formatted_list.push([driversDB.forename(driver_list[index]) + " "+ driversDB.surname(driver_list[index]),(driver_list[index]+1)])
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