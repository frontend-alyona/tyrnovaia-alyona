// task 1



const getQuantityTrue = ( arr) => {
    let clone = arr.slice(0),
        tested =[],
        current,
        count =0;

    while (clone.length) {
        current = clone.shift();
        if (tested.indexOf(current) === -1) {
            
            tested.push(current);
            
            if (clone.indexOf(current) >= 0) {
              count++;
            }
          }
    }    
    return document.writeln(count+'<br>');
}



getQuantityTrue ([true, false, false, false, true ]);
getQuantityTrue ([ ]);


// task 2

const arr = ['ab','pq','mn','ab','mn','ab', 'ab', 'mn']

const occurrences = { };
for (let i = 0, j = arr.length; i < j; i++) {
   occurrences[arr[i]] = (occurrences[arr[i]] || 0) + 1;
}

console.log(occurrences);        
console.log(occurrences['ab']); 

// task 3

const getOddNum =(array) => {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if(item % 2) 
      console.log(item);
  }
}

let arr = [4, 100, 36, 15, 80];
getOddNum(arr);

           
                
        
        
            
        
    


       


    






