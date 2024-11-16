class Simultation{
    #driverA_ID;
    #driverB_ID;
    #sample_size;
    #existing_results = []
    #existing_finishes = [];
    #races_remaining;
    #current_season_race_ids = []
    #season_raceIds = []
    #scenarios;
    /**
     * * Start a simulation .
     * @class
     * @param {*} driverA_ID 
     * @param {*} driverB_ID 
     * @param {*} sample_size 
     */
    constructor(driverA_ID,driverB_ID,sample_size){
        this.#driverA_ID = driverA_ID;
        this.#driverB_ID = driverB_ID;
        this.#sample_size = sample_size;
        this.#getRaceIDs()
        this.#getExistingData()
        this.#runSimulation(this.#calculateBiases())//just for testing will be in +simulate() public getter

    }

       /**
   * Get num of successful scenarios".
   * @getter
   * @returns {integer} num of succesful scenarios
   */
    get length(){
        return this.#scenarios.length
    }

       /**
   * Get random integer".
   * @method
   * @returns {array} array of raceIDs for race in the season + races remaining
   */
    #getRaceIDs(){
        //get raceIDs start
        let current_year = new Date().getFullYear()
        this.#current_season_race_ids = []
        for(let index = driverStandingsDB.length-1; index>0;){
            if(parseInt(racesDB.year(index))==year){
            if(racesDB.year(index)<year){
                break
            }
            this.#current_season_race_ids.push(parseInt(racesDB.raceId(index)))
            index--
            }else{
            index --
            }
        }
        this.#season_raceIds = [];
        let latest_raceId = parseInt(driverStandingsDB.raceId(driverStandingsDB.length-1))
        for(let index = 0; index<this.#current_season_race_ids.length;index++){
            if(this.#current_season_race_ids[index]<=latest_raceId){
                this.#season_raceIds.push(this.#current_season_race_ids[index])
            }      
        }
        this.#races_remaining = (this.#current_season_race_ids.length)-(this.#season_raceIds.length)
    }
   /**
   * Calculate Biases".
   * @method
   * @returns {array} bias of each driver.
   */
    #calculateBiases(){
        //raceIDs end
        //results start
        let driverA_grids = 0;
        let driverA_finishes = 0;
        let driverA_races =0;
        let driverB_grids = 0;
        let driverB_finishes = 0;
        let driverB_races = 0;
        for(let index = resultsDB.length-1; resultsDB.raceId(index)>this.#season_raceIds.at(-1); index--){
            if(resultsDB.driverId(index)==this.#driverA_ID){
                driverA_grids += parseInt(resultsDB.grid(index))
                driverA_finishes += parseInt(resultsDB.positionOrder(index))
                driverA_races ++
            }
            if(resultsDB.driverId(index)==this.#driverB_ID){
                driverB_grids += parseInt(resultsDB.grid(index))
                driverB_finishes += parseInt(resultsDB.positionOrder(index))
                driverB_races ++
            }
        }
        let driverA_grid_avg = driverA_grids/driverA_races;
        let driverA_fin_avg = driverA_finishes/driverA_races;
        let driverB_grid_avg = driverB_grids/driverB_races;
        let driverB_fin_avg = driverB_finishes/driverB_races;

        const Wf = 3.784258709
        let driverA_score = Math.round(((driverA_grid_avg)+(Wf*driverA_fin_avg))/((1+Wf)*2))
        let driverB_score = Math.round(((driverB_grid_avg)+(Wf*driverB_fin_avg))/((1+Wf)*2))
        return [driverA_score,driverB_score]

    }//end of function


       /**
   * Get ExistingData".
   * @method
   * @returns {array} standings data of both drivers in simulation.
   */
    #getExistingData(){
        this.#existing_results = []
        //get driver points for each race
        let latest_raceId = parseInt(driverStandingsDB.length-1)
        let current_drivers_IDs = [this.#driverA_ID,this.#driverB_ID].sort().reverse()
        let race_pos = 0
        let races_found = 0
        for(let index = latest_raceId; parseFloat(driverStandingsDB.raceId(index))>=this.#season_raceIds[this.#season_raceIds.length-1];){
            if(parseInt(driverStandingsDB.raceId(index)) == this.#season_raceIds[race_pos]){
            races_found ++
            let race_data = [(this.#season_raceIds.length)-races_found+1]
            let driver_pos = 0
            while(parseInt(driverStandingsDB.raceId(index))==this.#season_raceIds[race_pos]){
                if(parseInt(driverStandingsDB.driverId(index))==parseInt(current_drivers_IDs[driver_pos])){
                race_data.push(parseInt(driverStandingsDB.points(index)))
                driver_pos++
                }
                if(parseInt(driverStandingsDB.driverId(index))<parseInt(current_drivers_IDs[driver_pos])){
                    race_data.push(0)
                    driver_pos++
                }else{
                    index --
                }
                
            
            }
            if((race_data.length-1)<current_drivers_IDs.length){
                let extension = (current_drivers_IDs.length-(race_data.length-1))
                for(let extend = 0;extend<extension;extend++){
                // console.log("padded a 0")
                race_data.push(0)
                }
            }
            this.#existing_results.push(race_data)
            race_pos ++
            }else{
            index -- 
            }

        }//loop end

        //get finishing positions of each
        // let driverA_pos = []
        // let driverB_pos = []
        // for(let index = resultsDB.length-1; resultsDB.raceId(index)>this.#season_raceIds.at(-1); index--){
        //     if(resultsDB.driverId(index)==this.#driverA_ID){
        //         driverA_pos.push(resultsDB.positionOrder(index))
        //     }
        //     if(resultsDB.driverId(index)==this.#driverB_ID){
        //         driverB_pos.push(resultsDB.positionOrder(index))
        //     }
        // }
        // console.log("Finish A",JSON.stringify(driverA_pos),"finish b", JSON.stringify(driverB_pos))
        this.#existing_finishes = []
        latest_raceId = parseInt(resultsDB.length-1)
        current_drivers_IDs = [this.#driverA_ID,this.#driverB_ID].sort().reverse()
        race_pos = 0
        races_found = 0
        for(let index = latest_raceId; parseFloat(resultsDB.raceId(index))>=this.#season_raceIds[this.#season_raceIds.length-1];){
            if(parseInt(resultsDB.raceId(index)) == this.#season_raceIds[race_pos]){
            races_found ++
            let race_data = [(this.#season_raceIds.length)-races_found+1]
            let driver_pos = 0
            while(parseInt(resultsDB.raceId(index))==this.#season_raceIds[race_pos]){
                if(parseInt(resultsDB.driverId(index))==parseInt(current_drivers_IDs[driver_pos])){
                race_data.push(resultsDB.positionOrder(index))
                driver_pos++
                }
                if(parseInt(resultsDB.driverId(index))<parseInt(current_drivers_IDs[driver_pos])){
                    race_data.push("N/A")
                    driver_pos++
                }else{
                    index --
                }
                
            
            }
            this.#existing_finishes.push(race_data)
            race_pos ++
            }else{
            index -- 
            }

        }//loop end
        console.log("finishes",JSON.stringify(this.#existing_finishes))
        

    }
       /**
   * Run Simulation".
   * @method
   * @param {array} biases biases
   * @returns {array} successful scenarios
   */
    #runSimulation(biases){
        //sim data
        let successful_scenarios = []

        //driver data
        let driverA_points;
        let driverA_bias = biases[0]
        let driverB_points;
        let driverB_bias = biases[1]


        if(parseInt(this.#driverA_ID)>parseInt(this.#driverB_ID)){
            driverA_points = this.#existing_results[0][1]
            driverB_points = this.#existing_results[0][2]
        }else{
            driverA_points = this.#existing_results[0][2]
            driverB_points = this.#existing_results[0][1]
        }
        console.log(`Existing points A = ${driverA_points}, existing points B = ${driverB_points}`)
        console.log(`Bias A = ${driverA_bias}, Bias B = ${driverB_bias}`)
        console.log(`races remaining ${this.#races_remaining}`)

        let points = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let places = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; 

        for(let i = 0; i < this.#sample_size;i++){
            let points_gap = driverB_points-driverA_points;
            let current_scenarioA = [];
            let current_scenarioB = [];
            for(let race = 0; race < this.#races_remaining; race++){
                let RN1, RN2;
                    if (driverA_bias <= 4) {
                        RN1 = Math.floor(this.#getRandomInt(driverA_bias + 8));
                    }
                    if (driverA_bias > 4) {
                        RN1 = Math.floor(this.#getRandomInt(20 - ((driverA_bias) / 1.5)) + (driverA_bias / 1.5));
                    }
                    if (driverB_bias <= 4) {
                        RN2 = Math.floor(this.#getRandomInt(driverB_bias + 8));
                    }
                    if (driverB_bias > 4) {
                        RN2 = Math.floor(this.#getRandomInt(20 - ((driverB_bias) / 1.5)) + (driverB_bias / 1.5));
                    }

                    while (RN2 == RN1) {
                        if (driverB_bias <= 4) {
                            RN2 = Math.floor(this.#getRandomInt(driverB_bias + 8));
                        }
                        if (driverB_bias > 4) {
                            RN2 = Math.floor(this.#getRandomInt(20 - ((driverB_bias) / 2) + (driverB_bias / 2)));
                        }
                    }
                    points_gap -= points[RN1] - points[RN2];

                    if(points_gap/25>this.#races_remaining){
                        break
                        //break due to unsuccessful scenario
                    }else{
                        current_scenarioA.push(places[RN1])
                        current_scenarioB.push(places[RN2])
                        //still possilbe push places
                    }
                    if(points_gap<0 && race == this.#races_remaining-1){
                        //successful scenario
                        successful_scenarios.push([current_scenarioA,current_scenarioB])
                    }

                    

            }//current iteration loop end

        }//end of whole sim loop

        this.#sortScenarios(successful_scenarios)
        console.log(`Success Rate ${(successful_scenarios.length/this.#sample_size)*100}%`)
    }

       /**
   * Sort Scenarios.
   * @method
   * @param {array} scenario array of finishes for each driver (scenario)
   * @returns {array} sorted data
   */
    #sortScenarios(scenarios){
        let scenarios_with_avg = [] // new format [avg,[places] for sorting algorithm
        for(let i = 0; i <scenarios.length;i++){
            let sum = 0;
            let len = scenarios[i].length
            for(let p = 0; p < len;p++){
                sum += scenarios[i][0][p]
            }
            let avg = Math.round(sum/len)
            scenarios_with_avg.push([avg,[scenarios[i]]])
        }

        let scenarios_scenarios = scenarios_with_avg.sort(function(a, b){return a[0] - b[0]})
        this.#scenarios = scenarios_scenarios
    }
    /**
   * Get Scenario.
   * @method
   * @param {integer} position position in sorted scenario list
   * @returns {array} list of finishes for each driver at 'position'.
   */
    getScenario(position){
        if(this.#scenarios.length>1){
            let selected_scenario = (this.#scenarios[position][1])[0]
            this.#getExistingData()
            let google_ready_scenario = this.#formatScenario(selected_scenario)
            //creating graph
            ticks = []
            for(let p=1;p<=this.#current_season_race_ids.length;p++){
                ticks.push(p)
            }
            let driverA = new Driver(parseInt(this.#driverA_ID))
            driverA.createHomePageStats(driversDB)
            let driverB = new Driver(parseInt(this.#driverB_ID))
            driverB.createHomePageStats(driversDB)
            document.getElementById('table_div').style.display = "block";
            if(this.#driverA_ID>this.#driverB_ID){
                let driver_data = [driverA.forename+" "+driverA.surname,driverB.forename+" "+driverB.surname]
                google.charts.setOnLoadCallback(drawSimulationLineGraph(driver_data,this.#existing_results,google_ready_scenario,ticks,2024));
                google.charts.setOnLoadCallback(drawTable(driver_data,this.#existing_finishes))
            }else{
                let driver_data = [driverB.forename+" "+driverB.surname,driverA.forename+" "+driverA.surname]
                google.charts.setOnLoadCallback(drawSimulationLineGraph(driver_data,this.#existing_results,google_ready_scenario,ticks,2024));
                google.charts.setOnLoadCallback(drawTable(driver_data,this.#existing_finishes))
    
            }
        }else{
            alert('No Successful Scenarios')
        }
    }

      /**
   * format Scenario.
   * @method
   * @param {array} scenario array of finishes for each driver (scenario)
   * @returns {array} google charts ready data.
   */
    #formatScenario(scenario){
        let google_data = [this.#existing_results[0]]
        // google_data = google_data.reverse()
        let latest_race_num = google_data[0][0]+1
        let points = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        if(this.#driverA_ID>this.#driverB_ID){
            for(let i =0; i<this.#races_remaining;i++){
                let pointsA = parseInt(google_data.at(-1)[1])
                let pointsB = parseInt(google_data.at(-1)[2])
                google_data.push([latest_race_num+i,pointsA+ points[scenario[0][i]-1],pointsB+points[scenario[1][i]-1]])
            }
        }else{
            for(let i =0; i<this.#races_remaining;i++){
                let pointsA = parseInt(google_data.at(-1)[2])
                let pointsB = parseInt(google_data.at(-1)[1])
                google_data.push([latest_race_num+i,pointsB+ points[scenario[1][i]-1],pointsA+points[scenario[0][i]-1]])
            }

        }
        return google_data
    }


    /**
   * Get random integer.
   * @method
   * @param {integer} max the maximum value
   * @returns {integer} random int <= max".
   */
    #getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


}
