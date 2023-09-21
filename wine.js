// Reference for DOM Object
const parentDiv = document.querySelector(".maincon");
const originalDiv = document.querySelector(".firstbox");
const subDiv = document.querySelector(".box1a");
const originalDiv2 = document.querySelector(".secondbox");
const subDiv2 = document.querySelector(".box2");


// BOX1
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
bot.src = "images/chateau la tour.jpg"
numN.textContent ="CHATEAU LA TOUR   0.75L"
flag.src = "flags/fr.svg"
fran.textContent = "FR"
dollar.textContent = "1200$"

// modify img props
bot.width = "100"


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



// APPENDING CHILDREN
parentDiv.appendChild(clonedDiv);
parentDiv.appendChild(secondClone);

originalDiv.appendChild(firstBox);



// BOX2
let clonedDiv2 = subDiv2.cloneNode(true);
let secondClone2 = subDiv2.cloneNode(true);

// Box second clone
let numb = clonedDiv2.querySelector(".numab");
let botb = clonedDiv2.querySelector(".botb");
let numNb = clonedDiv2.querySelector(".numnb");
let flagb = clonedDiv2.querySelector(".flagb");
let franb = clonedDiv2.querySelector(".mdeb");
let dollarb = clonedDiv2.querySelector(".dolb");


// APPENDING CHILDREN
parentDiv.appendChild(clonedDiv2);
parentDiv.appendChild(secondClone2);

originalDiv2.appendChild(secondBox);
