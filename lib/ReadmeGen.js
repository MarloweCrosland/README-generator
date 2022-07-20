function generateReadme(answers){
        return`
<h1 align="center">${answers.projectTitle}</h1>

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Description
${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}
        
## Usage
${answers.usage}

## Licenses
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions

Email me: ${answers.email}

Find me on github: (${answers.git})
    
`;
}

module.exports = generateReadme;










