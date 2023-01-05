// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license !== "None") {
  return `![licenseBadge](https://img.shields.io/badge/license-${license}-orange.svg)`
}
return "";

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `* [License](#license)`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
### License
This project is licensed under the ${license} license.
`


  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
${renderLicenseLink(data.license)}

### Description
${data.description}

### Installation
${data.installation}

### Usage
${data.usage}

### Contributing
${data.contributing}

### Tests
${data.tests}
${renderLicenseSection(data.license)}
### Questions
${data.github}
${data.email}




`;
}

module.exports = generateMarkdown;
