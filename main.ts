import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is your name'
        },
])

//const myNumber = await inquirer.prompt([
//  {
//      type: 'number',
//      name: 'yournumber',
//      message: 'enter my number '
//
//    },
//    ])
//console.log('enter my number ' + myNumber.yournumber);
