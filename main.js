"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
//const answer = await inquirer.prompt([
//  {
//      type: 'input',
//      name: 'name',
//      message: 'what is your name'
//      },
//])
var myNumber = await inquirer_1.default.prompt([
    {
        type: 'number',
        name: 'yournumber',
        message: 'enter my number '
    },
]);
console.log('enter my number ' + myNumber.yournumber);
