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