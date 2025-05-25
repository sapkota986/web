const start = document.querySelector('.start-btn');
const stop = document.querySelector('.stop-btn');
const reset = document.querySelector('.reset-btn');

const minMSB = document.getElementById('minMSB');
const minLSB = document.getElementById('minLSB');
const secMSB = document.getElementById('secMSB');
const secLSB = document.getElementById('secLSB');

let timerInterval;
let isRunning = false;

// Convert digit inputs to total seconds
function getTotalSeconds() {
    const minutes = parseInt(minMSB.value + minLSB.value);
    const seconds = parseInt(secMSB.value + secLSB.value);
    return (minutes * 60) + seconds;
}

// Update input boxes from total seconds
function updateDisplay(totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    let minStr = minutes.toString().padStart(2, '0');
    let secStr = seconds.toString().padStart(2, '0');

    minMSB.value = minStr[0];
    minLSB.value = minStr[1];
    secMSB.value = secStr[0];
    secLSB.value = secStr[1];
}

start.addEventListener('click', () => {
    if (isRunning) return;

    let totalSeconds = getTotalSeconds();
    if (totalSeconds <= 0) return;

    isRunning = true;
    start.disabled = true;
    stop.disabled = false;

    timerInterval = setInterval(() => {
        totalSeconds--;
        updateDisplay(totalSeconds);

        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            isRunning = false;
            start.disabled = false;
            stop.disabled = true;
        }
    }, 1000);
});

stop.addEventListener('click', () => {
    if (!isRunning) return;

    clearInterval(timerInterval);
    isRunning = false;
    start.disabled = false;
    stop.disabled = true;
});

reset.addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    start.disabled = false;
    stop.disabled = true;

    // Reset input fields to 01:05 (or you can set to 00:00)
    minMSB.value = "0";
    minLSB.value = "1";
    secMSB.value = "0";
    secLSB.value = "1";
});
