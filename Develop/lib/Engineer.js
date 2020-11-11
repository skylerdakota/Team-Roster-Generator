// require in employee page because engineer inherits from this class
const Employee = require("./Employee");

// define the Engineer class
class Engineer extends Employee {
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

// export the Engineer class
module.exports = Engineer;