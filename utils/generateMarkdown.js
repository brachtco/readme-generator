// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    Apachev2:
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    PERL: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
  };
  return badges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    Apachev2: "[Apache](https://opensource.org/licenses/Apache-2.0)",
    ISC: "[ISC](https://opensource.org/licenses/ISC)",
    MIT: "[MIT](https://opensource.org/licenses/MIT)",
    PERL: "[PERL](https://opensource.org/licenses/Artistic-2.0)",
  };
  return licenseLinks[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ${this.renderLicenseBadge(response.license)}

  ## Table of Contents

    [Description](#Description)
    [Installation](#Installation)
    [Usage](#Usage)
    [Contributing](#Contributing)
    [Tests](#Tests)
    [License](License)

    ### Description
    ${response.description}

    ### Installation
    ${response.installation}

    ### Usage
    ${response.usage}

    ### Contributing
    ${response.contributing}

    ### Tests
    ${response.tests}

    ### License
    ${response.license}

    ###Questions
    ${response.github}
    ${response.email}




`;
}

module.exports = generateMarkdown;
