// Reference for DOM Object
const parentDiv = document.querySelector(".maincon");
const originalDiv = document.querySelector(".firstbox");
const subDiv = document.querySelector(".box1a");


// Multiplying div
const clonedDiv = subDiv.cloneNode(true);
const secondClone = subDiv.cloneNode(true);

// styling clonedDiv
parentDiv.style.display = 'flex';
parentDiv.style.justifyContent = 'space-between';


// Box first clone
let num1 = clonedDiv.querySelector("#numa");
let bot = clonedDiv.querySelector("#bot");
let numN = clonedDiv.querySelector("#numn");
let flag = clonedDiv.querySelector("#flag");
let fran = clonedDiv.querySelector(".mde");
let dollar = clonedDiv.querySelector("#dol");



// modify first clone
num1.textContent = "4.7"
bot.src = "images/les hauts.webp"
numN.textContent ="FRAPPATO   0.75L"
flag.src = "flags/fr.svg"
fran.textContent = "FR"
dollar.textContent = "1200$"

// modify img props
bot.width = "100&"


// Box second clone
let num2 = secondClone.querySelector("#numa");
let bot2 = secondClone.querySelector("#bot");
let numN2 = secondClone.querySelector("#numn");
let flag2 = secondClone.querySelector("#flag");
let fran2 = secondClone.querySelector(".mde");
let dollar2 = secondClone.querySelector("#dol");



// modify SECOND clone
num2.textContent = "4.5"
bot2.src = "images/case paolin cabernate.webp"
numN2.textContent ="CASE PAOLIN   0.75L"
flag2.src = "flags/fr.svg"
fran2.textContent = "FR"
dollar2.textContent = "450$"

// SECOND BOX
// const secondBox = parentDiv.createElement("div");
// secondBox.innerHTML = "clonedDiv"



// APPENDING CHILDREN
parentDiv.appendChild(clonedDiv);
parentDiv.appendChild(secondClone);

originalDiv.appendChild(firstBox);
originalDiv.appendChild(secondBox); 

