import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown';

const { error } = require('console');


const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. You can include screenshots as needed:',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'Apache', 'GPL', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'features',
      message: 'If your project has a lot of features, list them here:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. You can refer to the [Contributor Covenant](https://www.contributor-covenant.org/) as an industry standard:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here:',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .createPromptModule(questions)
        .then((answers)=> {
            const readmeContent = generateMarkdown(answers);
            writeToFile('README.md', readmeContent);
            console.log('README.md successfully generated!');
        })
        .catch((error) => console.error(error));
    }

// Function call to initialize app
init();
