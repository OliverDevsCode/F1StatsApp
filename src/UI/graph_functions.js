/**
   * Draws Pie Chart.
   * @function
   * @param {string} label 
   * @param {integer} x 
   * @param {integer} y 
   * @param {integer} w 
   * @param {integer} h
   * @param {integer} dataX 
   * @param {integer} dataY
   * 
   * @returns pie chart.
   */

function drawPie(label,x,y,w,h,dataX,dataY){
  push()
  fill(0,255,0)
  arc(x,y,w,h,0,(dataX/dataY)*(2*PI))
  pop()
  push()
  fill(255,0,0)
  arc(x,y,w,h,(dataX/dataY)*(2*PI),2*PI)
  pop()
  push()
  textAlign(CENTER)
  textSize(w/8)
  textFont('Consolas')
  text(label,x,y+(0.5*h)+w/6)
  pop()
  
}

/**
   * Draws finish position distribution graph.
   * @function
   * @param {Array} finish postions array 
   * @param {integer} x 
   * @param {integer} y 
   * @param {integer} w 
   * @param {integer} h 
   * @returns Draws finish position distribution graph.
   */

function drawFinishGraph(finishes,x,y,w,h){
  let pos_freq = getFrequencyArray(finishes)
  let best = pos_freq[0][0]
  let worst = pos_freq.at(-1)[0]
  
  //get number of position
  let num_of_pos = pos_freq.length
  
  let bar_height = h/(1.05*(num_of_pos))
  bar_height = Math.floor(bar_height*0.6)
  
  
  //create the positions
  for(let pos =1;pos<=worst;pos++){
    push()
    textAlign(RIGHT)
    textSize(bar_height*1.5)
    textFont('Consolas')
    let gap = bar_height*1.55
    fill(0)
    text(pos,x-(1.4*windowWidth/50)-bar_height,y+(0.95*gap)*(1.2*pos))
    pop()
}
  
  
  //get max frequency of any positon
  let max_freq = 0
  for(let i=0 ; i<pos_freq.length;i++){
    if(pos_freq[i][1]>max_freq){
      max_freq = pos_freq[i][1]
    }
}
  
  //create position bars and text
  for(let pos =0; pos<worst;pos++){
    push()
    fill('#00A498')
    textFont('Consolas')
    textSize(bar_height)
    textAlign(RIGHT)
    let bar_length = ((w-5)/max_freq)*(0.9*(pos_freq[pos][1])) //-5 so that it looks nicer(not flush with border)
    rect(windowWidth,y+10+(1.45*bar_height)*(1.2*pos),-(bar_length),bar_height,0,8,8,0)
    fill(0)
    text(pos_freq[pos][1],(windowWidth-(bar_length)-5),y+5+bar_height+(1.48*bar_height)*(1.2*pos))
    pop()
  }
  
//create axis bars
  push()
  fill(0)
  textAlign(CENTER)
  rect(x-(1.4*windowWidth/50),y,5,h,2,2,2,2)
  rect(x-(1.4*windowWidth/50),y+h,x,5,2,2,2,2)
  textSize(bar_height*1.7)
  textStyle(BOLD)
  push()
  translate(x-(1.4*windowWidth/50)-(3.5*bar_height),y+(h/2))
  rotate(-PI/2);
  text("Position",0,0)
  pop()
  text(max_freq,x-(1.4*bar_height),y+h+bar_height*2)
  text("Frequency",x-(1.4*bar_height)+w/2,y+h+bar_height*2)
  pop()
  
  
}

function getFrequencyArray(list_of_finishes){

  let extend_by = 20-list_of_finishes.length
  list_of_finishes.sort(function(a, b){return a - b});
  let max_finish = list_of_finishes.at(-1)

  let len_finishes = list_of_finishes.length
  let extended = false
  if(list_of_finishes.length <20){
    len_finishes = 19
    for(let p = 0; p<extend_by;p++){
      list_of_finishes.push(100)
    }
    extended = true
  }

  
  list_of_finishes.sort(function(a, b){return a - b});
  
  let place_freq = []
  let place = 1
  for(let i = 0; i <= len_finishes;){
    let instance = [] //current place and positon
    instance.push(place) //push current place 
    let count = 0
    while(list_of_finishes[i] == place){
      count ++ // frequency finished incrementer
      i++
    }
    instance.push(count)//push frequency
    place_freq.push(instance)
    place ++
    if(place>max_finish && extended == false){
      i = len_finishes + 1
    }
    
}  

  if(extended == true){
    for(let i=0;i<(100-max_finish);i++){
      place_freq.pop()
    }
  }
  
  return place_freq
  
}