// const urlCountry = "https://ipapi.co/json/";
// const urlFlag = "https://restcountries.com/v2"

// const renderData = (data) => {
//     const containerData = document.createElement('div');
//     const{country_name, country_capital, currency} = data;

//     const countryName = document.createElement('h2');
//     const countryCapital = document.createElement('h4');
//     const currencyElem = document.createElement('p');

//     countryName.innerText = country_name;
//     countryCapital.innerText = country_capital;
//     currencyElem.innerText = currency;

//     containerData.append(countryName, countryCapital, currencyElem)
//     document.body.append(containerData);
// }
// async function getData() {
//     let response = await fetch('https://ipapi.co/json/');
    
//     if (response.ok) {
//       let data = await response.json();
//       renderData(data)
//       console.log('data',data);
//       let flagResp = await getFlag()
//       console.log(`flagResp`, flagResp)
//       return data
//     } else {
//       alert('error', response.status);
//     }
//    }
   
// getData();


// const renderFlag = () => {
//   const flagImg = document.createElement('img');
//   flagImg.innerHTML = `<img src="" alt=""></img>`;
  


// }

// async function getFlag (country_name) {
//   let responseFlag = await fetch(`https://restcountries.com/v2/name/${country_name}`);
//   if (responseFlag.ok) {
//     let flag = await responseFlag.json();
//     renderFlag()
//     console.log('flag',flag);
//     return flag
//   } else {
//     alert('error', responseFlag.status);
//   }
// }
// // getFlag(country_name)


// task 2

const swapiDev = 'https://swapi.dev/api/people';

const findCharacterBtn = document.getElementById('btn')
const form = document.getElementById('form')
const inputCharacter = document.getElementById('characterId');

const renderCharacter = (characterName) => {
  const {name}= characterName;
  const nameCharacter = document.createElement('h2');
  const genderElem = document.createElement('p');

  nameCharacter.innerText = name;
    
  document.body.append(nameCharacter);

};

findCharacterBtn.addEventListener('click', () => {

  const characterId=inputCharacter.value

  async function getCharacterName (){
    let response = await fetch (`${swapiDev}/${characterId}`);
    if (response.ok) {
      let characterName = await response.json();
      renderCharacter(characterName)
      console.log('characterName',characterName);
      return characterName
    } else {
      alert('error', response.status);
    }
  }
  getCharacterName();

  const showFilmsBtn = document.createElement('button');
  showFilmsBtn.innerText = 'Show Films'

  document.body.after(showFilmsBtn);
  
    showFilmsBtn.addEventListener('click', () => {
      const filmsUrls = [];
      async function getFilms () {
        const requests = filmsUrls.map((filmUrl) => fetch(filmUrl));
        const responses = await Promise.all(requests);
        const jsonResponses = responses.map(resp => resp.json());
        const result = await Promise.all(jsonResponses);

        renderAllFilms({result : result});

        console.log(`result`, result);
        console.log(`requests`, requests);
        console.log(`responses`, responses);
        console.log(`result`, result)
      }
      getFilms()

      const renderAllFilms = (films) => {
        const allFilms = document.createElement('h3');
        allFilms.innerText = films;

        document.body.append(allFilms);

        // films.forEach((filmElem) = renderAllFilms(filmElem))
      }
    })
  
});


    


   