class Circuits{
    #circuitsId;
    #name;
    #location;
    #country;
    #countryCode;
    #length

    constructor(circuits_Data){
    this.#circuitsId = circuits_Data.getColumn("circuitId");
    this.#name = circuits_Data.getColumn('name');
    this.#location = circuits_Data.getColumn('location');
    this.#country = circuits_Data.getColumn('country');
    this.#countryCode = circuits_Data.getColumn('countryCode');
    this.#length = circuits_Data.getRowCount();

    }

    circuitsId(index){
        return this.#circuitsId[index]
    }
    name(index){
        return this.#name[index]
    }
    location(index){
        return this.#location[index]
    }
    country(index){
        return this.#country[index]
    }
    countryCode(index){
        return this.#countryCode[index]
    }
    get length(){
        return this.#length
    }

}