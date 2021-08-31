const createForm =( ) => {
    const container = document.createElement('container');
    const formElem = document.createElement('form');
    formElem.id = 'form';
    formElem.style = 'padding:100px' ;

    const divInputLogin = document.createElement('div');
    divInputLogin.style = 'padding-bottom:20px';

    const divInputAge = document.createElement('div');
    divInputAge.style = 'padding-bottom:20px';

    divInputLogin.innerHTML = `
    <label for="login">Login</label>
    <input type="text" name="login" id="login" placeholder="" />
    `
    
    divInputAge.innerHTML = `
    <label for="age">Age</label>
    <input type="text" name="age" id="age" placeholder="" />
    `
    
    formElem.innerHTML = `
    <p>Select the programming language</p>
    <select id="select">
        <option value="Javascript">Javascript</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
      </select>
    
    <button type="submit">Submit</button>
    `
    formElem.prepend(divInputLogin, divInputAge)

    container.append(formElem);
    
    document.body.append(container)
}
createForm();

const form = document.getElementById("form");

const handleSubmit = (event) => {
    event.preventDefault();

    const formValues = {
        login: login.value,
        age: age.value,
        select: select.value,
      };
    
      console.log(`formValues`, formValues);
};

form.addEventListener("submit", handleSubmit);    


