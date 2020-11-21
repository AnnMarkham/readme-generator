licenses = require('./licenseInfo');
const fs = require('fs');

// function to generate markdown for README
function generateMarkdown(data) {


  return `
  # Project Title: ${data.title}
   
## Description ${data.description}

## Table of Contents:
1. [Installation] (#Installation)
1. [Usage](#Usage)
1. [Credits](#Credits)
1. [License](#License)
1. [Tests](#Tests)
1. [Questions](#Questions)


## Installation ${data.installation}

## Usage ${data.usage}

## Credits ${data.credits}

## License ${data.license}

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
