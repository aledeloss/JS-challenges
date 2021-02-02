// Get storage Time
// window.addEventListener("load", () => {
//   getStorageTime();
// });

// Set time for countdown
function setDueTime() {
  let automaticDate = new Date();
  automaticDate.setDate(automaticDate.getDate() + 14);
  var dueDate = automaticDate;
  dateInMilisec = dueDate.getTime();
}
setDueTime();

// function getStorageTime() {
//   let days = localStorage.getItem("localDays")
//     ? localStorage.getItem("localDays")
//     : Math.floor(distance / (1000 * 60 * 60 * 24));
//   let hours = localStorage.getItem("localHours")
//     ? localStorage.getItem("localHours")
//     : Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = localStorage.getItem("localMinutes")
//     ? localStorage.getItem("localMinutes")
//     : Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = localStorage.getItem("localSeconds")
//     ? localStorage.getItem("localSeconds")
//     : Math.floor((distance % (1000 * 60)) / 1000);
// }

function setTime() {
  // Calcular distance between now and duedate
  let now = new Date().getTime();
  let distance = dateInMilisec - now;

  //Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Fill in divs with days, hours, minutes and seconds
  let daysDiv = document.querySelector(".days-count");
  let hoursDiv = document.querySelector(".hours-count");
  let minutesDiv = document.querySelector(".minutes-count");
  let secondsDiv = document.querySelector(".seconds-count");

  daysDiv.innerHTML = days;
  hoursDiv.innerHTML = hours;
  minutesDiv.innerHTML = minutes;
  secondsDiv.innerHTML = seconds;

  // Set time in localStorage
  //   localStorage.setItem("localDays", days);
  //   localStorage.setItem("localHours", hours);
  //   localStorage.setItem("localMinutes", minutes);
  //   localStorage.setItem("localSeconds", seconds);
}

function updateCountdown() {
  setInterval(function () {
    setTime();
  }, 1000);
}
updateCountdown();

// Reset Button
document.querySelector(".reset-btn").addEventListener("click", () => {
  resetFunc();
});

function resetFunc() {
  setDueTime();
}
