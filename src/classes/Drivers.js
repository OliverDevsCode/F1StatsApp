/**
 * Class that hold data on all the F1 Drivers in history.
 * @class
 *
   * Used to access Driver details i.e forename etc...
   * @param {drivers_Data} table - Driver Results CSV table.
   * @returns {} driverId,number,forename,surname,dob,nationality,length

 */


class Drivers{
  #driverId;
  #number;
  #forename;
  #surname;
  #dob;
  #nationality;
  #length;

  constructor(drivers_Data){
    this.#driverId = drivers_Data.getColumn('driverId')
    this.#number = drivers_Data.getColumn('number')
    this.#forename = drivers_Data.getColumn('forename')
    this.#surname = drivers_Data.getColumn('surname')
    this.#dob = drivers_Data.getColumn('dob')
    this.#nationality = drivers_Data.getColumn('nationality')
    this.#length = drivers_Data.getRowCount()
  }

  /**
   * Get a Driver's driverId.
   * @method
   * @returns {integer} The driverId of a driver at the positon "index".
   */

  driverId(index){
    return this.#driverId[index]
  }

  /**
   * Get a Driver's number.
   * @method
   * @returns {integer} The number of a driver at the positon "index".
   */

  number(index){
    return this.#number[index]
  }

  /**
   * Get a Driver's Forename.
   * @method
   * @returns {string} The forename of a driver at the positon "index".
   */
  forename(index){
    return this.#forename[index]
  }

  /**
   * Get a Driver's Surname.
   * @method
   * @returns {string} The Surname of a driver at the positon "index".
   */

  surname(index){
    return this.#surname[index]
  }

  /**
   * Get a Driver's Date of Birth.
   * @method
   * @returns {string} The Date of Birth of a driver at the positon "index".
   */
  dob(index){
    this.#dob[index]
  }

  /**
   * Get a Driver's Nationality.
   * @method
   * @returns {string} The Nationality of a driver at the positon "index".
   */

  nationality(index){
    return this.#nationality[index]
  }

  /**
   * Get the length of the Drivers Table.
   * @getter
   * @returns {string} The length of the Drivers Table.
   */

  get length(){
    return this.#length
  }

}