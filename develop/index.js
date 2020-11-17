// array of questions for user
const questions = [

    {
        message : "The Title of the Project",
        name: "title" 
    },

    {
        message : "Project Description",
        name: "Description" 
    },

    {
        message :"Table of Contents", 
        name: "list" 
        // WHEN I click on the links in the Table of Contents, THEN I am taken to the corresponding section of the README
    },

    {
        message : "what is the Installation process" ,
        name: "Installation" 
    },
    
    {
        message :"How will this project be used?",
        name :"Usage",
        
    },
    
    {
        message :"what Licenses are required for this project",
        name: "License" 
        // a license for my application from a list of options
    },
    
    {
        message :"Who were the contributors to this project? " ,
        name: "Contributor" 
    },
   
    {
        message :"What is the Tests process?",
        name: "Test" 
    },

    {
        message :"Questions",
        name: "Questions" 
    },
    
    {
        message :"GitHub username",
        name : "Github"
        // to be added to the questions section of the README entitled Questions, with a link to my GitHub profile
    },

    {
        message :"Email Address",
        name : "Email"
        // to be added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

