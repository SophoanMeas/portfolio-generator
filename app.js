const inquirer = require("inquirer")

inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: 'what is your name?'
    }])
    .then(answer => console.log(answer));


// const generatePage = require('./src/page-template.js');
// const fs = require('fs');

// const profileDataArgs = process.argv.slice(2);

// const [name, github] = profileDataArgs;

// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });