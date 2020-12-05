const fs = require('fs');
const inq = require('inquirer');
const generate = require("/generateMarkdown.js");

const questions = [
    {
        type: 'input',
        message: 'The Title of the Project',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Project Description',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'Table of Contents',
        name: 'checkbox',
    },
    {
        type: 'input',
        message: 'What should the user run to Install dependencies',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'How will this project be used?',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'What Licenses are required for this project',
        name: 'License',
        choices: ["APACHE 2.0", "MIT", "GPL 3.0", "None"]
    },

    {
        type: 'input',
        message: 'Who were the contributors to this project?',
        name: 'Contributor',
    },
    {
        type: 'input',
        message: 'What is the Tests process?',
        name: 'Tests',
    },
    {
        type: 'input',
        message: 'Questions',
        name: 'Questions',
    },
    {
        type: 'input',
        message: 'GitHub username',
        name: 'Github',
    },
    {
        type: 'input',
        message: "Email Address",
        name: "Email"
    },
];


// function to initialize program
function init() {
    inq.prompt(questions)

        .then((answers) => {
            console.log(answers);

            var newReadMe = generate.generateMarkdown(answers);
            console.log(newReadMe);

            fs.writeFile("NEWREADME.md", newReadme, err => {
                err ? console.log(err) : console.log("The New ReadMe has been created.");
            });
        }  
// function call to initialize program
init();
