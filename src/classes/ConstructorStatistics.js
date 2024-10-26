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

    /**
     * Create a DriverStatistics Object.
     * @param {number} constructorID - The constructorID.
     * @param {object} resultsDB - An instance of Results Class.
     * @param {object} SprintresultsDB - An instance of SprintResults Class.
     * @param {object} constructorsDB - An instance of Constructors Class.
     *
     */

    constructor(constructorID,results,sprintResults,constructors){
        this.#constructorID = constructorID;
        this.#results = results;
        this.#sprintResults = sprintResults;
        this.#constructors = constructors;
    }

    /**
   * Get name at positon "constructorID".
   * @method
   * @returns {string} The  name at positon "constructorID".
   */

  get name(){
    for(let i =0; i < this.#constructors.length;i++){
      if(this.#constructors.constructorId(index)==this.#constructorID){
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
      if(this.#constructors.constructorId(index)==this.#constructorID){
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
    return this.#calculateWins()
  }

  /**
   * Get poles
   * @method
   * @returns {string} The  poles
   */

  get poles(){
    return this.#calculatePoles()
  }

  /**
   * Get podiums
   * @method
   * @returns {string} The  podiums
   */

  get podiums(){
    return this.#calculatePodiums()
  }

  /**
   * Get DNFs
   * @method
   * @returns {string} The  DNFs
   */

  get dnfs(){
    return this.#calculateDNFs()
  }

  /**
   * Get Num_of_races
   * @method
   * @returns {string} The  Num_of_races
   */

  get Num_of_races(){
    return this.#calculateNum_of_races()
  }

  /**
   * Get Poles coverted to wins
   * @method
   * @returns {string} The Poles_to_wins
   */

  get Poles_to_wins(){
    return this.#calculatePoles_to_wins()
  }

  /**
   * Get Points_scoring_races
   * @method
   * @returns {string} The  Points_scoring_races
   */

  get Points_scoring_races(){
    return this.#calculatePoints_scoring_races()
  }

  /**
   * Get fastestlaps
   * @method
   * @returns {string} The  fastestlaps
   */

  get Fastest_laps(){
    return this.#calculateFastest_laps()
  }

  /**
   * Get Career_points
   * @method
   * @returns {string} The  Career_points
   */

  get Career_points(){
    return this.#calculateCareer_points()
  }

  /**
   * Get List_of_points_finishes
   * @method
   * @returns {string} The  List_of_points_finishes
   */

  get List_of_finishes(){
    return this.#calculateList_of_finishes()
  }

  
    #calculateWins(){
        //logic to calculate wins
      }
    
      #calculatePoles(){
        //logic to calculate poles
      }
    
      #calculatePodiums(){
        //logic to calculate Podiums
      }
    
      #calculateDNFs(){
        //logic to calculate DNFS
      }
    
      #calculateNum_of_races(){
        //logic to calculate number of races started
      }
    
      #calculatePoles_to_wins(){
        //logic to calculate number of poles converted to wins
      }
    
      #calculatePoints_scoring_races(){
        //logic to calculate the number of races a driver has scored points at 
      }
    
      #calculateFastest_laps(){
        //logic to calculate number of fastest laps
      }
    
      #calculateCareer_points(){
        //logic to calculate the total points scored by a driver in their career
      }

      #calculateList_of_finishes(){
        //logic to calculate the list of all finishing positions by a driver in their career
      }
    

}