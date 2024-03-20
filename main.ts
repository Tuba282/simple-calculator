#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter Your First Number", name: "firstNumber", type: "number" },
  { message: "Enter your Second Number", name: "secondNumber", type: "number" },
  {
    message: "Select your Operation",
    name: "operator",
    type: "list",
    choices: ['Addition','Subtraction','Multiplication','Division'],
  },
]);
//Condition part
if(answer.operator === 'Addition'){
    console.log(answer.firstNumber + answer.secondNumber);
    
}else if(answer.operator ==='Subtraction'){
    console.log(answer.firstNumber - answer.secondNumber);
    
}else if(answer.operator ==='Multiplication'){
    console.log(answer.firstNumber * answer.secondNumber);
    
}else if(answer.operator === 'Division'){
    console.log(answer.firstNumber / answer.secondNumber);
    
}else{
    console.log(`Please select valid options`);
    
}
