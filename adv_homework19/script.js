// const urlCountry = "https://ipapi.co/json/";
// const urlFlag = "https://restcountries.eu/rest/v2/name/"

// const container = document.getElementById("container");

// const getData = async () => {
//   const response = await fetch(urlCountry);
//   const countryData = await response.json();

//   // console.log(`response`, response);
//     console.log(`countryData`, countryData);
//     return fetch(`${urlCountry}`);

    
    
// };


// const getFlag =async() => {
//     const responseFlag = await fetch (`${urlFlag}/UA`);
//   const flagData = await responseFlag.json()

//   console.log(`responseFlag`, responseFlag);
//   console.log(`flagData`, flagData)
// };


// const renderCountryData = (country, country_capital, currency) => {
    
//     const countryElem = document.createElement('h2')
//     const capitalElem = document.createElement('h4')
//     const currencyElem = document.createElement('p')

//     countryElem.innerText =country;
//     capitalElem.innerText = country_capital;
//     currencyElem.innerText = currency;

//     document.body.append(countryElem,capitalElem,currencyElem);

//  getData()
// //  getFlag()
// };

// renderCountryData(country, country_capital, currency)



// task 2

const swapiDev = 'https://swapi.dev/api/people';

const findCharacterBtn = document.getElementById('btn')
const form = document.getElementById('form')
const inputCharacter = document.getElementById('characterId');

const renderCharacter = ({ results: name }) => {
    const nameCharacter = document.createElement('h2');
    nameCharacter.innerText = name;

    document.body.append(nameCharacter);


}

findCharacterBtn.addEventListener('click', () => {

    const characterId=inputCharacter.value

    

    const fetchCharacter= fetch(`${swapiDev}/${characterId}`);

    fetchCharacter
    .then((response) => {
        if (response.ok) {
            const result = response.json();
            return result;

        }
            return {}
           
    })
    .then((result) => {
        const { results: name } = result;
        console.log(`name`, name);
        renderCharacter(result)
        

    })
    const showFilmsBtn = document.createElement('button');
    showFilmsBtn.innerText = 'Show Films'

    document.body.after(showFilmsBtn);

    showFilmsBtn.addEventListener('click', ()=> {
        const getFilms = async () => {
            const requests = result.map((url) => fetch(url))
            const responses = await Promise.all(requests)
            const jsonResponses = responses.map((resp) => resp.json());
            const result = await Promise.all(jsonResponses);

            renderCharacter({results:result})

            console.log(`result`, result);
            console.log(`requests`, requests);
            console.log(`responses`, responses);

        }
        getFilms()

    })

    
})


    


   