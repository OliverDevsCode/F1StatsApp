/**
 * Class that hold data on all the F1 Results in history.
 * @class
 *
   * Used to access F1 Results details i.e position etc...
   * @param {} table - Results CSV table.
   * @returns {} - need to add

 */


class Results{
  #resultsId;
  #raceId;
  #driverId;
  #constructorId;
  #grid;
  #position;
  #positionText;
  #positionOrder;
  #points;
  #rank;
  #length;

  constructor(resultsData){
    this.#resultsId = resultsData.getColumn('resultsId')
    this.#raceId = resultsData.getColumn('raceId')
    this.#driverId = resultsData.getColumn('driverId')
    this.#constructorId = resultsData.getColumn('constructorId')
    this.#grid = resultsData.getColumn('grid')
    this.#position = resultsData.getColumn('position')
    this.#positionText = resultsData.getColumn('positionText')
    this.#positionOrder = resultsData.getColumn('positionOrder')
    this.#points = resultsData.getColumn('points')
    this.#rank = resultsData.getColumn('rank')
    this.#length = resultsData.getRowCount()
  }
   /**
   * Get the resultsId at the position "index".
   * @method
   * @returns {integer} The resultsId at the positon "index".
   */
  resultsId(index){
    return this.#resultsId[index]
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
   * Get the driverId at the position "index".
   * @method
   * @returns {integer} The driverId at the positon "index".
   */
  driverId(index){
    return this.#driverId[index]
  }

  /**
   * Get the constructorId at the position "index".
   * @method
   * @returns {integer} The constructorId at the positon "index".
   */
  constructorId(index){
    return this.#constructorId[index]
  }

  /**
   * Get the grid at the position "index".
   * @method
   * @returns {integer} The grid at the positon "index".
   */
  grid(index){
    return this.#grid[index]
  }

  /**
   * Get the position at the position "index".
   * @method
   * @returns {integer} The position at the positon "index".
   */
  position(index){
    return this.#position[index]
  }

  /**
   * Get the positionOrder at the position "index".
   * @method
   * @returns {string} The positionOrder at the positon "index".
   */
  positionOrder(index){
    return this.#positionOrder[index]
  }

  /**
   * Get the points at the position "index".
   * @method
   * @returns {integer} The points at the positon "index".
   */
  points(index){
    return this.#points[index]
  }

  /**
   * Get the rank at the position "index".
   * @method
   * @returns {integer} The rank at the positon "index".
   */
  rank(index){
    return this.#rank[index]
  }

  /**
   * Get the length at the position "index".
   * @getter
   * @returns {integer} The length at the positon "index".
   */
  get length(){
    return this.#length
  }

}