// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Employee extends Intern {
    constructor(school) {
        this.school = school;
    }

    getSchool(){
        console.log(this.school)
    }


getSchool(){
    inquirer
        .prompt([
        {
            type: "input",
            name: "school",
            message: "What is the employee's school affiliation?"
        }
}

module.exports = Intern;