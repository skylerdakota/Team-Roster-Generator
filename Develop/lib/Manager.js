// require in employee page because manager inherits from this class
const Employee = require("./Employee");

// define the Manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager"
    }
    getOfficeNumber(){
        return this.officeNumber
    }
}

// export the Manager class
module.exports = Manager;