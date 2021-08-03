// // task1 

// const validatePassword = (userPassword) => {
//     userPassword.length <=6 && userPassword.toLowerCase() && userPassword.toUpperCase() !== userPassword
//         userPassword = prompt('enter your password');
//         console.log('password must contain at least 6 symbols and letters')
// } 
    


    
// const authorise =()=>{
//     let userName;
//     let userSurname;
//     let userPassword;
    
    
//         do{
//             userName = prompt('What is your name?');
            
//             userSurname = prompt('What is your Surname?');
        
//             userPassword = prompt('Enter your password');
                    
//             console.log( 'userName + " " +  userSurname', userName + " " + userSurname);              
//         } while (
//             !userName && !userSurname && validatePassword(userPassword))

        
                  
            
// }
                        

// const capitalize= (s) =>{
//     return s[0].toUpperCase() + s.slice(1).toLowerCase();
// }


// authorise();
// capitalize();
// capitalize();

//  TASK KOLYA

let userName;
let userSurname;
let userPassword;

let us = (str) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

let name = (str) => {
    let res = /.{6,}/;
    do {
        userName = prompt('What is your name');
        if (!res.test(userName)) {
            alert('Enter your name ');
            continue;
        }
        console.log(userName);
    } while (!res.test(userName));
}

let surname = (str) => {
    let res = /.{6,}/;
    do {
        userSurname = prompt('What is your surname');
        if (!res.test(userSurname)) {
            alert('Enter your surname');
            continue;
        }
        console.log(userSurname);
    } while (!res.test(userSurname));
}

let password = (str) => {
    let res = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/; 
    do {
        userPassword = prompt('What is your Password');
        if (!res.test(userPassword)) {
            alert('Enter your Password')
            continue;
        }
        console.log(userPassword);
    } while (!res.test(userPassword));
}

const authorize = () => {

    do {
        name(userName);
        surname(userSurname);
        password(userPassword)
        let fullName = us(userName) + ' ' + us(userSurname); 
        alert(fullName);                                     
                 
    } while (!name && !surname && !password);

}

authorize();
 
    


// // task 2
// const randomNumber = function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };
  
//   const rand = randomNumber(5, 42);
//   console.log(rand);
  


