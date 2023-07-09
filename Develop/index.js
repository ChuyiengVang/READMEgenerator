// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

console.log(generateMarkdown);

// TODO: Create an array of questions for user input
//const questions = [];

inquirer.prompt([
    {
        type: 'input',
        message:'Title of your project',
        name:'title',
    },
    {
        type: 'input',
        message: 'Description of your project',
        name:'description',
    },
    {
        type: 'input',
        message: 'What are the Installation instructions?',
        name:'instaInstru',
    },
    {
        type: 'input',
        message: 'Whats the usage of this project for?',
        name:'usageInfo',
    },
    {
        type: 'list',
        messgae: 'What License did you use for the project?',
        name: 'license',
        choices: ['MIT', 'MPL 2.0', 'ISC', 'IPL 1.0', 'Unlicense']
    },
    {
        type: 'input',
        message: 'Contribution Guide',
        name:'contGuide',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'testInstru',
    },
    {
        type: 'input',
        message: 'What is your e-mail address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
]).then((data) => {

    const readMeContent = generateMarkdown(data);

    fs.writeFile('README.md', readMeContent, (err) => err ? console.error(err) : console.log('Success!'));
});
