// Set time for countdown
let dueDate = new Date('February 19, 2021 00:0:00')
// (dueDate.setDate(dueDate.getDate() + 14))
dateInMilisec = dueDate.getTime();

function setTime() {

// Calcular distance between now and duedate
let now = new Date().getTime()
let distance = dateInMilisec - now

//Time calculations for days, hours, minutes and seconds
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//Fill in divs with days, hours, minutes and seconds
let daysDiv = document.querySelector('.days-count')
let hoursDiv = document.querySelector('.hours-count')
let minutesDiv = document.querySelector('.minutes-count')
let secondsDiv = document.querySelector('.seconds-count')

daysDiv.innerHTML = days
hoursDiv.innerHTML = hours
minutesDiv.innerHTML = minutes
secondsDiv.innerHTML = seconds

}

setTime()

var updateCountdown = setInterval(function() {
    setTime()
}, 1000)