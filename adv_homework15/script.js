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
  


const isActive = response.data; 
  console.log(`isActive`, isActive)

const getTotal = response.meta.paging.total;
  console.log(`getTotal`, getTotal)

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
const createMessage = ({author: guest, text, reciever, time = new Date()}) => {
  return `From ${guest} to ${reciever}: ${text} (${new Date()})`;
};
const message = createMessage("Peter", "Sam", "Hello", new Date());
console.log(`message`, message);



// 5.1 +
let str = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";
  const findMatches = (text) => {
    return text.match (/\w\d+\w+/gi) 
  }
const matches = findMatches(str);
console.log(`matches`, matches)

// task 5.2 +-
const match = /^(?!\-)(?:[a-zA-Z\d\-]{0,62}[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{0,63}$/gm;
console.log(`match.test('ex.ua')`, match.test('ex.ua'));
console.log(`match.test('google.com')`, match.test('google.com')) ;
console.log(`match.test('yandex.ru')`, match.test('yandex.ru'));
console.log(`match.test('site.com.ua')`, match.test('site.com.ua'));
console.log(`match.test('my-page.com')`, match.test('my-page.com'));

// 5.3 +
let strOfNum = "7, 903, 123, 45, 5, 67,59,9393,04,797,0,04";

let numbers = strOfNum.match(/\d{1,}/g);

console.log(`numbers`, numbers) ;




