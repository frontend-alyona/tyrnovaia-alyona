// task 1
function showTimeTask() {

    const timeTable = {};
    do{
        task = prompt('what task you will do?');
        if(task===null) {
            break;
        }
        time = prompt ('when will you do the task?');
        if(time!==null) {
    timeTable[time] = task;
}

    } while(task!==null && time!==null );

    return timeTable;
}


console.log(showTimeTask());


// task 2
const salaries = {
    teacher: '500',
    manager: '700',
    plumber: '550'
};
 const getSalaryTotal = (salaries) =>{
    let total =0;
    for (let employee in salaries){
        console.log( 'employee', employee);
        console.log( 'salaries[employee]', salaries[employee]);
        total += +salaries[employee];   
    }
    return total;
 };
const totalSum = +getSalaryTotal(salaries);
console.log('totalSum', totalSum);
