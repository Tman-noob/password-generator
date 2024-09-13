// Add this to your javascript file

/* Body */
const body = document.querySelector('body');

// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('.dark-mode-button');
const darkModeToggleFooter = document.querySelector('footer .dark-mode-button');

// Enable Dark Mode
const enableDarkMode = () => {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled")
}

// Disable Dark Mode
const disableDarkMode = () => {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null)
}

if (darkMode == "enabled") {
    enableDarkMode();
}

// Desktop Button
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})

// Password generator
let items = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",",",".","/",";","`","1","2","3","4","5","6","7","8","9","0","~","!","@","#","$","%","^","&","*","(",")","_","+","=","{","}",]
let first = document.getElementById("first")
let second = document.getElementById("second")
let third = document.getElementById("third")
let fourt = document.getElementById("fourth")
let isClicked = false

function generatePassword() {
    randomPassword()
}

function randomPassword() {
    let firstPassword = ""
    for (let i = 0; i < 8; i++) {
        firstPassword += items[Math.floor(Math.random()*items.length)]
    }
    first.textContent = firstPassword

    let secondPassword = ""
    for (let i = 0; i < 8; i++) {
        secondPassword += items[Math.floor(Math.random()*items.length)]
    }
    second.textContent = secondPassword

    let thirdPassword = ""
    for (let i = 0; i < 8; i++) {
        thirdPassword += items[Math.floor(Math.random()*items.length)]
    }
    third.textContent = thirdPassword

    let fourthPassword = ""
    for (let i = 0; i < 8; i++) {
        fourthPassword += items[Math.floor(Math.random()*items.length)]
    }
    fourth.textContent = fourthPassword
}