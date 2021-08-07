// task 1

const trueArr = [true, false, false, false, true];

const findTrue = (trueArr) => {
  const trueQuantity = [];
  for (let i = 0; i < trueArr.length; i++){
    trueQuantity[trueArr[i]] = (trueQuantity[trueArr[i]] || 0) + 1;
  }
  
  console.log(trueQuantity[true]);
  console.log([]);
}

findTrue(trueArr);

/* работает, но не совсем так как нужно. Если массив состоит из false,
то консоль показывает undefined */
 



// task 2 +

const arr = ['ab','pq','mn','ab','mn','ab', 'ab', 'mn']

const elemQuantity = (arr) => {
  const occurrences = { };
for (let i = 0, j = arr.length; i < j; i++) {
   occurrences[arr[i]] = (occurrences[arr[i]] || 0) + 1;
}
console.log(occurrences);        
console.log(occurrences['ab']); 
}

elemQuantity(arr);

// task 3

const getOddNum =(array) => {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if(item % 2) 
    
      console.log(item);
    
  }
  for (let j =0; j < array.length; j++){
    let item2 = array2[j];
    if ((item2 % 2 )!=1)

    console.log (item2);
    
  }
}

let array = [4, 100, 36, 15, 80];
let array2 = [3,17, 29, 33, 100];
getOddNum(array);
getOddNum (array2);





  



           
                
        
        
            
        
    


       


    






