const fs = require ('fs');
const inq = require ('inquirer');


inq.prompt ([

    {
     type:'input',
     message :'The Title of the Project',
     name:"title",
    },

    {
        type:'input',
        message :"Project Description",
        name: "Description"
    },

    {
        type:'input',
        message :"Table of Contents",
        name: "checkbox" 
    },
    // WHEN I click on the links in the Table of Contents, THEN I am taken to the corresponding section of the README
    {
        type:'input',
        message :"What is the Installation process" , 
        name: "Installation"
    },
    {
        type:'input',
        message :"How will this project be used?",
        name :"Usage"
    },
    {
        type:'input',
        message :"What Licenses are required for this project",
        name: "License" 
    },
    // a license for my application from a list of options
    {
        type:'input',
        message :"Who were the contributors to this project? ",
        name: "Contributor" 
    },
    {
        type:'input',
        message :"What is the Tests process?",
        name: "Test" 
    },
    {
        type:'input',
        message :"Questions",
        name: "Questions"
    },
    {
        type:'input',
        message :"GitHub username",
        name : "Github"
    },
    // to be added to the questions section of the README entitled Questions, with a link to my GitHub profile 
    {
        type:'input',
        message :"Email Address",
        name : "Email"
    }
])

// .then ((response) => response.github...more to publicDecrypt
console.log (response);
console.log ("Readme has been generated")
)
// array of questions for user
const questions = [

    {message :"The Title of the Project",name: "title"},
    {message :"Project Description",name: "Description"},
    {message :"Table of Contents", name: "list" },
    // WHEN I click on the links in the Table of Contents, THEN I am taken to the corresponding section of the README
    {message :"What is the Installation process" , name: "Installation"},
    {message :"How will this project be used?",name :"Usage"},
    {message :"What Licenses are required for this project",name: "License" },
    // a license for my application from a list of options
    {message :"Who were the contributors to this project? ",name: "Contributor" },
    {message :"What is the Tests process?",name: "Test" },
    {message :"Questions",name: "Questions"},
    {message :"GitHub username",name : "Github"},
    // to be added to the questions section of the README entitled Questions, with a link to my GitHub profile 
    {message :"Email Address", name : "Email"}
    // to be added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    ``

}

// function call to initialize program
init();

