// import inquirer from "inquirer";
// // Asking questions from user through Inquirer
// let answers = await inquirer.prompt([ 
//     {message: "enter first number", type: "number ",name: "firstNumber"},
//     {message: "enter second number", type:"number", name :"secondNumber"},
// {
//     message: "select one operator to perform operations",
//     type :"list",
//     name: "operator",
//     choices:["Addition","Subtraction","Multiplication","Division"],
// },
// ]);
// // Conditional statement If-Else
// //if (answers.operator ===  "addition")
// if (answers.operator === "Addition") 
// {
//     console.log(answers.firstNumber  + answers.secondNumber );
// }
//  else if (answers.operator === "Subtraction")
//  {
//  console.log(answers.firstNumber - answers.secondNumber);
//  }
// else if  (answers.operator === "Multiplication")
// {
// console.log(answers.firstNumber * answers.secondNumber);
// }
// else if  (answers.operator === "Division")
// {
//  console.log(answers.firstNumber / answers.secondNumber);
// }
// else {
// console.log("Invalid operator")};
//#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First number", type: "number", name: "firstName" },
    { message: "Enter second number", type: "number", name: "secondName" },
    {
        message: "select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(` ${answer.firstName + answer.secondName}`);
}
else if (answer.operator === "Substraction") {
    console.log(`${answer.firstName - answer.secondName}`);
}
else if (answer.operator === "Multiplication") {
    console.log(`${answer.firstName * answer.secondName}`);
}
else if (answer.operator === "Division") {
    console.log(`${answer.firstName / answer.secondName}`);
}
else {
    console.log("please select valid operator");
}
