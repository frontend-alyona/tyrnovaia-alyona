// const divInputLogin = document.createElement('div');
// divInputLogin.style = 'padding-bottom:20px';
// const loginLabel = document.createElement("label");
// const loginInput = document.createElement("input");
// loginInput.id = ("login");

// const divInputAge = document.createElement('div');
// divInputAge.style = 'padding-bottom:20px';
// const ageLabel = document.createElement("label");
// const ageInput = document.createElement("input");
// ageInput.id =("age");

// const containerForm = document.createElement("form");

// const divSelect = document.createElement('div');
// const selectLabel = document.createElement("label");
// const select = document.createElement("select");
// select.id =("language");
// const option = document.createElement("option");

// const submitBtn = document.createElement("button");

// const handleSubmit = (event) => {
//     event.preventDefault();

//     const formValues = [{
//         login: login.value, 
//         age: age.value,
//         select: language.value,
        
//       }];

//       console.log(`formValues`, formValues);
// }

// const renderForm = () => {
//     divInputLogin.append(loginLabel, loginInput);
//     loginLabel.setAttribute("for", "accesskey");
//     loginInput.setAttribute("placeholder", "");

//     divInputAge.append(ageLabel, ageInput);
//     ageLabel.setAttribute("for", "accesskey");
//     ageInput.setAttribute("placeholder", "");

//     divSelect.append(selectLabel, select, option);
//     selectLabel.setAttribute("for", "accesskey")
//     select.setAttribute("name", "id");
//     option.setAttribute("value", "selected");

//     submitBtn.innerText = "Submit";
//     loginLabel.innerText = "Login";
//     ageLabel.innerText = "Age";
    
//     divSelect.innerHTML = `
//         <label for="language">Выберите язык программирования</label>
//         <select name="language" id="language">
//         <option value="Js">Javascript</option>
//         <option value="Java">Java</option>
//         <option value="Python">Python</option>
//         </select>
//     `
    
  
//   containerForm.append(divInputLogin, divInputAge, divSelect, submitBtn);
//   containerForm.addEventListener("submit", handleSubmit);
//     document.body.append(containerForm);
// };
// renderForm()




// containerForm.addEventListener("submit", handleSubmit);



const formConfig = [
  {
      element: "text",
      name: "login",
      label: "Логин",
  },
  {
      element: "text",
      name: "age",
      label: "Возраст",
  },
  {
      element: "select",
      name: "language",
      label: "Выберите язык программирования",
      options: [
          {
              text: "JavaScript",
              value: "js",
          },
          {
              text: "Java",
              value: "java",
          },
          {
              text: "Python",
              value: "python",
          },
      ],
  },
];

// let containerForms = document.createElement("form");

// const handleSubmit = (event) => {
//       event.preventDefault();
  
//       const formValues = [{
//           login:login.value,
//           age:age.value,
//           select: language.value,
          
//         }];
  
//         console.log(`formValues`, formValues);
//   }



// const makeForm = (formConfig) => {
//   let getListHtml = (items) => {
//   let option = '';
//   let select;
//     for (let key of items.options) {
//       option += `<option> ${key.text} </option>`
//     }
//     if (option) {
//       select = `<select> ${option} </select>`
//     }
//       return select;
//   };
    
//   formConfig.forEach((items) => {
//     let labelElement = `<label> ${items.label} </label>`;
//     let inputElement = `<input>`;
    
//     let containerElement = document.createElement("div");

//         if (items.element === 'text') {
//           containerElement.innerHTML = labelElement + inputElement;
//           document.body.append(containerElement);
          
//         }
//         if (items.element === 'select') {
//           containerElement.innerHTML = labelElement + getListHtml(items);
//           document.body.append(containerElement);
          
//         }
//   });

//   let submitBtn = document.createElement("button");
//   submitBtn.innerText = 'submit';
//   containerForms.append(submitBtn);
//   document.body.append(containerForms);
  
// };

// makeForm(formConfig);

// containerForms.addEventListener("submit", handleSubmit);

const makeForm = (arr) => {
  let containerForm = document.createElement("form");
  let submitBtn = document.createElement("button");
  

  arr.forEach((items) => {

  let labelElement = document.createElement("label");
  labelElement.innerText = items.label;
  labelElement.setAttribute('for', items.name );

  let containerElement = document.createElement("div");
  containerElement.append(labelElement);

    if (items.element === 'text') {
      let inputElement = document.createElement("input");
      inputElement.innerText = items.name;
      inputElement.setAttribute('type', items.element);
      inputElement.setAttribute('name', items.name);
      inputElement.setAttribute('id', items.name);
      labelElement.style = 'width: 60px;' + 'display: inline-block;';
      containerElement.append(inputElement);
      containerElement.style = ''
    }
    if (items.element === 'select') {
      let option = items.options.map((key) => `<option value="${key.value}"> ${key.text} </option>`).join('');
      let select = document.createElement('select');
      select.innerHTML = option;
      select.setAttribute('name', items.name);
      select.setAttribute('id', items.name);
      containerElement.append(select);
    }
      containerForm.append(containerElement);
  });

  submitBtn.innerText = 'submit';
  containerForm.append(submitBtn);
  document.body.append(containerForm);

const convertFormDataToObj = (formData) => {
  let formValues = {};

  for(let pair of formData){
    formValues[pair[0]] = pair[1]
  }
    return formValues;
};

  const handleSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData(event.target);
    let prepareData = convertFormDataToObj(formData);
    console.log(`formValues`, prepareData);
  };
  containerForm.addEventListener("submit", handleSubmit);
};

makeForm(formConfig);


