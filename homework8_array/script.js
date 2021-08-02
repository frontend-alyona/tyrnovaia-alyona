// task 1



function getQuantityTrue ( arr)  {
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


let arr = [11, 25, 2, 4, 100, 36, 80];

for (let n in arr) {
  console.log("arr." + n + " = " + arr[n]);
}


           
                
        
        
            
        
    


       


    






