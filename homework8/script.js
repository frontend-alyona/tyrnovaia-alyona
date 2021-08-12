// task 1



const findTrue  = (ar) => {
  let quantity = 0;
  ar.filter((i) => {
    if (i === true) { quantity++ }
  })
  console.log(quantity)
  }
   
  
  findTrue([true, false, false, true, false]); 
  
  findTrue([false, false, false, false]); 
  
  findTrue([]); 


 



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

// task 3 +

function getOddNum (array) {
  let findOddNum;
  let odd = [];
  let even = [];

  array.forEach(function(i) {
      if (i % 2 === 0) even.push(i);
      else odd.push(i);
  });

  if (odd.length !== 1 && even.length !== 1) {
  } else {
    findOddNum = (odd.length === 1 ? odd[0] : even[0]);
  }
  console.log(findOddNum);
}

getOddNum([0, 1, 2]); 
getOddNum([1, 2, 3]); 
getOddNum([2, 6, 8, 10, 3]); 
getOddNum([0, 0, 3, 0, 0]); 
getOddNum([1, 1, 0, 1, 1]); 






  



           
                
        
        
            
        
    


       


    






