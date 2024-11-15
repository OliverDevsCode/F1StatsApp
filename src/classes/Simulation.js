class Simultation{
    #driverA_ID;
    #driverB_ID;
    #sample_size;
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
        console.log(this.#calculateBiases())

    }

    #calculateBiases(){
        //get raceIDs start
        let current_year = new Date().getFullYear()
        let current_season_race_ids = []
        for(let index = driverStandingsDB.length-1; index>0;){
            if(parseInt(racesDB.year(index))==year){
            if(racesDB.year(index)<year){
                break
            }
            current_season_race_ids.push(parseInt(racesDB.raceId(index)))
            index--
            }else{
            index --
            }
        }
        let season_raceIds = [];
        let latest_raceId = parseInt(driverStandingsDB.raceId(driverStandingsDB.length-1))
        for(let index = 0; index<current_season_race_ids.length;index++){
            if(current_season_race_ids[index]<=latest_raceId){
                season_raceIds.push(current_season_race_ids[index])
            }      
        }
        let remaning_races = (current_season_race_ids.length)-(season_raceIds.length)
        //raceIDs end
        //results start
        let driverA_grids = 0;
        let driverA_finishes = 0;
        let driverA_races =0;
        let driverB_grids = 0;
        let driverB_finishes = 0;
        let driverB_races = 0;
        for(let index = resultsDB.length-1; resultsDB.raceId(index)>season_raceIds.at(-1); index--){
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
        return [driverA_score,driverB_score,remaning_races]

    }//end of function

}
