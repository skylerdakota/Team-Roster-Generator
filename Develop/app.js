// require in all npm packages, standard node libraries and node.js files we are using to run the code below
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Code that uses inquirer to gather information about the development team members,
// and to create objects for each team member

const managerQuestions = [
    {   type: "input",
        name: "name",
        message: "What is the employee's full name?"
    },
    {   type: "input",
        name: "id",
        message: "What is the employee's ID?"
    },
    {   type: "input",
        name: "email",
        message: "What is the employee's email address?"
    },
    {   type: "input",
        name: "officeNumber",
        message: "What is the employee's office number?"
    },
];

const engineerQuestions = [
    {   type: "input",
        name: "name",
        message: "What is the employee's full name?"
    },
    {   type: "input",
        name: "id",
        message: "What is the employee's ID?"
    },
    {   type: "input",
        name: "email",
        message: "What is the employee's email address?"
    },
    {   type: "input",
        name: "github",
        message: "What is the employees github username?"
    },
];

const internQuestions = [
    {   type: "input",
        name: "name",
        message: "What is the employee's full name?"
    },
    {   type: "input",
        name: "id",
        message: "What is the employee's ID?"
    },
    {   type: "input",
        name: "email",
        message: "What is the employee's email address?"
    },
    {   type: "input",
        name: "school",
        message: "What is the employee's school affiliation?"
    },
];

// a place to store the employee information as it is generated
const employees = [];

// starting question to gather manager data 
inquirer.prompt(managerQuestions)
    .then (response => {
        console.log("Let's build your team!")
        const teamMember = new Manager(response.name, response.id, response.email, response.officeNumber);
        employees.push(teamMember);
        generateNewTeamMember();
    });

// function to determine role of new team member being added and then go to the proper function that will call the correct
//questions based on that role or render the final html file
function generateNewTeamMember() {
    inquirer.prompt([
        {   type: "list",
            message: "Which type of team member would you like to add?",
            name: "role",
            choices: [ 
            "Engineer", 
            "Intern", 
            "I don't want to add any more team members",
            ]}])
    .then (response => {
        if (response.role === "Engineer"){
           addEngineer();
            } else if (response.role === "Intern"){
                addIntern();
            }else{
                // After the user has input all employees desired, call the `render` function (required
                // above) and pass in an array containing all employee objects; the `render` function will
                // generate and return a block of HTML including templated divs for each employee!
                const html = render(employees);
                fs.writeFile(outputPath, html, (err) => {
                    if (err) throw err;
                });
            }
        })
    }

// function to prompt engineer questions to user to generate data for a new engineering employee
function addEngineer() {
    inquirer.prompt(engineerQuestions)
    .then (response => {
        const teamMemberEngineer = new Engineer (response.name, response.id, response.email, response.github);
        employees.push(teamMemberEngineer);
        generateNewTeamMember();
    })
}

// function to prompt intern questions to user to generate data for a new interns
function addIntern() {
    inquirer.prompt(internQuestions)
    .then (response => {
        const teamMemberIntern = new Intern (response.name, response.id, response.email, response.school);
        employees.push(teamMemberIntern);
        generateNewTeamMember();
    })  
}

// take photo and video of application and update link in readme
// submit it
