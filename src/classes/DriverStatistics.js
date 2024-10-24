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

  get number(){
    return this.#drivers.number(this.#driverID-1)
  }

  get forename(){
    return this.#drivers.forename(this.#driverID-1)
  }

  get surname(){
    return this.#drivers.surname(this.#driverID-1)
  }

  get dob(){
    return this.#drivers.dob(this.#driverID-1)
  }

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