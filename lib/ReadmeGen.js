class MarkDown {
    static generateReadme(answers){
        return`
#${answers.title}

##Table of Contents
- [Project description](#Description)
- [Usage](#Usage)
- [Tests](#Tests)
- [Questions](#Questions)
- [Licenses](#Licenses)

##Description
    ${answers.description}
        
##Usage
    ${answers.instructions}

##Tests
    ${answers.tests}

#Questions

##Email
    ${answers.email}

##Github
    ${answers.git}
    
##Licenses
${answers.license}`

    }
}

module.exports = MarkDown










