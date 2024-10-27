/**
 * Class that hold driver details and stats.
 * @class
 *
   * Used to get Driver details i.e forename etc...
   * @returns {} various stats such as wins,poles etc...

 */

class Driver{
    #driverID;
    #number;
    #forename;
    #surname;
    #dob;
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

    /**
     * Create a DriverStatistics Object.
     * @param {number} driverID - The driverID.
     *
     */

    constructor(driverID){
        this.#driverID = driverID;
    }

     /**
   * create Profile Statistics 
   * @method
   * @param {object} driversDB - The driversDB.
   * @param {object} resultsDB - The resultsDB.
   * @param {object} sprintResultsDB - The sprintResultsDB.
   * @returns {data} sets values in object
   */

    createProfileStats(driversDB,resultsDB,sprintResultsDB){
        let stats = new DriverStatistics(this.#driverID,resultsDB,sprintResultsDB,driversDB)
        stats.calcProfileStats()
        console.log("STATS CALCULATED")
        this.#number = stats.number;
        this.#forename = stats.forename;
        this.#surname = stats.surname;
        this.#dob = stats.dob;
        this.#nationality = stats.nationality;
        this.#wins = stats.wins;
        this.#poles = stats.poles;
        this.#podiums = stats.podiums;
        this.#fastest_laps = stats.Fastest_laps
        this.#dnfs = stats.dnfs;
        this.#num_of_races = stats.Num_of_races;
        this.#poles_to_wins = stats.Poles_to_wins;
        this.#points_scoring_races = stats.Points_scoring_races;
        this.#career_points = stats.Career_points
        this.#list_of_finishes = stats.List_of_finishes;
    }

    /**
   * create Home page Statistics 
   * @method
   * @param {object} driversDB - The driversDB.
   * @returns {data} sets values in object
   */

    createHomePageStats(driversDB){
        let stats = new DriverStatistics(this.#driverID,null,null,driversDB);
        this.#forename = stats.forename;
        this.#surname = stats.surname;
    }

    /**
   * create comparison Statistics 
   * @method
   * @param {object} driversDB - The driversDB.
   * @param {object} resultsDB - The resultsDB.
   * @param {object} sprintResultsDB - The sprintResultsDB.
   * @returns {data} sets values in object
   */

    createComparisonStats(driversDB,resultsDB,sprintResultsDB){
      //needs completing
    }

    /**
   * Get number
   * @getter
   * @returns {string} The number
   */

    get number(){
        return this.#number
    }
      /**
   * Get forename
   * @getter
   * @returns {string} The forename
   */

    get forename(){
        return this.#forename
    }

    /**
   * Get surname
   * @getter
   * @returns {string} The surname
   */

    get surname(){
        return this.#surname
    }

    /**
   * Get dob
   * @getter
   * @returns {string} The dob
   */

    get dob(){
        return this.#dob
    }

    /**
   * Get nationality
   * @getter
   * @returns {string} The nationality
   */

    get nationality(){
        return this.#nationality
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
}