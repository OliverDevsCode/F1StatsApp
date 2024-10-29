let p5_elements = []

/**
   * Clear all p5 elements from the canvas.
   * @function
   * @returns cleared canvas.
   */
function clearP5Elements(){
    for(let p=0;p<p5_elements.length;p++){
        (p5_elements[p]).hide()
    }
}

let backButton;

function createBackButton(){
//back button
backButton = createButton("Back")
backButton.position(cnvOffset.x,cnvOffset.y-8)
backButton.style('font-style', 'italic');
backButton.style('font-family','Consolas')
backButton.style('text-align','center')
backButton.style('border-radius', '10px');
backButton.hide()
p5_elements.push(backButton)
}

function go_back(){
    displaymode = screen_history.at(-2)
    screen_history.pop()
}

/**
   * Create populated drop down menu
   * @function
   * @param {array} driver_list 
   * @param {*} x 
   * @param {*} y
   * @param {*} w 
   * @param {*} h  
   * @returns cleared canvas.
   */

function createDropDown(driver_list,x,y,w,h){
    let name = createSelect();
    name.position(x, y);
    name.size(w,h)
    name.style('border-radius', '10px')
    name.style('font-family', 'Consolas');
    name.style('font-size', '18px');
    name.style('border', '3px solid black')
    
    for(let p=0;p < driver_list.length;p++){
    let element = (p+1)+" "+driver_list[p][0]
    name.option(element);

    }
    
    return name
  }

//populate dropdown
function populateDropdown(driver_list,drop_down){
    for(let p=driver_list.length;p>=0;p--){
        drop_down.remove(p)
        }
    
    for(let p=0;p < driver_list.length;p++){
    let element = (p+1)+" "+driver_list[p][0]
    drop_down.option(element);
    }
  }

function createInputBox(attribute,x,y,w,h){
    let inputBox = createInput()
    inputBox.attribute('placeholder',attribute)
    inputBox.style('font-size', (windowWidth)*0.065);
    inputBox.style('font-style', 'italic');
    inputBox.style('font-family','Consolas')
    inputBox.style('border-radius', '18px');
    inputBox.style('border', '3px solid black');
    inputBox.position(x,y)
    inputBox.size(w,h)

    return inputBox
}

function createNewButton(name,x,y){
    button = createButton(name)
    button.position(x,y)
    button.style('font-style', 'italic');
    button.style('font-size', (windowWidth)*0.015 +"px");
    button.style('font-family','Consolas')
    button.style('text-align','center')
    button.style('border-radius', '10px');
    p5_elements.push(button)

    return button
}