const body = document.querySelector('body');

function generateNum() {
    return Math.floor(Math.random()*10);
}

function paintImage(index) {
    const image = new Image();
    image.src = `images/${index+1}.jpg`;
    image.classList.add('bg__image');
    body.prepend(image);
}

function init() {
        const bgIndex = generateNum();
        paintImage(bgIndex);
}

init();