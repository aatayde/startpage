var currentDate = document.getElementById("current-date");

console.log(Date());

function displayTime() {
  currentDate.innerText = Date();
}

const interval = setInterval(displayTime, 1000);

let time = [year];
