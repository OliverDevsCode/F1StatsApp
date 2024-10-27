/**
 * Class that calculates driver statistics.
 * @class
 *
   * Used to calculate Driver details i.e forename etc...
   * @returns {} various stats such as wins,poles etc...

 */

class DriverStatistics{
  #driverID;
  #results;
  #sprintResults;
  #drivers;


  #statistics = [] //order of data: wins, podiums, dnfs, races, points scoring races,fastests laps, career points, poles, poles to wins


  /**
     * Create a DriverStatistics Object.
     * @param {number} driverID - The driverID.
     * @param {object} resultsDB - An instance of Results Class.
     * @param {object} SprintresultsDB - An instance of SprintResults Class.
     * @param {object} DriversDB - An instance of Drivers Class.
     *
     */

  constructor(driverID,resultsDB,sprintResultsDB,driversDB){
    this.#driverID = driverID;
    this.#results = resultsDB;
    this.#sprintResults = sprintResultsDB;
    this.#drivers = driversDB;
  }

   /**
   * Get driver number at positon "driverID".
   * @method
   * @returns {integer} The  driver number at positon "driverID".
   */

  get number(){
    for(let i=0;i<this.#drivers.length;i++){
      if(this.#drivers.driverId(i)==this.#driverID){
        return this.#drivers.number(i)
      }
    }
  }

  /**
   * Get forename at positon "driverID".
   * @method
   * @returns {string} The  forename at positon "driverID".
   */

  get forename(){
    for(let i=0;i<this.#drivers.length;i++){
      if(this.#drivers.driverId(i)==this.#driverID){
        return this.#drivers.forename(i)
      }
    }
  }

  /**
   * Get surname at positon "driverID".
   * @method
   * @returns {string} The  surname at positon "driverID".
   */

  get surname(){
    for(let i=0;i<this.#drivers.length;i++){
      if(this.#drivers.driverId(i)==this.#driverID){
        return this.#drivers.surname(i)
      }
    }
  }

  /**
   * Get date of birth at positon "driverID".
   * @method
   * @returns {string} The  date of birth at positon "driverID".
   */

  get dob(){
    for(let i=0;i<this.#drivers.length;i++){
      if(this.#drivers.driverId(i)==this.#driverID){
        return this.#drivers.dob(i)
      }
    }
  }

  /**
   * Get nationality at positon "driverID".
   * @method
   * @returns {string} The  nationality at positon "driverID".
   */

  get nationality(){
    for(let i=0;i<this.#drivers.length;i++){
      if(this.#drivers.driverId(i)==this.#driverID){
        return this.#drivers.nationality(i)
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

//public methods TESTING

calcProfileStats(){
  let wins = 0;
  let poles = 0;
  let podiums = 0;
  let dnfs = 0;
  let races = 0;
  let points_scoring_races = 0;
  let fastest_laps = 0;
  let points_tally = 0;
  let list_of_finishes = [];
  let pole_to_win =0;
  for(let index =0; index < this.#results.length;index++){

    //wins calculate
    if(this.#results.position(index)==1 && this.#results.driverId(index)==this.#driverID){
      wins ++
    }

    //podiums calculate
    if(this.#results.position(index)<=3 && this.#results.driverId(index)==this.#driverID){
      podiums ++
    }

    //dnfs
    if(this.#results.positionText(index)=="R" && this.#results.driverId(index)==this.#driverID){
      dnfs ++
    }

    //races
    if(this.#results.driverId(index)==this.#driverID){
      races ++
    }

    //points scoring races
    if(this.#results.points(index)>0 && this.#results.driverId(index)==this.#driverID){
      points_scoring_races ++
    }

    //fastest laps
    if(this.#results.rank(index)==1 && this.#results.driverId(index)==this.#driverID){
      fastest_laps ++
    }

    //career points tally
    if(this.#results.driverId(index)==this.#driverID){
      points_tally += parseInt(this.#results.points(index));
    }

    //list of finishes
    if(this.#results.driverId(index)==this.#driverID){
      list_of_finishes.push(parseInt(this.#results.positionOrder(index)))
    }

    //calculate poles
    if((this.#results.raceId(index)<1077 || this.#results.raceId(index)>1101)&& this.#results.driverId(index) == this.#driverID){
      if(this.#results.grid(index)==1){
        poles ++
        if(parseInt(this.#results.positionOrder(index))==1){
          pole_to_win ++
        }
      }
    }
    if(((this.#results.raceId(index)>=1077) && (this.#results.raceId(index)<=1101)) && this.#results.driverId(index)==this.#driverID){
      if((this.#isSprintWeekend(this.#results.raceId(index)))[0] == true){
        if((this.#isSprintWeekend(this.#results.raceId(index)))[1]==1){
          poles ++
          if(parseInt(this.#results.positionOrder(index))==1){
            pole_to_win ++
          }
        }
      }
      if((this.#isSprintWeekend(this.#results.raceId(index)))[0] == false){
        if(this.#results.grid(index)==1){
          poles ++
          if(parseInt(this.#results.positionOrder(index))==1){
            pole_to_win ++
          }
        }
      }
      
    }
    //calculate poles end
    


  }//database loop end
  this.#statistics.push(wins,podiums,dnfs,races,points_scoring_races,fastest_laps,points_tally,list_of_finishes,poles,pole_to_win)
}//createProfileStats end


/**
   * Check if sprint Weekend + grid pos of DriverID
   * @method
   * @returns {array} boolean of sprintWeekend + grid position
   */
#isSprintWeekend(raceID){
  let isSprint = [false]
  for(let index =0; index < this.#sprintResults.length;index++){
    if(this.#sprintResults.raceId(index)==raceID && this.#sprintResults.driverId(index)==this.#driverID){
      isSprint.pop()
      isSprint.push(true,parseInt(this.#sprintResults.grid(index)))
      break
    }
  }
  return isSprint
}

}