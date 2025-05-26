const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const progress = document.getElementById("progress");

let isRunning = false;
let reqAniFrameId;
let progressPercent = 0;

function startProgress() {
  function step() {
    if (progressPercent < 100 && isRunning) {
      progressPercent += 0.2; // Speed of progress
      setProgressWidth();
      reqAniFrameId = requestAnimationFrame(step);
    } else {
      isRunning = false;
      stop.disabled = true;
      reset.disabled = false;
    }
  }
  reqAniFrameId = requestAnimationFrame(step);
}

function stopProgress() {
  cancelAnimationFrame(reqAniFrameId);
}

function setProgressWidth() {
  progress.style.width = progressPercent + '%';
}

start.addEventListener('click', () => {
  if (isRunning) return;
  isRunning = true;
  startProgress();
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = true;
});

stop.addEventListener('click', () => {
  if (!isRunning) return;
  isRunning = false;
  stopProgress();
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
});

reset.addEventListener('click', () => {
  isRunning = false;
  stopProgress();
  progressPercent = 0;
  setProgressWidth();
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
});
