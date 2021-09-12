// To Hold Time Values

let seconds = 0;
let minutes = 0;
let hours = 0;

// To hold Display Values

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// To Hold SetInterval Function

let interval = null;

// To Hold Stopwatch Status
let status = "stopped";

// Functioning of StopWatch ( Logic )

function stopWatch() {
  seconds++;

  // Logic for increment

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  // If  seconds/minutes/hours are only one digit, add a leading 0 to the value

  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }

  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }

  if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }

  // Display updated Time Values

  document.getElementById("display").innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function startStop() {
  if (status === "stopped") {
    // Start stopwatch (By calling the setInterval() Function )
    interval = window.setInterval(stopWatch, 1000);
    document.getElementById("startStop").innerHTML = "stop";
    status = "started";
  } else {
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML = "Start";
    status = "stopped";
  }
}

// Reset StopWatch

function reset() {
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display").innerHTML = "00:00:00";
  document.getElementById("startStop").innerHTML = "Start";
}
