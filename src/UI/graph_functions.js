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
  textSize(bar_height*4)
  textFont('Consolas')
  textStyle(BOLD)
  text("Race Results",x-(1.4*bar_height)+w/2,y-bar_height*0.8)
  pop()
  push()
  translate(x-(1.4*windowWidth/50)-(3.5*bar_height),y+(h/2))
  rotate(-PI/2);
  text("Position",0,0)
  pop()
  bar_length = ((w-5)/max_freq)*(0.9*(max_freq))
  text(max_freq,(windowWidth-(bar_length)-5),y+h+bar_height*2)
  text("Frequency",x-(1.4*bar_height)+w/2,y+h+bar_height*2)
  pop()
  
  
}

function getFrequencyArray(list_of_finishes){

  list_of_finishes.sort(function(a, b){return a - b});
  let max_finish = list_of_finishes.at(-1)
  let extend_by = 20-max_finish

  let len_finishes = list_of_finishes.length
  let extended = false
  if(max_finish <20){
    len_finishes += extend_by
    for(let p = 0; p<extend_by;p++){
      list_of_finishes.push(100)
    }
    extended = true
  }

  
  list_of_finishes.sort(function(a, b){return a - b});
  
  let place_freq = []
  let place = 1
  for(let i = 0; i < len_finishes;){
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
      for(let i=0;i<80;i++){
        place_freq.pop()
      }
    
  }
  return place_freq
  
}

/**
   * Draws compareStats.
   * @function
   * @param {object} compareA Driver A or Constructor A
   * @param {object} finish Driver B or Constructor B
   * @param {String} leftside type of object to display left
   * @param {String} rightside type of object to display right
   * @param {integer} x 
   * @param {integer} y 
   * @param {integer} w 
   * @param {integer} h 
   * @param {integer} compareA_races the number of races A has participated in
   * @param {integer} compareB_races the number of races B has participated in
   * 
   * @returns Draws finish position distribution graph.
   */
function drawCompareStats(compareA,compareB,leftside,rightside,x,y,w,h,compareA_races,compareB_races){
  clear()
  gap = h *0.1
  y_adjust = 1.1;
  // rect(x-w/2,y-gap,w,h) for testing
  push()
  textSize(h *0.06)
  textAlign(CENTER)
  textFont('Consolas')
  textStyle(BOLD)
  text("Wins",x,y_adjust*y)
  text("Poles",x,y_adjust*y+gap)
  text("Podiums",x,y_adjust*y+2*gap)
  text("Races",x,y_adjust*y+3*gap)
  text("Points",x,y_adjust*y+4*gap)
  pop()
  
  let max_races;
  if(compareA_races > compareB_races){
    max_races = compareA_races
  }else{
    max_races = compareB_races
  }
  if(leftside=='driver'){
      push()
      fill('#00A498')
      textSize(h *0.06)
      textAlign(CENTER)
      textFont('Consolas')
      textStyle(BOLD)
      text(compareA.forename+" "+compareA.surname,x-5*gap,y-0.6*gap);
      pop()

      DriverLogic(compareA,'left')
    
  
  }
  if(leftside == 'constructor'){
    push()
    fill('#00A498')
    textSize(h *0.06)
    textAlign(CENTER)
    textFont('Consolas')
    textStyle(BOLD)
    text(compareA.name,x-5*gap,y-0.6*gap);
    pop()

    ConstructorLogic(compareA,'left')

  }
   if(rightside=='driver'){
    push()
    fill('#DC0022')
    textSize(h *0.06)
    textAlign(CENTER)
    textFont('Consolas')
    textStyle(BOLD)
    text(compareB.forename+" "+compareB.surname,x+5*gap,y-0.6*gap);
    pop()

    DriverLogic(compareB,'right')
  }
  if(rightside=='constructor'){
    push()
    fill('#DC0022')
    textSize(h *0.06)
    textAlign(CENTER)
    textFont('Consolas')
    textStyle(BOLD)
    text(compareB.name,x+5*gap,y-0.6*gap);
    pop()

    ConstructorLogic(compareB,'right')
  }
  
  function DriverLogic(driver,mode){
    push()
    fill('#00A498')
     //mode = left side or right side
     if(mode=="left"){
      push()
      textSize(h *0.06)
      textAlign(CENTER)
      textFont('Consolas')
      textStyle(BOLD)
      drawDriverBars(-1)
      pop()
      
     }
    pop()
    push()
    fill('#DC0022')
     if(mode=="right"){
      push()
      textSize(h *0.06)
      textAlign(CENTER)
      textFont('Consolas')
      textStyle(BOLD)
      drawDriverBars(1)
      pop()
     } 
    pop()

    /**
   * Draws stats bars.
   * @function
   * @param {integer} invert (-1 or 1) depending on what side you want it displaying
   * @returns Draws stats bars.
   */
    function drawDriverBars(invert){
       rect(x+invert*(1.2*gap),y_adjust*y-0.5*gap,invert*(barLength(driver.wins)),gap*0.7,0,10,10,0);text(driver.wins,(x+invert*2*gap)+invert*(barLength(driver.wins)),y+(0.3*gap));
       rect(x+invert*1.2*gap,y_adjust*y+0.45*gap,invert*(barLength(driver.poles)),gap*0.7,0,10,10,0);text(driver.poles,(x+invert*2*gap)+invert*(barLength(driver.poles)),y+(1.25*gap));
       rect(x+invert*1.2*gap,y_adjust*y+1.45*gap,invert*(barLength(driver.podiums)),gap*0.7,0,10,10,0);text(driver.podiums,(x+invert*2*gap)+invert*(barLength(driver.podiums)),y+(2.25*gap));
       rect(x+invert*1.2*gap,y_adjust*y+2.5*gap,invert*(barLength(driver.num_of_races)),gap*0.7,0,10,10,0);text(driver.num_of_races,(x+invert*2*gap)+invert*(barLength(driver.num_of_races)),y+(3.25*gap));
       text(driver.career_points,x+invert*2*gap,y_adjust*y+4*gap);
    }

  }
  
  function ConstructorLogic(constructor,mode){
    push()
    fill('#00A498')
     //mode = left side or right side
     if(mode=="left"){
      drawConstructorsBars(-1)
     }
    pop()
    push()
    fill('#DC0022')
     if(mode=="right"){
      drawConstructorsBars(1)
     }
    pop()

     /**
     * Draws stats bars.
     * @function
     * @param {integer} invert (-1 or 1) depending on what side you want it displaying
     * @returns Draws stats bars.
     */

    function drawConstructorsBars(invert){
       rect(x+invert*(1.2*gap),y_adjust*y-0.5*gap,invert*(barLength(constructor.wins)),gap*0.7,0,10,10,0);text(constructor.wins,(x+invert*2*gap)+invert*(barLength(constructor.wins)),y+(0.3*gap));
       rect(x+invert*1.2*gap,y_adjust*y+0.45*gap,invert*(barLength(constructor.poles)),gap*0.7,0,10,10,0);text(constructor.poles,(x+invert*2*gap)+invert*(barLength(constructor.poles)),y+(1.25*gap));
       rect(x+invert*1.2*gap,y_adjust*y+1.45*gap,invert*(barLength(constructor.podiums)),gap*0.7,0,10,10,0);text(constructor.podiums,(x+invert*2*gap)+invert*(barLength(constructor.podiums)),y+(2.25*gap));
       rect(x+invert*1.2*gap,y_adjust*y+2.5*gap,invert*(barLength(constructor.car_entries)),gap*0.7,0,10,10,0);text(constructor.car_entries,(x+invert*2*gap)+invert*(barLength(constructor.car_entries)),y+(3.25*gap));
       text(constructor.career_points,x+invert*2*gap,y_adjust*y+4*gap);
    }

   
  }
  /**
   * Get scaled length of a bar.
   * @function
   * @param {integer} value value of stats you are making a bar for
   * @returns length of the scaled bar.
   */
  function barLength(value){
    value = (value/max_races)*(w*0.7)
    return value
  }
  
}

function createCompareFinishGraph(finishesA,finishesB,x,y,w,h){
  //data point A
  let pos_freqA = getFrequencyArray(finishesA)
  let worstA = pos_freqA.at(-1)[0]

  //data point B
  let pos_freqB = getFrequencyArray(finishesB)
  let worstB = pos_freqB.at(-1)[0]
  
  //get number of position
  let num_of_posA = pos_freqA.length
  let num_of_posB = pos_freqB.length
  let bar_height
  if(num_of_posA > num_of_posB){
    bar_height = h/(1.05*(num_of_posA))
    bar_height = Math.floor(bar_height*0.6)
  }else{
    bar_height = h/(1.05*(num_of_posB))
    bar_height = Math.floor(bar_height*0.6)
  }

  
  //create the positions
  if(worstA>worstB){
    for(let pos =1;pos<=worstA;pos++){
      push()
      textAlign(CENTER)
      textSize(bar_height*1.5)
      textFont('Consolas')
      let gap = bar_height*1.55
      fill(0)
      text(pos,x,y+(0.95*gap)*(1.2*pos))
      pop()
  }
  }else{
    for(let pos =1;pos<=worstB;pos++){
      push()
      textAlign(CENTER)
      textSize(bar_height*1.5)
      textFont('Consolas')
      let gap = bar_height*1.55
      fill(0)
      text(pos,x,y+(0.95*gap)*(1.2*pos))
      pop()
  }
  }
  
  
  //get max frequency of any positon
  let max_freq = 0
  let max_freqA = 0
  let max_freqB = 0
  for(let i=0 ; i<pos_freqA.length;i++){
    if(pos_freqA[i][1]>max_freqA){
      max_freqA = pos_freqA[i][1]
    }
  }
  for(let i=0 ; i<pos_freqB.length;i++){
    if(pos_freqB[i][1]>max_freqB){
      max_freqB = pos_freqB[i][1]
    }
  }

  if(max_freqA>max_freqB){
    max_freq = max_freqA
  }else{
    max_freq = max_freqB
  }
  
  //create position bars and text
  for(let pos =0; pos<worstA;pos++){
    push()
    fill('#00A498')
    textFont('Consolas')
    textSize(bar_height)
    textAlign(RIGHT)
    let bar_length = ((w-5)/max_freq)*(0.9*(pos_freqA[pos][1])) //-5 so that it looks nicer(not flush with border)
    rect(x-2*bar_height,y+10+(1.45*bar_height)*(1.2*pos),-(bar_length),bar_height,0,8,8,0)
    fill(0)
    text(pos_freqA[pos][1],(x-(bar_length)-5)-2*bar_height,y+5+bar_height+(1.48*bar_height)*(1.2*pos))
    pop()
  }

  for(let pos =0; pos<worstB;pos++){
    push()
    fill('#DC0022')
    textFont('Consolas')
    textSize(bar_height)
    textAlign(RIGHT)
    let bar_length = ((w-5)/max_freq)*(0.9*(pos_freqB[pos][1])) //-5 so that it looks nicer(not flush with border)
    rect(x+2*bar_height,y+10+(1.45*bar_height)*(1.2*pos),(bar_length),bar_height,0,8,8,0)
    fill(0)
    text(pos_freqB[pos][1],(x+(bar_length)+1.75*bar_height)+2*bar_height,y+5+bar_height+(1.48*bar_height)*(1.2*pos))
    pop()
  }

  //create axis bars
  push()
  let axis_scale = ((w-5)/max_freq)*(0.9*(max_freq))
  fill(0)
  textAlign(CENTER)
  rect(x-(axis_scale+2*bar_height),y+h,2*(axis_scale+2*bar_height),5,2,2,2,2)
  rect(x-(axis_scale+2*bar_height),y+h,0.01*w,-0.025*w,0,0,2,2)
  rect(x+(axis_scale+2*bar_height),y+h,-0.01*w,-0.025*w,0,0,2,2)
  textSize(bar_height*1.7)
  textStyle(BOLD)
  push()
  textSize(bar_height*2.5)
  textFont('Consolas')
  textStyle(BOLD)
  text("Race Results Comparison",x,y-bar_height*3)
  pop()
  text("Position",x,y)
  textSize(bar_height*3)
  textAlign(CENTER)
  text(max_freq,x+w,y+h+bar_height*3)
  text(max_freq,x-w,y+h+bar_height*3)
  text("Frequency",x,y+h+bar_height*3.2)
  pop()

}