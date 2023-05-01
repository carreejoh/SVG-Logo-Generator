const fs = require('fs');
const inquirer = require('inquirer');
const utils = require('./utils/createLogo.js');







const questions = [
    "Enter logo text (Will only accept up to 3 chars)",
    "Enter a text color (hexadecimal number, or color keyword",
    "Pick a shape for your design",
    "Enter a color for the shape (hexadecimal number, or color keyword",
];

function printSVG(data) {
    let svgReturn = utils.generateSVG(data);
    console.log(svgReturn);

    fs.writeFile('logo.svg', svgReturn, (err) => err ? console.log(err + "Too many characters") : console.log("Generated logo.svg"));
}

function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'textchar',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'textcolor',
        },
        {
            type: 'rawlist',
            message: questions[2],
            name: 'shapedesign',
            choices: ['Square', 'Circle', 'Triangle'],
        },
        {
            type: 'input',
            message: questions[3],
            name: 'shapecolor',
        }
    ])
    .then((data) => printSVG(data));
}

init();