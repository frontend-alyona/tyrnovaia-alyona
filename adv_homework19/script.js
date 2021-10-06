const urlCountry = "https://ipapi.co/json/";
const urlFlag = "https://restcountries.eu/rest/v2/name/"

const renderData = (data) => {
    const containerData = document.createElement('div');
    const{country_name, country_capital, currency} = data;

    const countryName = document.createElement('h2');
    const countryCapital = document.createElement('h4');
    const currencyElem = document.createElement('p');

    countryName.innerText = country_name;
    countryCapital.innerText = country_capital;
    currencyElem.innerText = currency;

    containerData.append(countryName, countryCapital, currencyElem)
    document.body.append(containerData);
}
async function getData() {
    let response = await fetch('https://ipapi.co/json/');
    if (response.ok) {
      let data = await response.json();
      renderData(data)
      console.log('data',data);
      return data
    } else {
      alert('error', response.status);
    }
   }
   
getData();

const renderFlag = () => {
  const flagImg = document.createElement('img');
  flagImg.innerHTML = `<img src="" alt=""></img>`;
  


}

async function getFlag () {
  let responseFlag = await fetch('https://restcountries.eu/rest/v2/name/Ukraine');
  if (responseFlag.ok) {
    let flag = await responseFlag.json();
    renderFlag()
    console.log('flag',flag);
    return flag
  } else {
    alert('error', responseFlag.status);
  }
}


// task 2

const swapiDev = 'https://swapi.dev/api/people';

const findCharacterBtn = document.getElementById('btn')
const form = document.getElementById('form')
const inputCharacter = document.getElementById('characterId');

const renderCharacter = (name) => {
    const nameCharacter = document.createElement('h2');
    
    nameCharacter.innerText = name;
  
    

    document.body.append(nameCharacter);


}

findCharacterBtn.addEventListener('click', () => {

  const characterId=inputCharacter.value

  async function getCharacterName (){
    let response = await fetch (`${swapiDev}/${characterId}`);
    if (response.ok) {
      let name = await response.json();
      renderCharacter(name)
      console.log('name',name);
      return name
    } else {
      alert('error', response.status);
    }
  }
  getCharacterName()

  const showFilmsBtn = document.createElement('button');
  showFilmsBtn.innerText = 'Show Films'

  document.body.after(showFilmsBtn);

  const filmsUrls = [];
  async function getFilms () {
    const requests = filmsUrls.map((filmUrl) => fetch(filmUrl));
    const responses = await Promise.all(requests);
    const jsonResponses = responses.map((resp) => resp.json());
    const result = await Promise.all(jsonResponses);

  renderCharacter();

  console.log(`result`, result);
  console.log(`requests`, requests);
  console.log(`responses`, responses);
  }
  getFilms()
  

    

    

    
})


    


   