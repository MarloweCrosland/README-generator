class MarkDown {
    static generateReadme(answers){
        return`
#${answers.title}

##Table of Contents
- [Project description](#Description)
- [Usage](#Usage)
- [What I Learned](#Learned)
- [Github](#Github)
- [Licenses](#Licenses)

##Description
    ${answers.description}
        
##Usage
    ${answers.instructions}

##What I learned
    ${answers.learned}

##Github
    ${answers.git}

##Licenses
    ${answers.license}`
    }
}

module.exports = MarkDown










