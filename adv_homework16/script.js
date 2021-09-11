
const renderGreeting = () => {
  const greeting = document.createElement("h1");
  greeting.innerText = `Добро пожаловать`;

  document.body.append(greeting);
};

const pageLoads = () => {
  const loaded = parseInt(localStorage.getItem('loaded'), 10),
  loadedNumb = loaded?loaded+1:1;
    localStorage.setItem('loaded', loadedNumb);

    document.body.append('Вы заходили раз: '+loadedNumb+'');
    
};

const firstVisit = () => {
  localStorage.setItem("greeted", true);

  if (localStorage.getItem("greeted") !== true);
    
  renderGreeting();
  pageLoads();
}

firstVisit();

// const pageLoads = () => {
//   const loaded = parseInt(localStorage.getItem('loaded'), 10),
//   loadedNumb = loaded?loaded+1:1;
//     localStorage.setItem('loaded', loadedNumb);

//     document.body.append('Вы заходили раз: '+loadedNumb+'');
    
// }
// pageLoads();

