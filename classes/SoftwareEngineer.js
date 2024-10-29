const {Employee} = require('./Employee')


class SoftwareEngineer extends Employee{
    #programmingLanguages;

    constructor(name, position, salary, programmingLanguages = []) {
        super(name, position, salary);
        this.#programmingLanguages = programmingLanguages; // Initialize with provided languages
    }
    getProgrammingLanguages(){
        return this.#programmingLanguages
    }
    setProgrammingLanguages(language){
        this.#programmingLanguages.push(language)
    }


    
}

module.exports = {
    SoftwareEngineer,
}