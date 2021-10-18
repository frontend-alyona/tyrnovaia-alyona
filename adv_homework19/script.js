
// task 1

const urlCountry = "https://ipapi.co/json/";
const urlFlag = "https://restcountries.com/v2/name/"

const renderData = (country_name, country_capital, currency, flag) => {
    const containerData = document.createElement('div');
    const countryName = document.createElement('h2');
    const countryCapital = document.createElement('h4');
    const currencyElem = document.createElement('p');
    const flagElem = document.createElement('img');

    countryName.innerText = country_name;
    countryCapital.innerText = country_capital;
    currencyElem.innerText = currency;
    flagElem.src = flag;

    containerData.append(countryName, countryCapital, currencyElem, flagElem)
    document.body.append(containerData);
}

const getCountryData = async() => {
  const responseIP = await fetch (`${urlCountry}`);
  const resultIP =  await responseIP.json();
  const {country_name, country_capital, currency} = resultIP;

  const responseFlag = await fetch (`${urlFlag}/${country_name}`);
  const resultFlag = await responseFlag.json();
  const [{flag}] = resultFlag;

  renderData(country_name, country_capital, currency, flag)
}
getCountryData()



// task 2

const swapiDev = 'https://swapi.dev/api/people';

const container = document.getElementById('container');
const findCharacterBtn = document.getElementById('btn')
const form = document.getElementById('form');
const inputCharacter = document.getElementById('characterId');

const renderCharacter = (characterName) => {
  const {name}= characterName;
  const nameCharacter = document.createElement('h2');
  
  nameCharacter.innerText = name;
  
  const showFilmsBtn = document.createElement('button');
  showFilmsBtn.classList.add('showBtn')
  showFilmsBtn.innerText = 'Show Films'
    
  container.append(nameCharacter, showFilmsBtn);
  document.body.append(container)

  showFilmsBtn.addEventListener('click', () => {
    const characterId=inputCharacter.value

    const title = async (url)=>{
      const titleResponse = await fetch (url)
      const titleResult = await titleResponse.json();
      const {title} = titleResult;

      const cardContainer = document.createElement('div');
      cardContainer.classList.add('card');
      const text = document.createElement('p');
      text.innerText = title;
      cardContainer.append(text)
      document.body.append(cardContainer)
      console.log(`title`, title)
    }
    
    
    
    const getFilms = async (characterId) => {
      
      const responseFilms = await fetch(`${swapiDev}/${characterId}`);
      const resultFilms = await responseFilms.json();
      console.log(`resultFilms`, resultFilms)

      const{films} = resultFilms;
      const arr = await films.map((film) => {
        return new Promise ((resolve) => {
          resolve(film)
        })
      })
      console.log(`arr`, arr)

      Promise.all(arr).then((film) => {
        film.forEach((url)=> {
          title(url)
        })
        console.log(`film`, film)

      })

      

    }
    getFilms(characterId)

    
  })

};

findCharacterBtn.addEventListener('click', () => {

  const characterId=inputCharacter.value

  async function getCharacterName (){
    let response = await fetch (`${swapiDev}/${characterId}`);

    const update = container.querySelector('.card');
    if (update){
      update.remove()
    }
    if (response.ok) {
      let characterName = await response.json();
      renderCharacter(characterName)
      console.log('characterName',characterName);
      return characterName
    } else {
      alert('error', response.status);
    }
  }
  getCharacterName()

  

 
});



    


   