// function to generate markdown for README
function generateMarkdown(data) {

  return `
  # Project Title: ${data.title}

## Description ${data.description}

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
