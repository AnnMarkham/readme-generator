
const fs = require('fs');

// function to generate markdown for README
function generateMarkdown(data) {


  return `

  # Project Title: ${data.title}
![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
   
## Description ${data.description}

## Table of Contents:
1. [Installation] (#installation)
1. [Usage](#usage)
1. [Credits](#credits)
1. [License](#license)
1. [Tests](#tests)
1. [Questions](#questions)


## Installation ${data.installation}

## Usage ${data.usage}

## Credits ${data.credits}

## License ${data.license}
### License Link  "https://choosealicense.com/licenses/${data.license}",

## Contribution ${data.toContribute}

## Tests ${data.tests}

## Questions 
For more information about this or other projects check out my GitHub page or send me an email.

### GitHub Page ${data.github}
### Live Website for this project ${data.link}
### Email Address ${data.contactMe}
`;
}

module.exports = generateMarkdown;
