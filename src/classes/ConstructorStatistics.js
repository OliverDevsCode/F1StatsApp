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
    return this.#constructors.name(this.#constructorID-1)
  }

  /**
   * Get nationality at positon "constructorID".
   * @method
   * @returns {string} The  nationality at positon "constructorID".
   */

  get nationality(){
    return this.#constructors.nationality(this.#constructorID-1)
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
    

}