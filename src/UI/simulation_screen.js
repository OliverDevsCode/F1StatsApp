let prob_slider;
let prob_slider_label;
let table_label;
let simulation_data;
function draw_Simulation_Screen(driverA,driverB,sample_size){

  const start = Date.now()//simulation timer

  displaymode = 7
  simulation_data = new Simultation(driverA,driverB,sample_size)
  prob_slider = createSlider(0,simulation_data.length,simulation_data.length/2,10)
  prob_slider.position((windowWidth*0.1)+20,cnvOffset.y)
  p5_elements.push(prob_slider)
  prob_slider.input(adjustGraph)
  adjustGraph()

  const millis = Date.now() - start;//simulation timer
  console.log(`Simulation took ${millis}ms`)//simulation timer
}

function adjustGraph(){
  simulation_data.getScenario(prob_slider.value())
  
}
