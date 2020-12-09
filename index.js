const fs = require('fs');
const inq = require('inquirer');
const generateReadme = require("./generateMarkdown.js");

const questions = [
    {
        type: 'input',
        message: 'The Title of the Project',
        name: 'title',
    },

    {
        type: 'input',
        message: 'Project Description',
        name: 'description',
    },

    {
        type: 'input',
        message: 'What should the user run to Install dependencies',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How will this project be used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What Licenses are required for this project',
        name: 'license',
        choices: ["APACHE 2.0", "MIT", "GPL 3.0", "None"]
    },

    {
        type: 'input',
        message: 'Who were the contributors to this project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What is the Tests process?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Questions',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'GitHub username',
        name: 'github',
    },
    {
        type: 'input',
        message: "Email Address",
        name: "email"
    },
];

  
// function to initialize program
function init() {
    inq.prompt(questions)

        .then((answers) => {
            console.log(answers);

            var newReadMe = generateReadme(answers);
            console.log(newReadMe);

            fs.writeFile("NEWREADME.md", newReadMe, err => {
                err ? console.log(err) : console.log("The New ReadMe has been created.");
            });
        })
}

// function call to initialize program
init();
