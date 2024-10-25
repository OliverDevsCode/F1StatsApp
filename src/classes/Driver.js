/**
 * Class that hold driver details and stats.
 * @class
 *
   * Used to get Driver details i.e forename etc...
   * @returns {} various stats such as wins,poles etc...

 */

class Driver{
    #driverID;
    #number;
    #forename;
    #surname;
    #dob;
    #nationality;
    #wins;
    #poles;
    #podiums;
    #dnfs; //lowercase comapared to other classes
    #num_of_races;
    #pole_to_win;
    #points_scoring_races;
    #fastest_laps;
    #career_points;
    #list_of_points_finishes;
    #championshipStanding;
    #championshipPoints;
    #championshipWins;

    /**
     * Create a DriverStatistics Object.
     * @param {number} driverID - The driverID.
     *
     */

    constructor(driverID){
        this.#driverID = driverID;
    }

    createProfileStats(driversDB,resultsDB,sprintResultsDB){
        let stats = new DriverStatistics(this.#driverID,resultsDB,sprintResultsDB,driversDB)
        this.#forename = stats.forename
        this.#surname = stats.surname
    }

    get forename(){
        return this.#forename
    }

}