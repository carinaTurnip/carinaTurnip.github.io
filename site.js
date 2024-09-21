//Week 3
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcomeMessages = [
    'Good Morning, Friends!', 
    'Good Afternoon, Friends!', 
    'Good Evening Friends'
]

if (isMorning == true) {
    welcome.textContent = welcomeMessages[0];
}

if (isAfternoon == true) {
    welcome.textContent = welcomeMessages[1];
}

if (isEvening == true) {
    welcome.textContent = welcomeMessages[2];
}


//week 4
const secretMessage = "MOBLIN: ";
localStorage.setItem("\"It's a secret to everybody.\"", secretMessage);
