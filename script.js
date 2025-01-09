var currentDate = document.getElementById("current-date");

console.log(Date());

const interval = setInterval(displayTime, 1000);

function displayTime() {
  currentDate.innerText = Date();
}
