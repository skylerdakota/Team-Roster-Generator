// require in employee page because intern inherits from this class
const Employee = require("./Employee");

// define the Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole(){
        return "Intern"
    }
    getSchool(){
        return this.school
    }
}

// export the Intern class
module.exports = Intern;