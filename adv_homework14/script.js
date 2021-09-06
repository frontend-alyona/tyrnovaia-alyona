const divInputLogin = document.createElement('div');
divInputLogin.style = 'padding-bottom:20px';
const loginLabel = document.createElement("label");
const loginInput = document.createElement("input");
loginInput.id = ("login");

const divInputAge = document.createElement('div');
divInputAge.style = 'padding-bottom:20px';
const ageLabel = document.createElement("label");
const ageInput = document.createElement("input");
ageInput.id =("age");

const containerForm = document.createElement("form");

const divSelect = document.createElement('div');
const selectLabel = document.createElement("label");
const select = document.createElement("select");
select.id =("language");
const option = document.createElement("option");

const submitBtn = document.createElement("button");

const handleSubmit = (event) => {
    event.preventDefault();

    const formValues = [{
        login: login.value, 
        age: age.value,
        select: language.value,
        
      }];

      console.log(`formValues`, formValues);
}

const renderForm = () => {
    divInputLogin.append(loginLabel, loginInput);
    loginLabel.setAttribute("for", "accesskey");
    loginInput.setAttribute("placeholder", "");

    divInputAge.append(ageLabel, ageInput);
    ageLabel.setAttribute("for", "accesskey");
    ageInput.setAttribute("placeholder", "");

    divSelect.append(selectLabel, select, option);
    selectLabel.setAttribute("for", "accesskey")
    select.setAttribute("name", "id");
    option.setAttribute("value", "selected");

    submitBtn.innerText = "Submit";
    loginLabel.innerText = "Login";
    ageLabel.innerText = "Age";
    // selectLabel.innerText = "Выберите язык программирования";
    divSelect.innerHTML = `
        <label for="language">Выберите язык программирования</label>
        <select name="language" id="language">
        <option value="Js">Javascript</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
        </select>
    `
    
  
  containerForm.append(divInputLogin, divInputAge, divSelect, submitBtn);
  containerForm.addEventListener("submit", handleSubmit);
    document.body.append(containerForm);
};
renderForm()



containerForm.addEventListener("submit", handleSubmit);



