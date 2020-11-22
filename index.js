"use strict"
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const fs = require('fs');



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
    name: 'installation',
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
    type: 'list',
    name: 'license',
    message: 'Please select the applicable license.',
    choices: ['MIT', 'Apache 2.0', 'GNU GPLv3']
  },
  {
    type: 'input',
    name: 'toContribute',
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
const promptQuestions = () => {
  return inquirer.prompt(questions);
}


// // function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: fileName + "File Created"
      });
    });
  });
};

// // function to initialize program
function init() {
  promptQuestions()
    .then(data => {
      let markdownData = generateMarkdown(data);
      writeToFile("README.md", markdownData)
    });
}

// // function call to initialize program
init();
