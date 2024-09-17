const randomcolor = function() {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;

const changeBgcolor = function() {
    document.body.style.backgroundColor = randomcolor();
};

const startchangingcolor = function() {
    intervalId = setInterval(changeBgcolor, 1000);
};

const stopchangingcolor = function() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
};

document.querySelector('#start').addEventListener('click', startchangingcolor);
document.querySelector('#stop').addEventListener('click', stopchangingcolor);
