"use strict"
const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/gererateMarkdown.js')

const questions = [

  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project.'
  },
  {
    type: 'input',
    name: 'installation-instructions',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.'
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List colaborators(if any) with links to their GitHub profiles. Also list any 3rd party assets that require attribution(include creator(s) and links to primary web presence.'
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Please select the applicable license.',
    choices: ['ADD1', 'ADD2', 'ADD3']
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Please enter contribution guidelines for your project.  '
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please enter test instructions.'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub Username.'
  },
  {
    type: 'input',
    name: 'link',
    message: 'Enter the github link for your project. '
  },
  {
    type: 'input',
    name: 'contactMe',
    message: 'Please provide email address and any additonal instructions for contacting you.'
  }
]

const promptUser = () => {
  return inquirer.prompt(questions);
};

promptUser();

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
