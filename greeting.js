const form = document.querySelector('.form__greeting');
const input = form.querySelector('.form__input');
const greeting = document.querySelector(".greeting")

const USER_LS = "currentUser",
      SHOWING_CN = "showing"

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(e) {
    e.preventDefault();
    const currentValue = input.value;
    saveName(currentValue);
    paintGreeting(currentValue);
}


function askName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit)
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    const hour = new Date().getHours();
    const hello = hour >= 18 
        ? 'Good evening' 
        : hour >= 12 ? 'Good afternoon' 
        : 'Good morning';
    greeting.innerText =  `${hello}, ${text}!`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();