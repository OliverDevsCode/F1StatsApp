/**
 * Class that hold Constructor details and stats.
 * @class
 *
   * Used to get Constructor details i.e name etc...
   * @returns {} various stats such as wins,poles etc...

 */

class Constructor{
    #constructorID;
    #name;
    #nationality;
    #wins;
    #poles;
    #podiums;
    #dnfs; //lowercase comapared to other classes
    #num_of_races;
    #poles_to_wins;
    #points_scoring_races;
    #fastest_laps;
    #career_points;
    #list_of_finishes;
    #car_entries;

    /**
     * Create a DriverStatistics Object.
     * @param {number} driverID - The driverID.
     *
     */

    constructor(constructorID){
        this.#constructorID = constructorID
    }

    createProfileStats(constructorsDB,resultsDB,sprintResultsDB){
        let stats = new ConstructorStatistics(this.#constructorID,resultsDB,sprintResultsDB,constructorsDB)
        stats.calcProfileStats()
        this.#name = stats.name;
        this.#nationality = stats.nationality;
        this.#wins = stats.wins;
        this.#poles = stats.poles;
        this.#podiums = stats.podiums;
        this.#fastest_laps = stats.Fastest_laps;
        this.#dnfs = stats.dnfs;
        this.#num_of_races = stats.Num_of_races;
        this.#poles_to_wins = stats.Poles_to_wins;
        this.#points_scoring_races = stats.Points_scoring_races;
        this.#list_of_finishes = stats.List_of_finishes;
        this.#career_points = stats.Career_points
        this.#car_entries = stats.car_entries
    }

    /**
   * Get wins
   * @getter
   * @returns {integer} The wins
   */

    get wins(){
        return this.#wins
    }


    /**
   * Get name
   * @getter
   * @returns {integer} The name
   */

    get name(){
        return this.#name
    }

    /**
   * Get nationality
   * @getter
   * @returns {integer} The nationality
   */

    get nationality(){
        return this.#nationality
    }

    /**
   * Get poles
   * @getter
   * @returns {integer} The poles
   */

    get poles(){
        return this.#poles
    }

    /**
   * Get podiums
   * @getter
   * @returns {integer} The podiums
   */

    get podiums(){
        return this.#podiums
    }

     /**
   * Get dnfs
   * @getter
   * @returns {integer} The dnfs
   */

     get dnfs(){
        return this.#dnfs
    }

     /**
   * Get num_of_races
   * @getter
   * @returns {integer} The num_of_races
   */

    get num_of_races(){
        return this.#num_of_races
    }

     /**
   * Get pole_to_win
   * @getter
   * @returns {integer} The pole_to_win
   */

     get poles_to_wins(){
        return this.#poles_to_wins
    }

     /**
   * Get points_scoring_races
   * @getter
   * @returns {integer} The points_scoring_races
   */

     get points_scoring_races(){
        return this.#points_scoring_races
    }

     /**
   * Get fastest_laps
   * @getter
   * @returns {integer} The fastest_laps
   */

     get fastest_laps(){
        return this.#fastest_laps
    }

     /**
   * Get career_points
   * @getter
   * @returns {integer} The career_points
   */

     get career_points(){
        return this.#career_points
    }

     /**
   * Get list_of_finishes
   * @getter
   * @returns {array} The list_of_finishes
   */

     get list_of_finishes(){
        return this.#list_of_finishes
    }

    /**
   * Get number of cars entered into races
   * @method
   * @returns {string} number of cars entered in constructor history
   */

  get car_entries(){
    return this.#car_entries
  }
}