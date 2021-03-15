// Elemente

const wrapper = document.querySelector('.wrapper'),
toast = wrapper.querySelector('.toast'),
wifi = wrapper.querySelector('.icon'),
title = wrapper.querySelector('span'),
subtitle = wrapper.querySelector('p');


window.onload = () => {

    function aJax(url){ //new aJax Request
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = () => {

        }

        xhr.onerror = () => {

        }

        xhr.send();
    }



    aJax('http://localhost:1337/server.php')
}