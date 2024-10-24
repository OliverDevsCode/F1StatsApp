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

  driverId(index){
    return this.#driverId[index]
  }

  number(index){
    return this.#number[index]
  }

  forename(index){
    return this.#forename[index]
  }

  surname(index){
    return this.#surname[index]
  }

  dob(index){
    this.#dob[index]
  }

  nationality(index){
    return this.#nationality[index]
  }

  get length(){
    return this.#length
  }

}