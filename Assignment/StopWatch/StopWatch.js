let isRunning = false;
let startTime;
let intervalId;

function start() {
  if (isRunning) {
    clearInterval(intervalId);
  } else {
    startTime = new Date().getTime();
    intervalId = setInterval(updateTime, 10);
  }
}
function stop() {
  if (!isRunning) {
    clearInterval(intervalId);
  } else {
    isRunning = !isRunning;
  }
}

function reset() {
  clearInterval(intervalId);
  document.getElementById("stopwatch").textContent = "00:00:00";
  isRunning = false;
}

function updateTime() {
  const currentTime = new Date().getTime();
  const elapsedTime = new Date(currentTime - startTime);
  const hours = elapsedTime.getUTCHours().toString().padStart(2, "0");
  const minutes = elapsedTime.getUTCMinutes().toString().padStart(2, "0");
  const seconds = elapsedTime.getUTCSeconds().toString().padStart(2, "0");
  const milliseconds = elapsedTime
    .getUTCMilliseconds()
    .toString()
    .padStart(3, "0");
  document.getElementById(
    "stopwatch"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}
const mouseOver = () => {
  console.log(" mouse on button");
};
