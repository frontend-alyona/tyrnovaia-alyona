
// task 1

// const urlCountry = "https://ipapi.co/json/";
// const urlFlag = "https://restcountries.com/v2/name/"

// const renderData = (country_name, country_capital, currency, flag) => {
//     const containerData = document.createElement('div');
//     const countryName = document.createElement('h2');
//     const countryCapital = document.createElement('h4');
//     const currencyElem = document.createElement('p');
//     const flagElem = document.createElement('img');

//     countryName.innerText = country_name;
//     countryCapital.innerText = country_capital;
//     currencyElem.innerText = currency;
//     flagElem.src = flag;

//     containerData.append(countryName, countryCapital, currencyElem, flagElem)
//     document.body.append(containerData);
// }

// const getCountryData = async() => {
//   const responseIP = await fetch (`${urlCountry}`);
//   const resultIP =  await responseIP.json();
//   const {country_name, country_capital, currency} = resultIP;

//   const responseFlag = await fetch (`${urlFlag}/${country_name}`);
//   const resultFlag = await responseFlag.json();
//   const [{flag}] = resultFlag;

//   renderData(country_name, country_capital, currency, flag)
// }
// getCountryData()



// task 2

// const swapiDev = 'https://swapi.dev/api/people';

// const container = document.getElementById('container');
// const findCharacterBtn = document.getElementById('btn')
// const form = document.getElementById('form');
// const inputCharacter = document.getElementById('characterId');
// const updateCard = container.querySelector('.card');




// const createMovieCard = ({title}) => {
//     const text = document.createElement('p');
//     text.innerText = title;
//     return text
// };
// const renderMovie = (films, container) => {
//     const movieCards = films.map(createMovieCard);
//     container.append(...movieCards)
// };

// const renderCharacter = (characterName, id) => {
//   const {name}= characterName;
//   const nameCharacter = document.createElement('h2');
  
//   nameCharacter.innerText = name;
  
//   const showFilmsBtn = document.createElement('button');
//   showFilmsBtn.classList.add('showBtn')
//   showFilmsBtn.innerText = 'Show Films'
    
//   container.append(nameCharacter, showFilmsBtn);
//   document.body.append(container)

//   showFilmsBtn.addEventListener('click', () => {
//     const id=inputCharacter.value
//     async function getAllFilms (){
//         const containerFilms = document.createElement('div');
//         const response = await fetch(`${swapiDev}/${id}`);
//         const result = await response.json();
//         const {films} = result;
//         const requests = films.map(url => fetch(url));
//         const responses = await Promise.all(requests);
//         const jsonResp = responses.map(resp => resp.json());
//         const filmsResult = await Promise.all(jsonResp);
//         containerFilms.classList = 'films';
//         renderMovie(filmsResult, containerFilms);
//         container.append(containerFilms);
//         console.log(`filmsResult`, filmsResult)
//     }
//     getAllFilms()

//   })

// };

// findCharacterBtn.addEventListener('click', () => {

//   const characterId=inputCharacter.value

//   async function getCharacterName (){
//     let response = await fetch (`${swapiDev}/${characterId}`);
//     if (response.ok) {
//       let characterName = await response.json();
//       renderCharacter(characterName)
//       console.log('characterName',characterName);
//       return characterName
//     } else {
//       alert('error', response.status);
//     }
//   }
//   getCharacterName()

  

 
// });

const BASE_URL = 'https://swapi.dev/api/people';

const renderForm = () => {
    const container = document.createElement('div');
    const containerForm = document.createElement('form');
    const inputId = document.createElement('input');
    const button = document.createElement('button');
    containerForm.classList = 'form';
    container.classList = 'container';
    inputId.classList = 'input';
    inputId.setAttribute('placeholder', 'ID');
    button.innerText = 'Find character';
    button.classList = 'btn';
    containerForm.append(inputId, button);
    container.append(containerForm);
    document.body.append(container);

    button.addEventListener('click', (event) => {
        event.preventDefault();
      
        let input = inputId.value;
        const updateCard = container.querySelector('.card');
        
        if (input){
          button.disabled = true;
            getData(input)
                .then((response) => {
                    if (updateCard) {
                        updateCard.remove()
                    }
                    container.append(renderCard(response.name, input, response.films));
                    button.disabled = false;
                });
                inputId.value = '';
        } else{
          inputId.value = '';
            if (updateCard) {
                updateCard.remove()
            }
        }
  });
};

renderForm();

const getData = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`);
    return await response.json();
};

const createMovieCard = ({title}) => {
    const text = document.createElement('p');
    text.innerText = title;
    return text
};
const renderMovie = (films, container) => {
    const movieCards = films.map(createMovieCard);
    container.append(...movieCards)
};
const getAllFilms = async (id, films, container) => {
    const containerFilms = document.createElement('div');
    const requests = films.map(url => fetch(url));
    const responses = await Promise.all(requests);
    const jsonResp = responses.map(resp => resp.json());
    const filmsResult = await Promise.all(jsonResp);
    containerFilms.classList = 'films';
    renderMovie(filmsResult, containerFilms);
    container.append(containerFilms);
};
const renderCard = (name, id, films) => {
    const containerCard = document.createElement('div');
    const heroName = document.createElement('h3');
    const button = document.createElement('button');
    button.innerText = 'Films';
    button.classList = 'films_btn';
    heroName.innerText = name;
    containerCard.append(heroName, button);
    containerCard.classList = 'card';
    button.addEventListener('click', (event) => {
        event.preventDefault();
        if (!containerCard.querySelector('.films')) {
            button.disabled = true;
            getAllFilms(id, films, containerCard).then(() =>   button.disabled = false)
        }
    });
    return containerCard
};

const renderFilmsList = async (id, container) => {
    const response = await fetch(`${BASE_URL}/${id}`);
    const result = await response.json();
    const {films} = result;
    console.log(films)
    const array = await films.map((film) => {
        return new Promise((resolve) => {
            resolve(film)
        })
    });
    console.log(array)
    Promise.all(array).then((film) => {
        film.forEach((url) => {
            filmName(url, container)
        });
    })
};
const filmName = async (url, container) => {
    const response = await fetch(url);
    const result = await response.json();
    const {title} = result;
    const text = document.createElement('p');
    text.innerText = title;
    container.append(text);
};




