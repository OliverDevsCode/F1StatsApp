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
    return this.#drivers.number(this.#driverID-1)
  }

  /**
   * Get forename at positon "driverID".
   * @method
   * @returns {string} The  forename at positon "driverID".
   */

  get forename(){
    return this.#drivers.forename(this.#driverID-1)
  }

  /**
   * Get surname at positon "driverID".
   * @method
   * @returns {string} The  surname at positon "driverID".
   */

  get surname(){
    return this.#drivers.surname(this.#driverID-1)
  }

  /**
   * Get date of birth at positon "driverID".
   * @method
   * @returns {string} The  date of birth at positon "driverID".
   */

  get dob(){
    return this.#drivers.dob(this.#driverID-1)
  }

  /**
   * Get nationality at positon "driverID".
   * @method
   * @returns {string} The  nationality at positon "driverID".
   */

  get nationality(){
    return this.#drivers.nationality(this.#driverID-1)
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