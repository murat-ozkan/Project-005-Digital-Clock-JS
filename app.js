function refreshClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  let showClock = document.getElementById("clock");
  showClock.innerText = hours + ":" + minutes + ":" + seconds;
}

setInterval(refreshClock, 1000);
