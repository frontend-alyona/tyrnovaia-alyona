// // homework 2
// // let userAge = 10;

// // let userName ="Alena";


// // let userSurname = "Tyrnovaia";

// // let userNew = "new";

// // let listProducts = "products";
// // let userOnline = "online";

// // let salaryWorker = "salary";

// // let cursorCoordinates = "cursor";

// // const greeting = 'Hello world';
// // console.log('greeting', greeting);

// // lesson 5 циклы ( повтор за Никитой)
// // Задача 1 написать функция для авторизации пользователя с базой валидации данных. 
// //     1) логин и пароль должны совпадать со следующими данными :
// //         ADMIN  1q2w3e
// //     2) Если пользователь не ввел логин, показать ему "введите логин" 
// //         и начать авторизация заново. Если не ввел пароль - "введите пароль "
// //         и начать авторизация заново.
// // // Задача 2 Реализовать функцию, которая будет рисовать в консоли  пирамидку 
// //     заданой пользователем высоты
// //      *
// //     * *
// //    * * *
// //   * * * * и т д  
// // Задача 1
// const LOGIN = 'ADMIN';
// const PASSWORD = '1q2w3e';

// const authorise = () => {
//     let userPassword;
//     let userLogin;
//     let isAuthSuccess= false;
        

//     do{
//         userLogin = prompt('Логин:');
//         if (! userLogin){
//             alert ('введите логин');
//             continue;
//         }

//         userPassword = prompt('Пароль');
//         if (! userPassword){
//             alert ('введите парфоль');
//             continue;
//         } 
        

            
//         if (userPassword === PASSWORD || userLogin === LOGIN){
//             isAuthSuccess = true
//         }else {
//             alert ('Данные неверны');
//         }

        
//     } while (!isAuthSuccess)

//     alert('Welcome!')
// }
// authorise()



// // Задача 2
// const drawPiramid = (height) =>{
//     for ( let i = 0; i < height;  i ++){
//         let spasesBefore = '';
//         let stars = '';

//         for ( let j =0; j < 2 * i+1; j++){
//             stars += '*';
//         }

//         for (let k =0; k <height -i -1; k++){
//             spasesBefore +=' ';
//         }
//         console.log (spasesBefore + stars);
//     }
// };

// const desiredHeight = Number(prompt('какая высота пирамиды?'));
// drawPiramid(desiredHeight);





// lesson 5 про строки(практика)
// 1. Написать фунцкию, которая принимает на вход 
//    hex код цвета, а возвращает rgb код

//    #ffffff -> rgb(255, 255, 255);
//    #f5f5f5 -> rgb(245, 245, 245);
//    #873a3a -> rgb(135, 58, 58);

// 2. Написать функцию, которая принимает на вход 3 аргумента
//    red, green и blue, каждый их которых отвечеат за соответсвующий
//    канал цвета, и возвращает hex код типа #ffffff


// 3. Написать функуию, которая может замаскировать номер карты
//    На вход она принимает строку, содержащую номер, а
//    возвращает замаскированную карут

//    4141414141414141 -> 4141 **** **** 4141
//    5168111147864573 -> 5168 **** **** 4573



// Task 1  вариант решении 1 
// const getRGBFromHex = (hexCode) => {
    // const red = hexCode.slice(1, 3);
    // const green = hexCode.slice(3, 5);
    // const blue = hexCode.slice(5, 7);
  
    // console.log(`red`, red)
    // console.log(`green`, green)
    // console.log(`blue`, blue)
  
    // const decimalRed = parseInt(red, 16);
    // const decimalGreen = parseInt(green, 16);
    // const decimalBlue = parseInt(blue, 16);
  
    // return `rgb(${decimalRed}, ${decimalGreen}, ${decimalBlue})`
// }
// const rgbResult = getRGBFromHex(`#fffffffff`);
// console.log(`rgbResult`, rgbResult)

// задача 1 вариант решения 2
// const getRGBFromHex = (hexCode) => {
//     let codes = ''; // 255, 255, 255
  
//     for (let i = 1; i < hexCode.length; i += 2) {
//       console.log(`i`, i)
//       const color = hexCode.slice(i, i + 2);
//       let parsedColor = parseInt(color, 16)
//       console.log(`color`, color)
  
//       if (i !== hexCode.length - 2) {
//         parsedColor = `${parsedColor}`
//         }  
// codes+= persedColor
// }

// task 2
// const getHexFromRGB = (r,g, b) => {
//     return `#${r.toString(16)} ${g.toString(16)} ${b.toString(16)}`
// }
// const resultHex = getHexFromRG(255, 255, 255)
// console.log(`resultHex`, resultHex);

// task3 замаскировать номер карты
// const maskCreditCard = (cardNumber) =>{
//     const MASK = '****';
//     let reult = '';

//     for(let i =0; j=1; i< cardNumber.length, i+= 4, j++) {
//         const numbers = cardNumber.slice(i,i +4);
//         let maskingResult;
//         console.log(`numbers`, numbers); 

//         if(j===2 || j===3){
//             maskingResult = MASK
//         }else {
//             maskingResult= numbers
//         }

//         if(j!==4){
//             result += `${maskingResult} `
//         } else{
//             result += maskingResult
//         }
//     }
//     return result
// }
// const res = maskCreditCard('5168111147864573');
// console.log('res', res);


// урок 7 Практика. Рекурсия
// глубке копирвание на любом урвне
const deepObject ={
    a:{
        b:{
            c:{
                d:{
                    e:1,
                }
            }

        }
    },
    f:2,
}

const deepClone =  makeDeepClone (deepObject);
deepObject.a.b.c.d.e=2;

console.log ('deepObject', deepObject);  
//  в консоли е=1
console.log ('deepClone', deepClone)
// в консоли е =2












  