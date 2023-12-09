// const express = require('express'),
//     router = express.Router()

// let timer;
// let minutes = 0;
// let seconds = 0;
// let isTimerRunning = false;

// const timerElement = document.getElementById('timer');
// const startBtn = document.getElementById('startBtn');
// const pauseBtn = document.getElementById('pauseBtn');
// const resetBtn = document.getElementById('resetBtn');

// function startTimer() {
//     isTimerRunning = true;
//     timer = setInterval(updateTimer, 1000);
// }

// function pauseTimer() {
//     isTimerRunning = false;
//     clearInterval(timer);
// }

// function resetTimer() {
//     isTimerRunning = false;
//     clearInterval(timer);
//     minutes = 0;
//     seconds = 0;
//     updateTimerDisplay();
// }

// function updateTimer() {
//     seconds++;
//     if (seconds === 60) {
//         seconds = 0;
//         minutes++;
//     }
//     updateTimerDisplay();
// }

// function updateTimerDisplay() {
//     const formattedMinutes = String(minutes).padStart(2, '0');
//     const formattedSeconds = String(seconds).padStart(2, '0');
//     timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
// }

// startBtn.addEventListener('click', startTimer);
// pauseBtn.addEventListener('click', pauseTimer);
// resetBtn.addEventListener('click', resetTimer);
// module.exports = router