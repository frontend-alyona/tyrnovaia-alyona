
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


const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');



startBtn.addEventListener('click', () => {
  stopWatch = setInterval(displayCount, 1000);
  startBtn.disabled = true;
});


stopBtn.addEventListener('click', () => {
  clearInterval(stopWatch);
  startBtn.disabled = false;

  
});



displayCount();

// const showTimeEnd = (displayCount) => {
//     return new Promise((resolve) => {
//       if(secondCount === 0){
//         showTimeEnd(7000).then(() => console.log('Time is up'));
//       }
//       setTimeout(() => {
//         resolve()
//       }, displayCount)
//     })
//   }
  
  // showTimeEnd(7000).then(() => console.log('Time is up'))





