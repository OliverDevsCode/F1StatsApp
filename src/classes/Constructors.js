/**
 * Class that hold data on all the F1 Constructors in history.
 * @class
 *
   * Used to access Constructor details i.e name etc...
   * @param {} table - Driver Results CSV table.
   * @returns {} constructorId,name,nationality,length

 */

class Constructors{
    #constructorId;
    #name;
    #nationality;
    #length;

    constructor(constructors_Data){
        this.#constructorId = constructors_Data.getColumn('constructorId')
        this.#name = constructors_Data.getColumn('name')
        this.#nationality = constructors_Data.getColumn('nationality')
        this.#length = constructors_Data.getRowCount()

    }

    contructorId(index){
        return this.#constructorId[index]
    }

    name(index){
        return this.#name[index]
    }
    
    nationality(index){
        return this.#nationality[index]
    }

    get length(){
        return this.#length
    }

}