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