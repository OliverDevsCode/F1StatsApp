/**
 * Class that hold data on all the F1 sprint Results in history.
 * @class
 *
   * Used to access F1 Sprint Results details i.e position etc...
   * @param {} table - Sprint_Results CSV table.
   * @returns {} - object with attributes,raceId,constructorId,grid,position,positionText,positionOrder,points,length

 */

class SprintResults{
  #raceId;
  #driverId;
  #constructorId;
  #grid;
  #position;
  #positionText;
  #positionOrder;
  #points;
  #length;

  constructor(SprintResultsData){
    this.#raceId = SprintResultsData.getColumn('raceId')
    this.#driverId = SprintResultsData.getColumn('driverId')
    this.#constructorId = SprintResultsData.getColumn('constructorId')
    this.#grid = SprintResultsData.getColumn('grid')
    this.#position = SprintResultsData.getColumn('position')
    this.#positionText = SprintResultsData.getColumn('positionText')
    this.#positionOrder = SprintResultsData.getColumn('positionOrder')
    this.#points = SprintResultsData.getColumn('points')
    this.#length = SprintResultsData.getRowCount()
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
   * Get the positionText at the position "index".
   * @method
   * @returns {string} The positionText at the positon "index".
   */
  positionText(index){
    return this.#positionText[index]
  }

  /**
   * Get the positionOrder at the position "index".
   * @method
   * @returns {integer} The positionOrder at the positon "index".
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
   * Get the length at the position "index".
   * @getter
   * @returns {integer} The length at the positon "index".
   */
  get length(){
    return this.#length
  }


}