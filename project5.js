const randomcolor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
      color +=hex[Math.floor(Math.random()*16)]
    }
    return color;
};
let intervalid;

const startchangingcolor=function(){
    intervalid=setInterval(changeBgcolor,1000)
    function changeBgcolor(){
    document.body.style.backgroundColor=randomcolor()}

};
const stopchangingcolor = function () {
    if (intervalid) {
        clearInterval(intervalid);
        intervalid = null;
    }
};

document.querySelector('#start').addEventListener('click',startchangingcolor)
document.querySelector('#stop').addEventListener('click',stopchangingcolor)

