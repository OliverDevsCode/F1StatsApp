/**
 * Class that hold data on all the F1 Race Weekends in history.
 * @class
 *
   * Used to access Race Weekend details i.e round and year etc...
   * @param {} table - Races CSV table.
   * @returns {} 

 */

class Races{
  #raceId;
  #year;
  #round;
  #circuit;
  #name;
  #length;

  constructor(racesData){
    this.#raceId = racesData.getColumn('raceId')
    this.#year = racesData.getColumn('year')
    this.#round = racesData.getColumn('round')
    this.#circuit = racesData.getColumn('circuit')
    this.#name = racesData.getColumn('name')
    this.#length = racesData.getRowCount()
  }

  /**
   * Get the raceId at the position "index".
   * @method
   * @returns {integer} The raceId at the positon "index".
   */
  
  raceId(index){
    return this.#raceId[index]
  }

  /**
   * Get the year of a race.
   * @method
   * @returns {integer} The year of a race at the positon "index".
   */

  year(index){
    return this.#year[index]
  }

  /**
   * Get the round number of a race.
   * @method
   * @returns {integer} The round number at the positon "index".
   */

  round(index){
    return this.#round[index]
  }

  /**
   * Get the circuit name of a race.
   * @method
   * @returns {string} The circuit name of a race at the positon "index".
   */

  circuit(index){
    return this.#circuit[index]
  }

  /**
   * Get the race name of a race i.e Rolex Australian GP.
   * @method
   * @returns {string} The race name of a race at the positon "index".
   */

  name(index){
    return this.#name[index]
  }

  /**
   * Get the length of the table Races.
   * @getter
   * @returns {string} Get the length of the table Races
   */

  get length(){
    return this.#length
  }

}