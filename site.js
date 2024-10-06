<<<<<<< HEAD
=======
//Week 3
>>>>>>> 3a83553647bf4059ecf06f77aeccb5eb5e0c16b9
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcomeMessages = [
<<<<<<< HEAD
    'Good Morning, Friends!',
    'Good Afternoon, Friends!',
=======
    'Good Morning, Friends!', 
    'Good Afternoon, Friends!', 
>>>>>>> 3a83553647bf4059ecf06f77aeccb5eb5e0c16b9
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

<<<<<<< HEAD
//carousel

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

function previousImg() {
    currentImage = (currentImage - 1 + urls.length) % urls.length;
    showImages();
}

function nextImg() {
    currentImage = (currentImage + 1 + urls.length) % urls.length;
    showImages();
}

const prev = document.querySelector('#prev')
const next = document.querySelector('#next')

prev.addEventListener('click', () => previousImg())
next.addEventListener('click', () => nextImg())

showImages()

setInterval(() => {
    nextImg()
    showImages()
}, 5000)



//week 4
const secretMessage = "MOBLIN: ";
localStorage.setItem("\"It's a secret to everybody.\"", secretMessage);
>>>>>>> 3a83553647bf4059ecf06f77aeccb5eb5e0c16b9
