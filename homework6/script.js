// task1 

const validatePassword = (userPassword) => {
    userPassword.length <=6 && userPassword.tolowerCase() !== userPassword
        userPassword = prompt('enter your password');
        console.log('password must contain at least 6 symbols and letters')
} 
    



const authorise =()=>{
    let userName;
    let userSurname;
    let userPassword;
    
        do{
            userName = prompt('What is your name?');
            
            userSurname = prompt('What is your Surname?');
        
            userPassword = prompt('Enter your password');
                    
                            
        } while (
            !userName && !userSurname && validatePassword(userPassword))
            
}
                        

const capitalize= (s) =>{
    return s[0].toUpperCase() + s.slice(1).tolowerCase();
}

authorise();
capitalize(userName);
capitalize(userSurname);

 
    


// task 2
const randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const rand = randomNumber(5, 42);
  console.log(rand);
  

