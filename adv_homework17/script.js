
let timer = 5;

let stopWatch;

const displayPara = document.querySelector('.clock');


function displayCount() {
    let hours = Math.floor(timer/3600);
    let minutes = Math.floor((timer % 3600)/60);
    let seconds = Math.floor(timer % 60)

   
    let displayHours = (hours < 10) ? '0' + hours : hours;
    let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

  
  displayPara.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;

  
  timer--;
}

// timer--;


const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

const handleStart = (showTimeEnd) => {
  stopWatch = setInterval(displayCount, 1000);
  startBtn.disabled = true;

  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve("Time is up!")
    }, showTimeEnd)
  })
}
handleStart(6000).then(() => {
  console.log(`Time is up!`)
});

// let promise = new Promise (function(resolve) {
//   setTimeout(() => resolve("Time is up!"), 7000);
// });

// promise.then(result => {
//   console.log(`result`, result)
// })

const handleStop = () => {
  clearInterval(stopWatch);
  startBtn.disabled = false;

 
}

startBtn.addEventListener('click', handleStart);
stopBtn.addEventListener('click', handleStop);



displayCount();






