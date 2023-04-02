const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const total = document.getElementById("total")
const save = document.getElementById("save");
const show = document.getElementById("show");
const clear = document.getElementById("clear");

add.addEventListener("click",addFunc);
subtract.addEventListener("click",subtractFunc);
save.addEventListener("click",saveFunc);
show.addEventListener("click",showFunc);
clear.addEventListener("click",clearFunc);

const savedTotals = {};

function addFunc() {
    total.innerText++
    console.log("add ",total.innerText);
}

function subtractFunc() {
    if (total.innerText <= 0) return;
    total.innerText--;
    console.log("subtract ",total.innerText);
}

function saveFunc() {
    let currentTotal = prompt("Please name this value");
    if (currentTotal == "") return;
    savedTotals[currentTotal] = total.innerText;
}

function showFunc() {
    console.log(savedTotals)
    let totalNames = Object.keys(savedTotals);
    let displayAll = [];
    for (i = 0; i < totalNames.length; i++) {
        /* displayAll.push(totalNames[i]);
        displayAll.push(": ");
        displayAll.push(savedTotals[totalNames[i]]);
        displayAll.push("\n"); */
        displayAll.push(totalNames[i],": ",savedTotals[totalNames[i]],"\n");
    }
    alert(displayAll);
}

function clearFunc() {
    total.innerText = 0;
}