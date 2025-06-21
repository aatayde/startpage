var currentDate = document.getElementById("current-date");

function displayTime() {
  let time = new Date();

  let seconds = String(time.getSeconds()).padStart(2, 0);
  let minutes = String(time.getMinutes()).padStart(2, 0);
  let hours = String(time.getHours()).padStart(2, 0);

  currentDate.innerText = `${hours}:${minutes}:${seconds} `;
}

const interval = setInterval(displayTime, 1000);
