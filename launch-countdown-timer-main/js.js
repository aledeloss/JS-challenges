// - Dark mode

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
});

let message = document.querySelector('.alert')

function pickADate() {
  let yearPick = document.querySelector("#year-pick").value;
  let monthPick = document.getElementById("month-pick").value;
  let dayPick = document.getElementById("day-pick").value;
  let dueDate = new Date(yearPick, monthPick - 1, dayPick);
  let now = new Date().getTime();
  let DueDateInMilisec = dueDate.getTime()
  if((DueDateInMilisec - now) <= 0 || isNaN(dueDate)){
    message.style.display = 'block'
  } else {
  console.log("Due date: " + dueDate);
  dateInMilisec = dueDate.getTime();
  modal.style.display = "none"
  message.style.display = 'none'
}
}

// Modal
var modal = document.getElementById("modal");
var pickBtn = document.getElementById("pick-btn");
var cancelBtn = document.querySelector(".cancel-btn");

// Show modal
pickBtn.onclick = function () {
  modal.style.display = "flex";
};

// Close modal button
cancelBtn.onclick = function () {
  modal.style.display = "none"
};

// Close the modal wWhen the user clicks anywhere outside of it
window.onclick = function(event) {
  if (event.target != pickBtn 
    && event.target != modal 
    && modal.style.display == "flex") {
      // modal.style.display = "none";
    console.log('clicked')
  }
};

  // Set time in localStorage
window.onunload = function() {
  localStorage.setItem("localDateInMilisec", dateInMilisec);
};

