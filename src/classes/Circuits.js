/**
 * Class that hold data on all the F1 Circuits in history.
 * @class
 *
   * Used to access F1 Circuit details i.e location etc...
   * @param {drivers_Data} table - Circuits CSV table.
   * @returns {} circuitId,name,location,country,countryCode,length

 */

class Circuits{
    #circuitId;
    #name;
    #location;
    #country;
    #countryCode;
    #length

    constructor(circuits_Data){
    this.#circuitId = circuits_Data.getColumn("circuitId");
    this.#name = circuits_Data.getColumn('name');
    this.#location = circuits_Data.getColumn('location');
    this.#country = circuits_Data.getColumn('country');
    this.#countryCode = circuits_Data.getColumn('countryCode');
    this.#length = circuits_Data.getRowCount();

    }

    /**
   * Get circuitId at positon Index.
   * @method
   * @returns {integer} The circuitId at the positon "index".
   */

    circuitId(index){
        return this.#circuitId[index]
    }

    /**
   * Get name at positon Index.
   * @method
   * @returns {string} The name at the positon "index".
   */

    name(index){
        return this.#name[index]
    }

     /**
   * Get location at positon Index.
   * @method
   * @returns {string} The location at the positon "index".
   */

    location(index){
        return this.#location[index]
    }

      /**
   * Get country at positon Index.
   * @method
   * @returns {string} The country at the positon "index".
   */
    country(index){
        return this.#country[index]
    }

      /**
   * Get countryCode at positon Index.
   * @method
   * @returns {string} The countryCode at the positon "index".
   */
    countryCode(index){
        return this.#countryCode[index]
    }

      /**
   * Get length of table Circuits.
   * @getter
   * @returns {string}  Get length of table Circuits.
   */

    get length(){
        return this.#length
    }

}