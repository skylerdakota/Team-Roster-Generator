// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Employee extends Manager {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        if (!officeNumber) {
            throw new Error("You are missing the office number.");
          }
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager"
    }
    getOffice(){
        return this.officeNumber
    }
}

module.exports = Manager;