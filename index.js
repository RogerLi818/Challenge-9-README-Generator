// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const path = require('path');


// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'What is your Project Title? (Required)',
        validate:nameInput=>{
            if(nameInput){
                return true;
            }else{
                console.log("Please enter your project title!");
                return false;
            }
        }
    },
    {
        type:'input',
        name:'motivation',
        message:'What was your motivation?'    
    },
    {
        type:'input',
        name:'why',
        message:'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")'    
    },
    {
        type:'input',
        name:'solve',
        message:'What problem does it solve?'    
    },
    {
        type:'input',
        name:'learn',
        message:'What did you learn?'    
    },
    {
        type:'input',
        name:'installation',
        message:'What are the steps required to install your project?'    
    },
    {
        type:'input',
        name:'use',
        message:'Provide instructions and examples for use'    
    },
    {
        type:'input',
        name:'contribute',
        message:'How to Contribute?'    
    },
    {
        type:'checkbox',
        name:'licenses',
        message:'What is your license?',
        choices:["ApacheLicense2.0","GNUGPLv3","MIT","ISC","GNUGPLv2"],
    },
    {
        type:'input',
        name:'test',
        message:'Write tests for your application?'    
    },
    {
        type:'input',
        name:'github',
        message:'What is your Github username?'    
    },
    {
        type:'input',
        name:'email',
        message:'What is your email address?'    
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(function(answer){
        writeToFile('README.md', generateMarkdown({ ...answer }));
        console.log("Readme created completed");
        console.log(answer.licenses);
    })
}

// Function call to initialize app
init();


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README




