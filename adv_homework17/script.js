
let timer = 5;

let stopWatch;

const displayPara = document.querySelector('.clock');


function countdown() {
    let hours = Math.floor(timer/3600);
    let minutes = Math.floor((timer % 3600)/60);
    let seconds = Math.floor(timer % 60)

   
    let displayHours = (hours < 10) ? '0' + hours : hours;
    let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

  
  displayPara.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;

  
  timer--;

  if (timer <= -1) {
    clearInterval(stopWatch);
    timer = 0;
  }
};

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

const handleStart = (showTimeEnd) => {
  countdown()
  stopWatch = setInterval(countdown, 1000);
  startBtn.disabled = true;

  return new Promise ((resolve) => {
    setInterval(() => {
      if(timer > 0){
        console.log(`Time is on pause!`)
      };
      resolve()  
      clearInterval(stopWatch);
    },showTimeEnd)
  })
  
};


const handleStop = () => {
  clearInterval(stopWatch);
  startBtn.disabled = false;

 
};


startBtn.addEventListener('click', () => {
  
  handleStart(5500).then(() => {
    if(timer == 0){
      console.log(`Time is up!`)
    }
  });

  
});

stopBtn.addEventListener('click', handleStop);

countdown();



