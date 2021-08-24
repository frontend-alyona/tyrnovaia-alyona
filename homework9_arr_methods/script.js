// task 1 

const cars = [
  { 
    mark: 'Ford',
    model: 'Focus',
    year: 2009 
  },

  { 
    mark: 'Chevrole',
    model: 'Epica',
    year: 2015
  },

 {
    mark: 'Honda',
    model: 'Civik',
    year: 2015
  },
    
  {
    mark: 'Mitsubishi',
    model: 'Lancer',
    year: 2009
    
  },
    
  {
    mark: 'Subaru',
    model: 'Impreza',
    year: 2020
  },
    
  {
    mark: 'Ford',
    model: 'Mustang',
    year: 2015
 }
        
]
const filterData = (arr, filter) => {
  return arr.filter(item =>
      Object.keys(filter).every(key =>
          item[key] === filter[key]
      )
  );
};

filterData(cars,{year: 2015});
console.log(filterData(cars,{year: 2015}));

filterData(cars,{mark: 'Subaru',year: 2020});
console.log(filterData(cars,{mark: 'Subaru',year: 2020}));


// task 2
const isNegative = (number) => number < 0;
const increment = (number) => number + 1;
const logger = (element, index, array) => {
    console.log(`In array [${array}] on position ${index}: ${element}`);
};

// filter
const ownFilter = (arr, isNegative) => {
  let result = [];
  for (let key in arr) {
      let number = arr[key];
      if (isNegative(number)) {
          result.push(number)
      }
  }
  return result;
};

ownFilter([-2, 4, -1, 6, -5], isNegative);
console.log(ownFilter([-2, 4, -1, 6, -5], isNegative));

// map
const ownMap = (arr, increment) => {
  let result = [];
  for (let key in arr) {
      let number = arr[key];
      number = increment(number);
      result.push(number);
  }
  return result;
};

ownMap([1, 2, 3, 4, 5], increment);
console.log(ownMap([1, 2, 3, 4, 5], increment));

// forEach
const ownForEach = (array, logger) => {
  for (let index in array) {
      let element = array[index];
      logger(element, index, array);
  }
};

ownForEach([1, 2, 3, 4, 5], logger);











// forEach
// let array = [1, 2, 3, 4, 5]

// const forEach = (array, logger) => {
//    let newArray = [];
//     for (let i = 0; i < array.length; i++){
//         let item = array[i];
//     }
//     logger()

// }
// const logger = (item, index, array) => {
//     console.log(`In array [${item}] on position ${index}: ${array}`);
//   };
//   newArray = forEach(array, logger);
  


// method map +
 
// const ownMap = (arr, increment) => {
//    let newArr = [];
//    for(let i = 0; i < arr.length; i++){
//       let newArr = item

//       return item;

   
//     }
//    const newArr = increment(item, i, arr);
    
//     increment = (item, i, arr) => item + 1;
//    newArr = ownMap(arr, increment);
    
    
// }

// ownMap([1, 2, 3, 4, 5]);

// function range (start, end, step) {
//    if (!step) step = 1 // step size of zero makes no sense
//    let arrayNum = [];
//    // using ternary to decide stopping condition
//    for (let i = start; step > 0 ? i <= end: i >= end; i += step ) {
//      arrayNum.push(i);
//    }
//    return arrayNum;
//  };
 
// console.log(range(22, 34, 5))
// console.log(range(10, -10, -2))
// console.log(range(-5, -10, -1))


    
   




//   method filter +

// let ar = [-1, 2, -3, -4, 5];
 
// const ownFilter =(ar, isNegative ) => {
    
//     for (let i=0; i<ar.length; i++) {
//     let item = ar[i];
    
//     isNegative();
// }
     
// }
// const isNegative = (item) => item < 0;
// newAr = ownFilter(ar, isNegative())
// console.log(newAr)














