// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Employee extends Intern {
    constructor(name, id, email, school) {
        super(name, id, email);
        if (!school) {
            throw new Error("You are missing the school.");
          }
        this.school = school;
    }
    getRole(){
        return "Intern"
    }
    getSchool(){
        return this.school
    }
}

module.exports = Intern;