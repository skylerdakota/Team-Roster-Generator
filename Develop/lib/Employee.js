const inquirer = require("inquirer");

// define the Employee class
class Employee{
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
}

// export the Employee class
module.exports = Employee;

