// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


let questions =[{
    type: "input",
    name: "title",
    message: "What is the title?",
},
{
    type: "input",
    name: "description",
    message: "Provide a description of your project?",
},
{
    type: "input",
    name: "installation",
    message: "Does this project have specific installation requirements?",
},
{
    type: "input",
    name: "usage",
    message: "Does this project have usage guidelines?",
},
{
    type: "input",
    name: "contributors",
    message: "List the GitHub usernames of all contributors for this project:",
},
{
    type: "list",
    name: "license",
    message: "Did you use any licenses?",
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
},
{
    type: "input",
    name: "features",
    message: "List any features:",
},
{
    type: "input",
    name: "Howtocontribute",
    message: "How would you like for them to contriubte?",
},
{
    type: "input",
    name: "tests",
    message: "Does this project require tests?"
},
{
    type: "input",
    name: "link",
    message: "Provide a link to your live project?",
},
{
    type: "input",
    name: "creator",
    message: "Provide your full name:",
},
{
    type: "input",
    name: "github",
    message: "What is your github username?"
},
{
    type: "input",
    name: "contact",
    message: "Provide a valid email address?",
},

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err,data) => {
        if (err) console.log(err)

        console.log("readme generater")
    })
}

// TODO: Create a function to initialize app
function init() {
 inquirer.prompt(questions).then (answers => {
let READMEstring=generateMarkdown(answers);
console.log(READMEstring)
writeToFile('README.md',READMEstring)
 })
}

// Function call to initialize app
init();

// the prompt make sure to include what you going to have in the readme ... also the prompt is sensitive be sure to have you commas and stuff in the right place
   // type: "list"
        // name: ""
        // message: ""
        // choices: [array of choices] *if needed*
        