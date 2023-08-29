"use strict";

const arr = [];
let ranT;


const list = document.querySelector("ul");


setInterval(gTal, 1000);

function gTal() {
    ranT = Math.floor(Math.random() * 100) + 1;
    addToArr();
}

function addToArr() {
    if (arr.length === 20) {
        arr.shift();
        arr.push(ranT);
        console.log(arr);
        addElement();
    }
    else {
        arr.push(ranT);
        console.log(arr);
        addElement();
    }

}

function addElement() {
    if (list.childElementCount === 20) {
        list.removeChild(list.firstElementChild);
        addLi();
    }
    else {
        addLi();
    }  
}

function addLi() {
    const li = document.createElement("li");
    li.style.setProperty("--height", ranT);
    list.appendChild(li);
}
