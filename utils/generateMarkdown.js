// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return license=[""];
  }else{
    return license.map((licenseName)=>{return "![license](https://img.shields.io/badge/license-"+licenseName+"-blue.svg)"});
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.licenses)}

## Description
---

${data.motivation}

${data.why}

${data.solve}

${data.learn}

## Table of Contents 
---
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)


## Installation
---
${data.installation}

## Usage
---
${data.use}

## Contributing
---
${data.contribute}

## License
---
${data.licenses}

## Tests
---
${data.test}

## Questions
---
if you have any questions. Please contact [email](mailto:${data.email}) or check my [Github](https://www.github.com/${data.github})

`;
}

module.exports = generateMarkdown;

