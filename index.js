const fs = require('fs');
const inquirer = require('inquirer');
const MarkDown = require('./lib/ReadmeGen')


// app questions

const questions = [
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
        name: 'instructions',
        message: 'Explain how to use this app.',
    },
    {
        type: 'input',
        name: 'learned',
        message: 'What did you learn?',
    },
    {
        type: 'input',
        name: 'git',
        message: 'Enter your  personal github repository link',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['MIT', 'ISC', 'GNUPLv3'],
    }];

// run query func
function runQuery() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const template = MarkDown.generateReadme(answers)
        fs.writeFile('README.md',template,function(err){
            if(err){
                console.log('Could not save file')
            } else {
                console.log('success, new README file generated inside current folder')
            }
        })
        return answers
    })
    .catch((error)=>{
        console.log(error)
    })
}


runQuery()




