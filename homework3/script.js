// homework 3
// task 1
const num1 = Number(prompt('write any number'));
const num2 = Number(prompt('write any number'));

if(num1>num2){
    alert('the first number is greater than the second');
} else if(num1<num2){
    alert ('the first number is less than the second');
} else {
    alert ('numbers are equal');

}
    






// task2
const number1 = Number(prompt('write any number'));
const number2 = Number(prompt('write any number'));
let result =0;
const operationResult = prompt('what operation you want to do?')
 

    switch (operationResult){
        case "+": number1 + number2;
            break;
        case "-": number1 - number2;
            break;
        case "*": number1 * number2;
            break;
        case "/": number1 / number2;
            break;
                       
}  
alert ('result', operationResult);     

// task3
const visitorAge = Number(prompt('How old are you?'));

if ((visitorAge>=12 && visitorAge<=18) || (visitorAge>=60 && visitorAge<=80)){
    const isWithParents = confirm('Are you with parents?');
    if (isWithParents) {
        alert ('Access is allowed')
    } else{
        alert ('Access is denied');
    } 
}
else if (visitorAge <12 || visitorAge  >80){
    alert ('Access is denied');
} else {
    alert('Access is allowed');
}



