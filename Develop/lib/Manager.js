// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Employee extends Manager {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getOffice(){
        console.log(this.officeNumber)
    }


getOffice(){
    inquirer
        .prompt([
        {
            type: "input",
            name: "officeNumber",
            message: "What is the employee's Office number?",
        }
}

module.exports = Manager;