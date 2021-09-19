// task 1 +-
const response = {
    data: [
      {
        username: "samuel",
        is_active: true,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
      {
        username: "john",
        is_active: false,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
      {
        username: "peter",
        is_active: false,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
    ],
    meta: {
      paging: {
        current: 1,
        next: 2,
        prev: null,
        total: 14,
        per_page: 3,
      },
    },
  };
  
  const {
    meta:{
      paging:{
        total: getTotal,
      }
    },
  } = response;
  console.log(`getTotal`, getTotal);


  const getIsActive = response.data.filter(({is_active: isActive}) =>isActive === true  || isActive === false);
  console.log(`getIsActive`, getIsActive);
    



  // task 2 +
const user = {
    name: "gabriel",
    surname: "brown",
    age: 17,
    height: 178,
  };

  const {name,surname, ...parametrs} = user
  console.log(`name`, name);
  console.log(`surname`, surname);
  console.log(`parametrs`, parametrs);

// task 3 +

const arr = [3, 11, 3, 4, 5, 28, 90],
  arrMax = arr => arr.reduce((max,n) => n > max ? n : max)
      
console.log(arrMax(arr));

// task 4 +-
const createMessage = ({author = 'Guest',reciever, text, time = new Date()}) => {
  return `From ${'Guest'} to ${reciever}: ${text} (${time})`;
};

const message = createMessage({
  reciever: "John",
  text: "Hi!",
});

console.log(`message`, message);


// 5.1 +
let str = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";
  const findMatches = (text) => {
    return text.match (/\w\d+\w+/gi) 
  }
const matches = findMatches(str);
console.log(`matches`, matches);

// task 5.2 +

const match = /([A-z]+)(\.)([a-z]{2,})/;
console.log(`match.test('ex.ua')`, match.test('ex.ua'));
console.log(`match.test('google.com')`, match.test('google.com')) ;
console.log(`match.test('yandex.ru')`, match.test('yandex.ru'));
console.log(`match.test('site.com.ua')`, match.test('site.com.ua'));
console.log(`match.test('my-page.com')`, match.test('my-page.com'));

// 5.3 +
const regex = /^[0-9]{12,}$/;
console.log(`regex.test('23468898765432')`, regex.test('23468898765432'));      
console.log(`regex.test('285083549607g')`, regex.test('285083549607g'));
console.log(`regex.test('4658')`, regex.test('4658'));
console.log(`regex.test('287539065189673')`, regex.test('287539065189673'));
console.log(`regex.test('fhjd393938575648kk')`, regex.test('fhjd393938575648kk'))




