// Elemente

const wrapper = document.querySelector('.wrapper'),
toast = wrapper.querySelector('.toast'),
wifi = wrapper.querySelector('.icon'),
title = wrapper.querySelector('span'),
subtitle = wrapper.querySelector('p'),
closeIcon = wrapper.querySelector('.close-icon');


window.onload = () => {
    aJax('http://localhost:1337/Server/server.php')
    setInterval(() => {
        aJax('http://localhost:1337/Server/server.php')
    }, 10000);
}


function aJax(url){ //new aJax Request

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = (response) => {
        console.log(response.srcElement.status)
        if(response.srcElement.status == 200 && response.srcElement.status < 300){
            online();

            closeIcon.onclick = () => {
                wrapper.classList.add("hide");
            }

            setTimeout(() => {
                wrapper.classList.add("hide");
            }, 5000);
            
        }else{
            offline();
        }
        
    }

    xhr.onerror = () => { //incorrect url
        console.log("Error occoured! Offline")
        offline();
    }

    xhr.send();
}

function offline() {
    wrapper.classList.remove('hide');
    closeIcon.onclick = null;
    closeIcon.removeEventListener('click', null);
    toast.classList.add('offline');
    title.innerText = "You're offline now";
    subtitle.innerText = "Opps! Internet is disconnected.";
    wifi.innerHTML = "<i class='uil uil-wifi-slash'></i>";
}

function online() {
    toast.classList.remove('offline');
    title.innerText = "You're online now";
    subtitle.innerText = "Hurray! Internet is connected";
    wifi.innerHTML = "<i class='uil uil-wifi'></i>";
}