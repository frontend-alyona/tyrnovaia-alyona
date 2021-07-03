// homework4
// task1 
function sum(a, b) {
    return a + b;
  }
  
let result = sum(5, 7);
alert( result );

  sum();
  sum();

//  стрелoчная функция 
const sum = (a, b) => a + b;
const res = sum(5,7);
console.log('res', res);


// task2
function userData (){
    const userName = prompt('What is your name?');
    const userAge = Number(prompt('How old are you?'));
    
    if (userAge > 30){
        alert("Hello" + " " + userName);
    } else {
        alert("hi" + " " + userName);
    }
}
userData();


// task3

function pow(a, b) {
    return a ** b;
  }
  let result = pow(2, 3);
  alert( result );

  pow();









