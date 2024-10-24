/**
 * Class that hold data about the Driver Standings after every race in history
 * @class
 *
   * Used to access Driver Standings details i.e position etc...
   * @param {} table - Driver_Standings CSV table.
   * @returns {} driverStandingsId,raceId,driverId,position,points,wins,length

 */

class DriverStandings{
  #driverStandingsId;
  #raceId;
  #driverId;
  #position;
  #points;
  #wins;
  #length;

  constructor(driverStandingsData){
    this.#driverStandingsId = driverStandingsData.getColumn('driverStandingsId')
    this.#raceId = driverStandingsData.getColumn('raceId')
    this.#driverId = driverStandingsData.getColumn('driverId')
    this.#position = driverStandingsData.getColumn('position')
    this.#points = driverStandingsData.getColumn('points')
    this.#wins = driverStandingsData.getColumn('wins')
    this.#length = driverStandingsData.getRowCount()
  }
  
  /**
   * Get driverStanigsId at positon Index.
   * @method
   * @returns {integer} The driverStanigsId at the positon "index".
   */
  driverStandingsId(index){
    return this.#driverStandingsId[index]
  }

  /**
   * Get raceId at positon Index.
   * @method
   * @returns {integer} The raceId at the positon "index".
   */

  raceId(index){
    return this.#raceId[index]
  }

   /**
   * Get driverId at positon Index.
   * @method
   * @returns {integer} The driverId at the positon "index".
   */

  driverId(index){
    return this.#driverId[index]
  }

   /**
   * Get position at positon Index.
   * @method
   * @returns {integer} The position at the positon "index".
   */

  position(index){
    return this.#position[index]
  }

   /**
   * Get points at positon Index.
   * @method
   * @returns {integer} The points at the positon "index".
   */

  points(index){
    return this.#points[index]
  }

  /**
   * Get wins at positon Index.
   * @method
   * @returns {integer} The wins at the positon "index".
   */

  wins(index){
    return this.#wins[index]
  }

  /**
   * Get length of the table Driver_Standings.
   * @getter
   * @returns {integer} The length of the table Driver_Standings.
   */

  get length(){
    return this.#length
  }
  

}