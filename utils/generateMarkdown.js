// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  switch (license) {
    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)';
    case 'GPLv3':
      return '[GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache 2.0':
      return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'BSD 3-Clause':
      return '[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License
  This project is licensed under the ${renderLicenseLink(license)} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

You can find more of my work at [Github](https://github.com/${data.github}/).

If you have any questions about the repository or any concerns contact me directly at [Email](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
