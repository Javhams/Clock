const clockContainer = document.querySelector(".clock__container");
const clockTitle = document.getElementById("clock__main");
const dateContainer = document.getElementById('date');
const realtimeContainer = document.getElementById('clock__small');

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours =  date.getHours();
    const seconds = date.getSeconds();

    const year = date.getFullYear();
    const month = date.getMonth();
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun', 'Jul','Aug','Sep','Oct','Nov','Dec']
    const day = date.getDate();

    realtimeContainer.innerText = 
        `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    dateContainer.innerText = `${monthNames[month]} ${day}, ${year}`;
}

13

function timeLeft() {
    var midnight = new Date();
    midnight.setHours( 24 );
    midnight.setMinutes( 0 );
    midnight.setSeconds( 0 );
    midnight.setMilliseconds( 0 );

    // const timeLeftLocal = ( (midnight.getTime() - new Date().getTime())/1000/60).toLocaleTimeString;
    // console.log(timeLeftLocal);
    const timeLeft = Math.round(( midnight.getTime() - new Date().getTime()) /1000, 0);
    const hours = Math.floor(timeLeft/3600);
    const minutes = Math.floor((timeLeft-(hours*3600))/60);
    const seconds = Math.floor(timeLeft - (hours*3600) - minutes*60);
    clockTitle.innerText =
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}



function init() {
    getTime();
    timeLeft();
    setInterval(timeLeft, 1000);
}

init();