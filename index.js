// require modules 
const fs = require('fs'); 
const inquirer = require('inquirer');


const readmeGen = require("./lib/readmeGen");


// array of questions for user
const questions = () => {
    // using inquirer to prompt questions to user 
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title? (Required)',
        //validate answer has been given
        validate: (value) =>{ if (value){return true} else { return 'title required'}},
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for the project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install this app?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain how to use this app.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: [ 
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
        ],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'who worked on this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How to test this app?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'git',
        message: 'Enter your  personal github repository link',
    }
    ]);
}
// function to write README file using file system 
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 



questions()
.then(answers => {
    return readmeGen(answers);
})
// using data to display on page 
.then(data => {
    return writeFile(data);
})
// catching errors 
.catch(err => {
    console.log(err)
})
