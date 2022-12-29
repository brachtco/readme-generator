/*GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README*/

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'

    {
        type: 'input',
        name: 'descritption',
        message: 'Provide a description of your project.'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Enter the instructions for installation.'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Enter any usage information for the project.'
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for other developers contributing to the project.'
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions for your project.'
    },

    {
        type: 'list',
        name: 'license',
        message: 'From the list choose a license for your project.',
        choices: ['Apache-2.0', 'ISC', 'MIT', 'PERL']
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }

];

// TODO: Create a function to write README file
function writeToFile('README.md', response) {
    if(err) {
        console.log(err);
    } else {
        console.log('README file created!')
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response)
    });
    .catch((err) => {
        console.log(err);
    });
}

// Function call to initialize app
init();
