// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Employee extends Engineer {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole(){
        return "Engineer"
    }
    getGithub(){
        return this.github
    }
}

module.exports = Engineer;



    // }
    // getGithub(){
    //     inquirer
    //         .prompt([
    //         {
    //             type: "input",
    //             name: "github",
    //             message: "What is the employees github username?"
    //         }
    // }
