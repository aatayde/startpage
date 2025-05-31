// var currentDate = document.getElementById("current-date");

// console.log(Date());

// function displayTime() {
// currentDate.innerText = Date();
// }

// const interval = setInterval(displayTime, 1000);

// let time = [year];

var now = document.getElementById("current-date");
console.log(now);
function formatDateTime(date) {
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year} ${month} ${day} ${hours}:${minutes}:${seconds}`;
}

now.textContent = new Date();

setInterval(() => {
  console.log(formatDateTime(new Date()));
}, 1000);
