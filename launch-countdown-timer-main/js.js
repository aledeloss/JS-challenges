let dateInMilisec = ''

window.onload = function() {
  if(localStorage.getItem("localDateInMilisec")) {
    dateInMilisec = localStorage.getItem("localDateInMilisec")
   } else {
     setDueTime()
    }
    return dateInMilisec
}

// Set automatic 14 days countdown
function setDueTime() {
  let automaticDate = new Date();
  automaticDate.setDate(automaticDate.getDate() + 14);
  dateInMilisec = automaticDate.getTime();
}
// setDueTime();

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
}

function updateCountdown() {
  setInterval(function () {
    setTime();
  }, 1000);
}
updateCountdown();

// Reset Button
document.querySelector(".reset-btn").addEventListener("click", () => {
  setDueTime();
});

// Pick a date Button
document.querySelector(".submit-btn").addEventListener("click", () => {
  pickADate();
  modal.style.display = "none"
});

function pickADate() {
  let yearPick = document.getElementById("year-pick").value;
  let monthPick = document.getElementById("month-pick").value;
  let dayPick = document.getElementById("day-pick").value;
  let dueDate = new Date(yearPick, monthPick - 1, dayPick);
  console.log("Due date: " + dueDate);
  dateInMilisec = dueDate.getTime();
}

// Modal
var modal = document.getElementById("modal");
var pickBtn = document.getElementById("pick-btn");
var cancelBtn = document.querySelector(".cancel-btn");

// Show modal
pickBtn.onclick = function () {
  modal.style.display = "flex";
};

// Close modal
cancelBtn.onclick = function () {
  modal.style.display = "none"
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

  // Set time in localStorage
window.onunload = function() {
  localStorage.setItem("localDateInMilisec", dateInMilisec);
  localStorage.setItem("localDays", days);
  localStorage.setItem("localHours", hours);
  localStorage.setItem("localMinutes", minutes);
  localStorage.setItem("localSeconds", seconds);
};

