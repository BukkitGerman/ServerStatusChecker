// Elemente

const wrapper = document.querySelector('.wrapper'),
toast = wrapper.querySelector('.toast'),
wifi = wrapper.querySelector('.icon'),
title = wrapper.querySelector('span'),
subtitle = wrapper.querySelector('p'),
closeIcon = wrapper.querySelector('.close-icon');

const url = 'http://localhost:1337/Server/server.php';

window.onoffline = () => {
    offline();
        
}

window.ononline = () => {
    online();
    setTimeout(() => {
        wrapper.classList.add("hide");
    }, 5000);
    
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
