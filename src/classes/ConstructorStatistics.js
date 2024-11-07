/**
 * Class that calculates constructor statistics.
 * @class
 *
   * Used to calculate constructor details i.e name etc...
   * @returns {} various stats such as wins,poles etc...

 */

class ConstructorStatistics{
    #constructorID;
    #results;
    #sprintResults;
    #constructors;
    #range;

    #statistics = [] //order of data: wins, podiums, dnfs, races, points scoring races,fastests laps, career points, poles, poles to wins


    /**
     * Create a DriverStatistics Object.
     * @param {number} constructorID - The constructorID.
     * @param {object} resultsDB - An instance of Results Class.
     * @param {object} SprintresultsDB - An instance of SprintResults Class.
     * @param {object} constructorsDB - An instance of Constructors Class.
     * @param {array} range - range of race's taken into account
     *
     */

    constructor(constructorID,results,sprintResults,constructors,range){
        this.#constructorID = constructorID;
        this.#results = results;
        this.#sprintResults = sprintResults;
        this.#constructors = constructors;
        this.#range = range;
    }

    /**
   * Get name at positon "constructorID".
   * @method
   * @returns {string} The  name at positon "constructorID".
   */

  get name(){
    for(let i =0; i < this.#constructors.length;i++){
      if(this.#constructors.constructorId(i)==this.#constructorID){
        return this.#constructors.name(i)
      }
    }    
  }


  /**
   * Get nationality at positon "constructorID".
   * @method
   * @returns {string} The  nationality at positon "constructorID".
   */

  get nationality(){
    for(let i =0; i < this.#constructors.length;i++){
      if(this.#constructors.constructorId(i)==this.#constructorID){
        return this.#constructors.nationality(i)
      }
    }  
  }

  /**
   * Get wins
   * @method
   * @returns {string} The  wins
   */

  get wins(){
    return this.#statistics[0]
  }

  /**
   * Get poles
   * @method
   * @returns {string} The  poles
   */

  get poles(){
    return this.#statistics[8]

    
  }

  /**
   * Get podiums
   * @method
   * @returns {string} The  podiums
   */

  get podiums(){
    return this.#statistics[1]
  }

  /**
   * Get DNFs
   * @method
   * @returns {string} The  DNFs
   */

  get dnfs(){
    return this.#statistics[2]
    
  }

  /**
   * Get Num_of_races
   * @method
   * @returns {string} The  Num_of_races
   */

  get Num_of_races(){
    return this.#statistics[3]
  }

  /**
   * Get Poles coverted to wins
   * @method
   * @returns {string} The Poles_to_wins
   */

  get Poles_to_wins(){
    return this.#statistics[9]
  }

  /**
   * Get Points_scoring_races
   * @method
   * @returns {string} The  Points_scoring_races
   */

  get Points_scoring_races(){
    return this.#statistics[4]

  }

  /**
   * Get fastestlaps
   * @method
   * @returns {string} The  fastestlaps
   */

  get Fastest_laps(){
    return this.#statistics[5]
  }

  /**
   * Get Career_points
   * @method
   * @returns {string} The  Career_points
   */

  get Career_points(){
    return this.#statistics[6]
  }

  /**
   * Get List_of_points_finishes
   * @method
   * @returns {string} The  List_of_points_finishes
   */

  get List_of_finishes(){
    return this.#statistics[7]
  }

  /**
   * Get number of cars entered into races
   * @method
   * @returns {string} number of cars entered in constructor history
   */

  get car_entries(){
    return this.#statistics[10]
  }

//public methods TESTING

calcProfileStats(graph_config){
  let wins = 0;
  let poles = 0;
  let list_pole_raceIds = [];
  let podiums = 0;
  let dnfs = 0;
  let races_enters = []
  let races = 0;
  let points_scoring_races = 0;
  let fastest_laps = 0;
  let points_tally = 0;
  let list_of_finishes = [];
  let pole_to_win =0;
  let car_entries = 0;
  if(this.#range == undefined){
    this.#range = [0,resultsDB.length]
  }
  if(graph_config == undefined){
    graph_config = "All Results";
  }
  let constructor_found = 0;
  for(let index =0; index < this.#results.length;index++){

    if(this.#results.constructorId(index)==this.#constructorID){
      if(constructor_found >= this.#range[0] && constructor_found < this.#range[1]){
        //wins calculate
        if(this.#results.position(index)==1 && this.#results.constructorId(index)==this.#constructorID){
          wins ++
        }

        //podiums calculate
        if(this.#results.position(index)<=3 && this.#results.constructorId(index)==this.#constructorID){
          podiums ++
        }

        //dnfs
        if(this.#results.positionText(index)=="R" && this.#results.constructorId(index)==this.#constructorID){
          dnfs ++
        }

        //points scoring races
        if(this.#results.points(index)>0 && this.#results.constructorId(index)==this.#constructorID){
          if(races_enters.includes(this.#results.raceId(index))){
          }else{
          points_scoring_races ++ 

          }
        }

        //races
        if(this.#results.constructorId(index)==this.#constructorID){
          if(races_enters.includes(this.#results.raceId(index))){
          }else{
          races += 1
          races_enters.push(this.#results.raceId(index))

          }
          car_entries ++
        }

        

        //fastest laps
        if(this.#results.rank(index)==1 && this.#results.constructorId(index)==this.#constructorID){
          fastest_laps ++
        }

        //career points tally
        if(this.#results.constructorId(index)==this.#constructorID){
          points_tally += parseInt(this.#results.points(index));
        }

        //list of finishes
        if(this.#results.constructorId(index)==this.#constructorID){
          if(graph_config == 'All Results'){
            list_of_finishes.push(parseInt(this.#results.positionOrder(index)))
          }
          if(graph_config == 'Exclude DNFs'){
            if(this.#results.positionText(index)!='R'){
            list_of_finishes.push(parseInt(this.#results.positionOrder(index)))
            }
          }
          if(graph_config == 'Exclude DSQs'){
            if(this.#results.positionText(index)!='D'){
            list_of_finishes.push(parseInt(this.#results.positionOrder(index)))
            }
          }
          if(graph_config == 'Exclude DSQs and DNFs'){
            if(this.#results.positionText(index)!='D'&& this.#results.positionText(index)!='R'){
            list_of_finishes.push(parseInt(this.#results.positionOrder(index)))
            }
          }
        }

        //calculate poles
        if((this.#results.raceId(index)<1077 || this.#results.raceId(index)>1101)&& this.#results.constructorId(index) == this.#constructorID){
          if(this.#results.grid(index)==1){
            poles ++
            list_pole_raceIds.push(parseInt(this.#results.raceId(index)))
            if(parseInt(this.#results.positionOrder(index))==1){
              pole_to_win ++
            }
          }
        }
        if(((this.#results.raceId(index)>=1077) && (this.#results.raceId(index)<=1101)) && this.#results.constructorId(index)==this.#constructorID){
          if((this.#isSprintWeekend(this.#results.raceId(index),list_pole_raceIds))[0] == true){
            if((this.#isSprintWeekend(this.#results.raceId(index),list_pole_raceIds))[1]==1 && (list_pole_raceIds.includes(parseInt(this.#results.raceId(index)))==false)){
              poles ++
              list_pole_raceIds.push(parseInt(this.#results.raceId(index)))
              if(parseInt(this.#results.positionOrder(index))==1){
                pole_to_win ++
              }
            }
          }
          if((this.#isSprintWeekend(this.#results.raceId(index),list_pole_raceIds))[0] == false){
            if(this.#results.grid(index)==1){
              poles ++
              list_pole_raceIds.push(parseInt(this.#results.raceId(index)))
              if(parseInt(this.#results.positionOrder(index))==1){
                pole_to_win ++
              }
            }
          }
          
        }
        //calculate poles end
      }
      constructor_found ++
    }

    
    


  }//database loop end
  this.#statistics.push(wins,podiums,dnfs,races,points_scoring_races,fastest_laps,points_tally,list_of_finishes,poles,pole_to_win,car_entries)
  
}//createProfileStats end


/**
   * Check if sprint Weekend + grid pos of constructorID
   * @method
   * @returns {array} boolean of sprintWeekend + grid position
   */
#isSprintWeekend(raceID,list_pole_raceIds){
  let isSprint = [false]
  for(let index =0; index < this.#sprintResults.length;index++){
    if(this.#sprintResults.raceId(index)==raceID && this.#sprintResults.constructorId(index)==this.#constructorID){
      isSprint.pop()
      isSprint.push(true,parseInt(this.#sprintResults.grid(index)))
      break
    }
  }
  return isSprint
}
}