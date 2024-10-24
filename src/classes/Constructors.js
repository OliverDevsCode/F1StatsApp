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