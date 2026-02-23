let currentTime = 0;
let timer = null;

const display = document.getElementById("display");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

function startTimer() {

    if (timer !== null || currentTime >= 30) return;  // prevent multiple intervals

    timer = setInterval(() => {

        currentTime += 3;
        display.textContent = currentTime;

        if (currentTime >= 30) {
            clearInterval(timer);
            timer = null;
        }

    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    currentTime = 0;
    display.textContent = currentTime;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

