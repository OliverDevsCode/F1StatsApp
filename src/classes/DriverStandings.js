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
    this.#wins = driverStandingsData.getColumn('wins')
    this.#length = driverStandingsData.getRowCount()
  }
  
  driverStandingsId(index){
    return this.#driverStandingsId[index]
  }

  raceId(index){
    return this.#raceId[index]
  }

  driverId(index){
    return this.#driverId[index]
  }

  position(index){
    return this.#position[index]
  }

  wins(index){
    return this.#wins[index]
  }

  get length(){
    return this.length
  }
  

}