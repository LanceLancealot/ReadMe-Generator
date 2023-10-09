function renderLicenseBadge(license) {
  if (!license)  return '';
  return `![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)`;
}

function renderLicenseLink(license) {
  if (!license) return '';

  return `[License](https://opensource.org/licenses/${license})`;
}

function renderLicenseSection(license) {
  if (!license) return '';

  return `This project is licensed under the ${license} License - see the [LICENSE](LICENSE) file for details.`;
}

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${licenseSection}

---

## Features

${data.features}

## How to Contribute

${data.contribution}

## Tests

${data.tests}
`;
}

export default generateMarkdown;